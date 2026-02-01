// Product list
var products = [
    // Electronics
    {
        id: 1,
        name: "Iphone 13",
        price: 100999,
        rating: 5,
        category: "electronics",
        image: "images/applephone.png"
    },
    {
        id: 2,
        name: "Dell Laptop",
        price: 56499,
        rating: 5,
        category: "electronics",
        image: "images/laptop.png"
    },
    {
        id: 3,
        name: "Boat Headphones",
        price: 2349,
        rating: 4,
        category: "electronics",
        image: "images/boatsheadphone.png"
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 599,
        rating: 5,
        category: "electronics",
        image: "images/smartwatch.png"
    },
    {
        id: 5,
        name: "Affordable Earbuds",
        price: 949,
        rating: 4,
        category: "electronics",
        image: "images/earbuds.png"
    },
    {
        id: 6,
        name: "Nikson Camera",
        price: 11899,
        rating: 5,
        category: "electronics",
        image: "images/camera.png"
    },

    // Fashion
    {
        id: 7,
        name: "Leather Biker Jacket",
        price: 1449,
        rating: 5,
        category: "fashion",
        image: "images/leatherjacket.png"
    },
    {
        id: 8,
        name: "Sneakers",
        price: 4299,
        rating: 4,
        category: "fashion",
        image: "images/shoes.png"
    },
    {
        id: 9,
        name: "Sunglass",
        price: 199,
        rating: 4,
        category: "fashion",
        image: "images/sunglass.png"
    },
    {
        id: 10,
        name: "Leather Handbag",
        price: 1899,
        rating: 5,
        category: "fashion",
        image: "images/bag.png"
    },
    {
        id: 11,
        name: "Classic Watch",
        price: 2499,
        rating: 5,
        category: "fashion",
        image: "images/classicwatch.png"
    },

    // Home & Living
    {
        id: 12,
        name: "Velvet Sofa",
        price: 32299,
        rating: 5,
        category: "home",
        image: "images/sofa.png"
    },
    {
        id: 13,
        name: "Table Lamp",
        price: 479,
        rating: 4,
        category: "home",
        image: "images/lamp.png"
    },
    {
        id: 14,
        name: "Wall Art",
        price: 1099,
        rating: 4,
        category: "home",
        image: "images/wallart.png"
    },

    // Sports & Fitness product
    {
        id: 15,
        name: "Yoga Mat",
        price: 589,
        rating: 4,
        category: "sports",
        image: "images/yogamat.png"
    },
    {
        id: 16,
        name: "Dumbbell Set",
        price: 749,
        rating: 5,
        category: "sports",
        image: "images/dumble.png"
    },
    {
        id: 17,
        name: "Running Shoes",
        price: 4079,
        rating: 4,
        category: "sports",
        image: "images/runningshoes.png"
    },

    // More products
    {
        id: 18,
        name: "Speaker",
        price: 1029,
        rating: 4,
        category: "electronics",
        image: "images/applephone.png"
    },
    {
        id: 19,
        name: "T-Shirt",
        price: 949,
        rating: 3,
        category: "fashion",
        image: "images/shoes.png"
    },
    {
        id: 20,
        name: "Vase",
        price: 179,
        rating: 3,
        category: "home",
        image: "images/lamp.png"
    },
    {
        id: 21,
        name: "Resistance Bands",
        price: 139,
        rating: 4,
        category: "sports",
        image: "images/yogamat.png"
    },
    {
        id: 22,
        name: "Gaming Mouse RGB",
        price: 379,
        rating: 4,
        category: "electronics",
        image: "images/laptop.png"
    },
    {
        id: 23,
        name: "UV-Glass",
        price: 329,
        rating: 5,
        category: "fashion",
        image: "images/sunglass.png"
    },
    {
        id: 24,
        name: "Throw Pillow Set",
        price: 359,
        rating: 3,
        category: "home",
        image: "images/sofa.png"
    }
];

// Variables
var allProducts = products;
var sortType = 'default';
var filterType = 'all';

// Get elements from page
var grid = document.getElementById('products-grid');
var sortDropdown = document.getElementById('sort-select');
var filterDropdown = document.getElementById('filter-select');
var count = document.getElementById('count-display');

// Function to make stars
function makeStars(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars = stars + '★';
        } else {
            stars = stars + '☆';
        }
    }
    return stars;
}

// Show price with ₹
function showPrice(price) {
    return '₹' + price;
}

// Filter products by category
function filterProducts() {
    if (filterType === 'all') {
        allProducts = [];
        for (var i = 0; i < products.length; i++) {
            allProducts.push(products[i]);
        }
    } else {
        allProducts = [];
        for (var i = 0; i < products.length; i++) {
            if (products[i].category === filterType) {
                allProducts.push(products[i]);
            }
        }
    }
    sortProducts();
}

// Sort products
function sortProducts() {
    if (sortType === 'price-asc') {
        allProducts.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortType === 'price-desc') {
        allProducts.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (sortType === 'name-asc') {
        allProducts.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    } else if (sortType === 'name-desc') {
        allProducts.sort(function (a, b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        });
    } else if (sortType === 'rating-asc') {
        allProducts.sort(function (a, b) {
            return a.rating - b.rating;
        });
    } else if (sortType === 'rating-desc') {
        allProducts.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }
    showProducts();
}

// Show all products
function showProducts() {
    grid.innerHTML = '';
    count.innerHTML = allProducts.length;

    if (allProducts.length === 0) {
        grid.innerHTML = '<p>No products found.</p>';
        return;
    }

    for (var i = 0; i < allProducts.length; i++) {
        var product = allProducts[i];

        var card = document.createElement('div');
        card.className = 'product-card';

        var html = '';
        html += '<img src="' + product.image + '" class="product-image">';
        html += '<span class="category-tag">' + product.category + '</span>';
        html += '<h3 class="product-name">' + product.name + '</h3>';
        html += '<p class="product-price">' + showPrice(product.price) + '</p>';
        html += '<div class="rating">';
        html += '<span class="stars">' + makeStars(product.rating) + '</span>';
        html += ' (' + product.rating + ')';
        html += '</div>';
        html += '<button class="add-btn" onclick="addToCart(' + product.id + ')">Add to Cart</button>';

        card.innerHTML = html;
        grid.appendChild(card);
    }
}

// Add to cart function
function addToCart(id) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }
    alert('Added to cart: ' + product.name);
}

// When sort dropdown changes
sortDropdown.addEventListener('change', function () {
    sortType = sortDropdown.value;
    sortProducts();
});

// When filter dropdown changes
filterDropdown.addEventListener('change', function () {
    filterType = filterDropdown.value;
    filterProducts();
});

// Start the page
filterProducts();
