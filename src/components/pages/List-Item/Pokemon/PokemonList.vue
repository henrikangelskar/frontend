<template>
    <article class="item-parent">
        <pokemon-item v-for="(pokemon, i) in pokemons"
        :key="i" 
            :id="pokemon.id"
            :name="pokemon.name"
            :type="pokemon.type"
            :level="pokemon.level"
            :description="pokemon.description"
            :image="pokemon.image"
        />
    </article>
</template>

<script>
import pokemonService from "../../../../services/pokemonService.js";
import PokemonItem from "./PokemonItem.vue";


export default {
    setup(){
        const pokemons = pokemonService.getAll();

        return { 
            pokemons
        }
    },
    components: {
        PokemonItem
    }
}
</script>