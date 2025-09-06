import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const userId = Cookies.get('userId');
    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then(res => {
                    setUserInfo(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [userId]);

    return (
        <StoreContext.Provider value={{ userInfo }}>
            {children}
        </StoreContext.Provider>
    );
};
