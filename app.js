//generador de paleta de colores

const paletaContainer = document.getElementById('paletacontainer');
const btnGenerarPaleta = document.getElementById('updatePallete');
const colorValidos = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const paleteSize=5;

const  crearPaleta = ()=>{
  for (let i = 0; i < paleteSize; i++) {
    const paletaElemento=document.createElement('div');
    paletaElemento.classList.add('paletaItem');
    paletaContainer.appendChild(paletaElemento);
  }
  updatePallete();
}
const colorize = (element)=>{
  let color ="#";
  for (let i = 0; i < 6; i++) {
    const randomElement = colorValidos[Math.floor(Math.random()*colorValidos.length)];
    color+=randomElement;
  }
  element.style.backgroundColor=color;
    element.innerHTML=`<span class="colorHex">${color}</span>`;
}
const updatePallete=()=>{
  for (let i = 0; i < paletaContainer.children.length; i++) {
    colorize(paletaContainer.children[i]);
    
  }
}
crearPaleta();
btnGenerarPaleta.addEventListener('click', updatePallete)
