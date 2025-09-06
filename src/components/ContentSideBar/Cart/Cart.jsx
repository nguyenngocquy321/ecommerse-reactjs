import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Cart() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={
                        <PiShoppingCartLight
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    }
                    title='CART'
                />

                <ItemProduct />
            </div>
            <div>
                <div>
                    <p>SUBTOTAL:</p>
                    <p>$199.99</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
