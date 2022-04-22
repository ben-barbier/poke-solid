import { createSignal } from 'solid-js';
import { Pokemon } from 'pokenode-ts';
import { cart, setCart } from './cart';

export const [pokemons, setPokemons] = createSignal<Pokemon[]>([]);

export const deletePokemon = (pokemon: Pokemon) => setPokemons([...pokemons().filter(p => p.id !== pokemon.id)]);
