import { AiOutlineLoading } from 'react-icons/ai';
import styles from './styles.module.scss';
function LoadingTextCommon() {
    const { rotate } = styles;
    return <AiOutlineLoading className={rotate} />;
}
export default LoadingTextCommon;
