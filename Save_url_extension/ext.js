const f = document.getElementById("ib");
const input = document.getElementById("i");
const ul = document.getElementById("g");

let arr = [];

f.addEventListener("click", function () {
    const link = input.value.trim();

    if (link === "") {
        return;
    }

    // Save the link in the array
    arr.push(link);

    // Create a list item
    const li = document.createElement("li");

    // Create a clickable link
    const a = document.createElement("a");
    a.textContent = link;

    // Set the destination URL
    a.href = link.startsWith("http://") || link.startsWith("https://")
        ? link
        : "https://" + link;

    // Open the link in a new tab
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    // Put the link inside the list item
    li.appendChild(a);

    // Add the list item to the webpage
    ul.appendChild(li);

    // Clear the input box
    input.value = "";
});



//bot, generated code for randomly floating link symbol!

const bg = document.getElementById("floating-bg");

for (let i = 0; i < 12; i++) {
    const symbol = document.createElement("img");

    // Use your transparent chain symbol
   symbol.src = "https://api.iconify.design/lucide/link-2.svg?color=%23ffffff";
    symbol.className = "chain";
    symbol.alt = "";

    // Random position
    symbol.style.left = Math.random() * 90 + "%";
    symbol.style.top = Math.random() * 90 + "%";

    // Random size
    const size = 20 + Math.random() * 30;
    symbol.style.width = size + "px";
    symbol.style.height = size + "px";

    // Different animation speeds
    symbol.style.animationDuration =
        (5 + Math.random() * 8) + "s"

    // Start at different animation stages
    symbol.style.animationDelay =
        (-Math.random() * 10) + "s";

    bg.appendChild(symbol);
}
