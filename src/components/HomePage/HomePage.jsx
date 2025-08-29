import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
function HomePage() {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then(res => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <PopularProduct />
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
