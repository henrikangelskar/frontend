<template>
    <div>

        <!--PUT-->
        <div class="input-box">

            <h4>Insert Id of the Pokemon you wish to edit</h4>
            <input v-model="id" type="number" placeholder="Type an id" >
            <input @click="getPokemonFromId" type="button" value="Get Pokemon" class="getPokemonBtn">

        </div>

        <hr />

        <div class="input-parent">
            <div class="input-box">
                <h4>Name*</h4>
                <input v-model="name" type="text">
            </div>
            <div class="input-box" >
                <h4>Type*</h4>
                <input v-model="type" type="text">
            </div>
            <div class="input-box">
                <h4>Level*</h4>
                <input v-model="level" type="text">
            </div>
            <div class="input-box">
                <h4>Description*</h4>
                <input v-model="description" type="text">
            </div>
            <!-- <div class="input-box">
                <h4>New Image</h4>
                <input type="file" @change="setImage">
            </div> -->
            <div class="input-box">
                <h4>Edit Pokemon</h4>
                <button class="editBtn" @click="editPokemon"> EDIT DATA <i class="bi bi-pencil"></i></button>
            </div>
        </div>

    </div>
</template>

<script>
import pokemonService from '../../../services/pokemonService.js'
import { reactive, toRefs } from 'vue';

export default {
    setup(){

        // EDIT IMAGE -> NOT LEARNED IN LESSONS -> TODO IN FUTURE 
        // const image = new FormData();

        //GET V MODELS
        const pokemonForm = reactive({
            id: "",
            name: "",
            type: "",
            level: "",
            description: "",
        });

        // const setImage = (e) => {
        //     console.log(image)
        //     image.append("file", e.target.files[0]); //image object for upload
        //     pokemonForm.image = e.target.files[0].name; //set name of image in prop image to new Pokemon
        // }

        const getPokemonFromId = async () => {

            const pokemon = await pokemonService.getById( pokemonForm.id )

            if (pokemonForm.id == null || pokemonForm.id == ""){ //CHECK IF INPUT ID IS EMPTY

                alert("Please insert an id")

            } else if(pokemon.data.name == undefined) {

                alert(`Could not find pokemon with id ${pokemonForm.id} in database`) //IF DATA IS RETURNED UNDEFINED

            }

            pokemonForm.id = pokemon.data.id;
            pokemonForm.name = pokemon.data.name;
            pokemonForm.type = pokemon.data.type;
            pokemonForm.level = pokemon.data.level;
            pokemonForm.description = pokemon.data.description;
        }


        //EDIT
        const editPokemon = async () => {

            if(pokemonForm.name == "" || pokemonForm.type == "" || pokemonForm.description == "" || pokemonForm.level == ""){
                alert("Please fill out all fields with *")
                return false;
            }

            const pokemon = await pokemonService.getById( pokemonForm.id )

            const editedPokemon = {
                id: parseInt( pokemonForm.id ), // PARSE
                name: pokemonForm.name,
                type: pokemonForm.type,
                level: pokemonForm.level,
                description: pokemonForm.description,
                image: pokemon.data.image // use the same image as recieved by the initial response
            }

            pokemonService.editPokemon( editedPokemon );
            alert(`${pokemonForm.name} updated in database.`)


            //CLEAR DATA AFTER SUBMIT
            pokemonForm.name = '';
            pokemonForm.description = '';
            pokemonForm.type = '';
            pokemonForm.level = '';
            pokemonForm.id = '';
        }

        return{
            editPokemon,
            getPokemonFromId,
            ...toRefs(pokemonForm),
            // setImage
        }

    }

}
</script>

<style scoped>
.getPokemonBtn{
    margin: 5px 0px;
}
.editBtn{
    background-color: #FFCC00;
    color: #252525;
    transition: .5s;
}
.editBtn:hover{
    opacity: 90%;
    background-color: #fdd534;
}
</style>