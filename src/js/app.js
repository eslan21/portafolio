const textPort = document.querySelector('#textPort');
const inicio = document.querySelector('#inicio')
const aboutMe = document.getElementById('aboutMe');
const sol = document.querySelector('#sol')
const side = document.querySelector('#side')
const showMe = document.querySelector('#showMe')
const aboutMeText = document.querySelector('#aboutMeText')
const container2Div = document.querySelector('#container2Div')
const container2DivImg = document.querySelector('#container2DivImg')
const container3 = document.querySelector('.container3')
const barras = document.querySelector('.bar')



/*Efecto de movimiento de las letras*/
const AddRemoveEffect = (selecxtor,clase)=>{
    selecxtor.classList.toggle(clase)
}
/*Agregando evento de barras*/
function actionBarra(e){
        
    if(!this.classList.contains('activeBar')){
        Array.from(barras.children).forEach((barra)=>{
            barra.classList.remove('activeBar')
             
         })
        this.classList.add('activeBar')

    }
  //this.classList.toggle('activeBar')

    
}

Array.from(barras.children).forEach((barra)=>{
   barra.addEventListener('click', actionBarra)
    
})
/******************************************Efectos de scrolls***********************************/


const opciones = {
    root:null,
    rootMargin:'0px',
    threshold: .5

  }




// Creamos un objeto IntersectionObserver
const observerCuadrado = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {  
             sol.classList.add('solTralate');
          } else {
             sol.classList.remove('solTralate');
          }
      });
  },opciones);

  //
// Añado a mi Observable que quiero observar. En este caso el cuadrado

// Quitar y colocar texto 
function textoSale(entries){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            textPort.classList.add('scale-out-hor-right')
            side.classList.add('scale-out-hor-right')
        } else {
            textPort.classList.remove('scale-out-hor-right')
            side.classList.remove('scale-out-hor-right')
        }
    })
}
const observerText = new IntersectionObserver(textoSale,opciones) 
// Mantener las barrar fijar 
function fijarBarras(entries){
    entries.forEach(entry => {
      
        if(entry.isIntersecting){
            barras.style.position = 'fixed'

            
        } else {
            barras.style.position = 'absolute'
             
        }
    })
}
// const observarBarra = new IntersectionObserver(fijarBarras,opciones) 
// observarBarra.observe(container3)


/*************** Mostrar texto en about me******************/
function mostrarText(e){
    e.preventDefault()
    showMe.parentElement.classList.toggle('ocultarSectionLeft')
    aboutMeText.classList.toggle('ocultarSectionLeft')
    container2Div.classList.toggle('backgroundEffect')
    container2DivImg.classList.toggle('backgroundEffect')
   container2DivImg.children[0].classList.toggle('imgAbourMe')
   container2DivImg.children[0].classList.toggle('imgAbourMeEffect')

   document.querySelector('.js-bar').style.width = '80%'
   document.querySelector('.css-bar').style.width = '70%'
   document.querySelector('.html-bar').style.width = '80%'
   document.querySelector('.bt-bar').style.width = '50%'
   document.querySelector('.react-bar').style.width = '60%'
   document.querySelector('html').classList.toggle('stopScroll')

   
   
}

showMe.addEventListener('click',mostrarText)
document.getElementById('aboutMeBack').addEventListener('click', mostrarText )
/*************** agregar efecto******************/
function addEffectBar(){

}

/*************EFECTO DE LETRAS */
function showItens(entries){
    entries.forEach(entry =>{
            if(entry.isIntersecting){
                const elementos = Array.from(entry.target.querySelectorAll('*[effect="true"]'))
                elementos.forEach(elemento => {
                  elemento.classList.add('slide-out-right')
                  elemento.classList.remove('slide-out-right2')
                    
                })
            } else{
                const elementos = Array.from(entry.target.querySelectorAll('*[effect="true"]'))
                elementos.forEach(elemento => {
                  elemento.classList.add('slide-out-right2')
                  elemento.classList.remove('slide-out-right')
                    
                })
            }
    })
}
const tryEffect = new IntersectionObserver(showItens, opciones)
tryEffect.observe(aboutMe)
window.addEventListener('DOMMouseScroll',(e)=>{
    console.log(e)
})

//// disable scroll

