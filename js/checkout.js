//Recipes
const recipes = [
    { name: "Vegan Rabokki", image: "/Assets/recipes/vegan-rabokki/vegan-rabokki-cover.jpg", tags: ["Easy", "Vegan", "Asian"] },
    { name: "Chicken Laksa", image: "/Assets/recipes/chicken-laksa/chicken-laska-cover.webp", tags: ["Chicken", "Asian", "Easy"] },
    { name: "Beef & Basil Bolognese", image: "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-cover.webp", tags: ["Easy", "Italian"] },
    { name: "Tofu Dumplings with Miso Slaw", image: "/Assets/recipes/tofu-dumpling/tofu-dumpling-cover.webp", tags: ["Mexican", "Vegetarian"] },
    { name: "Spinach & Feta Ravioli with Zuccini", image: "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-cover.webp", tags: ["Italian", "Vegetarian"] },
    { name: "Halloumi Burgers with Aioli Chips", image: "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-cover.webp", tags: ["Vegetarian"] },
    { name: "Teriyaki Tofu Noodle Stir-fry", image: "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-cover.webp", tags: ["Asian", "Vegetarian"] }
];


//Page/section selection
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (window.innerWidth < 768 && currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    } else if (window.innerWidth >= 768 && currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
        pages[currentPage - 1].style.transform = 'translateX(-100%)';
    }
}

function prevPage() {
    if (window.innerWidth < 768 && currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
    } else if (window.innerWidth >= 768 && currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
        pages[currentPage + 1].style.transform = 'translateX(100%)';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Initially, set the left position of the first method to 0 and others to 100%
    var methods = document.querySelectorAll('.payment-method');
    methods.forEach(function(method, index) {
        if (index === 0) {
            method.style.left = '0';
        } else {
            method.style.left = '100%';
        }
    });
});

function changePaymentMethod(methodIndex) {
    
    var labels = document.querySelectorAll('.payment-method-slider label');
    labels.forEach(function(label, index) {
        if (index + 1 === methodIndex) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });

    
    var methods = document.querySelectorAll('.payment-method');
    methods.forEach(function(method, index) {
        if (index + 1 === methodIndex) {
            method.style.left = '0';
        } else {
            method.style.left = '100%';
        }
    });
}

//Payment method input validation and formatting
document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.payment-input');

    inputFields.forEach(function(inputField) {
        inputField.addEventListener('input', function() {
            let inputValue = this.value;
            const inputClass = this.classList[1]; // Assuming the class structure is consistent
            const displayElement = document.querySelector(`.input-display.${inputClass}`);

            if (this.id === 'card-number') {
                // Remove all non-digit characters
                inputValue = inputValue.replace(/\D/g, '');
                // Format the card number with spaces every 4 digits
                inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
                this.value = inputValue;
            } else if (this.id === 'expiry') {
                // Remove all non-digit characters
                inputValue = inputValue.replace(/\D/g, '');
                // Format the expiry date to MM/YY
                if (inputValue.length > 2) {
                    inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2, 4);
                }
                this.value = inputValue;
            }

            if (displayElement) {
                displayElement.textContent = inputValue;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function(){
    
    
    //Accessing items stored on the local storage 
    let servingSize = localStorage.getItem('servingSize');
    let mealQuantity = localStorage.getItem('mealQuantity');

    //Random claculation of prices 
    const mealPrice = 15.67

    let price = servingSize * mealQuantity * mealPrice;
    
    //Display price 
    let priceContainer = document.getElementById('priceContainer');
    priceContainer.textContent = "$" + price;

    let dishes = localStorage.getItem('selectedRecipes');
    const recipeContainer = document.getElementById('recipeContainer');
    //Parse local storage string into array
    let dishArray = JSON.parse(dishes);
    //loop through all dishes 
    dishArray.forEach(item => {
        //Find the recipe object with the string key
        const recipe = recipes.find(recipe => recipe.name === item);
        //Access the Name and image url of recipe
        const { name, image } = recipe;
        
        // Create a div for each recipe item
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        // Create HTML elements for name and image
        const nameElement = document.createElement('p');
        nameElement.textContent =  recipe.name;

        const imageElement = document.createElement('img');
        imageElement.src = recipe.image;
        imageElement.alt = recipe.name;

        // Append name and image elements to the recipe item div
        
        recipeItem.appendChild(imageElement);
        recipeItem.appendChild(nameElement);
        // Append the recipe item div to the container
        recipeContainer.appendChild(recipeItem);
    });
    
});

function validate() {
    const personalInfoForm = document.getElementById('personalInfoForm');
    if(personalInfoForm.checkValidity() ){
        placeOrder();
    }else{
        alert('Please fill all required inputs');
    }
    
}

//Function to place the order
function placeOrder() {
    //retrieve Input fields
    const cardNumberInput = document.getElementById('card-number');
    const cvvInput = document.getElementById('cvv');
    const expiryInput = document.getElementById('expiry');
    const cardholderNameInput = document.getElementById('cardholder-name');

    let cardNumber = cardNumberInput.value;
    cardNumber = cardNumber.replace(/\s/g, ""); //Removes the spaces in cardnumber input
    const cvv = cvvInput.value;
    const expiry = expiryInput.value;
    const cardholderName = cardholderNameInput.value;

    //validation creiteria for card number
    const validCardNumber = '0123456789012345';
    const validCVV = '123';
    const validExpiry = '12/24';
    const validCardholderName = cardholderName.trim().length > 0; // Just check if not empty

    
    //Check if all inputs are valid
    if (cardNumber=== validCardNumber && cvv === validCVV && expiry === validExpiry && validCardholderName) {
        //go to the success page
        window.location.href = '/pages/order/payment/payment-successful.html';
    } else {
        //go to unsuccessful page
        window.location.href = '/pages/order/payment/payment-unsuccessful.html';
    }
}

