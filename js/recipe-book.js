// Importing recipe books
import { recipeBook } from "/js/recipes.js";





//Dropdown bar
document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.dropdown-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var isActive = this.classList.contains('active');

            //close the dropdown 
            document.querySelectorAll('.dropdown-content').forEach(function (item) {
                item.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-header').forEach(function (item) {
                item.classList.remove('active');
            });

            //Toggle the dropdown
            if (!isActive) {
                content.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});

// Loading recipe
document.addEventListener('DOMContentLoaded', function () {
    // Access the recipe from the local storage in the recipe book variable
    const activeRecipe = localStorage.getItem('recipeName');
    console.log("Recipe name:" + activeRecipe);
    const recipe = recipeBook.find(recipe => recipe.name === activeRecipe);

    if (recipe) {
        // Print title & text nav
        const navTitle = document.querySelectorAll('.textNavTitle');
        const title = document.querySelectorAll('.recipeTitle');
        navTitle.forEach(text => {
            text.textContent = recipe.name;
        });
        title.forEach(text => {
            text.textContent = recipe.name;
        });

        //Inserting cover image
        const coverImage = document.getElementById('recipeCover');
        coverImage.src = recipe.images[0];

        // Insert nutrition information
        const dropdownContainer = document.getElementById('dropdownContent');
        recipe.nutritionInformation.forEach(nutrition => {
            const pTag = document.createElement('p');
            pTag.textContent = nutrition;
            dropdownContainer.appendChild(pTag);
        });

        //Insert ingredient information
        const ingredientContainer = document.getElementById('ingredientContainer');
        recipe.ingredients.forEach((ingredient, index) => {
            // Create an ingredient div
            const ingredientDiv = document.createElement('div');
            ingredientDiv.classList.add('ingredient');

            //Unique id so each label has its own checkbox
            const uniqueId = `ingredient-${index}`;

            // Create label
            const labelElement = document.createElement('label');
            labelElement.setAttribute('for', uniqueId);
            labelElement.classList.add('checkbox');

            // Create input element
            const inputElement = document.createElement('input');
            inputElement.classList.add('checkbox', 'ingredient');
            inputElement.setAttribute('type', 'checkbox');
            inputElement.setAttribute('id', uniqueId);

            //create span for the custom checkbox icon
            const spanElement = document.createElement('span');
            spanElement.classList.add('custom-checkbox');

            //Append input and span to the label
            labelElement.appendChild(inputElement);
            labelElement.appendChild(spanElement);

            //Create p tag for ingredient name
            const pElement = document.createElement('p');
            pElement.classList.add('ingredient-name');
            pElement.textContent = ingredient;

            //append label and p tag to ingredient div
            ingredientDiv.appendChild(labelElement);
            ingredientDiv.appendChild(pElement);

            //Append ingredient div to container
            ingredientContainer.appendChild(ingredientDiv);
        });

        //Adding recipe images 
        recipe.images.forEach((url, index) => {
            const img = document.getElementById(`image${index}`);
            //prevents image0 id since it doesn't exist
            if(img){
                img.src = url;
            }
        });

        //Adding recipe steps 
        recipe.instructions.forEach((step, index) => {
            const pTag = document.getElementById(`step${index}`);
            //prevents image0 id since it doesn't exist
            if(pTag){
                pTag.textContent = `Step ${index+1}. ` + step; //for indexing
            }
        });
        
    }
});

//Accordian menu tabs for mobile 

document.addEventListener("DOMContentLoaded", function() {
    const yellowMenu= document.querySelectorAll(".yellowMenu");
    const creamMenu = document.querySelectorAll(".creamMenu");

    let creamActive = false;
    let yellowActive = false;
    
    //All cream page items
    const creamElements = document.querySelectorAll('.creamHide');
    const yellowElements = document.querySelectorAll('.yellowHide');
    initialLoad();

    
    //Toggle cream menu
    creamMenu.forEach(button => {
        button.addEventListener("click", function() {
            if (window.innerWidth <= 768) { // Check if screen width is 768px or less
                //If cream menu is closed 
            if(creamActive === false){
                //Set both tab to active
                creamActive = true;
                yellowActive = true;
            }else{
                //Cream menu is open
                //close the menu
                creamActive = !creamActive;
                yellowActive = true;  
            }
            updateMenu();
            }
            
        });
    })
    

    // Toggle accordion functionality for the yellow section
    yellowMenu.forEach(button => {
        button.addEventListener("click", function() {
            if (window.innerWidth <= 768) { // Check if screen width is 768px or less
                //If yellow tab closed
            if(yellowActive === false){
                yellowActive = !yellowActive;
                creamActive = false;
            }else{
                //yellow menu is open
                //close the menu
                yellowActive = !yellowActive;
                creamActive = false; 
            }
            updateMenu();
            }
        });
    })

    function initialLoad(){
        if (window.innerWidth <= 768) { // Check if screen width is 768px or less
            updateMenu();
        }
    }

    function updateMenu(){
        if(yellowActive){
            yellowElements.forEach(element => {
                element.style.display = "flex";
            });
        }else{
            yellowElements.forEach(element => {
                element.style.display = "none";
            });
        }
    
        if(creamActive){
            creamElements.forEach(element => {
                element.style.display = "grid";
            }); 
        }else{
            creamElements.forEach(element => {
                element.style.display = "none";
            }); 
        }
        updateStyles();
    }

    function updateStyles(){
        const yellowPage = document.querySelectorAll('.page.yellow');
        const creamPage = document.querySelectorAll('.page.cream');
        const whitePage = document.querySelectorAll('.page.white');

        const yellowArrow = document.querySelectorAll('.yellowArrow');
        const blackArrow = document.querySelectorAll('.blackArrow');

        if(yellowActive && creamActive){
            whitePage.forEach(page => {
                page.style.paddingTop = "50vh";
            });
            yellowPage.forEach(page => {
                page.style.paddingBottom = "45vh";
            });
            yellowPage.forEach(page => {
                page.style.height = "90vh";
            });
            yellowPage.forEach(page => {
                page.style.bottom = "35vh";
            });
            creamPage.forEach(page => {
                page.style.height = "70vh";
            });
            creamPage.forEach(page => {
                page.style.bottom = "-14vh";
            });

            //Arrows
            yellowArrow.forEach(page => {
                page.style.transform = "rotate(180)";
            });
            blackArrow.forEach(page => {
                page.style.transform = "rotate(180)";
            });
        }else if(yellowActive && !creamActive){
            whitePage.forEach(page => {
                page.style.paddingTop = "50vh";
            });
            yellowPage.forEach(page => {
                page.style.paddingBottom = "45vh";
            });
            yellowPage.forEach(page => {
                page.style.height = "90vh";
            });
            yellowPage.forEach(page => {
                page.style.bottom = "35vh";
            });
            creamPage.forEach(page => {
                page.style.height = "18vh";
            });
            creamPage.forEach(page => {
                page.style.bottom = "-56vh";
            });

            //Arrows
            blackArrow.forEach(page => {
                page.style.transform = "rotate(0)";
            });
            
        }else if(!yellowActive && !creamActive){
            whitePage.forEach(page => {
                page.style.paddingTop = "10vh";
            });
            yellowPage.forEach(page => {
                page.style.paddingBottom = "0vh";
            });
            yellowPage.forEach(page => {
                page.style.height = "25vh";
            });
            yellowPage.forEach(page => {
                page.style.bottom = "0vh";
            });
            creamPage.forEach(page => {
                page.style.height = "18vh";
            });
            creamPage.forEach(page => {
                page.style.bottom = "-2vh";
            });
            //Arrows
            yellowArrow.forEach(page => {
                page.style.transform = "rotate(0)";
            });
            blackArrow.forEach(page => {
                page.style.transform = "rotate(0)";
            });
            
        }
    }
    
});