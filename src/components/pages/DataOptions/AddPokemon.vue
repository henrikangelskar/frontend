<template>
    <div>
        <div class="input-parent">
            <div class="input-box">
                <h4>Name*</h4>
                <input type="text" v-model="name" placeholder="Pokemon name">
            </div>
        
            <div class="input-box">
                <h4>Description*</h4>
                <input type="text" v-model="description" placeholder="Pokemon description">
            </div>
            <div class="input-box">
                <h4>Type*</h4>
                <select v-model="type">
                    <option disabled value="">Select a pokemon type</option>
                    <option>Water</option>
                    <option>Electric</option>
                    <option>Grass</option>
                    <option>Fire</option>
                    <option>Rock</option>
                </select>
            </div>
            <div class="input-box">
                <h4>Level*</h4>
                <input type="number" v-model="level" placeholder="The level of the pokemon">
            </div>
            <div class="input-box">
                <h4>Upload image</h4>
                <input type="file" @change="setImage">
            </div>
            <div class="input-box">
                <h4>Submit to database</h4>
                <button class="submit-btn" @click="postPokemon"> ADD DATA <i class="bi bi-arrow-up-square"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import pokemonService from '../../../services/pokemonService.js'

export default {
    setup(){

        const image = new FormData();

        //GET V-MODELS
        const formPokemon = reactive({
            id: "",
            name: "",
            description: "",
            type: "",
            level: "",
            image: "",
        });

        const setImage = (e) => {
            image.append("file", e.target.files[0]); //image object for upload
            formPokemon.image = e.target.files[0].name; //set name of image in prop image to new Pokemon
        }


        const postPokemon = () => {

            //Check input fields
            if(formPokemon.name == "" || formPokemon.type == "" || formPokemon.description == "" || formPokemon.level == ""){
                alert("Please fill out all fields with *")
                return false;
            }

            //check if input is lower than 1 (min level)
            if(formPokemon.level < 1){
                alert("Lowest level is 1")
                return false;
            }
            //easter egg (max level)
            if(formPokemon.level > 9000){
                alert("This isn't Dragonball Z, your pokemon is not over 9000... Try Again :)")
                return false;
            }

            const newPokemon = {
                name: formPokemon.name,
                description: formPokemon.description,
                type: formPokemon.type,
                level: formPokemon.level,
                image: formPokemon.image
            }
            pokemonService.postPokemon( newPokemon , image )

            alert(`${formPokemon.name} added to database.`)

            //CLEAR DATA AFTER SUBMIT
            formPokemon.name = '';
            formPokemon.description = ''; 
            formPokemon.type = '';
            formPokemon.level = '';
            formPokemon.image = '';

        }

        return{
            setImage,
            postPokemon,
            ...toRefs(formPokemon)
        }

    }
}
</script>

<style>
.input-parent {
    display: flex;
    flex-wrap: wrap;
}
.input-box, .submit-box {
    padding: 10px;
    width: 50%;
}
.input-box input, .input-box select {
    width: 100%;
    padding: 5px;
    border: 1px solid #636363;
}
.input-box button{
    width: 100%;
    padding: 10px;
    border: none;
    background: #339900;
    color: #ededed;
}
.input-box h4{
    font-size: 1.25rem;
    color: #636363;
}
.submit-box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit-btn {
    border: none;
    color: #ededed;
    transition: .5s;
}
.submit-btn:hover{
    background-color: #2c8500;
}
</style>