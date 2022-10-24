<template>
    <article class="pokemonCard col-sm-3">
        <div class="pokemonImageParent">
            <div class="">
                <img :src="`https://localhost:7026/images/${image}`" class="pokemonImage">
            </div>
        </div>
        <div class="pokemonInfo">
            <h5><strong>{{name}}</strong></h5>
            <p>{{type}} pokemon </p>
            <p>Level: {{level}}</p>
            <p>{{description}}</p>
            <hr />
            <h6>Id: {{id}}</h6>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        type: String,
        level: Number,
        description: String,
        image: String
    }
}
</script>

<style>
.pokemonCard{
    background-color: white;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card h6{
    color: #009688;
}
.pokemonImageParent{
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow: hidden;
    justify-content: center;
}
.pokemonImage{
    width: 100%;
}
.pokemonInfo{
    padding: 10px;
}
@media only screen and (max-width: 1540px) {
    .pokemonImageParent{
        justify-content: flex-start;
        align-items: flex-start;
        height: auto;
    }
}

</style>