async function getData() {
    let response = await fetch ('https://swapi.co/api/people')

    let responseBody = await response.json()
    
    console.log(responseBody)
    
    return responseBody.results
}

async function render() {

    let list = await getData()

    let ul = document.querySelector("ul")
    let itemPrototype = document.querySelector(".prototype")

    for(let item of list) {

        let newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove("prototype")
        newItem.classList.add("para")
        
        
        
        newItem.addEventListener("click", function() {
            let p1 = newItem.querySelector(".height")
            p1.innerText = item.height
        })
        
        let p = newItem.querySelector(".name")
        p.innerText = item.name
        ul.append(newItem)
    }
}

render()