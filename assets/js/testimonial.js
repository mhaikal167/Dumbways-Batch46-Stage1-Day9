const testimonialData = [
    {
        author:"James Bon",
        comment:"Apakah ini yang dibilang cinta",
        source:"./assets/images/james.jpg",
        rating:1
    },
    {
        author:"Mark Zuckerberg",
        comment:"Mantap sekali ,aku yang pembuat facebook kalah",
        source:"./assets/images/mark.jpeg",
        rating:5
    },
    {
        author:"Gabe Nawel",
        comment:"Untuk UI nya kami akui bagus ,apabila berkenan silahkan menghubungi perusahaan kami",
        source:"./assets/images/gaben.jpg",
        rating: 5,
    },
    {
        author:"Bill Gates",
        comment:"Sepertinya pembuat website ini ingin ku recruit ke perusahaanku",
        source:"./assets/images/bill.jpg",
        rating: 4
    },
    {
        author:"Steve Jobs",
        comment:"Website ini akan membuat pasar kita menurun ,aku tidak suka itu",
        source:"https://assets-a1.kompasiana.com/statics/crawl/557458480423bd7a2e8b4567.jpeg",
        rating:3
    },
    {
        author:"Forrest Li",
        comment:"Cukup mengesankan ,tetapi alangkah lebih baiknya diberikan adsence supaya mudah untuk mengembangkan website ini",
        source:"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01g6rz0eaanc2bjxng54va2ers.jpg",
        rating:3
    },
]

function showTestimonials() {
    let testimonialHtml = ''

    testimonialData.forEach((item) => {
        testimonialHtml += `<div class="testi-card">
        <img src="${item.source}" alt="${item.author}">
        <div class="testi-desc">
            <p class="quotes">"${item.comment}"</p>
            <p class="author">- ${item.author}</p>
            <p class="author"><i class="fa-solid fa-star"></i>${item.rating}</p>
        </div>
    </div>`
    })
    document.getElementById('testimonials').innerHTML = testimonialHtml
}
showTestimonials()

// function filtering rating

function filteringRating(rating) {
    let testimonialHtml = ''

    const ratingFiltered = testimonialData.filter((data)=> data.rating === rating)

    if(ratingFiltered.length == 0){
        testimonialHtml += `<div class="testi-card"><img src="./assets/images/data-notfound.jpg"><h3>Rating belum ada </h3></div> `
    }else{
        ratingFiltered.forEach((data)=> {
            testimonialHtml += `<div class="testi-card">
            <img src="${data.source}" alt="${data.author}">
            <div class="testi-desc">
                <p class="quotes">"${data.comment}"</p>
                <p class="author">- ${data.author}</p>
                <p class="author"><i class="fa-solid fa-star"></i>${data.rating}</p>
            </div>
        </div>`
        })
    }
    document.getElementById("testimonials").innerHTML = testimonialHtml
}