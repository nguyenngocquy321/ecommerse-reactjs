import styles from '../styles.module.scss';
import DebitCardIcon from '@icons/svgs/truckIcon.svg';
function InfoCard({ content, description, src }) {
    const { containerCard, containerContent, title, des } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='DebitCardIcon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
