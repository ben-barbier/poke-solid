import { createSignal } from 'solid-js';
import { Pokemon } from 'pokenode-ts';

export const [cart, setCart] = createSignal<Pokemon[]>([]);

export const clearCart = () => setCart([]);
export const addToCart = (pokemon: Pokemon) => setCart([...cart(), pokemon]);
export const removeFromCart = (pokemon: Pokemon) => setCart([...cart().filter(p => p.id !== pokemon.id)]);
export const isInCart = (pokemon: Pokemon) => cart().some(p => p.id === pokemon.id);
export const toggleToCart = (pokemon: Pokemon) => {
    if (isInCart(pokemon)) {
        removeFromCart(pokemon);
    } else {
        addToCart(pokemon);
    }
};
