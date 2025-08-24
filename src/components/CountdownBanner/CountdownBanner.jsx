import CountdownTimmer from '@components/CountdownTimmer/CountdownTimmer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function CountdownBanner() {
    const { container, containerTimmer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimmer}>
                <CountdownTimmer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default CountdownBanner;
