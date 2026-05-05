import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        subTotal,
        price,
        totals,
        space,
        containerMethod,
        titleMethod,
        containerRight,
        boxImgMethods,
        imgMethods,
        line,
        textSecure,
    } = styles;
    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
    ];
    return (
        <>
            <div className={containerRight}>
                <div className={containerSummary}>
                    <div className={title}>CART TOTAL</div>
                    <div className={line}></div>
                    <div className={cls(boxTotal, subTotal)}>
                        <div>Subtotal</div>
                        <div className={price}>$2.099.97</div>
                    </div>
                    <div className={cls(boxTotal, totals)}>
                        <div>TOTAL</div>
                        <div className={price}>$2.099.97</div>
                    </div>
                    <Button content={'PROCEED TO CHECKOUT'} />
                    <div className={space}></div>
                    <Button content={'CONTINUE SHOPPING'} isPriamry={false} />
                </div>
                <div className={containerMethod}>
                    <div className={titleMethod}>
                        Guaranteed<span>safe</span> checkout
                    </div>
                    <div className={boxImgMethods}>
                        {srcMethods.map((src, index) => {
                            return (
                                <img
                                    key={index}
                                    src={src}
                                    alt='visa'
                                    className={imgMethods}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={textSecure}>Your Payment is 100% Secure</div>
            </div>
        </>
    );
};

export default CartSummary;
