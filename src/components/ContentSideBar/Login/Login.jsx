import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfmpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: async values => {
            const { email: username, password } = values;
            if (isLoading) return;
            if (isRegister) {
                setIsLoading(true);
                await register({ username, password })
                    .then(res => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch(err => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                setIsLoading(true);
                await signIn({ username, password })
                    .then(res => {
                        setIsLoading(false);
                        const { id, token, refeshToken } = res.data;
                        Cookies.set('token', token);
                        Cookies.set('refeshToken', refeshToken);
                        Cookies.set('userId', id);
                    })
                    .catch(err => {
                        setIsLoading(false);
                    });
            }
        }
    });
    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };
    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='password'
                    type='password'
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}
                <div className={boxRememberMe}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>
                <Button
                    content={
                        isLoading
                            ? 'LOADING...'
                            : isRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type='submit'
                />
                <Button
                    content={
                        isRegister
                            ? 'Already have an account'
                            : 'Don`t have an account '
                    }
                    type='submit'
                    isPrimary={false}
                    style={{ marginTop: '10px' }}
                    onClick={handleToggle}
                />
            </form>
            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}

export default Login;
