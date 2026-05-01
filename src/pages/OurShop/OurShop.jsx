import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from './components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from './components/Filter';
import ListProducts from './components/ListProducts';
function OurShop() {
    const { container, functionBox, speccialText, btnBack } = styles;
    const navigate = useNavigate();
    const handleBackPreviousPage = () => {
        navigate('/');
    };
    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={speccialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            &gt; Return to previous page
                        </div>
                    </div>
                    <Banner />
                    <div>
                        <Filter />
                    </div>
                    <div>
                        <ListProducts />
                    </div>
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}
export default OurShop;
