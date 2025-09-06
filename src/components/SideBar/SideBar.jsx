import Login from '@components/ContentSideBar/Login/Login';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SidebarProvider'; // nhớ đúng tên file
import classNames from 'classnames';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishLits from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <WishLits />;
            case 'cart':
                return <Cart />;
            default:
                return null;
        }
    };

    return (
        <div className={container}>
            {/* overlay mờ khi sidebar mở */}
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            ></div>

            {/* nội dung sidebar */}
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {handleRenderContent()}
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBar;
