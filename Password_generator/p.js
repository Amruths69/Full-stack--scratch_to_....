let c1 = [
    // Small alphabets
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    // Capital alphabets
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    // Numbers
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    // Safe, universally supported special characters
    "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "-", "_", "+", "=",
    ".", "/", "?"
];
let c=""
let c2=""
function rp(){
    c=""
    for(let i=0;i<12;i++){
        let f=Math.floor(Math.random()*c1.length)
        c+=c1[f]
    }
    document.getElementById("btn2").textContent=c
    c2=""
    for(let i=0;i<12;i++){
        let f=Math.floor(Math.random()*c1.length)
        c2+=c1[f]
    }
    document.getElementById("btn3").textContent=c2
}
function cp(btn){
    const t=btn.textContent
    if(t=="")return

    navigator.clipboard.writeText(t)
    .then(()=>{
        const s=document.getElementById("s")
        s.textContent="Copied"
        setTimeout(()=>{
            s.textContent=""
        },1000)
    })
    .catch(()=>{
        document.getElementById("s").textContent="Error"
    })
}




//From here on the code is Designed done by AI
const bg = document.createElement("div");
bg.id = "floating-bg";
bg.setAttribute("aria-hidden", "true");

document.body.prepend(bg);

const totalChars = 45;

for (let i = 0; i < totalChars; i++) {

    const char = document.createElement("span");

    char.className = "floating-char";

    // Pick a random character from your existing array
    char.textContent = c1[
        Math.floor(Math.random() * c1.length)
    ];

    // Random horizontal position
    char.style.left = Math.random() * 100 + "%";

    // Random character size: 14px to 32px
    char.style.fontSize =
        (14 + Math.random() * 18) + "px";

    // Random floating speed: 9 to 22 seconds
    char.style.animationDuration =
        (9 + Math.random() * 13) + "s";

    // Different starting times
    char.style.animationDelay =
        (-Math.random() * 22) + "s";

    bg.appendChild(char);
}