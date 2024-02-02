import { listCharacter } from "./dependencies.js"
import { Character } from "../models/Character.js"
import { Origin } from "../models/Origin.js"

let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://rickandmortyapi.com/api/character"
    fetch(url).then(
        response => response.json()
    ).then (
        data => {
            listCharacter.setPage(1)
            data.results.forEach(element => {
                let character = new Character()
                character.setId(element.id)
                character.setName(element.name)
                character.setStatus(element.status)
                character.setImage(element.image)
                let origin = new Origin(element.origin.name, element.origin.url)
                character.setOrigin(origin)
                element.episode.forEach(item => {
                    character.getEpisode().push(item)
                })
                console.log(character)
                listCharacter.addCharacter(character)   
            });

        }
    )
})


const btnView = document.getElementById("btn-view")
btnView.addEventListener("click", ()=>{
    const ul = document.getElementById("ul-char")
    console.log(listCharacter.getCharacters())
    listCharacter.getCharacters().forEach(item => {
        let char = document.createElement("li")
        char.innerText = item.getName()
        ul.appendChild(char)
    })
})