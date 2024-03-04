// Selecciona los elementos del DOM que se necesitan
const signUpCardEl = document.querySelector(".sign-up-card");
const successCardEl = document.querySelector(".success-card");
const signUpFormEl = document.querySelector(".sign-up-form");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const submittedEmailEl = document.querySelector(".submitted-email");
const checkboxIn = document.getElementById("checkbox");
const privacyCardEl = document.querySelector(".privacy-card");

// Agrega event listeners para los 2 botones
submitBtn.addEventListener("click", submitEmail);   
dismissBtn.addEventListener("click", toggleCards);
privacyCardEl.addEventListener("click", dismissPrivacyCard);

// Función para alternar entre las tarjetas de registro y éxito
function toggleCards() {
  signUpCardEl.classList.toggle("hidden"); // Oculta o muestra la tarjeta de registro
  successCardEl.classList.toggle("hidden"); // Oculta o muestra la tarjeta de éxito
  privacyCardEl.classList.add("hidden"); // Oculta el contenedor de privacidad
}

// Función para verificar un correo electrónico
function validateEmail(email) { 
  return /^[A-Z][a-zA-Z0-9]*[0-9]{2}[a-zA-Z0-9]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email);
}

// Función para enviar el correo electrónico
function submitEmail(e) { 
  e.preventDefault(); //evita que la pagina se recargue

  // Valida el correo electrónico
  if (validateEmail(emailIn.value)) {
    submittedEmailEl.innerText = emailIn.value; // Muestra el correo electrónico en la tarjeta de éxito
    signUpFormEl.classList.remove("error"); // Quita la clase de error si está presente

    // Verifica si el checkbox está activado
    if (!checkboxIn.checked) {
      privacyCardEl.classList.remove("hidden"); // Muestra el contenedor de privacidad
    } else {
      toggleCards(); // Cambia a la tarjeta de éxito solo si el correo y el checkbox son válidos
      emailIn.value = ""; // Limpia el campo de correo electrónico
    }
    //añade que si el checkbox no esta activado, se muestre solo el mensaje de privacidad
    if (!checkboxIn.checked) {
      privacyCardEl.classList.remove("hidden"); // Muestra el contenedor de privacidad
      signUpCardEl.classList.add("hidden"); // Oculta la tarjeta de registro
      successCardEl.classList.add("hidden"); // Oculta la tarjeta de éxito
    }
  } else {
    signUpFormEl.classList.add("error"); // Agrega la clase de error si no es un correo electrónico válido
  }
}

// Función para redirigir a la página original
function dismissPrivacyCard() {
  signUpCardEl.classList.toggle("hidden"); // Oculta o muestra la tarjeta de registro
  privacyCardEl.classList.add("hidden"); // Oculta el contenedor de privacidad
}


