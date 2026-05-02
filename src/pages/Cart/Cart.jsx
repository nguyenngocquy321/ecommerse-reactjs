import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Steps from './components/Steps/Steps';
import Contents from './components/Contents/Contents';
import styles from './styles.module.scss';
function Cart() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps />
                <Contents />
            </div>
            <MyFooter />
        </>
    );
}
export default Cart;
