import styles from '../styles.module.scss';
function SelectBox({ options, getValue, type }) {
    const { selecBox } = styles;
    return (
        <select
            className={selecBox}
            onChange={e => getValue(e.target.value, type)}
        >
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
}
export default SelectBox;
