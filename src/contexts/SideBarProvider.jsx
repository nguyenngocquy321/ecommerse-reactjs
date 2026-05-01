import { createContext, useEffect, useState } from 'react';
import { getCart } from '../apis/carthService';
import Cookies from 'js-cookie';
export const SideBarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const userId = Cookies.get('userId');
    const [isLoading, setIsLoading] = useState(false);
    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            setIsOpen(true);
            getCart(userId)
                .then(res => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };
    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        listProductCart,
        handleGetListProductsCart,
        isLoading,
    };
    useEffect(() => {
        if (!userId) return;
        getCart(userId)
            .then(res => {
                setListProductCart(res.data.data);
            })
            .catch(err => setListProductCart([]));
    }, []);
    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
