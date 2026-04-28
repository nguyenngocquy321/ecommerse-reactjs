import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner/Banner';
function OurShop() {
    const { container, functionBox, speccialText, btnBack } = styles;
    const navigate = useNavigate();
    const handleBackPreviousPage = () => {
        navigate(-1);
    };
    return (
        <div className={container}>
            <MyHeader />
            <MainLayout>
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
            </MainLayout>
        </div>
    );
}
export default OurShop;
