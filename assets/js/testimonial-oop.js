class Testimonial {
    #quotes = ""
    #images = ""

    constructor(quotes,images){
        this.#quotes = quotes,
        this.#images = images
    }
    
    get quotes(){
        return this.#quotes
    }

    get images(){
        return this.#images
    }

    get forHTML(){
        return `<div class="testi-card">
        <img src="${this.images}" alt="${this.author}">
        <div class="testi-desc">
            <p class="quotes">"${this.quotes}"</p>
            <p class="author">- ${this.author}</p>
        </div>
    </div>`
    }
}

class authorTestimonial extends Testimonial {
    #author = ""
    constructor(author,quotes,images){
        super(quotes,images)
        this.#author = author
    }
    
    get author(){
        return this.#author
    }
}

class companyTestimonial extends Testimonial{
    #company
    constructor(company,quotes,images){
        super(quotes,images)
        this.#company = company
    }

    get author() {
        return this.#company + " Company"
    }
}

const testi1 = new authorTestimonial("James Bon", "Apakah ini yang dibilang cinta","./assets/images/james.jpg")
const testi2 = new authorTestimonial("Mark Zuckerberg", "Mantap sekali ,aku yang pembuat facebook kalah","./assets/images/mark.jpeg")
const testi3 = new companyTestimonial("Steam", "Untuk UI nya kami akui bagus ,apabila berkenan silahkan menghubungi perusahaan kami","./assets/images/gaben.jpg")
const testi4 = new authorTestimonial("Bill Gates", "Sepertinya pembuat website ini ingin ku recruit ke perusahaanku","https://voffice.co.id/jakarta-virtual-office/business-tips/wp-content/uploads/2018/11/biografi-steve-jobs-735x400.jpg")

let data = [testi1,testi2,testi3,testi4]
let testimonialforHTML = ""

for(let i = 0; i < data.length; i++){
    testimonialforHTML += data[i].forHTML
}

document.getElementById("testimonials").innerHTML = testimonialforHTML