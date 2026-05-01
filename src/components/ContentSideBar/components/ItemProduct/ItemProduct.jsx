import { deleteCart, getCart } from '../../../../apis/carthService';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { ToastContext } from '@contexts/ToastProvider';
function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId,
}) {
    const {
        container,
        boxContent,
        boxClose,
        title,
        price,
        size,
        overlayLoading,
    } = styles;
    const [isDelete, setDelete] = useState(false);
    const { handleGetListProductCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const handleRemoveItem = () => {
        setDelete(true);
        deleteCart({ productId, userId })
            .then(res => {
                setDelete(false);
                toast.success('Remove product successfully');
                handleGetListProductCart(userId, 'cart');
            })
            .catch(err => {
                setDelete(false);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose} onClick={handleRemoveItem}>
                <IoCloseOutline style={{ fontSize: '25px', color: 'c1c1c1' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>Size:{sizeProduct}</div>
                <div className={price}>
                    {quantity} x ${priceProduct}
                </div>
                <div className={price}>SKU:${skuProduct}</div>
            </div>
            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default ItemProduct;
