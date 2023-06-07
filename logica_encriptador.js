const textArea = document.getElementById("caja");
const mensaje = document.getElementById("mensaje-caja");

function botonEncriptar (){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value =  textoEncriptado;
    mensaje.style.backgroundImage = "none";
    /*textArea.value = "";*/
}

function botonDesencriptar (){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
}

const content = document.getElementById("mensaje-caja");
btn = document.getElementById("copiar");

btn.addEventListener("click", e => {
    content.select();
    document.execCommand("copy");
});

function encriptar (stringEncriptada){
    let codi = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let posision = 0; posision < codi.length; posision++){
        if(stringEncriptada.includes(codi[posision][0])){
            stringEncriptada = stringEncriptada.replaceAll(codi[posision][0], codi[posision][1])

        }
    }
    return stringEncriptada;
}

function desencriptar (desencriptarTexto){
    let Dcodi = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    desencriptarTexto = desencriptarTexto;
    for (let lugar = 0; lugar < Dcodi.length; lugar++){
        if (desencriptarTexto.includes(Dcodi[lugar][0])){
            desencriptarTexto = desencriptarTexto.replaceAll(Dcodi[lugar][0], Dcodi[lugar][1])
        }
    }
    return desencriptarTexto;
}





