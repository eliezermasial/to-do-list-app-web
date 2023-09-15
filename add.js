

function ajout(){
    let blockResult = document.createElement("div")
    let labelResult = document.createElement("label")
    let checkbox = document.createElement("input")
    
    blockResult.classList.add("form__blockResultat")
    labelResult.classList.add("form__blockResultat-resultat","p-2","me-2","mt-2","w-100")
    checkbox.setAttribute("type","checkbox")

    labelResult.innerHTML = inputSaisie.value

    blockResult.append(labelResult)
    blockResult.append(checkbox)
    container_result.append(blockResult)


    console.log(checkbox)
    
    
}

//c'est fonction ajoute un to do dans le tableau todolist
function addTodo(){

    inputSaisie.focus()
    button.addEventListener("click",()=>{
        if(inputSaisie.value.length){
            console.log(inputSaisie.value)
            console.log(formResult)
            ajout()
            
        } else{
            console.log("desole")
        }
        inputSaisie.focus()
        inputSaisie.value = ""
    })
    
}

addTodo()