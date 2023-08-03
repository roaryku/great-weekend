let text = "Have a great weekend!!!";
let i = 0;
let speed = 150;

function type() {
    if(i < text.length) {
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed)
    }
}
type();
