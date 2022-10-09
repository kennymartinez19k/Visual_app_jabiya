const citiesDom = document.getElementById('cities')
const sectorsDom = document.getElementById('sectors')
let currentCity;
let currentSector;

const cities = [
    {
        id: 1,
        name: 'Districto Nacional'
    },
    {
        id: 2,
        name: 'Santo domingo Oeste'
    },
    {
        id: 3,
        name: 'Santo domingo Norte'
    },
    {
        id: 4,
        name: 'Santo domingo Este'
    }
]

let sectors = [
    {
        "id": 1,
        "name": "24 de abril",
        "cityId": 1
    },
    {
        "id": 2,
        "name": "30 de mayo",
        "cityId": 1
    },
    {
        "id": 3,
        "name": "Altos de Arroyo Hondo",
        "cityId": 1
    },
    {
        "id": 4,
        "name": "Arroyo Manzano",
        "cityId": 1
    },
    {
        "id": 5,
        "name": "Atala",
        "cityId": 1
    },
    {
        "id": 6,
        "name": "Bella Vista",
        "cityId": 1
    },
    {
        "id": 7,
        "name": "Buenos Aires",
        "cityId": 1
    },
    {
        "id": 8,
        "name": "El Cacique",
        "cityId": 1
    },
    {
        "id": 9,
        "name": "Centro de los Heroes",
        "cityId": 1
    },
    {
        "id": 10,
        "name": "Centro Olimpico",
        "cityId": 1
    },
    {
        "id": 11,
        "name": "Cerros de Arroyo Hondo",
        "cityId": 1
    },
    {
        "id": 12,
        "name": "Ciudad Colonial",
        "cityId": 1
    },
    {
        "id": 13,
        "name": "Ciudad Nueva",
        "cityId": 1
    },
    {
        "id": 14,
        "name": "Ciudad Universitaria",
        "cityId": 1
    },
    {
        "id": 15,
        "name": "Cristo Rey",
        "cityId": 1
    },
    {
        "id": 16,
        "name": "Domingo Savio",
        "cityId": 1
    },
    {
        "id": 17,
        "name": "El Millon",
        "cityId": 1
    },
    {
        "id": 18,
        "name": "Ensanche Capotillo",
        "cityId": 1
    },
    {
        "id": 19,
        "name": "Ensanche Espaillat",
        "cityId": 1
    },
    {
        "id": 20,
        "name": "Ensanche La Fe",
        "cityId": 1
    },
    {
        "id": 21,
        "name": "Ensanche Luperon",
        "cityId": 1
    },
    {
        "id": 22,
        "name": "Ensanche Naco",
        "cityId": 1
    },
    {
        "id": 23,
        "name": "Ensanche Quisqueya",
        "cityId": 1
    },
    {
        "id": 24,
        "name": "Gazcue",
        "cityId": 1
    },
    {
        "id": 25,
        "name": "General Anthonio Duverge",
        "cityId": 1
    },
    {
        "id": 26,
        "name": "Gualey",
        "cityId": 1
    },
    {
        "id": 27,
        "name": "Honduras del Norte",
        "cityId": 1
    },
    {
        "id": 28,
        "name": "Honduras del Oeste",
        "cityId": 1
    },
    {
        "id": 29,
        "name": "Jardin Botanico",
        "cityId": 1
    },
    {
        "id": 30,
        "name": "Jardin Zoologico",
        "cityId": 1
    },
    {
        "id": 31,
        "name": "Jardines del Sur",
        "cityId": 1
    },
    {
        "id": 32,
        "name": "Julieta Morales",
        "cityId": 1
    },
    {
        "id": 33,
        "name": "La Agustina",
        "cityId": 1
    },
    {
        "id": 34,
        "name": "La Castellana",
        "cityId": 1
    },
    {
        "id": 35,
        "name": "La Esperilla",
        "cityId": 1
    },
    {
        "id": 36,
        "name": "La Hondonada",
        "cityId": 1
    },
    {
        "id": 37,
        "name": "La Isabela",
        "cityId": 1
    },
    {
        "id": 38,
        "name": "La Julia",
        "cityId": 1
    },
    {
        "id": 39,
        "name": "Las Praderas",
        "cityId": 1
    },
    {
        "id": 40,
        "name": "La Zurza",
        "cityId": 1
    },
    {
        "id": 41,
        "name": "Los Cacicazcos",
        "cityId": 1
    },
    {
        "id": 42,
        "name": "Los Jardines",
        "cityId": 1
    },
    {
        "id": 43,
        "name": "Los Peralejos",
        "cityId": 1
    },
    {
        "id": 44,
        "name": "Los Prados",
        "cityId": 1
    },
    {
        "id": 45,
        "name": "Los Restauradores",
        "cityId": 1
    },
    {
        "id": 46,
        "name": "Los Rios",
        "cityId": 1
    },
    {
        "id": 47,
        "name": "Maria Auxiliadora",
        "cityId": 1
    },
    {
        "id": 48,
        "name": "Mata Hambre",
        "cityId": 1
    },
    {
        "id": 49,
        "name": "Mejoramiento Social",
        "cityId": 1
    },
    {
        "id": 50,
        "name": "Mirador Norte",
        "cityId": 1
    },
    {
        "id": 51,
        "name": "Mirador Sur",
        "cityId": 1
    },
    {
        "id": 52,
        "name": "Miraflores",
        "cityId": 1
    },
    {
        "id": 53,
        "name": "Miramar",
        "cityId": 1
    },
    {
        "id": 54,
        "name": "Nuestra Señora de la Paz",
        "cityId": 1
    },
    {
        "id": 55,
        "name": "Nuevo Arroyo Hondo",
        "cityId": 1
    },
    {
        "id": 56,
        "name": "Palma Real",
        "cityId": 1
    },
    {
        "id": 57,
        "name": "Paraiso",
        "cityId": 1
    },
    {
        "id": 58,
        "name": "Paseo de los Indios",
        "cityId": 1
    },
    {
        "id": 59,
        "name": "Piantini",
        "cityId": 1
    },
    {
        "id": 60,
        "name": "Los Proceres",
        "cityId": 1
    },
    {
        "id": 61,
        "name": "Renacimiento",
        "cityId": 1
    },
    {
        "id": 62,
        "name": "San Carlos",
        "cityId": 1
    },
    {
        "id": 63,
        "name": "San Diego",
        "cityId": 1
    },
    {
        "id": 64,
        "name": "San Geronimo",
        "cityId": 1
    },
    {
        "id": 65,
        "name": "San Juan Bosco",
        "cityId": 1
    },
    {
        "id": 66,
        "name": "Simon Bolivar",
        "cityId": 1
    },
    {
        "id": 67,
        "name": "Viejo Arroyo Hondo",
        "cityId": 1
    },
    {
        "id": 68,
        "name": "Villas Agricolas",
        "cityId": 1
    },
    {
        "id": 69,
        "name": "Villa Consuelo",
        "cityId": 1
    },
    {
        "id": 70,
        "name": "Villa Francisca",
        "cityId": 1
    },
    {
        "id": 71,
        "name": "Villa Juana",
        "cityId": 1
    },
    {
        "name": "espacio",
        "id": 72
    },
    {
        "id": 73,
        "name": "Bayona",
        "cityId": 2
    },
    {
        "id": 74,
        "name": "Buenos Aires",
        "cityId": 2
    },
    {
        "id": 75,
        "name": "El Abanico",
        "cityId": 2
    },
    {
        "id": 76,
        "name": "El Libertador",
        "cityId": 2
    },
    {
        "id": 77,
        "name": "Enriquillo",
        "cityId": 2
    },
    {
        "id": 78,
        "name": "Ensanche Altagracia",
        "cityId": 2
    },
    {
        "id": 79,
        "name": "Hato Nuevo",
        "cityId": 2
    },
    {
        "id": 80,
        "name": "Km. 12 Av. Independecia / Calle Isabel",
        "cityId": 2
    },
    {
        "id": 81,
        "name": "Km. 13 Carretera Sánchez / Av.Independencia",
        "cityId": 2
    },
    {
        "id": 82,
        "name": "Km 14",
        "cityId": 2
    },
    {
        "id": 83,
        "name": "La Venta",
        "cityId": 2
    },
    {
        "id": 84,
        "name": "Las Caobas",
        "cityId": 2
    },
    {
        "id": 85,
        "name": "Las Palmas",
        "cityId": 2
    },
    {
        "id": 86,
        "name": "Manoguayabo",
        "cityId": 2
    },
    {
        "id": 87,
        "name": "Santa Cruz",
        "cityId": 3
    },
    {
        "id": 88,
        "name": "Sabana Perdida",
        "cityId": 3
    },
    {
        "id": 89,
        "name": "Villa Mella",
        "cityId": 3
    },
    {
        "id": 90,
        "name": "Loma Del Caliche",
        "cityId": 3
    },
    {
        "id": 91,
        "name": "Marañon",
        "cityId": 3
    },
    {
        "id": 92,
        "name": "Lorencin",
        "cityId": 3
    },
    {
        "id": 93,
        "name": "Saleta",
        "cityId": 3
    },
    {
        "id": 94,
        "name": "La Bomba",
        "cityId": 3
    },
    {
        "id": 95,
        "name": "El Bonito",
        "cityId": 3
    },
    {
        "id": 96,
        "name": "Los Barrancones",
        "cityId": 3
    },
    {
        "id": 97,
        "name": "El Mamey",
        "cityId": 3
    },
    {
        "id": 98,
        "name": "Hatillo",
        "cityId": 3
    },
    {
        "id": 99,
        "name": "Guaricano",
        "cityId": 3
    },
    {
        "id": 100,
        "name": "Ponce",
        "cityId": 3
    },
    {
        "id": 101,
        "name": "La Rafaelita",
        "cityId": 3
    },
    {
        "id": 102,
        "name": "Mala Vuelta",
        "cityId": 3
    },
    {
        "id": 103,
        "name": "Alma Rosa",
        "cityId": 4
    },
    {
        "id": 104,
        "name": "Brisa Oriental",
        "cityId": 4
    },
    {
        "id": 105,
        "name": "Brisas del Este",
        "cityId": 4
    },
    {
        "id": 106,
        "name": "Cancino",
        "cityId": 4
    },
    {
        "id": 107,
        "name": "Cancino Fuera",
        "cityId": 4
    },
    {
        "id": 108,
        "name": "Ciudad del Almirante",
        "cityId": 4
    },
    {
        "id": 109,
        "name": "Ciudad Satelite",
        "cityId": 4
    },
    {
        "id": 110,
        "name": "Ensanche Ozama",
        "cityId": 4
    },
    {
        "id": 111,
        "name": "Francisco Alberto Peña Camaño",
        "cityId": 4
    },
    {
        "id": 112,
        "name": "Hainamosa",
        "cityId": 4
    },
    {
        "id": 113,
        "name": "Jose de Mendoza",
        "cityId": 4
    },
    {
        "id": 114,
        "name": "La Isabelita",
        "cityId": 4
    },
    {
        "id": 115,
        "name": "La Ureña",
        "cityId": 4
    },
    {
        "id": 116,
        "name": "Las Americas",
        "cityId": 4
    },
    {
        "id": 117,
        "name": "Los Frailes",
        "cityId": 4
    },
    {
        "id": 118,
        "name": "Los Mameyes",
        "cityId": 4
    },
    {
        "id": 119,
        "name": "Los Mina Norte",
        "cityId": 4
    },
    {
        "id": 120,
        "name": "Los Mina Sur",
        "cityId": 4
    },
    {
        "id": 121,
        "name": "Los Tres Ojos",
        "cityId": 4
    },
    {
        "id": 122,
        "name": "Los Trinitarios",
        "cityId": 4
    },
    {
        "id": 123,
        "name": "Mendoza",
        "cityId": 4
    },
    {
        "id": 124,
        "name": "Tamarindo",
        "cityId": 4
    },
    {
        "id": 125,
        "name": "Villa Duarte",
        "cityId": 4
    },
    {
        "id": 126,
        "name": "Villa Faro",
        "cityId": 4
    }
]

let headers = {method: 'POST'}

const btn_add = document.getElementById("btn_add");
const btn_get = document.getElementById("btn_get");
const citiesField = document.getElementById("citiesField")


window.onload = function(){
    document.onclick = function(e){
        console.log(e.target.id)
      if(e.target.id !== 'citiesField'){
        citiesDom.style.display = 'none';
      }
      if(e.target.id !== 'sectorField'){
        sectorsDom.style.display = 'none';
      }
    };
};


function init(){
}

function showCities(value = null){
    citiesDom.style.display = 'block'

    if(value) citiesToshow = value
    else citiesToshow = cities
    citiesDom.innerHTML = '' 
    
    for (let i = 0; i < citiesToshow.length; i++) {
        const city = citiesToshow[i];
        let text  = ` <option class="opt" onclick="setCity(${city.id})">${city.name}</option>`
        citiesDom.insertAdjacentHTML( 'beforeend', text );
    }
}


function showSectors(){
    let sectorsDom = document.getElementById('sectors')
    sectorsDom.style.display = 'block'
    sectorsDom.innerHTML = '' 
    let sectorsToShow = sectors.filter(sector => sector?.cityId == currentCity?.id)
    for (let i = 0; i < sectorsToShow.length; i++) {
        const sector = sectorsToShow[i];
        let text  = `<li class="opt" onclick="setSector(${sector.id})">${sector.name}</li>`
        sectorsDom.insertAdjacentHTML( 'beforeend', text );
    }
}

function setCity(id){
    currentSector = null
    document.getElementById("sectorField").value = null;

    currentCity = cities.find(x => x.id == id)
    document.getElementById("citiesField").value = currentCity.name;
}

function setSector(id){
    currentSector = sectors.find(x => x.id == id)
    document.getElementById("sectorField").value = currentSector.name;
}


function CreateUser(){   
    var loader = document.getElementById("loader");
    var success = document.getElementById("success");
    
    let nameOfClient = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let sector = document.getElementById('sectorField').value
    let store = document.getElementById('store').value
    let city = document.getElementById('citiesField').value
    currentCity = null
    currentSector = null

    
    if(nameOfClient && phone && sector && store && city){
        loader.style.display = "flex";
        
            
          let url = "https://wbqn8dzqcf.execute-api.us-east-1.amazonaws.com/user"
          let json = { "clientName": nameOfClient, "phone": phone, "salesperson": store, "sector": sector, "municipality": city }

          console.log(json)
          fetch(url, {
            method: "POST",
            body: JSON.stringify(json),
            headers: {"Content-type": "application/json; charset=UTF-8", "withCredentials": true}
            })
            .then(response => response.json()) 
            .then(json => {
                loader.style.display = "none";
                success.style.display = "block"


                document.getElementById('name').value = null
                document.getElementById('phone').value = null
                document.getElementById('sectorField').value = null
                document.getElementById('store').value = null
                document.getElementById('citiesField').value = null

                setTimeout(() => {
                    success.style.display = "none"
                }, 4000)

                console.log(json)
            } );
    }else{
        alert("Debe llenar todos los campos")
    }
}

function getUser(){
    let user = document.getElementById('user').value

    fetch('https://wbqn8dzqcf.execute-api.us-east-1.amazonaws.com/user')
        .then(response => response.json()) 
        .then(json => console.log(json));
}

function getCities () {
    var x = document.getElementById("citiesField").value;
    let cityAvailable = cities.filter(city =>  city.name.toLowerCase().includes(x.toLowerCase()))

    if(cityAvailable.length > 0){
        citiesDom.style.display = 'block'
        showCities(cityAvailable)
    }else{
        citiesDom.style.display = 'none'   
    }
}

function getSectors(){
    var x = document.getElementById("sectorsField").value;
    let sectorsAvailable = sectors.filter(sector =>  sector.name.toLowerCase().includes(x.toLowerCase()))

    if(sectorsAvailable.length > 0){
        sectorsDom.style.display = 'block'
        showSectors(sectorsAvailable)
    }else{
        sectorsDom.style.display = 'none'   
    }
}

function navigate(name){
    window.location.href = name
}

init()