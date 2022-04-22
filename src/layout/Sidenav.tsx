import { Component } from 'solid-js';

export const Sidebar: Component = () => {
    return (
        <>
            <label for="my-drawer" class="drawer-overlay" />
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/*Sidebar content here */}
                <li>
                    <a>Page 1</a>
                </li>
                <li>
                    <a>Page 2</a>
                </li>
            </ul>
        </>
    );
};
