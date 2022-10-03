const textareaEl = document.getElementById("textarea")
const totalcounterEl = document.getElementById("total-counter")
const remainingcounterEL = document.getElementById("remaining-counter")


textareaEl.addEventListener('keyup',()=>{
    updateCounter()
})
updateCounter()

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length
    remainingcounterEL.innerText = textareaEl.getAttribute("maxlength") 
    - textareaEl.value.length
} 