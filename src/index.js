let breeds =[]

function getBreeds(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch (imgUrl)
    .then (resp=>resp.json())
    .then (resp => {
        const dogImage= document.getElementById("dog-image-container")
        resp.message.forEach (url => {
            const img = document.createElement("img")
            img.src = url
            dogImage.append(img)
        })
    })
}
function dogBreedNames (){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then (resp=>resp.json())
    .then (resp => {
        breeds = Object.keys (resp.message) //puts the keys in an array that we can iterate over (for...of)
        addBreedNamesDom (breeds)
    })
    
}

function addBreedNamesDom(breeds) {
    const ul= document.querySelector ("#dog-breeds")
    breeds.map (breed => {
        const li = document.createElement ("li")
        li.textContent = breed
        ul.append(li)
    })
}

document.addEventListener("click", e => {
    if (e.target.matches("li")) {
        e.target.style.color = "orange"
    }
})

document.addEventListener ("change", event => {
    if (event.target.matches("#breed-dropdown")){
        const ul= document.querySelector ("#dog-breeds")
        ul.innerHTML = ""
        const filteredBreeds =breeds.filter (breed => breed[0]=== event.target.value)
        addBreedNamesDom (filteredBreeds)
    }
})

getBreeds ()
dogBreedNames()

