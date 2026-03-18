const menu = document.getElementById("menu");
const menuDiv = document.getElementById("menuDiv")
const add = document.getElementById("add");
const saved = document.getElementById("saved");
const form = document.getElementById("form")
let input = document.getElementById("input")
const div = document.getElementById("list")
const body = document.getElementById("body")
const save = document.getElementById("save")
const select = document.getElementById("select")
const imgDivContainer = document.getElementById("imgContainer");
let result  = "";
let isOpen = false;
let isSee = true;
menu.addEventListener("click",()=>{
    form.style.opacity="0";
    form.style.marginTop="-100px"
    div.style.transition="1.3s";
    div.style.display="none"
    if(isOpen === false){
        menuDiv.style.marginTop="5px";
        menuDiv.style.position="fixed"
        menuDiv.style.transition="1.3s"
        menu.textContent ="Close";
        menuDiv.style.opacity="1"
        isOpen = true
    }
    else{
        menuDiv.style.marginTop="-250px";
        menu.textContent ="Menu"
        menuDiv.style.opacity="0";
        imgDivContainer.style.display="block"
        isOpen = false;
    }

});
add.addEventListener("click",()=>{
    form.style.marginTop="65px";
    imgDivContainer.style.display="none"
    form.style.opacity="1"
    isSee = true;
    if(isSee == true){
        div.style.opacity="0";
        div.style.marginLeft="0";
    }
})
save.addEventListener("click",()=>{
    if(input.value == ""){
        result += ""
    }
    else{
        result += input.value;
    }
    input.value =""
});
saved.addEventListener("click",()=>{
    form.style.opacity="0";
    form.style.marginTop="-100px"
    if(result!= ""){
        let p = document.createElement("p")
    p.textContent="Work:"+result;
    let nextp = document.createElement("p")
    nextp.textContent="Should Do:"+select.value;
    nextp.style.fontSize="25px";
    div.style.display="block"
    div.append(p,nextp)
    div.style.transition="1.3s";
    p.style.paddingTop="20px"
    div.style.marginLeft="43%";
    nextp.style.paddingBottom="20px"
    div.style.marginTop="65px"
    nextp.style.borderBottom="1.5px solid "
    nextp.style.width="300px"
    p.style.fontSize="25px"
    div.style.opacity="1"
    input.value =""
    }
    else{
        imgDivContainer.style.display="block"
    }
})