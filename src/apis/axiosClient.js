import axios from 'axios';
import Cookies from 'js-cookie';
const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
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
axiosClient.interceptors.request.use(
    res => {
        return res;
    },
    async err => {
        const originalRequest = err.config;
        if (err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refeshToken = Cookies.get('refeshToken');
            if (!refeshToken) return Promise.reject(err);
            try {
                const res = await axiosClient.post('/refresh-token', {
                    token: refeshToken
                });
                const newAcessToken = res.data.accessToken;
                Cookies.set('token', newAcessToken);
                originalRequest.headers.Authorization = `Bearer ${newAcessToken}`;
                return axiosClient();
            } catch (error) {
                Cookies.remove('token');
                Cookies.remove('refeshToken');
                return Promise.reject(error);
            }
        }
    }
);
export default axiosClient;
