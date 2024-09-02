async function getData() {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const images = await result.json();
    console.log(images)
    images.results.forEach(element => {
        if(element.id <= 1){
            const card = document.createRange().createContextualFragment(`
                             
                    <img class="image" src="${element.image}" alt="">
                  
                `)

                const pers_miss_row_img_1 = document.querySelector('.pers-miss-row-img-1')
                pers_miss_row_img_1.append(card)
        } if(element.id == 2){
            const card = document.createRange().createContextualFragment(`
                             
                    <img class="image" src="${element.image}" alt="">
                  
                `)

                const pers_miss_row_img_2 = document.querySelector('.pers-miss-row-img-2')
                pers_miss_row_img_2.append(card)
        } if(element.id == 3){
            const card = document.createRange().createContextualFragment(`
                             
                    <img class="image" src="${element.image}" alt="">
                  
                `)

                const future_img = document.querySelector('.future-img')
                future_img.append(card)
        }
    });
}

const btn_valida = document.getElementById('btn-valida')
const valida = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const email_valido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    let arr = [];
    const arrMensajes = ["nombre", "email", "mensaje"]
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < arrMensajes.length; i++){
            if(arr[i].value == ""){
                alert(`El campo ${arrMensajes[i]} no puede estar vacío`)
                return false;
            }
        }
        if(!email_valido(email.value)){
            alert(`El campo ${arrMensajes[1]} no tiene el formato correcto`)
            return false;
        }
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
        alert("Los datos fueron enviados al ''servidor''")
        return true;
    }
}

getData()
btn_valida.addEventListener("click", valida)