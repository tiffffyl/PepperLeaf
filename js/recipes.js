//Holds all recipes to reduce code
export const recipes = [
    {
        name: "Vegan Rabokki",
        image: "/Assets/recipes/vegan-rabokki/vegan-rabokki-cover.jpg",
        tags: ["Easy", "Vegan", "Asian"], 
    },
    {
        name: "Chicken Laksa",
        image: "/Assets/recipes/chicken-laksa/chicken-laska-cover.webp",
        tags: ["Chicken", "Asian", "Easy"]
    },
    {
        name: "Beef & Basil Bolognese",
        image: "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-cover.webp",
        tags: ["Easy", "Italian"]
    },
    {
        name: "Tofu Dumplings with Miso Slaw",
        image: "/Assets/recipes/tofu-dumpling/tofu-dumpling-cover.webp",
        tags: ["Mexican", "Vegetarian"]
    },
    {
        name: "Spinach & Feta Ravioli with Zuccini",
        image: "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-cover.webp",
        tags: ["Italian", "Vegetarian"]
    },
    {
        name: "Halloumi Burgers with Aioli Chips",
        image: "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-cover.webp",
        tags: ["Vegetarian"]
    },
    {
        name: "Teriyaki Tofu Noodle Stir-fry",
        image: "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-cover.webp",
        tags: ["Asian", "Vegetarian"]
    }
];


export const recipeBook = [
    {
        name: "Chicken Laksa",
        images: [
            "/Assets/recipes/chicken-laksa/chicken-laska-cover.webp", 
            "/Assets/recipes/chicken-laksa/chicken-laska-1.webp",
            "/Assets/recipes/chicken-laksa/chicken-laska-2.webp",
            "/Assets/recipes/chicken-laksa/chicken-laska-3.webp",
            "/Assets/recipes/chicken-laksa/chicken-laska-4.webp",
            "/Assets/recipes/chicken-laksa/chicken-laska-5.webp",
            "/Assets/recipes/chicken-laksa/chicken-laska-6.webp",
        ],
        instructions: [
            ["Cook Paste ", "Heat oil in a medium saucepan over medium heat. Add chilli bean paste and cook, stirring frequently, for 30 seconds or until fragrant."],
            ["Add Coconut", "Milk Add coconut milk and 750ml (3 cups) water to the pan and bring to the boil."],
            ["Cook Chicken", "Add chicken to pan and bring to a simmer. Reduce heat to medium-low and cook chicken for 12–15 minutes or until cooked through. Remove chicken and allow to cool slightly. Keep broth warm over low heat until ready to serve."],
            ["Prepare Vegetables", "Meanwhile, thinly slice bok choy. Trim and diagonally halve snow peas. Once chicken is cooled, use clean hands or two forks to shred."],
            ["Cook Vegetables", "Place snow peas, bok choy and noodles in a heatproof bowl. Pour over boiling water and set aside for 4 minutes to soften. Drain."],
            ["Plate up", "Roughly chop coriander. Cut lime into wedges. Divide noodles, vegetables and chicken between bowls. Spoon over hot laksa broth and top with coriander. Serve with lime wedges."],
        ],
        ingredients: [
            "50g chilli bean paste", 
            "200ml coconut milk", 
            "330g chicken breast fillet", 
            "1 bok choy bulb", 
            "50g snow peas", 
            "400g Hokkien noodles", 
            "1 bunch coriander", 
            "1 lime", 
            "20ml vegetable oil"
        ],
        nutritionInformation: [
            "Calories: 805.9kCal",
            "Energy: 3371.8kJ",
            "Saturated Fats: 25.0g",
            "Carbohydrate: 79.9g",
            "Sugar: 15.8g",
            "Protein: 50.2g",
            "Sodium: 581.2mg"
        ]
    },
    {
        name: "Teriyaki Tofu Noodle Stir-fry",
        images: [
            "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-cover.webp", 
            "/Assets/recipes/teryiaki-tofu-stir-fry/teriyaki-tofu-1.webp", 
            "/Assets/recipesteriyaki-tofu-stir-fry/teriyaki-tofu-2.webp", 
            "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-3.webp", 
            "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-4.webp", 
            "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-5.webp", 
            "/Assets/recipes/teriyaki-tofu-stir-fry/teriyaki-tofu-6.webp", 
        ],
        instructions: [
            ["Cook Noodles ", "Place noodles in a heatproof bowl and cover with boiling water. Set aside for 5 minutes to soften. Drain. While the noodles are cooking, continue with step 2."],
            ["Prepare Ingredients", "Dice tofu into 3cm pieces. Cut broccoli into florets and thinly slice stem. Crush garlic."],
            ["Cook Tofu ", "Heat a frypan or wok over medium-high heat and add vegetable oil and tofu. Cook, stirring occasionally, for 3–4 minutes or until tofu is golden brown."],
            ["Add Broccoli", "Add broccoli and garlic to frypan with 40ml (2 tablespoons) water. Cover with a lid and cook for 1–2 minutes or until broccoli is tender but retains some bite."],
            ["Add Noodles & Sauce", "Add noodles, teriyaki sauce, sesame oil and a good sprinkle of salt and mix well to combine until noodles are coated in sauce and warmed through."],
            ["Plate up", "Remove from heat, add baby spinach leaves and mix until just wilted. Season with salt and pepper. Divide between bowls and serve."],
        ],
        ingredients: [
            "400g udon noodles", 
            "150g firm tofu", 
            "1 head broccoli", 
            "1 garlic clove", 
            "75g teriyaki sauce", 
            "10ml sesame oil", 
            "60g baby spinach leaves", 
        ],
        nutritionInformation: [
            "Calories 530.8kCal",
            "Energy 2220.9kJ",
            "Fat 18.1g",
            "Saturated Fat 2.6g",
            "Carbohydrate: 69.9g",
            "Sugar: 13.7g",
            "Protein: 21.3g",
            "Sodium: -4.4mg"
        ]
    },
    {
        name: "Halloumi Burgers with Aioli Chips",
        images: [
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-cover.webp", 
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-1.webp",
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-2.webp",
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-3.webp", 
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-4.webp", 
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-5.webp", 
            "/Assets/recipes/halloumi-burgers-chip/halloumi-burgers-chip-6.webp" 
        ],
        instructions: [
            ["Bake Chips ", "Preheat oven to 200°C fan-forced. Slice potatoes into wedges, drizzle with 2 teaspoons oil and sprinkle with salt. Bake for 25 minutes or until golden. While the chips are cooking, continue with step 2."],
            ["Prepare Ingredients", "Halve cherry tomatoes. Pick basil leaves from their stems. Crush garlic. Finely chop eschalot and place in a bowl with garlic, red wine vinegar, 2 teaspoons olive oil and ¼ teaspoon salt."],
            ["Make Caper Aioli ", "Roughly chop capers. Finely zest and juice lemon. Place aioli, capers, lemon zest and juice in a small bowl and stir to combine."],
            ["Blister Tomatoes", "Heat 2 teaspoons oil in a frypan over medium heat. Add tomato and cook, stirring, for 2 minutes or until slightly blistered and collapsed. Add eschalot dressing and cook for 30–60 seconds or until fragrant. Add most of the basil leaves, stir, then transfer to a bowl and season to taste. Wipe out pan."],
            ["Cook Halloumi", "Halve halloumi horizontally to yield 2 thinner pieces. Return frypan to medium-high heat with remaining olive oil and halloumi. Cook for 1–2 minutes each side or until golden. Remove from pan and keep warm. Wipe out frypan."],
            ["Plate up", "Toast buns in frypan for 1–2 minutes or until golden. Spread buns with caper aioli and top with halloumi, some rocket and spoon over a little of the blistered tomatoes. Top with remaining basil and replace bun tops. Serve with chips, remaining blistered tomatoes and rocket leaves on the side."],
        ],
        ingredients: [
            "2 desiree potatoes",
            "250g cherry tomatoes",
            "1 bunch basil",
            "1 garlic clove",
            "1 eschalot",
            "15g baby capers",
            "½ lemon",
            "40g aioli",
            "225g halloumi",
            "2 burger buns",
            "60g rocket leaves"
        ],
        nutritionInformation: [
            "Calories 939.2kCal",
            "Energy 3929.5kJ",
            "Fat 62.4g",
            "Saturated Fat 5.8g",
            "Carbohydrate 53.9g",
            "Sugar 14.9g",
            "Protein 37.7g",
            "Sodium 887.6mg"
        ]
    },
    {
        name: "Spinach & Feta Ravioli with Zuccini",
        images: [
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-cover.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-1.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-2.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-3.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-4.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-5.webp",
            "/Assets/recipes/spinach-feta-ravioli/spinach-feta-ravioli-6.webp",
             
        ],
        instructions: [
            ["Prepare Ingredients", "Bring a large saucepan of salted water to the boil. Meanwhile, cut zucchini into 1cm pieces. Finely grate lemon zest and juice. Thinly slice garlic. Roughly chop dill."],
            ["Cook Zucchini", "Melt butter in a frypan over medium heat. Add zucchini and cook, stirring, for 4–5 minutes or until golden and softened. Add garlic and lemon zest and cook for 30 seconds or until fragrant. While the zucchini is cooking, continue with step 3."],
            ["Prepare Salad", "Thinly slice pear. Place pear, ½ the lemon juice, olive oil, salt and pepper in a bowl big enough for the salad and toss to combine. Set aside until ready to serve."],
            ["Cook Ravioli", "Add ravioli to boiling water and cook for 3 minutes. Drain, reserving 60ml (¼ cup) pasta cooking water."],
            ["Add Ravioli", "Add ravioli to zucchini mixture with baby spinach leaves, ½ the parmesan, dill, remaining lemon juice and reserved pasta cooking water. Gently toss to coat ravioli in sauce. Season to taste with salt and pepper."],
            ["Plate Up", "Add rocket to bowl with pear and toss to combine. Divide ravioli between plates and sprinkle with remaining parmesan. Serve with pear and rocket salad."]
        ],
        ingredients: [
            "1 zucchini",
            "½ lemon",
            "1 garlic clove",
            "1 bunch dill",
            "½ pear",
            "325g spinach and feta ravioli",
            "60g baby spinach leaves",
            "25g grated parmesan",
            "60g rocket leaves"
        ],
        nutritionInformation: [
            "Calories 552.7kCal",
            "Energy 2307.6kJ",
            "Fat 26.7g",
            "Saturated Fat 12.8g",
            "Carbohydrate 55.2g",
            "Sugar 13.2g",
            "Protein 20.9g",
            "Sodium 1066.0mg"
        ]
    },
    {
        name: "Beef & Basil Bolognese",
        images: [
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-cover.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-1.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-2.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-3.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-4.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-5.webp",
            "/Assets/recipes/beef-basil-bolognese/beef-basil-bolognese-6.webp",
        ],
        instructions: [
            ["Cook Pasta", "Cook pasta in a large saucepan of salted, boiling water for 9 minutes or until al dente. Drain well, reserving 185ml (¾ cup) cooking water."],
            ["Prepare Vegetables", "Meanwhile, crush garlic, pick basil leaves from their stems and halve cherry tomatoes."],
            ["Brown Mince", "Heat oil in a frypan over medium-high heat. Add mince and cook, breaking up any lumps with a wooden spoon, for 5-6 minutes or until golden and caramelised."],
            ["Add Aromatics", "Add garlic and ½ the basil leaves and cook, stirring, for 1 minute or until fragrant. Add tomato paste and cook for 1–2 minutes or until caramelised. Season with salt and pepper."],
            ["Add Pasta", "Add spaghetti, tomatoes, spinach and reserved pasta water and toss to combine. Cook for 2 minutes or until spinach is wilted and pasta is warmed through."],
            ["Plate Up", "Divide Bolognese between bowls. Top with remaining basil leaves and sprinkle with parmesan to serve."]
        ],
        ingredients:[
            "200g spaghetti",
            "1 garlic clove",
            "1 bunch basil",
            "250g cherry tomatoes",
            "250g beef mince",
            "50g tomato paste",
            "60g baby spinach leaves",
            "25g grated parmesan"
        ],
        nutritionInformation: [
            "Calories 755.0kCal",
            "Energy 3159.1kJ",
            "Fat 26.5g",
            "Saturated Fat 9.3g",
            "Carbohydrate 80.0g",
            "Sugar 8.8g",
            "Protein 47.7g",
            "Sodium 239.6mg"
        ]
    },
    {
        name: "Vegan Rabokki",
        images: [
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-cover.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-1.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-2.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-3.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-4.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-5.jpg",
            "/Assets/recipes/vegan-rabokki/vegan-rabokki-6.jpg",
        ],
        instructions: [
            ["Add aromatics to pan", "Add the gochujang paste, sugar, soy sauce, and garlic to a large non-stick pan."],
            ["Add rice cakes", "Next, add the rice cakes and cover with the water."],
            ["Let simmer", "Bring to a boil and lower the heat to a simmer. Let the rice cakes simmer in the sauce for 7-8 minutes, stirring regularly to prevent them from sticking to the pan."],
            ["Add the sausages and green onions", "Add the sliced vegan sausages and green onions and let simmer for another 3-5 minutes."],
            ["Add the noodles", "Once the rice cakes are tender, add the instant noodles and let simmer for another 2-3 minutes or until the noodles are cooked. Note: If the sauce is too liquid, let simmer for another 3-5 minutes or until it is slightly thicker."],
            ["Plate Up", "Finally, divide into bowls and garnish with chopped green onions and toasted sesame seeds!"]
        ],
        ingredients:[
            "rice cakes",
            "Instant noodles",
            "Gochujang",
            "Garlic",
            "Soy sauce",
            "sugar",
            "green onions",
            "vegan sausage"
        ],
        nutritionInformation: [
            "Calories 755.0kCal",
            "Energy 3159.1kJ",
            "Fat 26.5g",
            "Saturated Fat 9.3g",
            "Carbohydrate 80.0g",
            "Sugar 8.8g",
            "Protein 47.7g",
            "Sodium 239.6mg"
        ]
    },
    {
        name: "Tofu Dumplings with Miso Slaw",
        images: [
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-cover.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-1.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-2.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-3.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-4.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-5.webp",
            "/Assets/recipes/tofu-dumpling/tofu-dumpling-6.webp",
        ],
        instructions: [
            ["Make Miso Dressing", "Juice lime and place in a bowl with miso, aioli and sesame seeds. Mix to combine and set aside."],
            ["Prepare Kale", "Pick kale leaves from their steams and thinly slice. Place in a large bowl, season with salt and massage to soften leaves."],
            ["Make Slaw", "Thinly slice cabbage. Place kale and cabbage in a bowl with miso dressing and season with a pinch of salt. Toss to combine."],
            ["Cook Dumplings", "Heat oil in a frypan with lid over medium heat. Add dumplings, flat-side down, and cook for 2–3 minutes or until the bottoms are deep golden. Carefully add 60ml (¼ cup) water to the pan, reduce heat to low and cover with a lid. Allow dumplings to steam for a further 2–3 minutes."],
            ["Cook Rice", "Cook rice according to packet instructions."],
            ["Plate Up", "Divide rice and miso slaw between bowls and top with dumplings. Spoon over soy sauce (or place in a bowl on the side for dipping) and sprinkle with Japanese-Style Seven Spice to serve."]
        ],
        ingredients: [
            "½ lime",
            "10g miso paste",
            "40g aioli",
            "2 tsp roasted sesame seeds",
            "1 bunch kale",
            "1 wedge green cabbage",
            "275g vegetable and tofu dumplings",
            "250g microwavable long grain rice",
            "1 tsp Japanese-Style Seven Spice"
        ],
        nutritionInformation: [
            "Calories 694.1kCal",
            "Energy 2904.1kJ",
            "Fat 28.0g",
            "Saturated Fat 2.2g",
            "Carbohydrate 96.2g",
            "Sugar 6.7g",
            "Protein 22.5g",
            "Sodium 1390.8mg"
        ]
    }
];