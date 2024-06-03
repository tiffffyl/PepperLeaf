//Importing recipes from recipe js page
import { recipes } from '/js/recipes.js';



//Payment method input validation and formatting
document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.payment-input');

    inputFields.forEach(function(inputField) {
        inputField.addEventListener('input', function() {
            let inputValue = this.value;
            const inputClass = this.classList[1]; 
            const displayElement = document.querySelector(`.input-display.${inputClass}`);
            if (this.id === 'card-number') {
                // Remove all non numbers
                inputValue = inputValue.replace(/\D/g, '');
                // format so theres a space every 4 numbers
                inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
                this.value = inputValue;
            } else if (this.id === 'expiry') {
                //remove all nonnumbers
                inputValue = inputValue.replace(/\D/g, '');
                //formtat inoput into MM/YY format
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
        
        
        
        //create a div for each recipe item
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        //Create HTML elements for name and image
        const nameElement = document.createElement('p');
        nameElement.textContent =  recipe.name;

        const imageElement = document.createElement('img');
        imageElement.src = recipe.image;
        imageElement.alt = recipe.name;

        //Append name and image elements to the recipe item div
        
        recipeItem.appendChild(imageElement);
        recipeItem.appendChild(nameElement);
        //append recipe item div to the container
        recipeContainer.appendChild(recipeItem);
    });
    
});


