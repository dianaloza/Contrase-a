
/*Crear modo input de la contraseña que ingreses si es <8 caacteres te diga que es muy corta si es enre 8 y 10 es de seguridad intermedia y si es > 10 es segura
*/

const passwordInput = document.getElementById("password");
const messageElement =  document.getElementById("message");

addEventListener("input", function() {
    const contraseña = passwordInput.value;
    let message = "";
    let messageClass = "";

    if (contraseña.length < 8) {
        message = "La contraseña es muy corta";
        messageClass ="corta";

    } else if (contraseña.length >= 8 && contraseña.length <= 10) {
        message = "La contraseña es de seguridad intermedia";
        messageClass ="intermedia";
    } else {
        message = "La contraseña es segura";
        messageClass = "segura";
    }

    messageElement.textContent = message;
    messageElement.className = messageClass;
});
