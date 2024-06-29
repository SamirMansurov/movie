// import { Item } from "../components/item.js";

// import { reload } from "./utils.js";
import { movies } from "./db.js";

const ul = document.querySelector('.promo__interactive-list');
const movieTitle = document.querySelector('.promo_title');
const movieGenre = document.querySelector('.promo__genre');
const moviePlot = document.querySelector('.promo__descr');
const moviePoster = document.querySelector('.promo__bg');

 function Item(item) {
    const li = document.createElement('li')
    const del = document.createElement('div')

    li.innerHTML = item.Title
    del.classList.add('delete')

    li.classList.add('promo__interactive-item')
    li.append(del)

   li.onclick = () => {
    movieTitle.innerHTML = item.Title
    movieGenre.innerHTML = item.Genre
    moviePlot.innerHTML = item.Plot

    moviePoster.src = item.Poster

   }
    
    return li
}

 function reload(data, place, component) {
    place.innerHTML = ""

    for(let item of data) {
        const div = component(item)

        place.append(div)
    }
}

reload(movies, ul, Item);









