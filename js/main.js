let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


  

/*VALIDACION IMPUTS FORMULARIO */

 /* const nombre = document.getElementById("imputNombre");
  const apellido = document.getElementById("imputApellido");
  const email = document.getElementById("imputEmail");
  const fomr = document.getElementById('formulario');
  const parrafo = document.getElementById("warnings");

  
  form.addEventListener('submit', function(evt))
  {

      evt.preventDefault()

      console.log("enviar form")
      
      let exprecionRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      
      if(nombre.value.length < 3 || typeof nombre === 'number'|| apellido.value.length < 3 || typeof apellido === 'number')
      {
       // warnings += "Error, el nombre ingresado no es valido, minimo 3 letras."
        alert("Error, el nombre ingresado no es valido, minimo 3 letras.")
      }

      if(exprecionRegEmail.test(email.value))
      {
        alert("Error, debe ingresar un correo valido.")
      }

      if(mensajesError.length > 0)
      {
        error.innerHTML = mensajesError.join(', ');
        return false;
    }
  }
*/

  /////////////// validacion de gpt /////////////////
/*
  function validateForm() {
    // Obtener los valores de los campos
    // var name = document.getElementById("name").value;
    //var email = document.getElementById("email").value;
    
    const nombre = document.getElementById("imputNombre");
    const apellido = document.getElementById("imputApellido");
    const email = document.getElementById("imputEmail");
  
    // Validar los campos
    if (nombre.value.length < 3 || typeof nombre === 'number'|| apellido.value.length < 3 || typeof apellido === 'number') 
    {
      alert("Error, el nombre ingresado no es valido, minimo 3 letras.")
      return false; // Evitar el envío del formulario
    }
  
    // Validar el formato del correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false; // Evitar el envío del formulario
    }
  
    // Si todas las validaciones son exitosas, puedes enviar el formulario
    // Aquí puedes agregar código adicional, como enviar los datos a un servidor
  
    return true; // Permitir el envío del formulario
  }
*/
  ////////////////////validacion jon mircha //////////
  
  const d = document;

  function contactFormValidations()
  {
        console.log("hola mundo");
        
        const $form = d.querySelector(".contact-form");
        $inputs= d.querySelectorAll(".contact-form [required]");

        console.log($inputs);

        $inputs.forEach(input => {
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          input.insertAdjacentElement("afterend", $span);
          $span.classList.add("contact-form-error", "none");
        });

        d.addEventListener("keyup",e => 
        {
          if(e.target.matches(".contact-form [required]"))
          {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            console.log($input, pattern);

            if(pattern && $input.value!=="")
            {
              let regex= new RegExp(pattern);
              return!regex.exec($input.value)
              ? d.getElementById($input.name).classList.add("is-active")
              : d.getElementById($input.name).classList.remove("is-active");
            }

          }

         

          
        });
      
   }
   
   /*
        $imputs.array.forEach(input => 
          {
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          $span.classList.add('contact-form-error', 'none');
          input.insertAdjacentElement("afterend", $span);
          });

      d.addEventListener("submit", (e)=>
      {

          e.preventDefault();
          alert("enviando formulario")

          const $loader =d.querySelector(".contact-form-loader"),
          $response= d.querySelector(".contact-form-response")
          
          fetch("https://formsubmit.co/ajax/tuki.evento@outlook.com",
          {
            method: "POST",
            body: new FormData(e.target)
          })
          
          .then(res => res.ok? res.json() :Promise.reject(res))
          
          .then(json =>
            {
              console.log(json);
              $loader.classList.add("none");
              $response.classList.remove("none");
              $response.innerHTML = `<p>${json.message}</p>`;
              $form.reset();
            })

          .catch(err =>{
            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
          $response.innerHTML = `<p>Error ${err.status}: ${message} </p> ` 
          })

          .finally(() => setTimeOut(()=> {
            $response.classList.add("none");
            $response.innerHTML="";
          },3000));
    })
  }
  */

  contactFormValidations();