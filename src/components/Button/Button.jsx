import styles from './styles.module.scss';
function MyButton() {
    const { btn } = styles;
    return (
        <div>
            <button className={btn}>Click Me</button>
        </div>
    );
}

export default MyButton;
