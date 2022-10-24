<template>

    <section class="add-section">
        <h1>ADD DATA</h1>
        <article class="add-article">
            <add-pokemon />
        </article>
        <h1>EDIT DATA</h1>
        <article class="add-article">
            <edit-pokemon />
        </article>
        <h1>DELETE DATA</h1>
        <article class="add-article">
            <delete-pokemon />
        </article>


    </section>
</template>

<script>
import AddPokemon from "./DataOptions/AddPokemon.vue";
import EditPokemon from "./DataOptions/EditPokemon.vue";
import DeletePokemon from "./DataOptions/DeletePokemon.vue";

export default {
    setup(){
    },
    components: {
    AddPokemon,
    EditPokemon,
    DeletePokemon
}   
}
</script>

<style scoped>
.add-section{   
    width: 90%;
    margin: 50px 0px;
    background-color: white;
    min-height: 50vh;
    border-top: 4px solid rgb(0,150,136);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.add-section h1{
    text-align: center;
    border-top: 2.5px solid rgb(95, 95, 95);
    padding: 20px;
    letter-spacing: 5px;
}
.add-article{
    background-color: #ffffff;
    min-height: 300px;
    padding: 10px;
    padding: 100px 50px;
}
.add-article:nth-child(even){
    background-color: #f6f6f6;
}
</style>