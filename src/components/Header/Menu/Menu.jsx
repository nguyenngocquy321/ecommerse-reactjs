import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo } = useContext(StoreContext);
    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };
    const handleRenderText = () => {
        if (content === 'Sign in' && userInfo) {
            return `Hello ${userInfo?.username}`;
        } else {
            return content;
        }
    };
    const handleHover = () => {
        console.log(content);
    };
    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}
            <div className={subMenu}>TEST</div>
        </div>
    );
}

export default Menu;
