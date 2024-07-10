const toggleBtn = document.getElementsByClassName("navbar-toggler")[0]
const divToogler = document.getElementsByClassName("navbar-collapse")[0],
productsContainer = document.querySelector(".products-list")

let products = []
const username = localStorage.getItem("user") ? localStorage.getItem("user") : null;

document.querySelector(".user").innerHTML = username

async function displayProducts() {
    await fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {"content-type": "application.json"}
    })
        .then(response => response.json())
        .then(data => products = data)
    
    products.map(product => {
        const { description, image, price, title, rating }= product
        let element = `
        <div class="card  mx-2 my-2 "  >
        <img src="${image}" class="card-img-top" alt=${title}/>
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-between align-items-baseline ">
        <p class="card-text bold ">Price: ${price}</p>
        <p class="card-text"> <i class="fa fa-star"> ${rating.rate}</i></p>
        </div>
        </div> 
        </div
        `
        productsContainer.innerHTML += element
    })
}

window.addEventListener("DOMContentLoaded", displayProducts )

