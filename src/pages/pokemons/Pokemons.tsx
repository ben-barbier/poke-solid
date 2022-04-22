import { Component, For } from 'solid-js';
import { PokemonCard } from './PokemonCard';
import { loadMorePokemons, loadPokemons, pokemons } from '../../store/pokemons';

loadPokemons();

export const Pokemons: Component = () => (
    <>
        <div class="flex flex-wrap justify-evenly gap-4">
            <For each={pokemons()}>{pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>}</For>
        </div>
        <div class="text-center pt-4">
            <button type="button" class="btn btn-primary" onClick={loadMorePokemons}>
                Load more...
            </button>
        </div>
    </>
);
