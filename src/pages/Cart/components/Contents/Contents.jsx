import styles from '../../styles.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
function Contents() {
    const { containerContent } = styles;
    return (
        <div className={containerContent}>
            <div>
                <CartTable />
            </div>
            <div>
                <CartSummary />
            </div>
        </div>
    );
}
export default Contents;
