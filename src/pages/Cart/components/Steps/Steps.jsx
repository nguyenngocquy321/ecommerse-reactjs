import styles from '../../styles.module.scss';
import Stepper from './Stepper';
function Steps() {
    const { containerSteps, steps, line, textNoti } = styles;
    const dataSteps = [
        { number: 1, content: 'Shopping cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Other status' },
    ];
    return (
        <div className={containerSteps}>
            <div style={{ width: '100%' }}>
                <div className={steps}>
                    {dataSteps.map((it, index) => {
                        return (
                            <>
                                <div>
                                    <Stepper
                                        number={it.number}
                                        content={it.content}
                                        key={index}
                                        isDisabled={index !== 0}
                                    />
                                    {index !== dataSteps.length - 1 && (
                                        <div className={line}></div>
                                    )}
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className={textNoti}>
                You are out of time! checkout now to avoid losing your other!
            </div>
        </div>
    );
}
export default Steps;
