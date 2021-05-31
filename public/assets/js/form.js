
const theForm = document.getElementById('leForm');

// button reset
const reset = e => e.preventDefault();

// jean pierre || jean-pierre, pas de jean-pierre

const text = /([a-z]{4,12}(?:)[ -\S][a-z]{1,12})/;
const filpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// exceptions
const exc1 = document.getElementById("excSurname");
const exc2 = document.getElementById("excPass");
const exc3 = document.getElementById("excCpass");

// @descr : ecouter l'event du form, fucntion(e)
theForm.addEventListener('submit', e => {

  // values
  let surname = document.getElementById('surname');
  let pass = document.getElementById('pass');
  let cpass = document.getElementById('cpass');


  if(surname.value.trim() == '') {
    // la deco
    exc1.classList.remove('d_none');
    exc1.setAttribute('class', 'error');
    exc1.textContent = "aucune valeur saisie.";
    surname.focus();
    e.preventDefault();


  } else if(surname.value.length > 12) {
    exc1.classList.remove('d_none');
    exc1.setAttribute('class', 'error');
    exc1.textContent = "Votre surnom doit contenir moins de 12 caractères.";
    surname.focus();
    e.preventDefault();

  } else if (surname.value.length < 4 ) {
    exc1.classList.remove('d_none');
    exc1.setAttribute('class', 'error');
    exc1.textContent = "Votre surnom doit contenir aux moins 3 caractères.";
    surname.focus();
    e.preventDefault();

  } else if(text.test(!surname.value)) {
    // la deco
    exc1.classList.remove('d_none');
    exc1.setAttribute('class', 'error');
    exc1.textContent = `${surname.value} n'est pas autorisée`;
    surname.focus();
    e.preventDefault();

  } else if(pass.value.trim() == '') {
    exc2.classList.remove('d_none');
    exc2.setAttribute('class', 'error');
    exc2.textContent = "aucune valeur saisie.";
    pass.focus();
    e.preventDefault();

  } else if(filpass.test(pass.value)) {
    exc2.classList.remove('d_none');
    exc2.setAttribute('class', 'error');
    exc2.textContent = `${pass.value} n'est pas autorisée`;
    surname.focus();
    console.log(pass.value);
    e.preventDefault();

  } else if(pass.value != cpass.value) {
    exc3.classList.remove('d_none');
    exc3.setAttribute('class', 'error');
    exc3.textContent = "mot de passe non identique";
    cpass.focus();
    e.preventDefault();

  } else if(surname.exc1 && pass.exc2 && cpass.exc3) {
    //si c'est valide, il y as redirection
    document.location.href ="snippet.html";
    e.preventDefault();
  } else {
    return false;
  }

})
