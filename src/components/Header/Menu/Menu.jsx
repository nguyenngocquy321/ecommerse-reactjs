import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';

function Menu({ content }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const [isShowSubMenu, setShowSubMenu] = useState(false);
    const { userInfo, handleLogOut } = useContext(StoreContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };

    const handleRenderText = () => {
        if (content === 'Sign in' && userInfo) {
            return `Hello ${userInfo?.username}`;
        }
        return content;
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText()}
            {isShowSubMenu && (
                <div
                    className={subMenu}
                    onMouseLeave={() => setShowSubMenu(false)}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
