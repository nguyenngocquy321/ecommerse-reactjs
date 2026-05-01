import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 1. Interceptor cho Request: Thêm token vào mỗi request gửi đi
axiosClient.interceptors.request.use(
    async config => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 2. Interceptor cho Response: Xử lý lỗi 401 và Refresh Token
axiosClient.interceptors.response.use(
    res => {
        return res;
    },
    async err => {
        const originalRequest = err.config;

        // Kiểm tra nếu lỗi 401 (hết hạn token) và chưa thử lại lần nào
        if (err.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Sửa lỗi chính tả: refreshToken (có chữ r)
            const refreshToken = Cookies.get('refreshToken');

            if (!refreshToken) {
                // Nếu không có refresh token, yêu cầu đăng nhập lại
                return Promise.reject(err);
            }

            try {
                // Gọi API để lấy Access Token mới
                // Lưu ý: Dùng axios (gốc) thay vì axiosClient để tránh bị loop interceptor
                const res = await axios.post(
                    'https://be-project-reactjs.vercel.app/api/v1/refresh-token',
                    {
                        token: refreshToken,
                    }
                );

                const newAccessToken = res.data.accessToken;

                // Lưu token mới vào Cookie
                Cookies.set('token', newAccessToken);

                // Gán token mới vào header của request cũ
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                // QUAN TRỌNG: Gọi lại chính cái request cũ với token mới
                return axiosClient(originalRequest);
            } catch (error) {
                // Nếu refresh token cũng hết hạn -> Xóa hết và logout
                Cookies.remove('token');
                Cookies.remove('refreshToken');
                window.location.href = '/login'; // Chuyển hướng người dùng nếu cần
                return Promise.reject(error);
            }
        }
        return Promise.reject(err);
    }
);

export default axiosClient;
