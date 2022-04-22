import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

export const Sidebar: Component = () => {
    return (
        <>
            <label for="my-drawer" class="drawer-overlay" />
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/*Sidebar content here */}
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/pokemons">Pokemons</Link>
                </li>
                <li>
                    <Link href="/admin">Admin</Link>
                </li>
            </ul>
        </>
    );
};
