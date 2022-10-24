<template>
    <section class="overview">

        <div class="overview-controls">
            <h1>POKEMON OVERVIEW</h1>

            <div class="search">
                <input type="text" placeholder="Search for a pokemon..." v-model="searchText">
                <button @click="getPokemonByName"><i class="bi bi-search"></i></button>
            </div>

            <div class="selectPokemon">
                <h3>or... find a pokemon by type</h3>

                <select v-model="selected" @change="getPokemonByType">
                    <option disabled value="">Please select one</option>
                    <option>Rock</option>
                    <option>Electric</option>
                    <option>Grass</option>
                    <option>Water</option>
                    <option>Fire</option>
                </select>
            </div>

        </div>

        <div class="overview-cards">
            <pokemon-list />
        </div>

    </section>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
import pokemonService from "../../services/pokemonService";
import PokemonList from "./List-Item/Pokemon/PokemonList.vue";

export default{
    setup(){
        const pokemons = ref([]);
        const searchText = ref([]);
        const selectedForm = reactive({
            selected: ""
        });

        const getPokemonByName = async () => {
            const result = await pokemonService.getByName( searchText.value );
            pokemons.value = result;
        }

        const getPokemonByType = async () => {
            const selectedObject = {
                selected: selectedForm.selected
            }

            const result = await pokemonService.getByType( selectedObject.selected );
            pokemons.value = result;
        }


        return{
            pokemons,
            searchText,
            getPokemonByName,
            getPokemonByType,
            ...toRefs(selectedForm)
        }
    },
    components: {
        PokemonList
    }
}
</script>
<style scoped>
.overview{
    width: 100%;
}
/* CONTROLLS */
.overview-controls{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 10px;
    margin:0px;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 0px;
}
.overview-controls h1{
    margin: 10px 0px 30px 0px;
    }
/* CARDS */
.overview-cards{
    width: 100%;
}
.overview-cards article{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
/* SEARCH */
.search{
    width: 100%;
    display: flex;
    width: 70%;
    max-width: 700px;
    min-width: 200px;
}
.search button{
    height: 60px;
    width: 60px;
    margin: 0px 10px;
    color: #009688;
    border-radius: 7px;
    border: 4px solid #009688;
    font-size: 1.4rem;
    transition: .25s ease;
    background: #009688;
    color: white;
}
.search button:hover{
    background: white;
    color: #009688;
    border: 2px solid #009688;
}
.search input{
    height: 60px;
    background: #f1f1f1;
    border: none;
    padding: 10px 20px;
    color: #54b2a9;
    border-radius: 7px;
    width: 100%;
    font-size: 1.4rem;
}
.search input:focus{
    opacity: 90%;
    color: #009688;
    outline: none;
    border: 2px solid #009688;
}
.search input::placeholder{
    color: #54b2a9;
}
/* Select */
.selectPokemon{
    margin-top: 10px;
    width: 70%;
    max-width: 700px;
    min-width: 200px;
    padding: 10px 0px 0px;
    text-align: center;
}
.selectPokemon select{
    width: 100%;
    padding: 5px;
    font-size: 18px;
    background: white;
    color: #009688;
    border: 2px solid #009688;
    border-radius: 7px;
}
.selectPokemon select > option:nth-child(even){
    background-color: rgb(245, 245, 245);
}
/* TYPES */
.types{
    padding: 20px 10px;
    text-align: center;
    width: 100%;
    border-top: 3px solid gray;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.types select{
    width: 80%;
    max-width: 700px;
    min-width: 200px;
    font-size: 18px;
    border: 2px solid #9d9d9d;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

@media only screen and (max-width: 850px) {
  .search input{
    font-size: 1rem;
  }
}
</style>