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
getData()