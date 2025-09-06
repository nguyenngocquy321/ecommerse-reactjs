import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = type => {
        setType(type);
        setIsOpen(true);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                {/* Left side */}
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu
                                key={index}
                                content={item.content}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>

                {/* Logo center */}
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>

                {/* Right side */}
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3).map((item, index) => (
                            <Menu
                                key={index}
                                content={item.content}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart
                            style={{ fontSize: '20px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCart
                            style={{ fontSize: '25px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
