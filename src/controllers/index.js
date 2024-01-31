
let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://rickandmortyapi.com/api/character"
    fetch(url).then(
        response => response.json()
    ).then (
        data => {
            console.log(data)
        }
    )
})