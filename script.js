
//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textoEncriptar = document.querySelector(".textoEncriptar");
const mensaje = document.querySelector(".mensaje");
let llaves = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], "u", "ufat"];

function botonEncriptador()
{
  const textoaEncriptar = encriptador(textoEncriptar.value);
  mensaje.value = textoaEncriptar;
  document.getElementById("muñeco").style.display = "none";
}

function botonDesencriptador()
{
  const textoEncriptado = desencriptador(textoEncriptar.value);
  mensaje.value = textoEncriptado;
  document.getElementById("muñeco").style.display = "none";
}

function copiar()
{
  const contenido = document.getElementById("texto_encriptado");
  navigator.clipboard.writeText(contenido.value);
}

function encriptador(frase) 
{
  frase = frase.toLowerCase();

  for(let i = 0; i < llaves.length; i++)
  {
    if(frase.includes(llaves[i][0]))
    {
      frase = frase.replaceAll(llaves[i][0], llaves[i][1]);
    }
    else break
  }
  return frase
}

function desencriptador(frase)
{
  frase = frase.toLowerCase();

  for(let i = 0; i < llaves.length; i++)
  {
    if(frase.includes(llaves[i][1]))
    {
      frase = frase.replaceAll(llaves[i][1], llaves[i][0]);
    }
    else break
  }
  return frase
}