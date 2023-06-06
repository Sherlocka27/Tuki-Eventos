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


  ////////////////////validacion FORM ////////////////////////


  
  const d = document;

  function contactForm()
  {     
        const $form = d.querySelector(".contact-form");
        $inputs= d.querySelectorAll(".contact-form [required]");

        //ENTRADA DE DATOS

        $inputs.forEach(input => {
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          input.insertAdjacentElement("afterend", $span);
          $span.classList.add("contact-form-error", "none");
        });

        // VALIDACION 

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

            if(!pattern)
            {
              return $input.value===""
              ?d.getElementById($input.name).classList.add("is-active")
              :d.getElementById($input.name).classList.remove("is-active")
            }

          }
        });

         // ENVIO

         d.addEventListener("submit", (e)=>
      {
          e.preventDefault();
          
          const $loader = d.querySelector(".contact-form-loader"),
          $response = d.querySelector(".contact-form-response");

          $loader.classList.remove("none");
          
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

          .catch(err =>
          {
            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
            $response.innerHTML = `<p>Error ${err.status}: ${message} </p> ` 
          })

          .finally(() => setTimeout(()=> {
            $response.classList.add("none");
            $loader.classList.add("none");
            $response.innerHTML="";
          },3000));
       })
      
    } 

  contactForm();