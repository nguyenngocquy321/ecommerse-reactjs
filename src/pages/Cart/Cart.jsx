import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Steps from './components/Steps/Steps';
import Contents from './components/Contents/Contents';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
function Cart() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <MyFooter />
        </>
    );
}
export default Cart;
