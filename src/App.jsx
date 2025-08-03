import reactLogo from './assets/react.svg';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import MyButton from '@components/Button/Button';
function App() {
    return (
        <div>
            <MainLayout>
                <MyHeader />
                {/*
                Content
                <MyFooter /> */}
            </MainLayout>
        </div>
    );
}

export default App;
