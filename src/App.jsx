import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers.js';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <SideBar />
                    <BrowserRouter>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {routers.map(item => (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        element={<item.component />}
                                    />
                                ))}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
