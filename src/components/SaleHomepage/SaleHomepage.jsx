import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateXImage from '@/hooks/useTranslateXImage';
function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();
    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    width: '41%',
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease-out'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>

            <div style={{ width: '18%' }}>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPriamry={false} />
                </div>
            </div>

            <div
                className={boxImage}
                style={{
                    width: '41%',
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease-out'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
