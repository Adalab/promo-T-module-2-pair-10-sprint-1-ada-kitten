"use strict";

const cat1 = {
  name: "anastacio",
  race: "Siamés",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  img: "https://dev.adalab.es/gato-siames.webp",
};

const cat2 = {
  name: "fiona",
  race: "Sphynx",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  img: "https://dev.adalab.es/sphynx-gato.webp",
};

const cat3 = {
  name: "cielo",
  race: "Maine Coon",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  img: "https://dev.adalab.es/maine-coon-cat.webp",
};
const kittenDataList = [cat1, cat2, cat3];
const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${cat1.img}
                alt="gatito"
              />
              <h3 class="card_title">${cat1.name.toUpperCase()}</h3>
              <h4 class="card_race">${cat1.race}</h4>
              <p class="card_description">
                ${cat1.desc}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src=${cat2.img}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${cat2.name.toUpperCase()}</h3>
            <h4 class="card_race">${cat2.race}</h4>
            <p class="card_description">
              ${cat2.desc}
            </p>
          </li>`;

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src=${cat3.img}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${cat3.name.toUpperCase()}</h3>
            <h4 class="card_race">${cat3.race}</h4>
            <p class="card_description">
              ${cat3.desc}
            </p>
          </li>`;

const catList = document.querySelector(".js-list");

catList.innerHTML = kittenOne + kittenTwo + kittenThree;

/*let html = '';
if (kittenRace1 === "")) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = race;
}*/

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const error = "¡Uy! parece que has olvidado algo";

const jserror = document.querySelector(".js__error");

const btnadd = document.querySelector(".js-btn-add");
btnadd.addEventListener("click", (event) => {
  event.preventDefault();
  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    jserror.innerHTML = error;
  } else {
    jserror.innerHTML = "";
  }
});

const btncancel = document.querySelector(".button-cancel");
btncancel.addEventListener("click", (event) => {
  event.preventDefault();
  const newform = document.querySelector(".new-form");
  newform.classList.add("collapsed");
});

const btnplus = document.querySelector(".fa-plus-circle");
const newform = document.querySelector(".new-form");

btnplus.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newform.classList.contains("collapsed")) {
    newform.classList.remove("collapsed");
  } else {
    newform.classList.add("collapsed");
  }
}

const input_search_descr = document.querySelector(".js_in_search_desc");
const input_search_race = document.querySelector(".js_in_search_race");

const filterKittenDesc = (event) => {
  event.preventDefault();
  const descSearchText = input_search_descr.value;
  catList.innerHTML = "";
  if (cat1.desc.includes(descSearchText)) {
    catList.innerHTML = kittenOne;
  }
  if (cat2.desc.includes(descSearchText)) {
    catList.innerHTML = kittenTwo;
  }
  if (cat3.desc.includes(descSearchText)) {
    catList.innerHTML = kittenThree;
  }
};

const filterKittenRace = (event) => {
  event.preventDefault();
  const raceSearchText = input_search_race.value;
  if (cat1.race.includes(raceSearchText)) {
    catList.innerHTML = kittenOne;
  }
  if (cat2.race.includes(raceSearchText)) {
    catList.innerHTML = kittenTwo;
  }
  if (cat3.race.includes(raceSearchText)) {
    catList.innerHTML = kittenThree;
  }
};

const buttonSearch = document.querySelector(".js-button-search");
buttonSearch.addEventListener("click", filterKittenDesc);
buttonSearch.addEventListener("click", filterKittenRace);
