let tabla = document.getElementById("tabla");
tabla.addEventListener("click", () => {
    console.log("tabla");
   let finanzas = document.getElementById("finanzasperso");
   finanzas.style.display = "block";
   let inicio = document.getElementById("first-section");
   inicio.style.display = "none";
   let secSection = document.getElementById("second-section");
   secSection.style.display = "none";
   let secSue = document.getElementById("four-section");
   secSue.style.display = "none";
})
let suenos = document.getElementById("sue");
suenos.addEventListener("click", () => {
    console.log("suenos");
    let finanzas = document.getElementById("finanzasperso");
   finanzas.style.display = "none";
   let inicio = document.getElementById("first-section");
   inicio.style.display = "none";
   let secSection = document.getElementById("second-section");
   secSection.style.display = "block";
   let secSue = document.getElementById("four-section");
   secSue.style.display = "none";
})
let retiro = document.getElementById("btn-retirement");
retiro.addEventListener("click", () => {
    console.log("retiro");
    let finanzas = document.getElementById("finanzasperso");
   finanzas.style.display = "none";
   let inicio = document.getElementById("first-section");
   inicio.style.display = "none";
   let secSection = document.getElementById("second-section");
   secSection.style.display = "none";
   let secSue = document.getElementById("four-section");
   secSue.style.display = "block";
})
