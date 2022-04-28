import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

export const Home: Component = () => {
    return (
        <Link href="/pokemons" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Pokemons
        </Link>
    );
};
