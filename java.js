 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
         if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
            sec.classList.add('show-animation');
         }
         else{
            sec.classList.remove('show-animation');
         }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animation', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyH6wf2W6rBee15KCwtZNt4o50LPRLAFb1r7xvJuidj09huFLuzUcETw6G1UVMuI40LnA/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('succ');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thaks For Contacting"
        setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})

