//Importing recipes from recipe js page
import { recipes } from '/js/recipes.js';

document.addEventListener('DOMContentLoaded', function() {
    const servingSizeRadios = document.querySelectorAll('input[name="serving-size"]');
    const mealQuantityRadios = document.querySelectorAll('input[name="meal-quantity"]');
    const dishesContainer = document.getElementById('dishes');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartOverlay = document.getElementById('cart');
    const closeCartButton = document.getElementById('close-cart');

    
    async function updateDishes() {
        //Max & min dishes user can select
        const quantity = document.querySelector('input[name="meal-quantity"]:checked').value;
        
        const recipeContainer = document.getElementById('recipe-scroll');
        recipeContainer.innerHTML = '';
        dishesContainer.innerHTML = '';
    
        // Fetch the template HTML from the separate file
        const response = await fetch('/includes/recipe/recipe-card.html');
        const templateHTML = await response.text();
    
        // Create a DOM element from the template HTML
        const parser = new DOMParser();
        const templateDoc = parser.parseFromString(templateHTML, 'text/html');
        const template = templateDoc.getElementById('recipe-card-template');

        let checkedCount = 0; // Counter for checked checkboxes
        const checkedItemsDiv = document.getElementById('checked-items');
        checkedItemsDiv.innerHTML = ''; // Clear the previous content


        recipes.forEach((recipe, index) => {
            const clone = document.importNode(template.content, true);
            const recipeCard = clone.querySelector('.recipe-card');
            const recipeLink = clone.querySelector('.recipe-link');
            const recipeImage = clone.querySelector('.recipe-image');
            const recipeName = clone.querySelector('.recipe-name');
            const recipeTags = clone.querySelector('.recipe-tags');

            recipeCard.classList.add('recipe-checkbox');

            //Create the invisible checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `recipe${index}`;
            checkbox.name = 'recipe';
            checkbox.value = recipe.name;
            checkbox.style.display = 'none'; 

             

            //Set the image and alt text
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;

            recipeName.textContent = recipe.name;

            recipe.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.textContent = tag;
                recipeTags.appendChild(tagSpan);
            });

            

            recipeCard.appendChild(checkbox);
            recipeContainer.appendChild(clone);
            
            // Add event listener to toggle checkbox and limit selection
            recipeLink.addEventListener('click', function(event) {
                event.preventDefault();
                
                if (checkedCount < quantity || checkbox.checked) {
                    checkbox.checked = !checkbox.checked;
                    recipeLink.classList.toggle('selected', checkbox.checked);
                    recipeImage.classList.toggle('dimmed', checkbox.checked);
                    checkedCount += checkbox.checked ? 1 : -1;
                }
                updateCheckedItems(); // Update the displayed checked items
            });

            // Initialize checkedCount based on initially checked checkboxes
            if (checkbox.checked) {
                checkedCount++;
            }
        
        });

         // Function to update the displayed checked items
        function updateCheckedItems(maxQuantity) {
            checkedItemsDiv.innerHTML = ''; // Clear previous content
            const checkedItems = Array.from(document.querySelectorAll('input[name="recipe"]:checked')).map(input => input.value);
            const selectedCount = checkedItems.length;
            const maxSelection =document.querySelector('input[name="meal-quantity"]:checked').value;

            // Display selected count in the existing .item-count element
            const itemCountElement = document.querySelector('.item-count');
            itemCountElement.textContent = `${selectedCount}/${maxSelection}`;


            //Displays each checked item
            checkedItems.forEach((itemName, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('checked-item');

                //Append image url
                const itemImage = document.createElement('img');
                itemImage.classList.add('checked-item-image');
                const recipe = recipes.find(recipe => recipe.name === itemName);
                itemImage.src = recipe.image;
                itemImage.alt = recipe.name;
                itemDiv.appendChild(itemImage);

                const itemText = document.createElement('div');
                itemText.classList.add('checked-item-text');
                itemText.textContent = `${itemName}`;
                itemDiv.appendChild(itemText);

                checkedItemsDiv.appendChild(itemDiv);
            });
        }

        // Initial update of displayed checked items
        updateCheckedItems();

        //event listerner to preven user from selecting too few dishes
        document.getElementById('add-to-cart').addEventListener('click', function(event) {
            if (checkedCount < quantity) {
                event.preventDefault();
                alert(`Please select at least ${quantity} dishes.`);
            } else {
                window.location.href = '/pages/order/checkout.html'; 
            }
        });
        
    }

    

    function updateLocalStorage() {
        const selectedServingSize = document.querySelector('input[name="serving-size"]:checked').value;
        const selectedMealQuantity = document.querySelector('input[name="meal-quantity"]:checked').value;
        const selectedRecipes = Array.from(document.querySelectorAll('input[name="recipe"]:checked'))
            .map(checkbox => checkbox.value);

        localStorage.setItem('servingSize', selectedServingSize);
        localStorage.setItem('mealQuantity', selectedMealQuantity);
        localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
    }

    function updateCartDisplay() {
        const servingSizeValue = localStorage.getItem('servingSize');
        const mealQuantityValue = localStorage.getItem('mealQuantity');
        const selectedRecipes = JSON.parse(localStorage.getItem('selectedRecipes')) || [];

        for (let radio of servingSizeRadios) {
            if (radio.value === servingSizeValue) {
                radio.checked = true;
                break;
            }
        }

        for (let radio of mealQuantityRadios) {
            if (radio.value === mealQuantityValue) {
                radio.checked = true;
                break;
            }
        }

        updateDishes();

        selectedRecipes.forEach(recipe => {
            const checkbox = document.querySelector(`input[name="recipe"][value="${recipe}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }

    function addToCart() {
        
        updateLocalStorage();
        cartOverlay.style.display = 'block';
    }

    addToCartButton.addEventListener('click', addToCart);
    closeCartButton.addEventListener('click', function() {
        cartOverlay.style.display = 'none';
    });

    for (let radio of mealQuantityRadios) {
        radio.addEventListener('change', updateDishes);
    }

    updateCartDisplay();

    //Manages the page slideshow
    const pages = document.querySelectorAll('.page');
    const nextPageButtons = document.querySelectorAll('[id^=next]');
    const prevPageButtons = document.querySelectorAll('[id^=prev]');

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    nextPageButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const currentPage = Array.from(pages).findIndex(page => page.classList.contains('active'));
            if (currentPage >= 0 && currentPage < pages.length - 1) {
                showPage(currentPage + 1);
            }
        });
    });

    prevPageButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const currentPage = Array.from(pages).findIndex(page => page.classList.contains('active'));
            if (currentPage > 0) {
                showPage(currentPage - 1);
            }
        });
    });

    
});