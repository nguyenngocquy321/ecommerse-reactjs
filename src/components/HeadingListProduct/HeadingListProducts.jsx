import CountdownTimmer from '@components/CountdownTimmer/CountdownTimmer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function HeadingListProducts() {
    const { container } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <MainLayout>
            <div className={container}>
                <div>Count down time</div>
                <div>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}
export default HeadingListProducts;
