import { Component } from 'solid-js';
import { Pokemon } from 'pokenode-ts';
import { isInCart, toggleToCart } from '../../store/cart';
import { deletePokemon } from '../../store/pokemons';

export const PokemonCard: Component<{ pokemon: Pokemon }> = props => {
    return (
        <div class="card card-compact w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img
                    class="rounded-xl"
                    src={props.pokemon.sprites.other['official-artwork'].front_default ?? ''}
                    alt={props.pokemon.name}
                />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{props.pokemon.name}</h2>
                <p>Id: {props.pokemon.id}</p>
                <p>Height: {props.pokemon.height}</p>
                <p>Weight: {props.pokemon.weight}</p>
                <div class="card-actions">
                    <button type="button" class="btn btn-error" onClick={() => deletePokemon(props.pokemon)}>
                        <span class="material-icons">delete</span>
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => toggleToCart(props.pokemon)}
                        style={{ 'background-color': isInCart(props.pokemon) ? '#ff4081' : null }}
                    >
                        <span class="material-icons">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
