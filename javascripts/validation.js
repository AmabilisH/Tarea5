function emailValidation() {
    const form = document.getElementById('form');
    const emailField = form.email;
    const emailConfirmField = form.email_confirm;
  
    emailConfirmField.addEventListener('input', () => {
      const email = emailField.value;
      const emailConfirm = emailConfirmField.value;
      
      // Remover cualquier mensaje de error previo
      const existingAlert = document.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      emailConfirmField.classList.remove('email-error');
  
      if (email !== emailConfirm) {
        // Crear el mensaje de error
        const element = document.createElement('p');
        const message = document.createTextNode("El correo electrónico no coincide.");
        element.appendChild(message);
        element.classList.add("alert");
  
        // Insertar el mensaje de error después del campo de confirmación
        emailConfirmField.parentNode.appendChild(element);
  
        // Aplicar el color de fondo al campo de confirmación de correo electrónico
        emailConfirmField.classList.add('email-error');
      }
    });
  }
  
  window.onload = emailValidation;
  