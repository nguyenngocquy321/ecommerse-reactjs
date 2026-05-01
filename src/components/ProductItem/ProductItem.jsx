import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import cartIcon from '@icons/svgs/cartIcon.svg';
import hearthIcon from '@icons/svgs/hearthIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cls from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
}) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear,
    } = styles;
    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const handleChooseSize = size => {
        setSizeChoose(size);
    };
    const handleClearSize = () => {
        setSizeChoose('');
    };
    useEffect(() => {
        if (isHomePage === true) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, { [largImg]: !isHomePage })}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={hearthIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={isShowGrid ? '' : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details?.size?.map((it, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [isActiveSize]: sizeChoose === it.name,
                                    })}
                                    onClick={() => handleChooseSize(it.name)}
                                >
                                    {it.name}
                                </div>
                            );
                        })}
                    </div>
                )}
                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}
                <div className={cls(title, { [textCenter]: !isHomePage })}>
                    {name}
                </div>
                {!isHomePage && (
                    <div
                        className={textCenter}
                        style={{
                            color: '#c1c1c1',
                        }}
                    >
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceCl, { [textCenter]: !isHomePage })}
                    style={{ color: !isHomePage ? '#333' : '#888' }}
                >
                    ${price}
                </div>
                {!isHomePage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isHomePage })}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
