const menu = document.getElementById("menu");
const menuDiv = document.getElementById("menuDiv")
const add = document.getElementById("add");
const saved = document.getElementById("saved");
const form = document.getElementById("form")
let input = document.getElementById("input")
const div = document.getElementById("list")
const body = document.getElementById("body")
const save = document.getElementById("save")
let result  = "";
let isOpen = false;
let isSee = true;
menu.addEventListener("click",()=>{
    if(isOpen === false){
        menuDiv.style.marginTop="5px";
        menuDiv.style.transition="1.3s"
        menu.textContent ="Close"
        isOpen = true
    }
    else{
        menuDiv.style.marginTop="-200px";
        menu.textContent ="Menu"
        isOpen = false;
    }

});
add.addEventListener("click",()=>{
    form.style.opacity="1";
    div.style.opacity="0"
})
save.addEventListener("click",()=>{
    result += input.value;
    input.value =""
});
saved.addEventListener("click",()=>{
    form.style.opacity="0"
    if(isSee === true){
        if(input.value != ""){
            let h1 = document.createElement("h1")
            h1.textContent=result;
            div.append(h1)
        }
        else{
            div.append("")
        }
    }
    div.style.opacity="1"
})
