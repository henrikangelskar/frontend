import axios from "axios";
import { ref } from 'vue'

const pokemonService = (function(){

    const pokemons = ref([]);

    // url pokemon controller
    const pokemonControllerUrl = "https://localhost:7026/pokemon";

    // url endpoint img upload
    const imageUploadControllerUrl = "https://localhost:7026/imageUpload/postImage";
    
    ( async ()=> {
        
        const request = await axios.get(pokemonControllerUrl);
        pokemons.value = request.data;

    })()

    // Get all
    const getAll = () => pokemons;


    // Get Id
    const getById = async (id) => {
        const request = await axios.get(`${pokemonControllerUrl}/${id}`);
        return request;
    }


    // Add (Post) Pokemon
    const postPokemon = ( newPokemon, image ) => {

        axios.post(pokemonControllerUrl, newPokemon); //Saves new pokemon with name/image in database

        axios({ // saves image in wwwroot/images
            method: "POST",
            url: imageUploadControllerUrl,
            data: image,
            config: { header: { "Content-Type": "multipart/form-data" } }
        });

        pokemons.value.push(newPokemon) //push to pokemons ref to update instantly
    }


    // Get by name (search)
    const getByName = async (name) => {
        const request = await axios.get(`${pokemonControllerUrl}/getname/${name}`);
        pokemons.value = request.data;
    }


    // Get by pokemon type
    const getByType = async (type) => {
        const request = await axios.get(`${pokemonControllerUrl}/getType/${type}`);
        pokemons.value = request.data;
    }

    // Edit (PUT)
    const editPokemon =  async (editedPokemon) => {

        await axios.put("https://localhost:7026/pokemon", editedPokemon) 

        // IMAGE EDIT (put) -> TODO IN FUTURE (NOT LEARNED IN LECTURE, SO DONT INCLUDE RIGHT NOW) "KEEP IT SIMPLE"

        // axios({ // saves image in wwwroot/images
        //     method: "PUT",
        //     url: imageUploadControllerUrl,
        //     data: image,
        //     config: { header: { "Content-Type": "multipart/form-data" } }
        // });


        const temporaryArray = JSON.parse( JSON.stringify( pokemons.value ) );

        const index = temporaryArray.findIndex(missions=>parseInt(missions.id)===parseInt(editedPokemon.id)  );

        pokemons.value[index].id = editedPokemon.id;
        pokemons.value[index].name = editedPokemon.name;
        pokemons.value[index].type = editedPokemon.type;
        pokemons.value[index].level = editedPokemon.level;
        pokemons.value[index].descriptions = editedPokemon.descriptions;
        
    }

    //DELETE
    const deletePokemonFromId = async ( pokemonToDelete ) => {

        await axios.delete(`https://localhost:7026/Pokemon/${pokemonToDelete}`)
        
    }



    //RETURN
    return {
        getAll,
        getByName,
        postPokemon,
        getByType,
        getById,
        editPokemon,
        deletePokemonFromId
    }

}())

export default pokemonService;