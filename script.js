const citiesDom = document.getElementById('cities')
const sectorsDom = document.getElementById('sectors')
const provincesDom = document.getElementById('provinces')

let currentCity;
let currentSector;
let currentProvince

let provinces = [
    {
        "id": 1,
        "name": "Gran Santo Domingo"
    },
    {
        "id": 2,
        "name": "Azua"
    },
    {
        "id": 3,
        "name": "Bahoruco"
    },
    {
        "id": 4,
        "name": "Barahona"
    },
    {
        "id": 5,
        "name": "Dajabon"
    },
    {
        "id": 6,
        "name": "El Seybo"
    },
    {
        "id": 7,
        "name": "Elías Piña"
    },
    {
        "id": 8,
        "name": "Espaillat"
    },
    {
        "id": 9,
        "name": "Hato Mayor"
    },
    {
        "id": 10,
        "name": "Hermanas Mirabal"
    },
    {
        "id": 11,
        "name": "Independencia"
    },
    {
        "id": 12,
        "name": "La Altagracia"
    },
    {
        "id": 13,
        "name": "La Romana"
    },
    {
        "id": 14,
        "name": "La Vega"
    },
    {
        "id": 15,
        "name": "Maria Trinidad Sánchez"
    },
    {
        "id": 16,
        "name": "Monseñor Noel"
    },
    {
        "id": 17,
        "name": "Monte Plata"
    },
    {
        "id": 18,
        "name": "Monte Cristi"
    },
    {
        "id": 19,
        "name": "Pedernales"
    },
    {
        "id": 20,
        "name": "Peravia"
    },
    {
        "id": 21,
        "name": "Puerto Plata"
    },
    {
        "id": 22,
        "name": "Samana"
    },
    {
        "id": 23,
        "name": "San Cristóbal"
    },
    {
        "id": 24,
        "name": "San Jose De Ocoa"
    },
    {
        "id": 25,
        "name": "San Juan"
    },
    {
        "id": 26,
        "name": "San Pedro De Macoris"
    },
    {
        "id": 27,
        "name": "Sánchez Ramírez"
    },
    {
        "id": 28,
        "name": "Santiago"
    },
    {
        "id": 29,
        "name": "Santiago Rodríguez"
    },
    {
        "id": 30,
        "name": "Valverde"
    }
]

const cities = [
    {
        id: 1,
        name: 'Distrito Nacional'
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
        "name": "Átala",
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
        "name": "Centro de los Héroes",
        "cityId": 1
    },
    {
        "id": 10,
        "name": "Centro Olímpico",
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
        "name": "El Millón",
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
        "name": "Ensanche Luperón",
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
        "name": "General Anthonio Duvergé",
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
        "name": "Jardín Botánico",
        "cityId": 1
    },
    {
        "id": 30,
        "name": "Jardín Zoológico",
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
        "name": "Los Cacicazgos",
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
        "name": "Los Ríos",
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
        "name": "Paraíso",
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
        "name": "Los Próceres",
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
        "name": "San Gerónimo",
        "cityId": 1
    },
    {
        "id": 65,
        "name": "San Juan Bosco",
        "cityId": 1
    },
    {
        "id": 66,
        "name": "Simón Bolívar",
        "cityId": 1
    },
    {
        "id": 67,
        "name": "Viejo Arroyo Hondo",
        "cityId": 1
    },
    {
        "id": 68,
        "name": "Villas Agrícolas",
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
        "id": 72,
        "name": "Bayona",
        "cityId": 2
    },
    {
        "id": 73,
        "name": "Buenos Aires",
        "cityId": 2
    },
    {
        "id": 74,
        "name": "El Abanico",
        "cityId": 2
    },
    {
        "id": 75,
        "name": "El Libertador",
        "cityId": 2
    },
    {
        "id": 76,
        "name": "Enriquillo",
        "cityId": 2
    },
    {
        "id": 77,
        "name": "Ensanche Altagracia",
        "cityId": 2
    },
    {
        "id": 78,
        "name": "Hato Nuevo",
        "cityId": 2
    },
    {
        "id": 79,
        "name": "Km. 12 Av. Independencia / Calle Isabel",
        "cityId": 2
    },
    {
        "id": 80,
        "name": "Km. 13 Carretera Sánchez / Av. Independencia",
        "cityId": 2
    },
    {
        "id": 81,
        "name": "Km 14",
        "cityId": 2
    },
    {
        "id": 82,
        "name": "La Venta",
        "cityId": 2
    },
    {
        "id": 83,
        "name": "Las Caobas",
        "cityId": 2
    },
    {
        "id": 84,
        "name": "Las Palmas",
        "cityId": 2
    },
    {
        "id": 85,
        "name": "Manoguayabo",
        "cityId": 2
    },
    {
        "id": 86,
        "name": "Santa Cruz",
        "cityId": 3
    },
    {
        "id": 87,
        "name": "Sabana Perdida",
        "cityId": 3
    },
    {
        "id": 88,
        "name": "Villa Mella",
        "cityId": 3
    },
    {
        "id": 89,
        "name": "Loma Del Caliche",
        "cityId": 3
    },
    {
        "id": 90,
        "name": "Marañón",
        "cityId": 3
    },
    {
        "id": 91,
        "name": "Lorencin",
        "cityId": 3
    },
    {
        "id": 92,
        "name": "Saleta",
        "cityId": 3
    },
    {
        "id": 93,
        "name": "La Bomba",
        "cityId": 3
    },
    {
        "id": 94,
        "name": "El Bonito",
        "cityId": 3
    },
    {
        "id": 95,
        "name": "Los Barrancones",
        "cityId": 3
    },
    {
        "id": 96,
        "name": "El Mamey",
        "cityId": 3
    },
    {
        "id": 97,
        "name": "Hatillo",
        "cityId": 3
    },
    {
        "id": 98,
        "name": "Guaricano",
        "cityId": 3
    },
    {
        "id": 99,
        "name": "Ponce",
        "cityId": 3
    },
    {
        "id": 100,
        "name": "La Rafaelita",
        "cityId": 3
    },
    {
        "id": 101,
        "name": "Mala Vuelta",
        "cityId": 3
    },
    {
        "id": 102,
        "name": "Alma Rosa",
        "cityId": 4
    },
    {
        "id": 103,
        "name": "Brisa Oriental",
        "cityId": 4
    },
    {
        "id": 104,
        "name": "Brisas del Este",
        "cityId": 4
    },
    {
        "id": 105,
        "name": "Cancino",
        "cityId": 4
    },
    {
        "id": 106,
        "name": "Cancino Fuera",
        "cityId": 4
    },
    {
        "id": 107,
        "name": "Ciudad del Almirante",
        "cityId": 4
    },
    {
        "id": 108,
        "name": "Ciudad Satélite",
        "cityId": 4
    },
    {
        "id": 109,
        "name": "Ensanche Ozama",
        "cityId": 4
    },
    {
        "id": 110,
        "name": "Francisco Alberto Peña Camaño",
        "cityId": 4
    },
    {
        "id": 111,
        "name": "Hainamosa",
        "cityId": 4
    },
    {
        "id": 112,
        "name": "Jose de Mendoza",
        "cityId": 4
    },
    {
        "id": 113,
        "name": "La Isabelita",
        "cityId": 4
    },
    {
        "id": 114,
        "name": "La Ureña",
        "cityId": 4
    },
    {
        "id": 115,
        "name": "Las Américas",
        "cityId": 4
    },
    {
        "id": 116,
        "name": "Los Frailes",
        "cityId": 4
    },
    {
        "id": 117,
        "name": "Los Mameyes",
        "cityId": 4
    },
    {
        "id": 118,
        "name": "Los Mina Norte",
        "cityId": 4
    },
    {
        "id": 119,
        "name": "Los Mina Sur",
        "cityId": 4
    },
    {
        "id": 120,
        "name": "Los Tres Ojos",
        "cityId": 4
    },
    {
        "id": 121,
        "name": "Los Trinitarios",
        "cityId": 4
    },
    {
        "id": 122,
        "name": "Mendoza",
        "cityId": 4
    },
    {
        "id": 123,
        "name": "Tamarindo",
        "cityId": 4
    },
    {
        "id": 124,
        "name": "Villa Duarte",
        "cityId": 4
    },
    {
        "id": 125,
        "name": "Villa Faro",
        "cityId": 4
    }
]

let ValidateValues = {
    name: false,
    phone: false,
    store: false,
    provincesField: false,
    citiesField: false,
    sectorField: false,
    pointOfReference: false,
    address: false

}

let headers = {method: 'POST'}

const btn_add = document.getElementById("btn_add");
const btn_get = document.getElementById("btn_get");
const citiesField = document.getElementById("citiesField")


window.onload = function(){
    document.onclick = function(e){
      if(e.target.id !== 'citiesField'){
        citiesDom.style.display = 'none';
      }
      if(e.target.id !== 'sectorField'){
        sectorsDom.style.display = 'none';
      }
      if(e.target.id !== 'provincesField'){
        provincesDom.style.display = 'none';
      }
    };
};

function init(){
    clear()
}

function showCities(value = null){
    citiesDom.style.display = 'block'
    let citiesField = document.getElementById("citiesField").value


    if(value) citiesToshow = value
    else if(citiesField){
        citiesToshow = cities.filter(city => city.name.toLocaleLowerCase().includes(citiesField.toLocaleLowerCase()) )
    }
    else citiesToshow = cities
    citiesDom.innerHTML = '' 
    
    for (let i = 0; i < citiesToshow.length; i++) {
        const city = citiesToshow[i];
        let text  = ` <li class="opt" onclick="setCity(${city.id})">${city.name}</li>`
        citiesDom.insertAdjacentHTML( 'beforeend', text );
    }
}


function showSectors(value = null){
    let sectorsDom = document.getElementById('sectors')
    sectorsDom.style.display = 'block'
    let sectorsToShow
    let sectorField = document.getElementById("sectorField").value


    if(value) sectorsToShow = value
    else if(sectorField){
        sectorsToShow = sectors.filter(sector => sector.name.toLocaleLowerCase().includes(sectorField.toLocaleLowerCase()) )
    }
    else sectorsToShow = sectors.filter(sector => sector?.cityId == currentCity?.id)
    sectorsDom.innerHTML = '' 
    for (let i = 0; i < sectorsToShow.length; i++) {
        const sector = sectorsToShow[i];
        let text  = `<li class="opt" onclick="setSector(${sector.id})">${sector.name}</li>`
        sectorsDom.insertAdjacentHTML( 'beforeend', text );
    }
}


function showProvinces(value = null){
    provincesDom.style.display = 'block'
    let provincesToShow
    let provincesField = document.getElementById("provincesField").value

    if(value) provincesToShow = value
    else if(provincesField){
        console.log(provincesField)
        console.log(provinces)
        provincesToShow = provinces.filter(province => province.name.toLocaleLowerCase().includes(provincesField.toLocaleLowerCase()) )
    }
    else provincesToShow = provinces
    console.log(provincesToShow)

    provincesDom.innerHTML = '' 
    
    for (let i = 0; i < provincesToShow.length; i++) {
        const province = provincesToShow[i];
        let text  = ` <li class="opt" onclick="setProvince(${province.id})">${province.name}</li>`
        provincesDom.insertAdjacentHTML( 'beforeend', text );
    }
}


function statusCityAndSectors (value) {
    let city = document.getElementById('city-container')
    let sector = document.getElementById('sector-container')
    city.style.display = value
    sector.style.display = value

}


function setCity(id){
    currentSector = null
    document.getElementById("sectorField").value = null;
    
    currentCity = cities.find(x => x.id == id)
    document.getElementById("citiesField").value = currentCity.name;
    validate("citiesField")
}

function setSector(id){
    currentSector = sectors.find(x => x.id == id)
    document.getElementById("sectorField").value = currentSector.name;
    validate("sectorField")
}

function setProvince(id){
    document.getElementById('citiesField-invalid').style.display = "none"
    document.getElementById('sectorField-invalid').style.display = "none"

    currentSector = null
    document.getElementById("sectorField").value = null;
    currentCity = null
    document.getElementById("citiesField").value = null;


    
    if(id == 1){
        statusCityAndSectors('flex')
    }else{
        statusCityAndSectors('none')
    }
    currentProvince = null
    document.getElementById("provincesField").value = null;
    
    currentProvince = provinces.find(x => x.id == id)
    document.getElementById("provincesField").value = currentProvince.name;

    validate("provincesField")
}



function CreateUser(){   
    clearValidate()
    
    let loader = document.getElementById("loader"); 
    let catchError = document.getElementById('fail')
    let nameOfClient = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let storeName = document.getElementById('store').value
    let province = document.getElementById('provincesField').value
    let city = document.getElementById('citiesField').value
    let sector = document.getElementById('sectorField').value
    let pointOfReference = document.getElementById('pointOfReference').value
    let address = document.getElementById('address').value

    catchError.style.display = "none"

    let validate =  isValid()   

    if(validate.completed){
        loader.style.display = "flex";
            
        let url = "https://wbqn8dzqcf.execute-api.us-east-1.amazonaws.com/user"
        let json = { "owner": nameOfClient, phone, storeName, sector, city, province, "street": address, "closePoint": pointOfReference }
        console.log(json)

        fetch(url, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {"Content-type": "application/json; charset=UTF-8", "withCredentials": true}
        })
        .then(response => response.json())
        .then(json => {
            clear()

            loader.style.display = "none";

            if(validate.province.id == 1){
                window.location.href = "dashboard-register.html"
            }else{
                window.location.href = "dashboard-pre-register.html"
            } 


        } ).catch(error => {
            loader.style.display = "none"
            catchError.style.display = "flex"
            console.log(error)
        });
    }
}

function getUser(){
    let user = document.getElementById('user').value

    fetch('https://wbqn8dzqcf.execute-api.us-east-1.amazonaws.com/user')
        .then(response => response.json()) 
        .then(json => console.log(json));
}




function getProvinces (field = null) {
    validate(field)
    var x = document.getElementById("provincesField").value;
    let provincesAvailable = provinces.filter(province =>  province.name.toLowerCase().includes(x.toLowerCase()))



    if(provincesAvailable.length > 0){
        provincesDom.style.display = 'block'
        showProvinces(provincesAvailable)
    }else{
        provincesDom.style.display = 'none'   
    }
}


function getCities (field = null) {
    validate(field)

    var x = document.getElementById("citiesField").value;
    let cityAvailable = cities.filter(city =>  city.name.toLowerCase().includes(x.toLowerCase()))

    if(cityAvailable.length > 0){
        citiesDom.style.display = 'block'
        showCities(cityAvailable)
    }else{
        citiesDom.style.display = 'none'   
    }
}

function getSectors(field = null){
    validate(field)

    var x = document.getElementById("sectorField").value;
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


function validate(value){
    document.getElementById('fail').style.display = "none"

    let provinceToCheck = document.getElementById("provincesField").value
    let cityToCheck = document.getElementById("citiesField").value
    let sectorField = document.getElementById("sectorField").value


    if(cities.find(city => city.name.toLowerCase() == cityToCheck.toLowerCase())){
        document.getElementById('sector-container').style.display = "flex"
    }else{
        document.getElementById('sector-container').style.display = "none"
    }

    if(sectors.find(sector => sector.name.toLowerCase() == sectorField.toLowerCase())){
        document.getElementById('address-container').style.display = "flex"
        document.getElementById('pointOfReference-container').style.display = "flex"
    }else{
        document.getElementById('address-container').style.display = "none"
        document.getElementById('pointOfReference-container').style.display = "none"
    }

    if(value ==  "citiesField" || value == "sectorField"){

        if(provinceToCheck != "Gran Santo Domingo"){
            document.getElementById('citiesField-invalid').style.display = "none"
            document.getElementById('sectorField-invalid').style.display = "none"
            ValidateValues["citiesField"] = true
            ValidateValues["sectorField"] = true
            ValidateValues["address"] = true
            ValidateValues["pointOfReference"] = true

        }else{
            

    
            if(value == "citiesField"){
                let cityToCheck = document.getElementById(value).value

                if(cities.find(city => city.name.toLowerCase() == cityToCheck.toLowerCase())){
                    ValidateValues[value] = true
                }else{
                    ValidateValues[value] = false
                }
            }
        
            if(value == "sectorField"){
                let sectorToCheck = document.getElementById(value).value

            
        
                if(sectors.find(sector => sector.name.toLowerCase() == sectorToCheck.toLowerCase())){
                    ValidateValues[value] = true
                }else{
                    ValidateValues[value] = false
                }
            }
        }

    }else{

        if(provinceToCheck != "Gran Santo Domingo"){
            ValidateValues["citiesField"] = true
            ValidateValues["sectorField"] = true
            ValidateValues["address"] = true
            ValidateValues["pointOfReference"] = true
        }

        if(value == "provincesField"){
            if(provinceToCheck == "Gran Santo Domingo"){
                ValidateValues["citiesField"] = false
                ValidateValues["sectorField"] = false
                ValidateValues["address"] = false
                ValidateValues["pointOfReference"] = false
            }

            if(provinces.find(province => province.name.toLowerCase() == provinceToCheck.toLowerCase())){
                ValidateValues[value] = true
            }else{
                ValidateValues[value] = false
            }
    
        }else{
    
            let field = document.getElementById(value).value
        
            if(!field || field == ''){
                ValidateValues[value] = false
            }else{
                ValidateValues[value] = true
        
            }
        }
    }
    


    

}

function clear(){
    currentCity = null
    currentSector = null
    currentProvince = null
    document.getElementById('name').value = null
    document.getElementById('phone').value = null
    document.getElementById('sectorField').value = null
    document.getElementById('store').value = null
    document.getElementById('citiesField').value = null
    document.getElementById('provincesField').value = null
    document.getElementById('pointOfReference').value = null
    document.getElementById('address').value = null

    ValidateValues = {
        name: false,
        phone: false,
        store: false,
        provincesField: false,
        citiesField: false,
        sectorField: false,
        pointOfReference: false,
        address: false
    }
    document.getElementById('city-container').style.display = "none"
    document.getElementById('sector-container').style.display = "none"
    document.getElementById('pointOfReference-container').style.display = "none"
    document.getElementById('address-container').style.display = "none"


}

function clearValidate(){
    document.getElementById('name-invalid').style.display = "none"
    document.getElementById('phone-invalid').style.display = "none"
    document.getElementById('store-invalid').style.display = "none"
    document.getElementById('provincesField-invalid').style.display = "none"
    document.getElementById('citiesField-invalid').style.display = "none"
    document.getElementById('sectorField-invalid').style.display = "none"

}

function isValid(){

    let values = []
    
    for (const property in ValidateValues) {
        let invalidField = document.getElementById(`${property}-invalid`)

        if(!ValidateValues[property]){
            invalidField.style.display = "block"
        }else{
            invalidField.style.display = "none"
        }

        values.push(ValidateValues[property])
    }
    let province = document.getElementById('provincesField').value

    return {completed: values.every(x => x), province: provinces.find(x => x.name == province)}

}

init()