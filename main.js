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
let realizarCalculo = document.getElementById("hacer-cal");
realizarCalculo.addEventListener("click", () => {
    let edadAc = document.getElementById("edad-Actual").value;
    let edadActual = parseInt(edadAc);
    console.log(edadActual);
    console.log(typeof edadActual);
    let edadReti = document.getElementById("edad-Retiro").value;
    let edadRetiro = parseInt(edadReti);
    console.log(edadRetiro);
    let pensionDese = document.getElementById("pension-Deseada").value;
    let pensionDeseada = parseInt(pensionDese);
    console.log(pensionDeseada);
    let ahorro = document.getElementById("ahorro").value;
    let loQueSeAhorro = parseInt(ahorro);
    console.log(loQueSeAhorro);
    let aParaPension = edadRetiro - edadActual;
    console.log(aParaPension);
    let mesesPensionada = aParaPension*12;
    console.log(mesesPensionada);
    let ahorroNecesario = mesesPensionada*pensionDeseada;
    console.log(ahorroNecesario);
    let montoAahorra = ahorroNecesario - loQueSeAhorro;
    console.log(montoAahorra);
    let aParaAhorrar = 65 - edadActual;
    console.log(aParaAhorrar);
    let mesesPorAhorrar = aParaAhorrar*12;
    console.log(mesesPorAhorrar);
    let montoMensualAahorrar = montoAahorra/mesesPorAhorrar;
    console.log(montoMensualAahorrar);
    let montoMensu = montoMensualAahorrar.toFixed(2);
    let montoM = montoMensu.toString()
    console.log(montoM);
    let root = document.getElementById("root");
    root.innerHTML = montoM;
    
}) 
