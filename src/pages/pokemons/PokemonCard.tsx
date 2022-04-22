import { Component } from 'solid-js';
import { Pokemon } from 'pokenode-ts';
import { isInCart, toggleToCart } from '../../store/cart';

export const PokemonCard: Component<{ pokemon: Pokemon }> = props => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    style="max-height: 200px;"
                    src={props.pokemon.sprites.other.dream_world.front_default ?? ''}
                    alt="Sprite"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{props.pokemon.name}</h2>
                <p>ID: {props.pokemon.id}</p>
                <div class="card-actions justify-end">
                    <button
                        type="button"
                        class="btn btn-primary"
                        onClick={[toggleToCart, props.pokemon]}
                        style={{ 'background-color': isInCart(props.pokemon) ? '#ff4081' : null }}
                    >
                        <span class="material-icons">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
