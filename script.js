const textBox = document.getElementById("textBox")
const listContainer = document.getElementById("list-container")


function capitalize(str){
    return str.charAt(0).toUpperCase + str.slice(1).toLowerCase
}

function add(){
    const inputValue = textBox.value.trim()
    if(inputValue === ''){
        window.alert('iltimos')
    }else{
        inputValue.charAt()
        let item = document.createElement("li")
        item.textContent = inputValue
        listContainer.appendChild(item)
        let span = document.createElement("span")
        span.textContent = '\u00d7'
        item.appendChild(span)

        textBox.value = ''

        item.addEventListener("click", () => {
            item.classList.toggle("checked")
            
        })
        span.addEventListener("click", () => {
            item.remove()
        }) 
    }
}



