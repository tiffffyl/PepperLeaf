
document.addEventListener('DOMContentLoaded', () => {
    //FUNCTION NOT WORKING
    //loadDishes();
});


//FUNCITON DOES NOT WORK!
// function loadDishes() {
//     console.log("fetching dishes");
//     // Accessing items stored on the local storage & printing in tags
//     let servingSize = localStorage.getItem('servingSize');
//     document.getElementsByClassName('serving-size').textContent = servingSize.toString();
//     let mealQuantity = localStorage.getItem('mealQuantity');
//     document.getElementsByClassName('meal-quantity').textContent = mealQuantity.toString();
        
//     let dishes = localStorage.getItem('selectedRecipes');
//     const dishContainer = document.getElementById('dishContainer');
//     console.log(dishContainer);
    
//     // Parse local storage string into array
//     let dishArray = JSON.parse(dishes);
    
//     // Loop through all dishes 
//     dishArray.forEach(item => {
//         // Find the recipe object with the string key
//         const recipe = recipes.find(recipe => recipe.name === item);
        
//         // Create a div for each recipe item
//         const recipeItem = document.createElement('div');
//         recipeItem.classList.add('recipe-item');

//         // Create HTML elements for name and image
//         const nameElement = document.createElement('p');
//         nameElement.textContent =  recipe.name;

//         const imageElement = document.createElement('img');
//         imageElement.src = recipe.image;

//         // Append name and image elements to the recipe item div
//         recipeItem.appendChild(imageElement);
//         recipeItem.appendChild(nameElement);
//         console.log(recipeItem);
//         // Append the recipe item div to the container
//         dishContainer.appendChild(recipeItem);
//     });
// }

