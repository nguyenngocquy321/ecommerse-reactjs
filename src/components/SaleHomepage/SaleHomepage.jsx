import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const [scrollDirection, setScrollDirection] = useState(null);
    const [translateLeft, setTranslateLeft] = useState(-100);
    const [translateRight, setTranslateRight] = useState(100);
    const [scrollPosition, setScrollPosition] = useState(0);
    const previousScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        setScrollPosition(currentScrollPosition);

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }

        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateLeft(prev => (prev >= 0 ? 0 : prev + 2));
            setTranslateRight(prev => (prev <= 0 ? 0 : prev - 2));
        } else if (scrollDirection === 'up') {
            setTranslateLeft(prev => (prev <= -100 ? -100 : prev - 2));
            setTranslateRight(prev => (prev >= 100 ? 100 : prev + 2));
        }
    }, [scrollPosition, scrollDirection]);

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    width: '41%',
                    transform: `translateX(${translateLeft}px)`,
                    transition: 'transform 1s ease-out'
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
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>

            <div
                className={boxImage}
                style={{
                    width: '41%',
                    transform: `translateX(${translateRight}px)`,
                    transition: 'transform 1s ease-out'
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
