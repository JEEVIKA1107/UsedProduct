function contactSeller(product) {
    alert("You selected " + product +
          ". Seller will contact you.");
}

function addProduct() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;

    if (name == "" || price == "" || location == "") {
        alert("Please fill all fields.");
        return;
    }

    let product = document.createElement("div");

    product.className = "product";

    product.innerHTML = `
        <h3>${name}</h3>
        <p>Price: ₹${price}</p>
        <p>Location: ${location}</p>
        <button onclick="contactSeller('${name}')">
            Contact Seller
        </button>
    `;

    document.getElementById("productList")
            .appendChild(product);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("location").value = "";

    alert("Product posted successfully!");
}

function searchProducts() {

    let search = document
        .getElementById("search")
        .value
        .toLowerCase();

    let products = document
        .querySelectorAll(".product");

    products.forEach(function(product) {

        let name = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}