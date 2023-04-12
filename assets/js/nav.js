const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav-left')

menuToggle.addEventListener('click' , function() {
    nav.classList.toggle('slide')
   
})

const navList = [
    {
        name:"Home",
        location:"index.html"
    },
    {
        name:"My Project",
        location:"my-project.html"
    },
    {
        name:"Testimonial",
        location:"testimonial.html"
    },
]

function renderNav() {
    for(let i = 0; i < navList.length; i++){
        document.getElementById("navbar").innerHTML += 
        `<li>
            <a href="${navList[i].location}">${navList[i].name}</a>
            </li>
            `
    }
    document.getElementById("navbar").innerHTML += 
        `
        <li><a href="contact-me.html" class="sub-menu">Contact</a></li>
            `
}
renderNav();




