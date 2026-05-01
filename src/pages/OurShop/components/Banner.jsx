import CountdownTimmer from '@components/CountdownTimmer/CountdownTimmer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
function Banner() {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
    const targetDate = '2026-12-31T00:00:00';
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimmer targetDate={targetDate} />
                    </div>
                    <div className={title}>The Classics Make A Comeback</div>
                    <div className={boxBtn}>
                        <Button text='Buy Now' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Banner;
