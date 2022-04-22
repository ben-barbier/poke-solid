import { NamedAPIResource, PokemonClient } from 'pokenode-ts';
import { Component, For } from 'solid-js';
import { PokemonCard } from './PokemonCard';
import { pokemons, setPokemons } from '../../store/pokemons';

(async () => {
    const api = new PokemonClient();
    await api
        .listPokemons()
        .then(
            async list =>
                await Promise.all((list.results as NamedAPIResource[]).map(v => api.getPokemonByName(v.name))),
        )
        .then(res => setPokemons(res));
})();

export const Pokemons: Component = () => (
    <div class="flex flex-wrap justify-evenly gap-4">
        <For each={pokemons()}>{pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>}</For>
    </div>
);
