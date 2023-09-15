
/******************************************************
 * la gestion d'affichage des differentes taches summit
 * 
 */
function ajout(){
    //la creactions des variables qui affiche le to do
    let blockResult = document.createElement("div")
    let btnDelete = document.createElement("button")
    let labelResult = document.createElement("label")
    let checkbox = document.createElement("input")
    
    //ajout des class et des attribis dans les variables
    blockResult.classList.add("form__blockResultat")
    btnDelete.classList.add("btn","btn__delete","h-25")
    labelResult.classList.add("form__blockResultat-resultat","p-2","mb-2","me-2","ms-2","mt-2","w-100")
    checkbox.setAttribute("type","checkbox")

    btnDelete.innerHTML = "Delete"
    labelResult.innerHTML = inputSaisie.value

    //l'imbrucations des variables crées
    blockResult.append(btnDelete)
    blockResult.append(labelResult)
    blockResult.append(checkbox)
    container_result.append(blockResult)

    btnDelete.addEventListener("click",(e)=>{
        e.preventDefault()
        inputSaisie.focus()
        
        return blockResult.remove()
        
        
    })
    
    
    
}

/********************************
 * la gestion d'execution de l'app
 * 
 */
function addTodo(){

    inputSaisie.focus()
    button.addEventListener("click",()=>{
        if(inputSaisie.value.length){
            inputSaisie.focus()
            inputSaisie.removeAttribute("placeholder")
            inputSaisie.classList.remove("messageAlert")
            ajout()
            
        } else{
            
            inputSaisie.setAttribute("placeholder","veillez ecrire quelque chose")
            inputSaisie.classList.add("messageAlert")
            console.log("desole")
        }
        
        
        inputSaisie.value = ""
    })
    
}

addTodo()