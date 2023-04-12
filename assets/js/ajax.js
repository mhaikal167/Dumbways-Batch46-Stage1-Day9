
const testimonial = new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET","https://api.npoint.io/a96c0b86bfb393a96a8b", true)

    xhr.onload = () => {
        if(xhr.status == 200){
            resolve(JSON.parse(xhr.response))
        }else{
            reject("Error Loading Data")
        }
    }

    xhr.onerror = () => {
        reject("Network Error")
    }
    xhr.send()
})

async function getAllTestimonial() {
    const response = await testimonial

    let testimonialHtml = ""
    response.forEach((item) => {
        testimonialHtml += `
        <div class="testi-card">
        <img src="${item.source}" alt="${item.author}">
        <div class="testi-desc">
            <p class="quotes">"${item.comment}"</p>
            <p class="author">- ${item.author}</p>
            <p class="author"><i class="fa-solid fa-star"></i>${item.rating}</p>
        </div>
    </div>`
    document.getElementById("testimonials").innerHTML = testimonialHtml
    })
}
getAllTestimonial();

async function filterRating(rating){
    const response = await testimonial
    const filteredRating = response.filter((item) => item.rating === rating)
    let testimonialHtml = ""
    if(filteredRating.length == 0){
        testimonialHtml += `<div class="testi-card"><img src="./assets/images/data-notfound.jpg"><h3>Rating belum ada </h3></div>`
    }else {
        filteredRating.forEach((item) => {
            testimonialHtml += `
            <div class="testi-card">
            <img src="${item.source}" alt="${item.author}">
            <div class="testi-desc">
                <p class="quotes">"${item.comment}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author"><i class="fa-solid fa-star"></i>${item.rating}</p>
            </div>
        </div>`
    })
}
document.getElementById("testimonials").innerHTML = testimonialHtml
}