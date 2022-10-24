<template>
    <!-- NAV -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <!-- BRAND -->
        <div >
            <router-link class="navbar-brand" to="/">MyPokemon</router-link>
        </div>

        <!-- LINKS -->
        <div id="navbarNav">

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-item">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/pokemons" class="nav-item">VIEW POKEMONS</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/edit" class="nav-item">EDIT DATA</router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style scoped>
.nav-item {
    color: #2b2b2b;
    margin: 0px 5px;
    text-decoration: none;
    font-size: 20px;
    transition: .25s ease-out;
}
.nav-item:hover {
    color: #35a79c;
}
nav{
    padding: 20px;
}
.navbar-brand{
    font-weight: bold;
    font-size: 28px;
}
</style>