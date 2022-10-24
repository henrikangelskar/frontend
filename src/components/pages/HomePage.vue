<template>
    <section class="homePageParent">
        <!-- BANNER -->
        <article class="homePageBanner">
            <div class="homePageText">
                <h1>POKÉMON</h1>
                <h3>Gotta Catch em' All</h3>
            </div>

            <div class="homePageBtns">
                <router-link to="pokemons">
                    <button class="homePageBtn">VIEW POKEMON</button>
                </router-link>

                <router-link to="edit">
                    <button class="homePageBtn">EDIT DATA</button>
                </router-link>
            </div>
        </article>

        <!-- MAIN -->
        <article class="homePageMain">

            <div class="infoContainer">
                <div class="icon">
                    <h1><i class="bi bi-question-diamond-fill"></i></h1>
                </div>

                <h1 class="infoTxt">
                    A little bit about the different pokemons, and features on this website!
                </h1>
            </div>
            
            <!-- POKEMON TYPES -->
            <div class="pokemonTypesParent">
                <div class="pokemonTypes">

                    <h3>Pokemon types</h3>
                    <div class="fire">
                        <div class="typeIcon">
                            <h1><i class="bi bi-brightness-alt-low-fill" /></h1> <!-- bootstrap icon library buggy (couldn't use fire icon) -->
                        </div>
                        
                        <h3>Fire</h3> 
                    </div>

                    <div class="water">
                        <div class="typeIcon">
                            <h2><i class="bi bi-droplet" /></h2>
                        </div>
                        
                        <h3>Water</h3>
                    </div>

                    <div class="electric">
                        <div class="typeIcon">    
                            <h2><i class="bi bi-lightning-charge" /> </h2>
                        </div> 

                        <h3>Electric</h3>
                    </div>

                    <div class="grass">
                        <div class="typeIcon">
                            <h2><i class="bi bi-flower1" /></h2>
                        </div>

                        <h3>Grass</h3>
                    </div>

                    <div class="rock">
                        <div class="typeIcon">
                            <h2><i class="bi bi-bricks" /></h2>
                        </div>
                        
                        <h3>Rock</h3>
                    </div>

                </div>

                <!-- ATTRIBUTES -->
                <div class="pokemonAttributes">
                    <h2>Pokemon attributes</h2>
                    <p>The pokemons have different attributes, these are:</p>

                    <div class="attributes">
                        
                        <div class="attributesBox">
                            <div class="typeIcon">
                                <h2><i class="bi bi-fonts" /></h2>
                            </div>
                            
                            <div class="textAlign">
                                <h4>Name</h4>
                                <p>The name of the pokemon</p>
                            </div>
                        </div>
                        <div class="attributesBox">
                            <div class="typeIcon">
                                <h2><i class="bi bi-egg" /></h2>
                            </div>
                            
                            <div class="textAlign">
                                <h4>Type</h4>
                                <p>The pokemon type determines what type powers it has</p>
                            </div>
                        </div>
                        <div class="attributesBox">
                            <div class="typeIcon">
                                <h2><i class="bi bi-capslock" /></h2>
                            </div>
                            
                            <div class="textAlign">
                                <h4>Level</h4>
                                <p>The level of pokemon shows how powerfull it is </p>
                            </div>
                        </div>
                        <div class="attributesBox">
                            <div class="typeIcon">
                                <h2><i class="bi bi-pen" /></h2>
                            </div>
                            
                            <div class="textAlign">
                                <h4>Description</h4>
                                <p>A short description about the pokemon, info collected from pokedex.com/no</p>
                            </div>
                        </div>
                        <div class="attributesBox">
                            <div class="typeIcon">
                                <h2><i class="bi bi-image" /></h2>
                            </div>
                            
                            <div class="textAlign">
                                <h4>Image</h4>
                                <p>An image of the pokemon</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="customHr" />

            <div>
                <h1>Editing different pokemon</h1>
                <p>To edit diffrent data, you can go to the "edit data" section. Here you can use the diffrent CRUD methods from the Api to add- , edit- or delete a pokemon.</p>
            </div>
        

        </article>
    </section>
</template>

<script>

</script>

<style>
/* PARENT SECTION */
.homePageParent{
    width: 100%;
}

/* ICON */
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 50px;
    margin: 0px 20px;
}

/* BANNER */
.homePageBanner{ 
    width: 100%;
    height: 60vh;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(0,150,136);
    background: linear-gradient(45deg, rgba(0,150,136,1) 0%, rgba(84,178,169,1) 35%, rgba(131,208,201,1) 100%);
}

/* TEXT */
.homePageText{
    width: 60%;
}
.homePageText h1{ 
    font-size: 8rem;
    color: #f4f4f4;
}
.homePageText h3{ 
    font-size: 4rem;
    color: #f4f4f4;
}

/* BUTTONS  */
.homePageBtns{
    width: 60%;
}
.homePageBtn{
    border: none;
    background: #ece7e2;
    padding: 10px 30px;
    margin: 10px;
    font-size: 2rem;
    border-radius: 30px;
    color: rgb(0,150,136);
    border: 4px solid #ffffff00;
    transition: .25s ease;
}
.homePageBtn:hover{
    border: 4px solid #ece7e2;
    color: #ece7e2;
    background: none;
}

/* MAIN SECTION */
.homePageMain{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4b4b4b;
    padding: 10px;
}
.infoContainer{
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
}

/* Pokemons */
.pokemonTypesParent{
    width: 100%;
    display: flex;
}

.pokemonTypes, .pokemonAttributes{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.water, .fire, .electric, .grass, .rock, .attributesBox{
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
    padding-right: 20px;
    max-width: 500px;
    width: 80%;
    min-width: 100px;
    border-radius: 15px;
    overflow: hidden;
}
.typeIcon {
    min-width: 60px;
    min-height: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(242, 242, 242);
    margin-right: 10px;
}
.typeIcon h2, .typeIcon h1{
    margin: 0px;
}
.water > .typeIcon{
    color: rgb(107, 107, 255);
}
.fire > .typeIcon{
    color: rgb(255, 107, 107);
}
.electric > .typeIcon{
    color: rgb(255, 255, 39);
}
.rock > .typeIcon{
    color: rgb(37, 37, 37);
}
.grass > .typeIcon{
    color: rgb(88, 155, 83);
}

/* ATTRIBUTES TO THE POKEMON */
.attributes{
    max-width: 500px;
    width: 80%;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.textAlign{
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.textAlign p, .textAlign h4{
    margin: 5px;
}

/* HR */
.customHr{
    width: 80%;
    margin: 20px 0px;
    border: 1px solid gray;
}
/* MEDIA QUERIES */
@media only screen and (max-width: 1000px) {
    /* DECREASE SIZE OF BANNER FONT ON SMALLER SCREENS */
    .homePageText h1{ 
        font-size: 4rem;
    }
    .homePageText h3{ 
        font-size: 2.5rem;
    }
    /* INCREASE WIDTH OF WRAPPER TO INCREASE AVALIABLE PLACE */
    .homePageText, .homePageBtns{
        width: 90%;
    }
    .homePageBtn{
        font-size: 1.5rem;
        padding: 10px 15px;
    }
    .pokemonTypesParent{
        flex-direction: column;
    }
    .pokemonAttributes, .pokemonTypes{
        width: 100%;
    }
}

</style>