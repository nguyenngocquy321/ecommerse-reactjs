import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item, index) => {
                        return (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                            />
                        );
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item, index) => {
                        return (
                            <Menu
                                content={item.content}
                                href={item.href}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <div>LOGO</div>
            <div>Khối bên phải</div>
        </div>
    );
}

export default MyHeader;
