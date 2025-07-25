import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon } from './constants';
function MyHeader() {
    return (
        <div>
            <div>
                <div>
                    {dataBoxIcon.map((item, index) => {
                        return (
                            <BoxIcon
                                type={item.type}
                                href={item.href}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
export default MyHeader;
