let btn = document.getElementById("btn")
let item = document.getElementsByClassName("item")
let color = "white"
let divs = document.getElementsByTagName("div")
let query = document.querySelector(".query")
let queryall = document.querySelectorAll(".query")
btn.style.fontSize = "18px"
document.getElementById('strong').style.fontStyle = 'italic'
let myself = document.getElementById("Myself")
myself.style.border = "2px solid blue"
myself.style.backgroundColor = 'cyan'
myself.style.textAlign = 'center'
document.getElementById("asus").style.color = "turqoise"
console.dir(btn)

btn.addEventListener("click",()=>{
    if(color === "white"){
        setTimeout(()=>{
            document.body.style.backgroundColor = "black"
            btn.style.fontSize = "18px"
            for(let i = 0;i<item.length;i++){
                item[i].style.fontSize = "18px"
                if(i===2){
                    item[i].style.color = "white"
                }
            }
            for(let j = 0;j<queryall.length;j++){
                queryall[j].style.color = "blue"
            }
        },2000)
        setTimeout(()=>{
            document.body.style.backgroundColor = "red"
            btn.style.fontSize = "25px"
            for(let i = 0;i<item.length;i++){
                item[i].style.fontSize = "25px"
                item[i].style.border = "solid 1px white"
                item[i].style.color = "white"
                if(i===2){
                    item[i].style.color = "blue"
                }
            }
            query.style.fontstyle = "italic"
            query.style.color = "white"
        },1000)
        color = "black"
    }else{
        setTimeout(()=>{
            document.body.style.backgroundColor = "red"
            btn.style.fontSize = "25px"
            for(let i = 0;i<item.length;i++){
                item[i].style.fontSize = "25px"
                item[i].style.border = "solid 1px black"
                item[i].style.color = "black"
                if(i===2){
                    item[i].style.color = "blue"
                }
            }
            query.style.fontstyle = "times new roman"
            query.style.color = "black"
        },1000)
        setTimeout(()=>{
            document.body.style.backgroundColor = "white"
            btn.style.fontSize = "18px"
            for(let i = 0;i<item.length;i++){
                item[i].style.fontSize = "18px"
                if(i===2){
                    item[i].style.color = "black"
                }
            }
            for(let j = 0;j<queryall.length;j++){
                queryall[j].style.color = "black"
            }
        },2000)
        color = "white"
    }
})