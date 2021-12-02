const stampPwd = document.getElementById('pwdGen');

let user = prompt('Inserisci il tuo nome');
let surName = prompt('Ora il tuo cognome');
let color = prompt('Infine il tuo colore preferito');
let randomNumb = 25;
let dataCont = user +  surName + color + randomNumb; 

stampPwd.innerHTML = dataCont; 

