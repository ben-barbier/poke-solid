import { createEffect, createSignal, createResource } from 'solid-js';
import { NamedAPIResource, Pokemon, PokemonClient } from 'pokenode-ts';
import { cart, removeFromCart, setCart } from './cart';

export const [pokemons, setPokemons] = createSignal<Pokemon[]>([]);

export const deletePokemon = (pokemon: Pokemon) => setPokemons([...pokemons().filter(p => p.id !== pokemon.id)]);

const ITEMS_PER_PAGE = 20;
const api = new PokemonClient();
const [pokemonsResourcePage, setPokemonsResourcePage] = createSignal<number>(0);

export const increasePokemonsResourcePage = () => {
    setPokemonsResourcePage(pokemonsResourcePage() + 1);
};

// Note: start at 0
const fetchPokemons = async (page: number) => {
    const offset = page * ITEMS_PER_PAGE;

    const fetchedPokemons = await api
        .listPokemons(offset)
        .then(list => Promise.all((list.results as NamedAPIResource[]).map(v => api.getPokemonByName(v.name))));

    setPokemons(pokemons().concat(fetchedPokemons));

    return pokemons();
};

export const [pokemonsResource] = createResource(pokemonsResourcePage, fetchPokemons);

createEffect(() => {
    const pokemonFromCartThatHasBeenDeleted: Pokemon[] = cart().filter(
        cartPokemon =>
            !pokemons()
                .map(pokemon => pokemon.id)
                .includes(cartPokemon.id),
    );

    pokemonFromCartThatHasBeenDeleted.forEach(p => removeFromCart(p));
});
