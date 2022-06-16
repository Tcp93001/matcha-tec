// app.js
const $forms = document.querySelectorAll(".signup-form");

const getTemplate = () => {
  return fetch("./template.html").then((response) => response.text());
};

const sendEmailToApi = (address, template) => {

  fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "service_id": "service_dvjylic",
        "template_id": "template_0ea8xl9",
        "user_id": "user_5YCdhC86tb07Q0HodQl5p",
        "template_params": {
          "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
          "address": "hola@hotmail.com",
          "template": "Gracias por enviar tu correo"
        }
      }),
  })
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendEmail = (event) => {
  event.preventDefault();
  const email = event.target.querySelector("input").value;
  getTemplate()
    .then((template) => {
      sendEmailToApi(email, template);
    })
    .catch((error) => {
      console.log(error, "error al convertir el template.");
    });
};

for (let i = 0; i < $forms.length; i++) {
  $forms[i].addEventListener("submit", sendEmail);
}