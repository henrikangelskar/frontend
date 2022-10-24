<template>
    <div>
        <!--DELETE-->
        <div>
            <h3>Get Pokemon by Id</h3>
            <p>Tip: use the arrow keys to go through the pokemons or view the pokemon id on the "view pokemon" page.</p>
            <input v-model="id" type="number" @keyup="getPokemonOnKeyup" @change="getPokemonOnKeyup" class="deleteInput"> 
            <p class="showPokemon">Pokemon: <strong>{{ name }}</strong></p>

            <button @click="deleteAPokemon" type="button" class="deleteButton"><i class="bi bi-trash"></i> DELETE POKEMON</button>
        </div>
    </div>
</template>

<style scoped>
.deleteInput{
    width: 50%;
}
.deleteButton{
    width: 50%;
    padding: 5px;
    border: none;
    background-color: #e2939c;
    transition: .5s;
}
.deleteButton:hover{
    background-color: #c05e69;
}
.showPokemon{
    border: 1px solid black;
    padding: 5px;
    width: 50%;
    margin: 10px 0px;
    font-size: 20px;
}
</style>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import pokemonService from '../../../services/pokemonService.js';

export default{
    setup(){

        const formPokemon = reactive({
            id: "",
            name: ""
        })

        const getPokemonOnKeyup = async () => {

            const pokemon = await pokemonService.getById( formPokemon.id )
            formPokemon.name = pokemon.data.name;

        }

        const deleteAPokemon = async () => {

            if(formPokemon.name == undefined) { //CHECK IF POKEMON EXISTS BEFORE DELETING
                alert("Didnt find any pokemon to delete with that Id")
                return false;
            }

            if (confirm(`Are you sure you want to delete ${formPokemon.name}, id: ${formPokemon.id}`)) { //ARE YOU SURE MESSAGE
            
                pokemonService.deletePokemonFromId( JSON.parse(formPokemon.id) );
                alert(`${formPokemon.name} deleted`);   
                formPokemon.id = ''; //RESET INPUT FIELD

            } else {
            
                alert('Pokemon was not deleted from the database.');
                formPokemon.id = ''; //RESET INPUT FIELD

            }

        }
        return{
            deleteAPokemon,
            getPokemonOnKeyup,
            ...toRefs(formPokemon)
        }
    }
}

</script>