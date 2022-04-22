import type { Component } from 'solid-js';
import styles from './App.module.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Sidebar } from './layout/Sidenav';
import { Route, Routes } from 'solid-app-router';
import { Home } from './pages/home/Home';
import { Admin } from './pages/admin/Admin';
import { Pokemons } from './pages/pokemons/Pokemons';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <Header />
            <div class="drawer w-full rounded" style="height: calc(100vh - 64px);">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/*Page content here*/}
                    <div style="min-height: calc(100% - 68px);" class="p-4 bg-slate-100">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/pokemons" element={<Pokemons />} />
                            <Route path="/admin" element={<Admin />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
                <div class="drawer-side">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default App;
