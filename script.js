
let headers = {method: 'POST'}

const btn_add = document.getElementById("btn_add");
const btn_get = document.getElementById("btn_get");

btn_add.addEventListener("click", addNewUser);
btn_get.addEventListener("click", getUser);


function addNewUser(){   
    var loader = document.getElementById("loader");
    var success = document.getElementById("success");

    
    let nameOfClient = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let sector = document.getElementById('sector').value
    let store = document.getElementById('store').value
    
    if(nameOfClient && phone && sector && store){
        loader.style.display = "flex";
        
            
          let url = "https://wbqn8dzqcf.execute-api.us-east-1.amazonaws.com/user"
          let json = { "clientName": nameOfClient, "phone": phone, "salesperson": store, "sector": sector }

          fetch(url, {
            method: "POST",
            body: JSON.stringify(json),
            headers: {"Content-type": "application/json; charset=UTF-8", "withCredentials": true}
            })
            .then(response => response.json()) 
            .then(json => {
                loader.style.display = "none";
                success.style.display = "block"
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