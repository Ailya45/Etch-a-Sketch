const container = document.getElementById("container");

const button = document.getElementById("button");
const button2 = document.getElementById("button2");

button.addEventListener("click", () => {
    const size = prompt("Ingrese el tamaño de la cuadrícula");
    if (size < 1 || size > 100) {
        alert("Por favor, ingrese un número entre 1 y 100");
        return;
    }
    let quad = 100 / size;

    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.style.width = `${quad}%`;
            div.style.height = `${quad}%`;
            container.appendChild(div);
        }
    }
})

container.classList.add("grid")
container.addEventListener("mouseover", (e) => {
    if (e.target.id === "container") return;

    if (!e.target.dataset.opacity) {
        const color = Math.floor(Math.random() * 256);
        const color2 = Math.floor(Math.random() * 256);
        const color3 = Math.floor(Math.random() * 256);
        const alpha = 0.1;
        e.target.dataset.r = color;
        e.target.dataset.g = color2;
        e.target.dataset.b = color3;
        e.target.dataset.opacity = alpha;
    } else {
        let r = parseInt(e.target.dataset.r) * 0.9;
        let g = parseInt(e.target.dataset.g) * 0.9;
        let b = parseInt(e.target.dataset.b) * 0.9;
        let opacity = parseFloat(e.target.dataset.opacity);
        let newOpacity = opacity + 0.1;
        newOpacity = Math.min(newOpacity, 1);
        e.target.dataset.r = r;
        e.target.dataset.g = g;
        e.target.dataset.b = b;
        e.target.dataset.opacity = newOpacity;
    }
    e.target.style.backgroundColor = `rgba(${e.target.dataset.r}, ${e.target.dataset.g}, ${e.target.dataset.b}, ${e.target.dataset.opacity})`;
})

button2.addEventListener("click", () => {
    container.innerHTML = "";
})
