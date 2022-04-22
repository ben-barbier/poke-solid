import { NamedAPIResource, Pokemon, PokemonClient } from 'pokenode-ts';
import { Component, createSignal, For } from 'solid-js';
import { PokemonCard } from './PokemonCard';

const [pokemons, setPokemons] = createSignal<Pokemon[]>([]);

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
