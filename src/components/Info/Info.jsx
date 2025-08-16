import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function Info() {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item, index) => {
                    return (
                        <InfoCard
                            key={index}
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default Info;
