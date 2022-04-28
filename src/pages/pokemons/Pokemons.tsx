import { Component, For } from 'solid-js';
import { PokemonCard } from './PokemonCard';
import { increasePokemonsResourcePage, pokemons, pokemonsResource } from '../../store/pokemons';

// SUSPENSE => SHOW
// loadPokemons();

export const Pokemons: Component = () => (
    <>
        <div class="flex flex-wrap justify-evenly gap-4">
            <For each={pokemonsResource()} fallback={<progress class="progress progress-info w-56"></progress>}>
                {pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>}
            </For>
        </div>
        <div class="text-center pt-4">
            <button type="button" class="btn btn-primary" onClick={increasePokemonsResourcePage}>
                Load more...
            </button>
        </div>
    </>
);
