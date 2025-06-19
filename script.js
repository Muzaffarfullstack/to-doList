const textBox = document.getElementById("textBox")
const listContainer = document.getElementById("list-container")



function add(){
    const inputValue = textBox.value.trim()
    if(inputValue === ''){
        window.alert('iltimos')
    }else{
        const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        let item = document.createElement("li")
        item.textContent = capitalizedValue
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



