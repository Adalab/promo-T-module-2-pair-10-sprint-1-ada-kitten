"use strict";

const catName1 = "anastacio";
const catRace1 = "Siamés";
const catDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const catImg1 = "https://dev.adalab.es/gato-siames.webp";

const catName2 = "fiona";
const catRace2 = "Sphynx";
const catDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const catImg2 = "https://dev.adalab.es/sphynx-gato.webp";

const catName3 = "cielo";
const catRace3 = "Maine Coon";
const catDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const catImg3 = "https://dev.adalab.es/maine-coon-cat.webp";



const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${catImg1}
                alt="gatito"
              />
              <h3 class="card_title">${catName1.toUpperCase()}</h3>
              <h4 class="card_race">${catRace1}</h4>
              <p class="card_description">
                ${catDesc1}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src=${catImg2}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${catName2.toUpperCase()}</h3>
            <h4 class="card_race">${catRace2}</h4>
            <p class="card_description">
              ${catDesc2}
            </p>
          </li>`;

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src=${catImg3}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${catName3.toUpperCase()}</h3>
            <h4 class="card_race">${catRace3}</h4>
            <p class="card_description">
              ${catDesc3}
            </p>
          </li>`;

const catList = document.querySelector('.js-list');

/*catList.innerHTML = kittenOne + kittenTwo + kittenThree;*/

const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

if (catDesc1.includes(descrSearchText)) {
  catList.innerHTML = kittenOne;
} else if (catDesc2.includes(descrSearchText)) {
  catList.innerHTML = kittenTwo;
} else if (catDesc3.includes(descrSearchText)) {
  catList.innerHTML = kittenThree;
} else {
  catList.innerHTML = "";
}


const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
/*const labelMessageError = document.querySelector('.js-label-error');*/


const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const error = '¡Uy! parece que has olvidado algo';

const jserror = document.querySelector(".js__error");
  

const btnadd =document.querySelector(".js-btn-add")
btnadd.addEventListener('click', (event) => {
event.preventDefault();
if (valueDesc === '' || valuePhoto === '' || valueName === '') {

jserror.innerHTML= error;
} 
else {
  
 jserror.innerHTML= "";
}

});
