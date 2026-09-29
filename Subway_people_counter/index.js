let c=0
let cc=document.getElementById("c")
let ss=document.getElementById("p")
function i(){
    c++
    cc.innerText=c
}
function s(){
    let g=c+" - "
    ss.textContent+=g;
    console.log(c)
}
function sx(){
    c=0
    cc.innerText=c
    ss.textcontent="0- "

}