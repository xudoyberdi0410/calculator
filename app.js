function switchStyle(){
    let checkbox = document.getElementById("switcher")
    let link_style = document.getElementsByClassName("ui")[0]
    if (!checkbox.checked){
        link_style.href = "./css/ui-dark.css"
    }
    else{
        link_style.href = "./css/ui-light.css"
    }
}
let full_example = document.getElementById("full")
let answer = document.getElementById("value")
let act = false
document.querySelector('.btns').onclick = (event) => {
    if (event.target.className === 'btn num' || event.target.className === 'btn zero num') {
        full_example.innerHTML += `<span class="num">${event.target.textContent}</span>`
        act = true
    }
    else if ((event.target.className === 'btn div-min' || event.target.className === 'btn plus-equal' || event.target.className === 'btn div-min star' || event.target.className === 'btn dot') && act){
        full_example.innerHTML += `<span class="sign">${event.target.textContent}</span>`
        act = false
    }
    else if (event.target.className === 'btn plus-equal equal') answer.value = `=${eval(full_example.textContent).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    else if (event.target.className === 'btn ac'){
        answer.value = '=0'
        full_example.innerHTML = ''
    } 
    else if (event.target.className === 'btn bs' || event.target.parentNode.className === 'btn bs'){
        full_example.removeChild(full_example.lastElementChild) 
    }
    
}
console.log(Math.E)