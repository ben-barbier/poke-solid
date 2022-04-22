import { createEffect, createSignal } from 'solid-js';
import { NamedAPIResource, Pokemon, PokemonClient } from 'pokenode-ts';
import { cart, removeFromCart, setCart } from './cart';

export const [pokemons, setPokemons] = createSignal<Pokemon[]>([]);

export const deletePokemon = (pokemon: Pokemon) => setPokemons([...pokemons().filter(p => p.id !== pokemon.id)]);

let offset = 0;
const ITEMS_PER_PAGE = 20;
const api = new PokemonClient();

export const loadPokemons = async (): Promise<void> => {
    await api
        .listPokemons(offset)
        .then(list => Promise.all((list.results as NamedAPIResource[]).map(v => api.getPokemonByName(v.name))))
        .then(res => setPokemons(pokemons().concat(res)));
};

export const loadMorePokemons = (): Promise<void> => {
    offset += ITEMS_PER_PAGE;
    return loadPokemons();
};

createEffect(() => {
    const pokemonFromCartThatHasBeenDeleted: Pokemon[] = cart().filter(
        cartPokemon =>
            !pokemons()
                .map(pokemon => pokemon.id)
                .includes(cartPokemon.id),
    );

    pokemonFromCartThatHasBeenDeleted.forEach(p => removeFromCart(p));
});
