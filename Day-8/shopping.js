let products = [
    {
        id: 1,
        name: "Green Shirt", 
        size:"M", 
        color:"Green", 
        price: 2000, 
        image:"prod1.jpeg", 
        description:"Men Solid Casual Green Shirt"
    },
    {
        id: 2,
        name: "Gray T-shirt", 
        size:"S", 
        color:"Gray", 
        price: 700, 
        image:"prod2.jpeg", 
        description:"Casual Men T-shirt"
    },
    {
        id: 3,
        name: "Casual T-shirt", 
        size:"S", 
        color:"yellow", 
        price: 900, 
        image:"prod3.jpg", 
        description:"Beach party t-shirt"
    },
    {
        id: 4,
        name: "Salwar Suit", 
        size:"M", 
        color:"Mahroon", 
        price: 3000, 
        image:"prod4.jpeg", 
        description:"Mahroon Salwar Suit"
    },
    {
        id: 5,
        name: "Navy Suit", 
        size:"M", 
        color:"Navy Blue", 
        price: 1300, 
        image:"prod5.jpg", 
        description:"Navy Suit Ladies Wear"
    },
    {
        id: 6,
        name: "Black Lehnga", 
        size:"M", 
        color:"Black", 
        price: 3500, 
        image:"prod6.jpg", 
        description:" designer heavy embellished lehenga"
    },
    {
        id: 7,
        name: "Check Shirt", 
        size:"S", 
        color:"White Red", 
        price: 1400, 
        image:"prod7.jpeg", 
        description:"Formal shirt for Men"
    },
    {
        id: 8,
        name: "Half Sleeves Shirt", 
        size:"S", 
        color:"Green White", 
        price: 1100, 
        image:"prod8.jpeg", 
        description:"Mens Casual Half Sleeves Shirt"
    },
    {
        id: 9,
        name: "Tuxedo Suit", 
        size:"L", 
        color:"Navy Blue", 
        price: 5200, 
        image:"prod9.jpeg", 
        description:"Party functionnavy collar tuxedo suit"
    },

    {
        id: 10,
        name: "Wedding Gown", 
        size:"M", 
        color:"Peach", 
        price: 3000, 
        image:"prod10.jpeg", 
        description:"Indian Wedding Gown"
    },
    {
        id: 11,
        name: "Indian Sari", 
        size:"S", 
        color:"Blue", 
        price: 2100, 
        image:"prod11.jpeg", 
        description:"Indian sari outfit for women"
    },
    {
        id: 12,
        name: "Traditional Indian Dress", 
        size:"L", 
        color:"Sea Green", 
        price: 1800, 
        image:"prod12.jpeg", 
        description:"Traditional Indian dress for women"
    },

];


cart = [];

function displayProducts(productsData, who="productWrapper") {

    let productsString = "";
    let count = 0;

    productsData.forEach(function(product, index){

        // Destructuring the javaScripts objects. It will directly map
        let {id, name, size, image, color, description, price} = product;

        // let productString = JSON.stringify(product);    //1. convert JSON objects into string
        
        if (who == "productWrapper") {
            productsString += 
                    `<div class="product">
                        <div class="prod_img">
                            <img 
                                src="images/${image}" 
                                width="100%" 
                            />
                        </div>

                        <h3>       ${name}        </h3>
                        <p>Price:  ${price}       </p>
                        <p>Size:   ${size}        </p>
                        <P>Color:  ${color}       </P>
                        <P>        ${description} </P>
                        <p>
                            <button 
                                class="btn btn-success"
                                onclick='addToCart(${id})'>Add to Cart
                            </button>
                        </p>
                    </div>`;
        }
        else if (who == "cart") {

            count +=1;
            productsString += 
                    `<div class="product">
                        <div class="prod_img">
                            <img 
                                src="images/${image}" 
                                width="100%" 
                            />
                        </div>

                        <h3>       ${name}        </h3>
                        <p>Price:  ${price}       </p>
                        <p>Size:   ${size}        </p>
                        <P>Color:  ${color}       </P>
                        <P>        ${description} </P>
                        <p>
                            <button 
                                class="btn btn-warning"
                                onclick='removeFromCart(${id})'>Remove from Cart
                            </button>
                        </p>
                    </div>`;

                    
        }             
    });


    if (who == "productWrapper") {
        document.getElementById(who).innerHTML = productsString;
    }
    else if (who == "cart") {
        if (count != 0) {
            productsString = `<h3> Total items in cart: ${count}</h3>` + productsString;
            document.getElementById(who).innerHTML = productsString;
            
        }
        else {
            document.getElementById(who).innerHTML = `<h3> Your cart is empty </h3>`;
        }
    }
    
}

displayProducts(products);






function searchProduct(searchValue) {
    
    // let searchValue = document.getElementById("searchvalue").value;
    // console.log(searchValue);

    let searchedProducts = products.filter(function(product, index){

        let searchString = product.name + " " + product.color + " " + product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;

    });
    displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
    return productArray.find(function(product){
        return product.id == id;
    });
}



function addToCart(id) {

    let pro = getProductByID(products, id);

    // cart.push(products[index]);
    cart.push(pro);

    //  console.log(cart);

    displayProducts(cart, "cart");

}


function removeFromCart(id) {

    // getting the index based on the id
    let index = cart.findIndex (function(product){
        return product.id == id;
    });

    // removing from cart
    cart.splice(index, 1);
    displayProducts(cart, "cart");
}