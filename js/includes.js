document.addEventListener('DOMContentLoaded', () => {
    // Fetch and insert the navigation bar
    fetch('/includes/navigation-bar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error('Error fetching the navigation bar:', error));

    // Fetch and insert the footer
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching the footer:', error));

    // Fetch the external HTML template for recipes
    fetch('/includes/recipe/recipe-card.html')
        .then(response => response.text())
        .then(data => {
            // Insert the template into the placeholder
            document.getElementById('template-container').innerHTML = data;

            const recipes = [
                {
                    name: "Spaghetti Bolognese",
                    image: "path/to/spaghetti.jpg",
                    tags: ["Pasta", "Italian", "Dinner"]
                },
                {
                    name: "Chicken Curry",
                    image: "path/to/curry.jpg",
                    tags: ["Chicken", "Indian", "Spicy"]
                },
                {
                    name: "Avocado Toast",
                    image: "path/to/avocado.jpg",
                    tags: ["Breakfast", "Healthy", "Quick", "Vegetarian"]
                },
                {
                    name: "Carbonara",
                    image: "path/to/avocado.jpg",
                    tags: ["Italian", "Quick"]
                }
            ];

            const containers = document.querySelectorAll('.recipe-container');
            const template = document.getElementById('recipe-card-template').content;

            containers.forEach(container => {
                const containerTags = container.getAttribute('data-tags').split(',').map(tag => tag.trim());

                recipes.forEach(recipe => {
                    if (recipe.tags.some(tag => containerTags.includes(tag))) {
                        const clone = document.importNode(template, true);

                        // Set the image, name, and tags
                        clone.querySelector('.recipe-image').src = recipe.image;
                        clone.querySelector('.recipe-image').alt = recipe.name;
                        clone.querySelector('.recipe-name').textContent = recipe.name;

                        const tagsContainer = clone.querySelector('.recipe-tags');
                        recipe.tags.forEach(tag => {
                            const tagElement = document.createElement('span');
                            tagElement.classList.add('recipe-tag');
                            tagElement.textContent = tag;
                            tagsContainer.appendChild(tagElement);
                        });

                        // Append the clone to the container
                        container.appendChild(clone);
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching the template:', error));
});