import { RecipesType } from "../types/recipe";

export const recipesMocks:RecipesType = {
  recipes: [
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 19,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 10,
      healthScore: 35,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 93.35,
      extendedIngredients: [
        {
          id: 110457,
          aisle: 'Produce',
          image: 'spinach.jpg',
          consistency: 'SOLID',
          name: 'baby spinach',
          nameClean: 'baby spinach',
          original: '1/2 package fresh baby spinach stems removed and cleaned',
          originalName: 'fresh baby spinach stems removed and cleaned',
          amount: 0.5,
          unit: 'package',
          meta: ['fresh', 'cleaned'],
          measures: {
            us: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' },
            metric: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' }
          }
        },
        {
          id: 10020409,
          aisle: 'Pasta and Rice',
          image: 'egg-noodles.jpg',
          consistency: 'SOLID',
          name: 'fettuccine',
          nameClean: 'fettuccine',
          original: '1 pound of Fettuccine Barilla',
          originalName: 'Fettuccine Barilla',
          amount: 1.0,
          unit: 'pound',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 11215,
          aisle: 'Produce',
          image: 'garlic.png',
          consistency: 'SOLID',
          name: 'garlic clove',
          nameClean: 'garlic',
          original: '1 garlic clove',
          originalName: 'garlic clove',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 4053,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'olive-oil.jpg',
          consistency: 'LIQUID',
          name: 'olive oil',
          nameClean: 'olive oil',
          original: '1/4 cup Olive oil',
          originalName: 'Olive oil',
          amount: 0.25,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 11297,
          aisle: 'Produce;Spices and Seasonings',
          image: 'parsley.jpg',
          consistency: 'SOLID',
          name: 'parsley',
          nameClean: 'parsley',
          original: '1 tablespoon freshly chopped parsley',
          originalName: 'freshly chopped parsley',
          amount: 1.0,
          unit: 'tablespoon',
          meta: ['chopped'],
          measures: {
            us: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' },
            metric: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' }
          }
        },
        {
          id: 15270,
          aisle: 'Seafood',
          image: 'shrimp.png',
          consistency: 'SOLID',
          name: 'prawns',
          nameClean: 'shrimp',
          original: '1 pound of fresh prawns, shell and tail removes and deveined',
          originalName: 'fresh prawns, shell and tail removes and deveined',
          amount: 1.0,
          unit: 'pound',
          meta: ['fresh', 'deveined'],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 1102047,
          aisle: 'Spices and Seasonings',
          image: 'salt-and-pepper.jpg',
          consistency: 'SOLID',
          name: 'salt and pepper',
          nameClean: 'salt and pepper',
          original: 'Salt and Pepper to taste',
          originalName: 'Salt and Pepper to taste',
          amount: 4.0,
          unit: 'servings',
          meta: ['to taste'],
          measures: {
            us: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomatoes',
          nameClean: 'tomato',
          original: '4 fresh tomatoes, seed removed and chopped',
          originalName: 'fresh tomatoes, seed removed and chopped',
          amount: 4.0,
          unit: '',
          meta: ['fresh', 'chopped'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1145,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 teaspoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'teaspoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 14106,
          aisle: 'Alcoholic Beverages',
          image: 'white-wine.jpg',
          consistency: 'LIQUID',
          name: 'white wine',
          nameClean: 'dry white wine',
          original: '1/2 cup White wine',
          originalName: 'White wine',
          amount: 0.5,
          unit: 'cup',
          meta: ['white'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6502139,
      title: 'The first recipe',
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: 'http://www.foodista.com/recipe/GYVMPF7R/linguine-with-prawns-fresh-tomatoes-and-spinach',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/650139-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Linguine with Prawns, Fresh Tomatoes and Spinach might be just the main course you are searching for. This recipe serves 4 and costs $3.93 per serving. Watching your figure? This pescatarian recipe has <b>742 calories</b>, <b>41g of protein</b>, and <b>23g of fat</b> per serving. Head to the store and pick up butter, fettuccine barilla, salt and pepper, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. A couple people made this recipe, and 10 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/linguine-with-fresh-tomatoes-443547">Linguine with Fresh Tomatoes</a>, <a href="https://spoonacular.com/recipes/linguinie-with-prawns-spinach-tomatoes-and-goat-cheese-567454">Linguinie with Prawns, Spinach, Tomatoes and Goat Cheese</a>, and <a href="https://spoonacular.com/recipes/linguine-with-fresh-tuna-tomatoes-and-lemon-7856">Linguine with Fresh Tuna, Tomatoes and Lemon</a> for recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main dish', 'dinner'],
      diets: ['pescatarian'],
      occasions: [],
      instructions:
        '<ol><li>Cook the Linguine according to package direction.</li><li>In a large skillet under medium heat melt the butter with the olive oil. Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender. Add the spinach, the wine and the prawns. Saute until the prawns are pink and the spinach wilted.</li><li>Drain the pasta, add it to the skillet and mix well.</li><li>Serve hot.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Cook the Linguine according to package direction.In a large skillet under medium heat melt the butter with the olive oil.',
              ingredients: [
                { id: 4053, name: 'olive oil', localizedName: 'olive oil', image: 'olive-oil.jpg' },
                { id: 10720420, name: 'linguine', localizedName: 'linguine', image: 'spaghetti.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender.',
              ingredients: [
                { id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' },
                { id: 11297, name: 'parsley', localizedName: 'parsley', image: 'parsley.jpg' },
                { id: 11215, name: 'garlic', localizedName: 'garlic', image: 'garlic.png' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Add the spinach, the wine and the prawns.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' },
                { id: 14084, name: 'wine', localizedName: 'wine', image: 'red-wine.jpg' }
              ],
              equipment: []
            },
            {
              number: 4,
              step: 'Saute until the prawns are pink and the spinach wilted.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' }
              ],
              equipment: []
            },
            {
              number: 5,
              step: 'Drain the pasta, add it to the skillet and mix well.',
              ingredients: [{ id: 20420, name: 'pasta', localizedName: 'pasta', image: 'fusilli.jpg' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            { number: 6, step: 'Serve hot.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: 151515,
      spoonacularSourceUrl: 'https://spoonacular.com/linguine-with-prawns-fresh-tomatoes-and-spinach-650139'
    },
    {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: true,
      weightWatcherSmartPoints: 17,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 104,
      healthScore: 1,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 1001.39,
      extendedIngredients: [
        {
          id: 2001,
          aisle: 'Spices and Seasonings',
          image: 'allspice-ground.jpg',
          consistency: 'SOLID',
          name: 'allspice',
          nameClean: 'allspice',
          original: '¼ tsp allspice',
          originalName: 'allspice',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 19334,
          aisle: 'Baking',
          image: 'light-brown-sugar.jpg',
          consistency: 'SOLID',
          name: 'brown sugar',
          nameClean: 'golden brown sugar',
          original: '1 cup brown sugar, packed',
          originalName: 'brown sugar, packed',
          amount: 1.0,
          unit: 'cup',
          meta: ['packed'],
          measures: {
            us: { amount: 1.0, unitShort: 'cup', unitLong: 'cup' },
            metric: { amount: 236.588, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1001,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'butter',
          nameClean: 'butter',
          original: '1/2 stick butter',
          originalName: 'butter',
          amount: 0.5,
          unit: 'stick',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' },
            metric: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' }
          }
        },
        {
          id: 2010,
          aisle: 'Spices and Seasonings',
          image: 'cinnamon.jpg',
          consistency: 'SOLID',
          name: 'cinnamon',
          nameClean: 'cinnamon',
          original: '1 tsp cinnamon',
          originalName: 'cinnamon',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'granulated sugar',
          nameClean: 'sugar',
          original: '½ cup granulated sugar',
          originalName: 'granulated sugar',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 2011,
          aisle: 'Spices and Seasonings',
          image: 'cloves.jpg',
          consistency: 'SOLID',
          name: 'ground cloves',
          nameClean: 'ground clove',
          original: '¼ tsp ground cloves',
          originalName: 'ground cloves',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12111111,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'maple extract',
          nameClean: 'maple extract',
          original: '1 tsp maple extract',
          originalName: 'maple extract',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2025,
          aisle: 'Spices and Seasonings',
          image: 'ground-nutmeg.jpg',
          consistency: 'SOLID',
          name: 'nutmeg',
          nameClean: 'nutmeg',
          original: '¼ tsp nutmeg',
          originalName: 'nutmeg',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12142,
          aisle: 'Nuts;Baking',
          image: 'pecans.jpg',
          consistency: 'SOLID',
          name: 'pecans',
          nameClean: 'pecans',
          original: '2 cups pecans',
          originalName: 'pecans',
          amount: 2.0,
          unit: 'cups',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 473.176, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 14412,
          aisle: 'Beverages',
          image: 'water.png',
          consistency: 'LIQUID',
          name: 'water',
          nameClean: 'water',
          original: '1/2 cup water',
          originalName: 'water',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6368164,
      title: 'Candied Spiced Pecans',
      readyInMinutes: 45,
      servings: 8,
      sourceUrl: 'http://www.foodista.com/recipe/HSRTFJ3N/candied-spiced-pecans',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/636864-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Candied Spiced Pecans might be just the hor d\'oeuvre you are searching for. This recipe makes 8 servings with <b>376 calories</b>, <b>2g of protein</b>, and <b>24g of fat</b> each. For <b>$1.01 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is a good option if you\'re following a <b>gluten free, fodmap friendly, and vegetarian</b> diet. A mixture of water, ground cloves, butter, and a handful of other ingredients are all it takes to make this recipe so tasty. 104 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so awesome. Try <a href="https://spoonacular.com/recipes/candied-pecans-901775">Candied Pecans</a>, <a href="https://spoonacular.com/recipes/candied-pecans-630200">Candied Pecans</a>, and <a href="https://spoonacular.com/recipes/candied-pecans-475782">Candied Pecans</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['side dish'],
      diets: ['gluten free', 'lacto ovo vegetarian', 'fodmap friendly'],
      occasions: [],
      instructions:
        '<ol><li>Preheat oven to 300 F.</li><li>Line a cookie sheet with tin foil and coat with cooking spray. Set aside.</li><li>In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.</li><li>In a small bowl, whisk together maple extract, brown sugar and water.</li><li>Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil. Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.</li><li>With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.</li><li>Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes. Let cool completely before serving.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 300 F.Line a cookie sheet with tin foil and coat with cooking spray. Set aside.In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.In a small bowl, whisk together maple extract, brown sugar and water.Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil.',
              ingredients: [
                {
                  id: 10719335,
                  name: 'granulated sugar',
                  localizedName: 'granulated sugar',
                  image: 'sugar-in-bowl.png'
                },
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12111111, name: 'maple extract', localizedName: 'maple extract', image: 'vanilla-extract.jpg' },
                { id: 19334, name: 'brown sugar', localizedName: 'brown sugar', image: 'dark-brown-sugar.png' },
                { id: 2001, name: 'allspice', localizedName: 'allspice', image: 'allspice-ground.jpg' },
                { id: 2010, name: 'cinnamon', localizedName: 'cinnamon', image: 'cinnamon.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 1002011, name: 'clove', localizedName: 'clove', image: 'cloves.jpg' },
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 2025, name: 'nutmeg', localizedName: 'nutmeg', image: 'ground-nutmeg.jpg' },
                { id: 14412, name: 'water', localizedName: 'water', image: 'water.png' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' },
                { id: 404661, name: 'whisk', localizedName: 'whisk', image: 'whisk.png' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' },
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 300.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.',
              ingredients: [
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' }
              ],
              equipment: [
                { id: 404636, name: 'slotted spoon', localizedName: 'slotted spoon', image: 'slotted-spoon.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 2, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes.',
              ingredients: [
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 30, unit: 'minutes' }
            },
            { number: 4, step: 'Let cool completely before serving.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/candied-spiced-pecans-636864'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 22,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 63,
      healthScore: 15,
      pricePerServing: 2906.78,
      extendedIngredients: [
        {
          id: 10211821,
          aisle: 'Produce',
          image: 'bell-pepper-orange.png',
          consistency: 'SOLID',
          name: 'bell pepper',
          nameClean: 'bell pepper',
          original: 'Black pepper',
          originalName: 'Black pepper',
          amount: 2.0,
          unit: 'servings',
          meta: ['black'],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 18064,
          aisle: 'Bakery/Bread',
          image: 'white-bread.jpg',
          consistency: 'SOLID',
          name: 'bread',
          nameClean: 'bread',
          original: '4 pieces of good quality bread, lightly toasted',
          originalName: 'good quality bread, lightly toasted',
          amount: 4.0,
          unit: 'pieces',
          meta: ['lightly toasted'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11252,
          aisle: 'Produce',
          image: 'iceberg-lettuce.jpg',
          consistency: 'SOLID',
          name: 'lettuce',
          nameClean: 'lettuce',
          original: 'Lettuce',
          originalName: 'Lettuce',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 4025,
          aisle: 'Condiments',
          image: 'mayonnaise.png',
          consistency: 'LIQUID',
          name: 'mayonnaise',
          nameClean: 'mayonnaise',
          original: 'Mayonnaise',
          originalName: 'Mayonnaise',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 10310123,
          aisle: 'Meat',
          image: 'raw-bacon.png',
          consistency: 'SOLID',
          name: 'thick-cut bacon',
          nameClean: 'thick cut bacon',
          original: '8 pieces Thick-sliced bacon',
          originalName: 'Thick-sliced bacon',
          amount: 8.0,
          unit: 'pieces',
          meta: [],
          measures: {
            us: { amount: 8.0, unitShort: '', unitLong: '' },
            metric: { amount: 8.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomato',
          nameClean: 'tomato',
          original: '1 tomato, sliced thin',
          originalName: 'tomato, sliced thin',
          amount: 1.0,
          unit: '',
          meta: ['sliced', 'thin'],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        }
      ],
      id: 65342,
      title: 'BLT Sandwich',
      readyInMinutes: 45,
      servings: 2,
      sourceUrl: 'http://www.foodista.com/recipe/24R6RD65/blt-sandwich',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635342-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Need a <b>dairy free main course</b>? BLT Sandwich could be an awesome recipe to try. This recipe makes 2 servings with <b>657 calories</b>, <b>20g of protein</b>, and <b>60g of fat</b> each. For <b>$2.6 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. If you have pepper, thick- bacon, mayonnaise, and a few other ingredients on hand, you can make it. To use up the bread you could follow this main course with the <a href="https://spoonacular.com/recipes/coffee-cake-banana-bread-509375">Coffee Cake Banana Bread</a> as a dessert. 63 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 54%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/blt-salad-916021">BLT Salad</a>, <a href="https://spoonacular.com/recipes/blt-salad-917813">BLT Salad</a>, and <a href="https://spoonacular.com/recipes/black-eyed-peas-sandwich-lobia-sandwich-indian-sandwich-s-580105">Black Eyed Peas Sandwich ~ Lobia Sandwich ~ Indian Sandwich s</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
      diets: ['dairy free'],
      occasions: [],
      instructions:
        '<ol><li>Brown bacon in a skillet</li><li>Remove and pat off excess oil</li><li>Slice tomato into 1/4 inches slices</li><li>Toast bread</li><li>Spread a thin layer of mayonnaise on bread</li><li>Layer all ingredients on bread and close sandwich</li><li>Add fresh cracked black pepper</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Brown bacon in a skillet',
              ingredients: [{ id: 10123, name: 'bacon', localizedName: 'bacon', image: 'raw-bacon.png' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Remove and pat off excess oil',
              ingredients: [
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Slice tomato into 1/4 inches slices',
              ingredients: [{ id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' }],
              equipment: []
            },
            {
              number: 4,
              step: 'Toast bread',
              ingredients: [{ id: 18070, name: 'toast', localizedName: 'toast', image: 'toast' }],
              equipment: []
            },
            {
              number: 5,
              step: 'Spread a thin layer of mayonnaise on bread',
              ingredients: [
                { id: 4025, name: 'mayonnaise', localizedName: 'mayonnaise', image: 'mayonnaise.png' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' },
                { id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }
              ],
              equipment: []
            },
            {
              number: 6,
              step: 'Layer all ingredients on bread and close sandwich',
              ingredients: [{ id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }],
              equipment: []
            },
            {
              number: 7,
              step: 'Add fresh cracked black pepper',
              ingredients: [
                {
                  id: 0,
                  name: 'cracked black peppercorns',
                  localizedName: 'cracked black peppercorns',
                  image: 'black-pepper.png'
                }
              ],
              equipment: []
            }
          ]
        }
      ],
      sourceName: null,
      creditsText: null,
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/blt-sandwich-635342'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 9,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 156,
      healthScore: 2,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 52.8,
      extendedIngredients: [
        {
          id: 16018,
          aisle: 'Canned and Jarred',
          image: 'black-beans.jpg',
          consistency: 'SOLID',
          name: 'canned black beans',
          nameClean: 'canned black beans',
          original: '15 oz can black beans, rinsed and rained',
          originalName: 'black beans, rinsed and rained',
          amount: 15.0,
          unit: 'oz',
          meta: ['rinsed', 'canned'],
          measures: {
            us: { amount: 15.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 425.243, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 4582,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'vegetable-oil.jpg',
          consistency: 'LIQUID',
          name: 'canola oil',
          nameClean: 'cooking oil',
          original: '2 tablespoons canola oil',
          originalName: 'canola oil',
          amount: 2.0,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 9019,
          aisle: 'Canned and Jarred',
          image: 'applesauce.png',
          consistency: 'SOLID',
          name: 'unsweetened applesauce',
          nameClean: 'applesauce',
          original: '1/4 cup unsweetened applesauce',
          originalName: 'unsweetened applesauce',
          amount: 0.25,
          unit: 'cup',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1123,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg.png',
          consistency: 'SOLID',
          name: 'eggs',
          nameClean: 'egg',
          original: '2 eggs',
          originalName: 'eggs',
          amount: 2.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: '', unitLong: '' },
            metric: { amount: 2.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1125,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg-yolk.jpg',
          consistency: 'SOLID',
          name: 'egg yolk',
          nameClean: 'egg yolk',
          original: '1 egg yolk',
          originalName: 'egg yolk',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'sugar',
          nameClean: 'sugar',
          original: '3/4 cup sugar',
          originalName: 'sugar',
          amount: 0.75,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.75, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 177.441, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 19165,
          aisle: 'Baking',
          image: 'cocoa-powder.png',
          consistency: 'SOLID',
          name: 'unsweetened cocoa',
          nameClean: 'cacao powder',
          original: '3 tablespoons unsweetened cocoa',
          originalName: 'unsweetened cocoa',
          amount: 3.0,
          unit: 'tablespoons',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 10014214,
          aisle: 'Tea and Coffee',
          image: 'instant-coffee-or-instant-espresso.png',
          consistency: 'SOLID',
          name: 'instant espresso powder',
          nameClean: 'instant espresso',
          original: '1 1/2 tablespoons instant espresso powder',
          originalName: 'instant espresso powder',
          amount: 1.5,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 199603,
          aisle: 'Sweet Snacks',
          image: 'dark-chocolate-pieces.jpg',
          consistency: 'SOLID',
          name: 'semi-sweet chocolate',
          nameClean: 'semisweet chocolate',
          original: '3 ounces semi-sweet chocolate, chopped',
          originalName: 'semi-sweet chocolate, chopped',
          amount: 3.0,
          unit: 'ounces',
          meta: ['chopped'],
          measures: {
            us: { amount: 3.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 85.049, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 114445,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 tablespoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'tablespoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 2050,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'vanilla extract',
          nameClean: 'vanilla extract',
          original: '1 teaspoon vanilla extract',
          originalName: 'vanilla extract',
          amount: 1.0,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2047,
          aisle: 'Spices and Seasonings',
          image: 'salt.jpg',
          consistency: 'SOLID',
          name: 'salt',
          nameClean: 'table salt',
          original: '1/2 teaspoon salt',
          originalName: 'salt',
          amount: 0.5,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 20081,
          aisle: 'Baking',
          image: 'flour.png',
          consistency: 'SOLID',
          name: 'flour',
          nameClean: 'wheat flour',
          original: '1/2 cup all-purpose flour',
          originalName: 'all-purpose flour',
          amount: 0.5,
          unit: 'cup',
          meta: ['all-purpose'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 12155,
          aisle: 'Nuts;Baking',
          image: 'walnuts.jpg',
          consistency: 'SOLID',
          name: 'walnuts',
          nameClean: 'walnuts',
          original: '1/2 cup walnuts, chopped',
          originalName: 'walnuts, chopped',
          amount: 0.5,
          unit: 'cup',
          meta: ['chopped'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6354063,
      title: 'Black Bean Brownies',
      readyInMinutes: 45,
      servings: 12,
      sourceUrl: 'https://www.foodista.com/recipe/BY3TN7TR/black-bean-brownies',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635063-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Black Bean Brownies might be just the <b>American</b> recipe you are searching for. For <b>53 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. One serving contains <b>233 calories</b>, <b>5g of protein</b>, and <b>12g of fat</b>. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. It is brought to you by Foodista. 156 people have made this recipe and would make it again. Head to the store and pick up black beans, egg yolk, flour, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is not so amazing. Similar recipes are <a href="https://spoonacular.com/recipes/amazing-black-forest-black-bean-brownies-508256">AMAZING BLACK FOREST BLACK BEAN BROWNIES</a>, <a href="https://spoonacular.com/recipes/black-bean-brownies-555499">Black Bean Brownies</a>, and <a href="https://spoonacular.com/recipes/black-bean-brownies-814946">Black Bean Brownies</a>.',
      cuisines: ['American'],
      dishTypes: [],
      diets: [],
      occasions: [],
      instructions:
        'Preheat oven to 350 F. Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.\nPlace your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.\nAdd chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend. Pour batter into a large bowl and stir in the flour.\nSpread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).\nBake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean. Let the brownies cool in the pan on a wire rack for 15 minutes. Cut into squares and serve',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 350 F.',
              ingredients: [],
              equipment: [
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 350.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.',
              ingredients: [
                {
                  id: 10014214,
                  name: 'instant espresso',
                  localizedName: 'instant espresso',
                  image: 'instant-coffee-or-instant-espresso.png'
                },
                { id: 19165, name: 'cocoa powder', localizedName: 'cocoa powder', image: 'cocoa-powder.png' },
                { id: 9019, name: 'applesauce', localizedName: 'applesauce', image: 'applesauce.png' },
                { id: 1125, name: 'egg yolk', localizedName: 'egg yolk', image: 'egg-yolk.jpg' },
                { id: 0, name: 'beans', localizedName: 'beans', image: 'kidney-beans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' },
                { id: 1123, name: 'egg', localizedName: 'egg', image: 'egg.png' },
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.',
              ingredients: [
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [
                { id: 404762, name: 'microwave', localizedName: 'microwave', image: 'microwave.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 4,
              step: 'Add chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend.',
              ingredients: [
                { id: 2050, name: 'vanilla extract', localizedName: 'vanilla extract', image: 'vanilla-extract.jpg' },
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 2047, name: 'salt', localizedName: 'salt', image: 'salt.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ]
            },
            {
              number: 5,
              step: 'Pour batter into a large bowl and stir in the flour.',
              ingredients: [
                { id: 20081, name: 'all purpose flour', localizedName: 'all purpose flour', image: 'flour.png' }
              ],
              equipment: [{ id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }]
            },
            {
              number: 6,
              step: 'Spread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).',
              ingredients: [
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12155, name: 'walnuts', localizedName: 'walnuts', image: 'walnuts.jpg' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' }
              ],
              equipment: [
                { id: 404646, name: 'baking pan', localizedName: 'baking pan', image: 'roasting-pan.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' }
              ]
            },
            {
              number: 7,
              step: 'Bake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean.',
              ingredients: [],
              equipment: [
                { id: 404644, name: 'toothpicks', localizedName: 'toothpicks', image: 'toothpicks.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 25, unit: 'minutes' }
            },
            {
              number: 8,
              step: 'Let the brownies cool in the pan on a wire rack for 15 minutes.',
              ingredients: [],
              equipment: [
                { id: 405900, name: 'wire rack', localizedName: 'wire rack', image: 'wire-rack.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }
              ],
              length: { number: 15, unit: 'minutes' }
            },
            { number: 9, step: 'Cut into squares and serve', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/black-bean-brownies-635063'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 19,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 10,
      healthScore: 35,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 3093.35,
      extendedIngredients: [
        {
          id: 11457,
          aisle: 'Produce',
          image: 'spinach.jpg',
          consistency: 'SOLID',
          name: 'baby spinach',
          nameClean: 'baby spinach',
          original: '1/2 package fresh baby spinach stems removed and cleaned',
          originalName: 'fresh baby spinach stems removed and cleaned',
          amount: 0.5,
          unit: 'package',
          meta: ['fresh', 'cleaned'],
          measures: {
            us: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' },
            metric: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' }
          }
        },
        {
          id: 10020409,
          aisle: 'Pasta and Rice',
          image: 'egg-noodles.jpg',
          consistency: 'SOLID',
          name: 'fettuccine',
          nameClean: 'fettuccine',
          original: '1 pound of Fettuccine Barilla',
          originalName: 'Fettuccine Barilla',
          amount: 1.0,
          unit: 'pound',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 11215,
          aisle: 'Produce',
          image: 'garlic.png',
          consistency: 'SOLID',
          name: 'garlic clove',
          nameClean: 'garlic',
          original: '1 garlic clove',
          originalName: 'garlic clove',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 4053,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'olive-oil.jpg',
          consistency: 'LIQUID',
          name: 'olive oil',
          nameClean: 'olive oil',
          original: '1/4 cup Olive oil',
          originalName: 'Olive oil',
          amount: 0.25,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 11297,
          aisle: 'Produce;Spices and Seasonings',
          image: 'parsley.jpg',
          consistency: 'SOLID',
          name: 'parsley',
          nameClean: 'parsley',
          original: '1 tablespoon freshly chopped parsley',
          originalName: 'freshly chopped parsley',
          amount: 1.0,
          unit: 'tablespoon',
          meta: ['chopped'],
          measures: {
            us: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' },
            metric: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' }
          }
        },
        {
          id: 15270,
          aisle: 'Seafood',
          image: 'shrimp.png',
          consistency: 'SOLID',
          name: 'prawns',
          nameClean: 'shrimp',
          original: '1 pound of fresh prawns, shell and tail removes and deveined',
          originalName: 'fresh prawns, shell and tail removes and deveined',
          amount: 1.0,
          unit: 'pound',
          meta: ['fresh', 'deveined'],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 1102047,
          aisle: 'Spices and Seasonings',
          image: 'salt-and-pepper.jpg',
          consistency: 'SOLID',
          name: 'salt and pepper',
          nameClean: 'salt and pepper',
          original: 'Salt and Pepper to taste',
          originalName: 'Salt and Pepper to taste',
          amount: 4.0,
          unit: 'servings',
          meta: ['to taste'],
          measures: {
            us: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomatoes',
          nameClean: 'tomato',
          original: '4 fresh tomatoes, seed removed and chopped',
          originalName: 'fresh tomatoes, seed removed and chopped',
          amount: 4.0,
          unit: '',
          meta: ['fresh', 'chopped'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1145,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 teaspoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'teaspoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 14106,
          aisle: 'Alcoholic Beverages',
          image: 'white-wine.jpg',
          consistency: 'LIQUID',
          name: 'white wine',
          nameClean: 'dry white wine',
          original: '1/2 cup White wine',
          originalName: 'White wine',
          amount: 0.5,
          unit: 'cup',
          meta: ['white'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 650139,
      title: 'Linguine with Prawns, Fresh Tomatoes and Spinach',
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: 'http://www.foodista.com/recipe/GYVMPF7R/linguine-with-prawns-fresh-tomatoes-and-spinach',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/650139-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Linguine with Prawns, Fresh Tomatoes and Spinach might be just the main course you are searching for. This recipe serves 4 and costs $3.93 per serving. Watching your figure? This pescatarian recipe has <b>742 calories</b>, <b>41g of protein</b>, and <b>23g of fat</b> per serving. Head to the store and pick up butter, fettuccine barilla, salt and pepper, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. A couple people made this recipe, and 10 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/linguine-with-fresh-tomatoes-443547">Linguine with Fresh Tomatoes</a>, <a href="https://spoonacular.com/recipes/linguinie-with-prawns-spinach-tomatoes-and-goat-cheese-567454">Linguinie with Prawns, Spinach, Tomatoes and Goat Cheese</a>, and <a href="https://spoonacular.com/recipes/linguine-with-fresh-tuna-tomatoes-and-lemon-7856">Linguine with Fresh Tuna, Tomatoes and Lemon</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
      diets: ['pescatarian'],
      occasions: [],
      instructions:
        '<ol><li>Cook the Linguine according to package direction.</li><li>In a large skillet under medium heat melt the butter with the olive oil. Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender. Add the spinach, the wine and the prawns. Saute until the prawns are pink and the spinach wilted.</li><li>Drain the pasta, add it to the skillet and mix well.</li><li>Serve hot.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Cook the Linguine according to package direction.In a large skillet under medium heat melt the butter with the olive oil.',
              ingredients: [
                { id: 4053, name: 'olive oil', localizedName: 'olive oil', image: 'olive-oil.jpg' },
                { id: 10720420, name: 'linguine', localizedName: 'linguine', image: 'spaghetti.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender.',
              ingredients: [
                { id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' },
                { id: 11297, name: 'parsley', localizedName: 'parsley', image: 'parsley.jpg' },
                { id: 11215, name: 'garlic', localizedName: 'garlic', image: 'garlic.png' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Add the spinach, the wine and the prawns.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' },
                { id: 14084, name: 'wine', localizedName: 'wine', image: 'red-wine.jpg' }
              ],
              equipment: []
            },
            {
              number: 4,
              step: 'Saute until the prawns are pink and the spinach wilted.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' }
              ],
              equipment: []
            },
            {
              number: 5,
              step: 'Drain the pasta, add it to the skillet and mix well.',
              ingredients: [{ id: 20420, name: 'pasta', localizedName: 'pasta', image: 'fusilli.jpg' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            { number: 6, step: 'Serve hot.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: 151515,
      spoonacularSourceUrl: 'https://spoonacular.com/linguine-with-prawns-fresh-tomatoes-and-spinach-650139'
    },
    {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: true,
      weightWatcherSmartPoints: 17,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 104,
      healthScore: 1,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 101.39,
      extendedIngredients: [
        {
          id: 2001,
          aisle: 'Spices and Seasonings',
          image: 'allspice-ground.jpg',
          consistency: 'SOLID',
          name: 'allspice',
          nameClean: 'allspice',
          original: '¼ tsp allspice',
          originalName: 'allspice',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 19334,
          aisle: 'Baking',
          image: 'light-brown-sugar.jpg',
          consistency: 'SOLID',
          name: 'brown sugar',
          nameClean: 'golden brown sugar',
          original: '1 cup brown sugar, packed',
          originalName: 'brown sugar, packed',
          amount: 1.0,
          unit: 'cup',
          meta: ['packed'],
          measures: {
            us: { amount: 1.0, unitShort: 'cup', unitLong: 'cup' },
            metric: { amount: 236.588, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1001,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'butter',
          nameClean: 'butter',
          original: '1/2 stick butter',
          originalName: 'butter',
          amount: 0.5,
          unit: 'stick',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' },
            metric: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' }
          }
        },
        {
          id: 2010,
          aisle: 'Spices and Seasonings',
          image: 'cinnamon.jpg',
          consistency: 'SOLID',
          name: 'cinnamon',
          nameClean: 'cinnamon',
          original: '1 tsp cinnamon',
          originalName: 'cinnamon',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'granulated sugar',
          nameClean: 'sugar',
          original: '½ cup granulated sugar',
          originalName: 'granulated sugar',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 2011,
          aisle: 'Spices and Seasonings',
          image: 'cloves.jpg',
          consistency: 'SOLID',
          name: 'ground cloves',
          nameClean: 'ground clove',
          original: '¼ tsp ground cloves',
          originalName: 'ground cloves',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12111111,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'maple extract',
          nameClean: 'maple extract',
          original: '1 tsp maple extract',
          originalName: 'maple extract',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2025,
          aisle: 'Spices and Seasonings',
          image: 'ground-nutmeg.jpg',
          consistency: 'SOLID',
          name: 'nutmeg',
          nameClean: 'nutmeg',
          original: '¼ tsp nutmeg',
          originalName: 'nutmeg',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12142,
          aisle: 'Nuts;Baking',
          image: 'pecans.jpg',
          consistency: 'SOLID',
          name: 'pecans',
          nameClean: 'pecans',
          original: '2 cups pecans',
          originalName: 'pecans',
          amount: 2.0,
          unit: 'cups',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 473.176, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 14412,
          aisle: 'Beverages',
          image: 'water.png',
          consistency: 'LIQUID',
          name: 'water',
          nameClean: 'water',
          original: '1/2 cup water',
          originalName: 'water',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6368604,
      title: 'Candied Spiced Pecans',
      readyInMinutes: 45,
      servings: 8,
      sourceUrl: 'http://www.foodista.com/recipe/HSRTFJ3N/candied-spiced-pecans',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/636864-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Candied Spiced Pecans might be just the hor d\'oeuvre you are searching for. This recipe makes 8 servings with <b>376 calories</b>, <b>2g of protein</b>, and <b>24g of fat</b> each. For <b>$1.01 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is a good option if you\'re following a <b>gluten free, fodmap friendly, and vegetarian</b> diet. A mixture of water, ground cloves, butter, and a handful of other ingredients are all it takes to make this recipe so tasty. 104 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so awesome. Try <a href="https://spoonacular.com/recipes/candied-pecans-901775">Candied Pecans</a>, <a href="https://spoonacular.com/recipes/candied-pecans-630200">Candied Pecans</a>, and <a href="https://spoonacular.com/recipes/candied-pecans-475782">Candied Pecans</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['side dish'],
      diets: ['gluten free', 'lacto ovo vegetarian', 'fodmap friendly'],
      occasions: [],
      instructions:
        '<ol><li>Preheat oven to 300 F.</li><li>Line a cookie sheet with tin foil and coat with cooking spray. Set aside.</li><li>In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.</li><li>In a small bowl, whisk together maple extract, brown sugar and water.</li><li>Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil. Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.</li><li>With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.</li><li>Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes. Let cool completely before serving.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 300 F.Line a cookie sheet with tin foil and coat with cooking spray. Set aside.In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.In a small bowl, whisk together maple extract, brown sugar and water.Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil.',
              ingredients: [
                {
                  id: 10719335,
                  name: 'granulated sugar',
                  localizedName: 'granulated sugar',
                  image: 'sugar-in-bowl.png'
                },
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12111111, name: 'maple extract', localizedName: 'maple extract', image: 'vanilla-extract.jpg' },
                { id: 19334, name: 'brown sugar', localizedName: 'brown sugar', image: 'dark-brown-sugar.png' },
                { id: 2001, name: 'allspice', localizedName: 'allspice', image: 'allspice-ground.jpg' },
                { id: 2010, name: 'cinnamon', localizedName: 'cinnamon', image: 'cinnamon.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 1002011, name: 'clove', localizedName: 'clove', image: 'cloves.jpg' },
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 2025, name: 'nutmeg', localizedName: 'nutmeg', image: 'ground-nutmeg.jpg' },
                { id: 14412, name: 'water', localizedName: 'water', image: 'water.png' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' },
                { id: 404661, name: 'whisk', localizedName: 'whisk', image: 'whisk.png' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' },
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 300.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.',
              ingredients: [
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' }
              ],
              equipment: [
                { id: 404636, name: 'slotted spoon', localizedName: 'slotted spoon', image: 'slotted-spoon.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 2, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes.',
              ingredients: [
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 30, unit: 'minutes' }
            },
            { number: 4, step: 'Let cool completely before serving.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/candied-spiced-pecans-636864'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 22,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 63,
      healthScore: 15,
      pricePerServing: 296.78,
      extendedIngredients: [
        {
          id: 10211821,
          aisle: 'Produce',
          image: 'bell-pepper-orange.png',
          consistency: 'SOLID',
          name: 'bell pepper',
          nameClean: 'bell pepper',
          original: 'Black pepper',
          originalName: 'Black pepper',
          amount: 2.0,
          unit: 'servings',
          meta: ['black'],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 18064,
          aisle: 'Bakery/Bread',
          image: 'white-bread.jpg',
          consistency: 'SOLID',
          name: 'bread',
          nameClean: 'bread',
          original: '4 pieces of good quality bread, lightly toasted',
          originalName: 'good quality bread, lightly toasted',
          amount: 4.0,
          unit: 'pieces',
          meta: ['lightly toasted'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11252,
          aisle: 'Produce',
          image: 'iceberg-lettuce.jpg',
          consistency: 'SOLID',
          name: 'lettuce',
          nameClean: 'lettuce',
          original: 'Lettuce',
          originalName: 'Lettuce',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 4025,
          aisle: 'Condiments',
          image: 'mayonnaise.png',
          consistency: 'LIQUID',
          name: 'mayonnaise',
          nameClean: 'mayonnaise',
          original: 'Mayonnaise',
          originalName: 'Mayonnaise',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 10310123,
          aisle: 'Meat',
          image: 'raw-bacon.png',
          consistency: 'SOLID',
          name: 'thick-cut bacon',
          nameClean: 'thick cut bacon',
          original: '8 pieces Thick-sliced bacon',
          originalName: 'Thick-sliced bacon',
          amount: 8.0,
          unit: 'pieces',
          meta: [],
          measures: {
            us: { amount: 8.0, unitShort: '', unitLong: '' },
            metric: { amount: 8.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomato',
          nameClean: 'tomato',
          original: '1 tomato, sliced thin',
          originalName: 'tomato, sliced thin',
          amount: 1.0,
          unit: '',
          meta: ['sliced', 'thin'],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        }
      ],
      id: 63554342,
      title: 'BLT Sandwich',
      readyInMinutes: 145,
      servings: 2,
      sourceUrl: 'http://www.foodista.com/recipe/24R6RD65/blt-sandwich',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635342-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Need a <b>dairy free main course</b>? BLT Sandwich could be an awesome recipe to try. This recipe makes 2 servings with <b>657 calories</b>, <b>20g of protein</b>, and <b>60g of fat</b> each. For <b>$2.6 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. If you have pepper, thick- bacon, mayonnaise, and a few other ingredients on hand, you can make it. To use up the bread you could follow this main course with the <a href="https://spoonacular.com/recipes/coffee-cake-banana-bread-509375">Coffee Cake Banana Bread</a> as a dessert. 63 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 54%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/blt-salad-916021">BLT Salad</a>, <a href="https://spoonacular.com/recipes/blt-salad-917813">BLT Salad</a>, and <a href="https://spoonacular.com/recipes/black-eyed-peas-sandwich-lobia-sandwich-indian-sandwich-s-580105">Black Eyed Peas Sandwich ~ Lobia Sandwich ~ Indian Sandwich s</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
      diets: ['dairy free'],
      occasions: [],
      instructions:
        '<ol><li>Brown bacon in a skillet</li><li>Remove and pat off excess oil</li><li>Slice tomato into 1/4 inches slices</li><li>Toast bread</li><li>Spread a thin layer of mayonnaise on bread</li><li>Layer all ingredients on bread and close sandwich</li><li>Add fresh cracked black pepper</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Brown bacon in a skillet',
              ingredients: [{ id: 10123, name: 'bacon', localizedName: 'bacon', image: 'raw-bacon.png' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Remove and pat off excess oil',
              ingredients: [
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Slice tomato into 1/4 inches slices',
              ingredients: [{ id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' }],
              equipment: []
            },
            {
              number: 4,
              step: 'Toast bread',
              ingredients: [{ id: 18070, name: 'toast', localizedName: 'toast', image: 'toast' }],
              equipment: []
            },
            {
              number: 5,
              step: 'Spread a thin layer of mayonnaise on bread',
              ingredients: [
                { id: 4025, name: 'mayonnaise', localizedName: 'mayonnaise', image: 'mayonnaise.png' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' },
                { id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }
              ],
              equipment: []
            },
            {
              number: 6,
              step: 'Layer all ingredients on bread and close sandwich',
              ingredients: [{ id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }],
              equipment: []
            },
            {
              number: 7,
              step: 'Add fresh cracked black pepper',
              ingredients: [
                {
                  id: 0,
                  name: 'cracked black peppercorns',
                  localizedName: 'cracked black peppercorns',
                  image: 'black-pepper.png'
                }
              ],
              equipment: []
            }
          ]
        }
      ],
      sourceName: null,
      creditsText: null,
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/blt-sandwich-635342'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 9,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 156,
      healthScore: 2,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 52.8,
      extendedIngredients: [
        {
          id: 16018,
          aisle: 'Canned and Jarred',
          image: 'black-beans.jpg',
          consistency: 'SOLID',
          name: 'canned black beans',
          nameClean: 'canned black beans',
          original: '15 oz can black beans, rinsed and rained',
          originalName: 'black beans, rinsed and rained',
          amount: 15.0,
          unit: 'oz',
          meta: ['rinsed', 'canned'],
          measures: {
            us: { amount: 15.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 425.243, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 4582,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'vegetable-oil.jpg',
          consistency: 'LIQUID',
          name: 'canola oil',
          nameClean: 'cooking oil',
          original: '2 tablespoons canola oil',
          originalName: 'canola oil',
          amount: 2.0,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 9019,
          aisle: 'Canned and Jarred',
          image: 'applesauce.png',
          consistency: 'SOLID',
          name: 'unsweetened applesauce',
          nameClean: 'applesauce',
          original: '1/4 cup unsweetened applesauce',
          originalName: 'unsweetened applesauce',
          amount: 0.25,
          unit: 'cup',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1123,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg.png',
          consistency: 'SOLID',
          name: 'eggs',
          nameClean: 'egg',
          original: '2 eggs',
          originalName: 'eggs',
          amount: 2.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: '', unitLong: '' },
            metric: { amount: 2.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1125,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg-yolk.jpg',
          consistency: 'SOLID',
          name: 'egg yolk',
          nameClean: 'egg yolk',
          original: '1 egg yolk',
          originalName: 'egg yolk',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'sugar',
          nameClean: 'sugar',
          original: '3/4 cup sugar',
          originalName: 'sugar',
          amount: 0.75,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.75, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 177.441, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 19165,
          aisle: 'Baking',
          image: 'cocoa-powder.png',
          consistency: 'SOLID',
          name: 'unsweetened cocoa',
          nameClean: 'cacao powder',
          original: '3 tablespoons unsweetened cocoa',
          originalName: 'unsweetened cocoa',
          amount: 3.0,
          unit: 'tablespoons',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 10014214,
          aisle: 'Tea and Coffee',
          image: 'instant-coffee-or-instant-espresso.png',
          consistency: 'SOLID',
          name: 'instant espresso powder',
          nameClean: 'instant espresso',
          original: '1 1/2 tablespoons instant espresso powder',
          originalName: 'instant espresso powder',
          amount: 1.5,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 19903,
          aisle: 'Sweet Snacks',
          image: 'dark-chocolate-pieces.jpg',
          consistency: 'SOLID',
          name: 'semi-sweet chocolate',
          nameClean: 'semisweet chocolate',
          original: '3 ounces semi-sweet chocolate, chopped',
          originalName: 'semi-sweet chocolate, chopped',
          amount: 3.0,
          unit: 'ounces',
          meta: ['chopped'],
          measures: {
            us: { amount: 3.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 85.049, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 1145,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 tablespoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'tablespoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 2050,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'vanilla extract',
          nameClean: 'vanilla extract',
          original: '1 teaspoon vanilla extract',
          originalName: 'vanilla extract',
          amount: 1.0,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2047,
          aisle: 'Spices and Seasonings',
          image: 'salt.jpg',
          consistency: 'SOLID',
          name: 'salt',
          nameClean: 'table salt',
          original: '1/2 teaspoon salt',
          originalName: 'salt',
          amount: 0.5,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 20081,
          aisle: 'Baking',
          image: 'flour.png',
          consistency: 'SOLID',
          name: 'flour',
          nameClean: 'wheat flour',
          original: '1/2 cup all-purpose flour',
          originalName: 'all-purpose flour',
          amount: 0.5,
          unit: 'cup',
          meta: ['all-purpose'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 12155,
          aisle: 'Nuts;Baking',
          image: 'walnuts.jpg',
          consistency: 'SOLID',
          name: 'walnuts',
          nameClean: 'walnuts',
          original: '1/2 cup walnuts, chopped',
          originalName: 'walnuts, chopped',
          amount: 0.5,
          unit: 'cup',
          meta: ['chopped'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 63555063,
      title: 'Black Bean Brownies',
      readyInMinutes: 245,
      servings: 12,
      sourceUrl: 'https://www.foodista.com/recipe/BY3TN7TR/black-bean-brownies',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635063-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Black Bean Brownies might be just the <b>American</b> recipe you are searching for. For <b>53 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. One serving contains <b>233 calories</b>, <b>5g of protein</b>, and <b>12g of fat</b>. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. It is brought to you by Foodista. 156 people have made this recipe and would make it again. Head to the store and pick up black beans, egg yolk, flour, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is not so amazing. Similar recipes are <a href="https://spoonacular.com/recipes/amazing-black-forest-black-bean-brownies-508256">AMAZING BLACK FOREST BLACK BEAN BROWNIES</a>, <a href="https://spoonacular.com/recipes/black-bean-brownies-555499">Black Bean Brownies</a>, and <a href="https://spoonacular.com/recipes/black-bean-brownies-814946">Black Bean Brownies</a>.',
      cuisines: ['american'],
      dishTypes: [],
      diets: [],
      occasions: [],
      instructions:
        'Preheat oven to 350 F. Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.\nPlace your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.\nAdd chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend. Pour batter into a large bowl and stir in the flour.\nSpread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).\nBake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean. Let the brownies cool in the pan on a wire rack for 15 minutes. Cut into squares and serve',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 350 F.',
              ingredients: [],
              equipment: [
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 350.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.',
              ingredients: [
                {
                  id: 10014214,
                  name: 'instant espresso',
                  localizedName: 'instant espresso',
                  image: 'instant-coffee-or-instant-espresso.png'
                },
                { id: 19165, name: 'cocoa powder', localizedName: 'cocoa powder', image: 'cocoa-powder.png' },
                { id: 9019, name: 'applesauce', localizedName: 'applesauce', image: 'applesauce.png' },
                { id: 1125, name: 'egg yolk', localizedName: 'egg yolk', image: 'egg-yolk.jpg' },
                { id: 0, name: 'beans', localizedName: 'beans', image: 'kidney-beans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' },
                { id: 1123, name: 'egg', localizedName: 'egg', image: 'egg.png' },
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.',
              ingredients: [
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [
                { id: 404762, name: 'microwave', localizedName: 'microwave', image: 'microwave.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 4,
              step: 'Add chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend.',
              ingredients: [
                { id: 2050, name: 'vanilla extract', localizedName: 'vanilla extract', image: 'vanilla-extract.jpg' },
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 2047, name: 'salt', localizedName: 'salt', image: 'salt.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ]
            },
            {
              number: 5,
              step: 'Pour batter into a large bowl and stir in the flour.',
              ingredients: [
                { id: 20081, name: 'all purpose flour', localizedName: 'all purpose flour', image: 'flour.png' }
              ],
              equipment: [{ id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }]
            },
            {
              number: 6,
              step: 'Spread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).',
              ingredients: [
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12155, name: 'walnuts', localizedName: 'walnuts', image: 'walnuts.jpg' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' }
              ],
              equipment: [
                { id: 404646, name: 'baking pan', localizedName: 'baking pan', image: 'roasting-pan.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' }
              ]
            },
            {
              number: 7,
              step: 'Bake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean.',
              ingredients: [],
              equipment: [
                { id: 404644, name: 'toothpicks', localizedName: 'toothpicks', image: 'toothpicks.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 25, unit: 'minutes' }
            },
            {
              number: 8,
              step: 'Let the brownies cool in the pan on a wire rack for 15 minutes.',
              ingredients: [],
              equipment: [
                { id: 405900, name: 'wire rack', localizedName: 'wire rack', image: 'wire-rack.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }
              ],
              length: { number: 15, unit: 'minutes' }
            },
            { number: 9, step: 'Cut into squares and serve', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/black-bean-brownies-635063'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 19,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 10,
      healthScore: 35,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 393.35,
      extendedIngredients: [
        {
          id: 11457,
          aisle: 'Produce',
          image: 'spinach.jpg',
          consistency: 'SOLID',
          name: 'baby spinach',
          nameClean: 'baby spinach',
          original: '1/2 package fresh baby spinach stems removed and cleaned',
          originalName: 'fresh baby spinach stems removed and cleaned',
          amount: 0.5,
          unit: 'package',
          meta: ['fresh', 'cleaned'],
          measures: {
            us: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' },
            metric: { amount: 0.5, unitShort: 'pkg', unitLong: 'packages' }
          }
        },
        {
          id: 10020409,
          aisle: 'Pasta and Rice',
          image: 'egg-noodles.jpg',
          consistency: 'SOLID',
          name: 'fettuccine',
          nameClean: 'fettuccine',
          original: '1 pound of Fettuccine Barilla',
          originalName: 'Fettuccine Barilla',
          amount: 1.0,
          unit: 'pound',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 11215,
          aisle: 'Produce',
          image: 'garlic.png',
          consistency: 'SOLID',
          name: 'garlic clove',
          nameClean: 'garlic',
          original: '1 garlic clove',
          originalName: 'garlic clove',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 4053,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'olive-oil.jpg',
          consistency: 'LIQUID',
          name: 'olive oil',
          nameClean: 'olive oil',
          original: '1/4 cup Olive oil',
          originalName: 'Olive oil',
          amount: 0.25,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 11297,
          aisle: 'Produce;Spices and Seasonings',
          image: 'parsley.jpg',
          consistency: 'SOLID',
          name: 'parsley',
          nameClean: 'parsley',
          original: '1 tablespoon freshly chopped parsley',
          originalName: 'freshly chopped parsley',
          amount: 1.0,
          unit: 'tablespoon',
          meta: ['chopped'],
          measures: {
            us: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' },
            metric: { amount: 1.0, unitShort: 'Tbsp', unitLong: 'Tbsp' }
          }
        },
        {
          id: 15270,
          aisle: 'Seafood',
          image: 'shrimp.png',
          consistency: 'SOLID',
          name: 'prawns',
          nameClean: 'shrimp',
          original: '1 pound of fresh prawns, shell and tail removes and deveined',
          originalName: 'fresh prawns, shell and tail removes and deveined',
          amount: 1.0,
          unit: 'pound',
          meta: ['fresh', 'deveined'],
          measures: {
            us: { amount: 1.0, unitShort: 'lb', unitLong: 'pound' },
            metric: { amount: 453.592, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 1102047,
          aisle: 'Spices and Seasonings',
          image: 'salt-and-pepper.jpg',
          consistency: 'SOLID',
          name: 'salt and pepper',
          nameClean: 'salt and pepper',
          original: 'Salt and Pepper to taste',
          originalName: 'Salt and Pepper to taste',
          amount: 4.0,
          unit: 'servings',
          meta: ['to taste'],
          measures: {
            us: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 4.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomatoes',
          nameClean: 'tomato',
          original: '4 fresh tomatoes, seed removed and chopped',
          originalName: 'fresh tomatoes, seed removed and chopped',
          amount: 4.0,
          unit: '',
          meta: ['fresh', 'chopped'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1145,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 teaspoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'teaspoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 2.0, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 14106,
          aisle: 'Alcoholic Beverages',
          image: 'white-wine.jpg',
          consistency: 'LIQUID',
          name: 'white wine',
          nameClean: 'dry white wine',
          original: '1/2 cup White wine',
          originalName: 'White wine',
          amount: 0.5,
          unit: 'cup',
          meta: ['white'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6503139,
      title: 'Linguine with Prawns, Fresh Tomatoes and Spinach',
      readyInMinutes: 345,
      servings: 4,
      sourceUrl: 'http://www.foodista.com/recipe/GYVMPF7R/linguine-with-prawns-fresh-tomatoes-and-spinach',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/650139-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Linguine with Prawns, Fresh Tomatoes and Spinach might be just the main course you are searching for. This recipe serves 4 and costs $3.93 per serving. Watching your figure? This pescatarian recipe has <b>742 calories</b>, <b>41g of protein</b>, and <b>23g of fat</b> per serving. Head to the store and pick up butter, fettuccine barilla, salt and pepper, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. A couple people made this recipe, and 10 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/linguine-with-fresh-tomatoes-443547">Linguine with Fresh Tomatoes</a>, <a href="https://spoonacular.com/recipes/linguinie-with-prawns-spinach-tomatoes-and-goat-cheese-567454">Linguinie with Prawns, Spinach, Tomatoes and Goat Cheese</a>, and <a href="https://spoonacular.com/recipes/linguine-with-fresh-tuna-tomatoes-and-lemon-7856">Linguine with Fresh Tuna, Tomatoes and Lemon</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
      diets: ['pescatarian'],
      occasions: [],
      instructions:
        '<ol><li>Cook the Linguine according to package direction.</li><li>In a large skillet under medium heat melt the butter with the olive oil. Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender. Add the spinach, the wine and the prawns. Saute until the prawns are pink and the spinach wilted.</li><li>Drain the pasta, add it to the skillet and mix well.</li><li>Serve hot.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Cook the Linguine according to package direction.In a large skillet under medium heat melt the butter with the olive oil.',
              ingredients: [
                { id: 4053, name: 'olive oil', localizedName: 'olive oil', image: 'olive-oil.jpg' },
                { id: 10720420, name: 'linguine', localizedName: 'linguine', image: 'spaghetti.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Add the chopped tomatoes, chopped parsley, chopped garlic and saute until slightly tender.',
              ingredients: [
                { id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' },
                { id: 11297, name: 'parsley', localizedName: 'parsley', image: 'parsley.jpg' },
                { id: 11215, name: 'garlic', localizedName: 'garlic', image: 'garlic.png' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Add the spinach, the wine and the prawns.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' },
                { id: 14084, name: 'wine', localizedName: 'wine', image: 'red-wine.jpg' }
              ],
              equipment: []
            },
            {
              number: 4,
              step: 'Saute until the prawns are pink and the spinach wilted.',
              ingredients: [
                { id: 10011457, name: 'spinach', localizedName: 'spinach', image: 'spinach.jpg' },
                { id: 15270, name: 'shrimp', localizedName: 'shrimp', image: 'shrimp.png' }
              ],
              equipment: []
            },
            {
              number: 5,
              step: 'Drain the pasta, add it to the skillet and mix well.',
              ingredients: [{ id: 20420, name: 'pasta', localizedName: 'pasta', image: 'fusilli.jpg' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            { number: 6, step: 'Serve hot.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: 151515,
      spoonacularSourceUrl: 'https://spoonacular.com/linguine-with-prawns-fresh-tomatoes-and-spinach-650139'
    },
    {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: true,
      weightWatcherSmartPoints: 17,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 104,
      healthScore: 1,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 101.39,
      extendedIngredients: [
        {
          id: 2001,
          aisle: 'Spices and Seasonings',
          image: 'allspice-ground.jpg',
          consistency: 'SOLID',
          name: 'allspice',
          nameClean: 'allspice',
          original: '¼ tsp allspice',
          originalName: 'allspice',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 19334,
          aisle: 'Baking',
          image: 'light-brown-sugar.jpg',
          consistency: 'SOLID',
          name: 'brown sugar',
          nameClean: 'golden brown sugar',
          original: '1 cup brown sugar, packed',
          originalName: 'brown sugar, packed',
          amount: 1.0,
          unit: 'cup',
          meta: ['packed'],
          measures: {
            us: { amount: 1.0, unitShort: 'cup', unitLong: 'cup' },
            metric: { amount: 236.588, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1001,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'butter',
          nameClean: 'butter',
          original: '1/2 stick butter',
          originalName: 'butter',
          amount: 0.5,
          unit: 'stick',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' },
            metric: { amount: 0.5, unitShort: 'stick', unitLong: 'sticks' }
          }
        },
        {
          id: 2010,
          aisle: 'Spices and Seasonings',
          image: 'cinnamon.jpg',
          consistency: 'SOLID',
          name: 'cinnamon',
          nameClean: 'cinnamon',
          original: '1 tsp cinnamon',
          originalName: 'cinnamon',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'granulated sugar',
          nameClean: 'sugar',
          original: '½ cup granulated sugar',
          originalName: 'granulated sugar',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 2011,
          aisle: 'Spices and Seasonings',
          image: 'cloves.jpg',
          consistency: 'SOLID',
          name: 'ground cloves',
          nameClean: 'ground clove',
          original: '¼ tsp ground cloves',
          originalName: 'ground cloves',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12111111,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'maple extract',
          nameClean: 'maple extract',
          original: '1 tsp maple extract',
          originalName: 'maple extract',
          amount: 1.0,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2025,
          aisle: 'Spices and Seasonings',
          image: 'ground-nutmeg.jpg',
          consistency: 'SOLID',
          name: 'nutmeg',
          nameClean: 'nutmeg',
          original: '¼ tsp nutmeg',
          originalName: 'nutmeg',
          amount: 0.25,
          unit: 'tsp',
          meta: [],
          measures: {
            us: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.25, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 12142,
          aisle: 'Nuts;Baking',
          image: 'pecans.jpg',
          consistency: 'SOLID',
          name: 'pecans',
          nameClean: 'pecans',
          original: '2 cups pecans',
          originalName: 'pecans',
          amount: 2.0,
          unit: 'cups',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 473.176, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 14412,
          aisle: 'Beverages',
          image: 'water.png',
          consistency: 'LIQUID',
          name: 'water',
          nameClean: 'water',
          original: '1/2 cup water',
          originalName: 'water',
          amount: 0.5,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 636887764,
      title: 'Candied Spiced Pecans',
      readyInMinutes: 45,
      servings: 8,
      sourceUrl: 'http://www.foodista.com/recipe/HSRTFJ3N/candied-spiced-pecans',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/636864-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Candied Spiced Pecans might be just the hor d\'oeuvre you are searching for. This recipe makes 8 servings with <b>376 calories</b>, <b>2g of protein</b>, and <b>24g of fat</b> each. For <b>$1.01 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is a good option if you\'re following a <b>gluten free, fodmap friendly, and vegetarian</b> diet. A mixture of water, ground cloves, butter, and a handful of other ingredients are all it takes to make this recipe so tasty. 104 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so awesome. Try <a href="https://spoonacular.com/recipes/candied-pecans-901775">Candied Pecans</a>, <a href="https://spoonacular.com/recipes/candied-pecans-630200">Candied Pecans</a>, and <a href="https://spoonacular.com/recipes/candied-pecans-475782">Candied Pecans</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['side dish'],
      diets: ['gluten free', 'lacto ovo vegetarian', 'fodmap friendly'],
      occasions: [],
      instructions:
        '<ol><li>Preheat oven to 300 F.</li><li>Line a cookie sheet with tin foil and coat with cooking spray. Set aside.</li><li>In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.</li><li>In a small bowl, whisk together maple extract, brown sugar and water.</li><li>Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil. Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.</li><li>With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.</li><li>Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes. Let cool completely before serving.</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 300 F.Line a cookie sheet with tin foil and coat with cooking spray. Set aside.In a shallow bowl sift together granulated sugar, cinnamon, allspice, cloves, and nutmeg. Set aside.In a small bowl, whisk together maple extract, brown sugar and water.Over medium heat, melt butter in a skillet. Slowly whisk in brown sugar mixture and bring to a boil.',
              ingredients: [
                {
                  id: 10719335,
                  name: 'granulated sugar',
                  localizedName: 'granulated sugar',
                  image: 'sugar-in-bowl.png'
                },
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12111111, name: 'maple extract', localizedName: 'maple extract', image: 'vanilla-extract.jpg' },
                { id: 19334, name: 'brown sugar', localizedName: 'brown sugar', image: 'dark-brown-sugar.png' },
                { id: 2001, name: 'allspice', localizedName: 'allspice', image: 'allspice-ground.jpg' },
                { id: 2010, name: 'cinnamon', localizedName: 'cinnamon', image: 'cinnamon.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 1002011, name: 'clove', localizedName: 'clove', image: 'cloves.jpg' },
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 2025, name: 'nutmeg', localizedName: 'nutmeg', image: 'ground-nutmeg.jpg' },
                { id: 14412, name: 'water', localizedName: 'water', image: 'water.png' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' },
                { id: 404661, name: 'whisk', localizedName: 'whisk', image: 'whisk.png' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' },
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 300.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Add pecans and stir to coat. Simmer for about 1-2 minutes until well coated.With a slotted spoon, transfer pecans to the reserved sugar and spice bowl. Coat pecans with sugar.',
              ingredients: [
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' }
              ],
              equipment: [
                { id: 404636, name: 'slotted spoon', localizedName: 'slotted spoon', image: 'slotted-spoon.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 2, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place pecans evenly on prepared cookie sheet and bake for 15 minutes. Stir pecans and bake for an additional 15 minutes.',
              ingredients: [
                { id: 10118192, name: 'cookies', localizedName: 'cookies', image: 'shortbread-cookies.jpg' },
                { id: 12142, name: 'pecans', localizedName: 'pecans', image: 'pecans.jpg' }
              ],
              equipment: [
                { id: 404727, name: 'baking sheet', localizedName: 'baking sheet', image: 'baking-sheet.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 30, unit: 'minutes' }
            },
            { number: 4, step: 'Let cool completely before serving.', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/candied-spiced-pecans-636864'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 22,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 63,
      healthScore: 15,
      pricePerServing: 296.78,
      extendedIngredients: [
        {
          id: 10211821,
          aisle: 'Produce',
          image: 'bell-pepper-orange.png',
          consistency: 'SOLID',
          name: 'bell pepper',
          nameClean: 'bell pepper',
          original: 'Black pepper',
          originalName: 'Black pepper',
          amount: 2.0,
          unit: 'servings',
          meta: ['black'],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 18064,
          aisle: 'Bakery/Bread',
          image: 'white-bread.jpg',
          consistency: 'SOLID',
          name: 'bread',
          nameClean: 'bread',
          original: '4 pieces of good quality bread, lightly toasted',
          originalName: 'good quality bread, lightly toasted',
          amount: 4.0,
          unit: 'pieces',
          meta: ['lightly toasted'],
          measures: {
            us: { amount: 4.0, unitShort: '', unitLong: '' },
            metric: { amount: 4.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11252,
          aisle: 'Produce',
          image: 'iceberg-lettuce.jpg',
          consistency: 'SOLID',
          name: 'lettuce',
          nameClean: 'lettuce',
          original: 'Lettuce',
          originalName: 'Lettuce',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 4025,
          aisle: 'Condiments',
          image: 'mayonnaise.png',
          consistency: 'LIQUID',
          name: 'mayonnaise',
          nameClean: 'mayonnaise',
          original: 'Mayonnaise',
          originalName: 'Mayonnaise',
          amount: 2.0,
          unit: 'servings',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
            metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' }
          }
        },
        {
          id: 10310123,
          aisle: 'Meat',
          image: 'raw-bacon.png',
          consistency: 'SOLID',
          name: 'thick-cut bacon',
          nameClean: 'thick cut bacon',
          original: '8 pieces Thick-sliced bacon',
          originalName: 'Thick-sliced bacon',
          amount: 8.0,
          unit: 'pieces',
          meta: [],
          measures: {
            us: { amount: 8.0, unitShort: '', unitLong: '' },
            metric: { amount: 8.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 11529,
          aisle: 'Produce',
          image: 'tomato.png',
          consistency: 'SOLID',
          name: 'tomato',
          nameClean: 'tomato',
          original: '1 tomato, sliced thin',
          originalName: 'tomato, sliced thin',
          amount: 1.0,
          unit: '',
          meta: ['sliced', 'thin'],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        }
      ],
      id: 63875342,
      title: 'BLT Sandwich',
      readyInMinutes: 45,
      servings: 2,
      sourceUrl: 'http://www.foodista.com/recipe/24R6RD65/blt-sandwich',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635342-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Need a <b>dairy free main course</b>? BLT Sandwich could be an awesome recipe to try. This recipe makes 2 servings with <b>657 calories</b>, <b>20g of protein</b>, and <b>60g of fat</b> each. For <b>$2.6 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. If you have pepper, thick- bacon, mayonnaise, and a few other ingredients on hand, you can make it. To use up the bread you could follow this main course with the <a href="https://spoonacular.com/recipes/coffee-cake-banana-bread-509375">Coffee Cake Banana Bread</a> as a dessert. 63 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 54%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/blt-salad-916021">BLT Salad</a>, <a href="https://spoonacular.com/recipes/blt-salad-917813">BLT Salad</a>, and <a href="https://spoonacular.com/recipes/black-eyed-peas-sandwich-lobia-sandwich-indian-sandwich-s-580105">Black Eyed Peas Sandwich ~ Lobia Sandwich ~ Indian Sandwich s</a> for similar recipes.',
      cuisines: [],
      dishTypes: ['lunch', 'main course', 'main dish', 'desert'],
      diets: ['dairy free'],
      occasions: [],
      instructions:
        '<ol><li>Brown bacon in a skillet</li><li>Remove and pat off excess oil</li><li>Slice tomato into 1/4 inches slices</li><li>Toast bread</li><li>Spread a thin layer of mayonnaise on bread</li><li>Layer all ingredients on bread and close sandwich</li><li>Add fresh cracked black pepper</li></ol>',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Brown bacon in a skillet',
              ingredients: [{ id: 10123, name: 'bacon', localizedName: 'bacon', image: 'raw-bacon.png' }],
              equipment: [{ id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }]
            },
            {
              number: 2,
              step: 'Remove and pat off excess oil',
              ingredients: [
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: []
            },
            {
              number: 3,
              step: 'Slice tomato into 1/4 inches slices',
              ingredients: [{ id: 11529, name: 'tomato', localizedName: 'tomato', image: 'tomato.png' }],
              equipment: []
            },
            {
              number: 4,
              step: 'Toast bread',
              ingredients: [{ id: 18070, name: 'toast', localizedName: 'toast', image: 'toast' }],
              equipment: []
            },
            {
              number: 5,
              step: 'Spread a thin layer of mayonnaise on bread',
              ingredients: [
                { id: 4025, name: 'mayonnaise', localizedName: 'mayonnaise', image: 'mayonnaise.png' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' },
                { id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }
              ],
              equipment: []
            },
            {
              number: 6,
              step: 'Layer all ingredients on bread and close sandwich',
              ingredients: [{ id: 18064, name: 'bread', localizedName: 'bread', image: 'white-bread.jpg' }],
              equipment: []
            },
            {
              number: 7,
              step: 'Add fresh cracked black pepper',
              ingredients: [
                {
                  id: 0,
                  name: 'cracked black peppercorns',
                  localizedName: 'cracked black peppercorns',
                  image: 'black-pepper.png'
                }
              ],
              equipment: []
            }
          ]
        }
      ],
      sourceName: null,
      creditsText: null,
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/blt-sandwich-635342'
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 9,
      gaps: 'no',
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 156,
      healthScore: 2,
      creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
      license: 'CC BY 3.0',
      sourceName: 'Foodista',
      pricePerServing: 52.8,
      extendedIngredients: [
        {
          id: 16018,
          aisle: 'Canned and Jarred',
          image: 'black-beans.jpg',
          consistency: 'SOLID',
          name: 'canned black beans',
          nameClean: 'canned black beans',
          original: '15 oz can black beans, rinsed and rained',
          originalName: 'black beans, rinsed and rained',
          amount: 15.0,
          unit: 'oz',
          meta: ['rinsed', 'canned'],
          measures: {
            us: { amount: 15.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 425.243, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 4582,
          aisle: 'Oil, Vinegar, Salad Dressing',
          image: 'vegetable-oil.jpg',
          consistency: 'LIQUID',
          name: 'canola oil',
          nameClean: 'cooking oil',
          original: '2 tablespoons canola oil',
          originalName: 'canola oil',
          amount: 2.0,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 9019,
          aisle: 'Canned and Jarred',
          image: 'applesauce.png',
          consistency: 'SOLID',
          name: 'unsweetened applesauce',
          nameClean: 'applesauce',
          original: '1/4 cup unsweetened applesauce',
          originalName: 'unsweetened applesauce',
          amount: 0.25,
          unit: 'cup',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 1123,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg.png',
          consistency: 'SOLID',
          name: 'eggs',
          nameClean: 'egg',
          original: '2 eggs',
          originalName: 'eggs',
          amount: 2.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: '', unitLong: '' },
            metric: { amount: 2.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 1125,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'egg-yolk.jpg',
          consistency: 'SOLID',
          name: 'egg yolk',
          nameClean: 'egg yolk',
          original: '1 egg yolk',
          originalName: 'egg yolk',
          amount: 1.0,
          unit: '',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: '', unitLong: '' },
            metric: { amount: 1.0, unitShort: '', unitLong: '' }
          }
        },
        {
          id: 19335,
          aisle: 'Baking',
          image: 'sugar-in-bowl.png',
          consistency: 'SOLID',
          name: 'sugar',
          nameClean: 'sugar',
          original: '3/4 cup sugar',
          originalName: 'sugar',
          amount: 0.75,
          unit: 'cup',
          meta: [],
          measures: {
            us: { amount: 0.75, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 177.441, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 19165,
          aisle: 'Baking',
          image: 'cocoa-powder.png',
          consistency: 'SOLID',
          name: 'unsweetened cocoa',
          nameClean: 'cacao powder',
          original: '3 tablespoons unsweetened cocoa',
          originalName: 'unsweetened cocoa',
          amount: 3.0,
          unit: 'tablespoons',
          meta: ['unsweetened'],
          measures: {
            us: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 3.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 10014214,
          aisle: 'Tea and Coffee',
          image: 'instant-coffee-or-instant-espresso.png',
          consistency: 'SOLID',
          name: 'instant espresso powder',
          nameClean: 'instant espresso',
          original: '1 1/2 tablespoons instant espresso powder',
          originalName: 'instant espresso powder',
          amount: 1.5,
          unit: 'tablespoons',
          meta: [],
          measures: {
            us: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 1.5, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 19903,
          aisle: 'Sweet Snacks',
          image: 'dark-chocolate-pieces.jpg',
          consistency: 'SOLID',
          name: 'semi-sweet chocolate',
          nameClean: 'semisweet chocolate',
          original: '3 ounces semi-sweet chocolate, chopped',
          originalName: 'semi-sweet chocolate, chopped',
          amount: 3.0,
          unit: 'ounces',
          meta: ['chopped'],
          measures: {
            us: { amount: 3.0, unitShort: 'oz', unitLong: 'ounces' },
            metric: { amount: 85.049, unitShort: 'g', unitLong: 'grams' }
          }
        },
        {
          id: 1145,
          aisle: 'Milk, Eggs, Other Dairy',
          image: 'butter-sliced.jpg',
          consistency: 'SOLID',
          name: 'unsalted butter',
          nameClean: 'unsalted butter',
          original: '2 tablespoons unsalted butter',
          originalName: 'unsalted butter',
          amount: 2.0,
          unit: 'tablespoons',
          meta: ['unsalted'],
          measures: {
            us: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' },
            metric: { amount: 2.0, unitShort: 'Tbsps', unitLong: 'Tbsps' }
          }
        },
        {
          id: 2050,
          aisle: 'Baking',
          image: 'vanilla-extract.jpg',
          consistency: 'LIQUID',
          name: 'vanilla extract',
          nameClean: 'vanilla extract',
          original: '1 teaspoon vanilla extract',
          originalName: 'vanilla extract',
          amount: 1.0,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' },
            metric: { amount: 1.0, unitShort: 'tsp', unitLong: 'teaspoon' }
          }
        },
        {
          id: 2047,
          aisle: 'Spices and Seasonings',
          image: 'salt.jpg',
          consistency: 'SOLID',
          name: 'salt',
          nameClean: 'table salt',
          original: '1/2 teaspoon salt',
          originalName: 'salt',
          amount: 0.5,
          unit: 'teaspoon',
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' },
            metric: { amount: 0.5, unitShort: 'tsps', unitLong: 'teaspoons' }
          }
        },
        {
          id: 20081,
          aisle: 'Baking',
          image: 'flour.png',
          consistency: 'SOLID',
          name: 'flour',
          nameClean: 'wheat flour',
          original: '1/2 cup all-purpose flour',
          originalName: 'all-purpose flour',
          amount: 0.5,
          unit: 'cup',
          meta: ['all-purpose'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        },
        {
          id: 12155,
          aisle: 'Nuts;Baking',
          image: 'walnuts.jpg',
          consistency: 'SOLID',
          name: 'walnuts',
          nameClean: 'walnuts',
          original: '1/2 cup walnuts, chopped',
          originalName: 'walnuts, chopped',
          amount: 0.5,
          unit: 'cup',
          meta: ['chopped'],
          measures: {
            us: { amount: 0.5, unitShort: 'cups', unitLong: 'cups' },
            metric: { amount: 118.294, unitShort: 'ml', unitLong: 'milliliters' }
          }
        }
      ],
      id: 6358063,
      title: 'Black Bean Brownies',
      readyInMinutes: 45,
      servings: 12,
      sourceUrl: 'https://www.foodista.com/recipe/BY3TN7TR/black-bean-brownies',
      openLicense: -1,
      image: 'https://spoonacular.com/recipeImages/635063-556x370.jpg',
      imageType: 'jpg',
      summary:
        'Black Bean Brownies might be just the <b>American</b> recipe you are searching for. For <b>53 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. One serving contains <b>233 calories</b>, <b>5g of protein</b>, and <b>12g of fat</b>. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. It is brought to you by Foodista. 156 people have made this recipe and would make it again. Head to the store and pick up black beans, egg yolk, flour, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is not so amazing. Similar recipes are <a href="https://spoonacular.com/recipes/amazing-black-forest-black-bean-brownies-508256">AMAZING BLACK FOREST BLACK BEAN BROWNIES</a>, <a href="https://spoonacular.com/recipes/black-bean-brownies-555499">Black Bean Brownies</a>, and <a href="https://spoonacular.com/recipes/black-bean-brownies-814946">Black Bean Brownies</a>.',
      cuisines: ['american'],
      dishTypes: ['desert'],
      diets: [],
      occasions: [],
      instructions:
        'Preheat oven to 350 F. Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.\nPlace your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.\nAdd chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend. Pour batter into a large bowl and stir in the flour.\nSpread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).\nBake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean. Let the brownies cool in the pan on a wire rack for 15 minutes. Cut into squares and serve',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Preheat oven to 350 F.',
              ingredients: [],
              equipment: [
                {
                  id: 404784,
                  name: 'oven',
                  localizedName: 'oven',
                  image: 'oven.jpg',
                  temperature: { number: 350.0, unit: 'Fahrenheit' }
                }
              ]
            },
            {
              number: 2,
              step: 'Mix beans, oil, applesauce, eggs, egg yolk, sugar, cocoa powder, and espresso powder in your food processor. Pulse for 1 minute, or until smooth.',
              ingredients: [
                {
                  id: 10014214,
                  name: 'instant espresso',
                  localizedName: 'instant espresso',
                  image: 'instant-coffee-or-instant-espresso.png'
                },
                { id: 19165, name: 'cocoa powder', localizedName: 'cocoa powder', image: 'cocoa-powder.png' },
                { id: 9019, name: 'applesauce', localizedName: 'applesauce', image: 'applesauce.png' },
                { id: 1125, name: 'egg yolk', localizedName: 'egg yolk', image: 'egg-yolk.jpg' },
                { id: 0, name: 'beans', localizedName: 'beans', image: 'kidney-beans.jpg' },
                { id: 19335, name: 'sugar', localizedName: 'sugar', image: 'sugar-in-bowl.png' },
                { id: 1123, name: 'egg', localizedName: 'egg', image: 'egg.png' },
                { id: 4582, name: 'cooking oil', localizedName: 'cooking oil', image: 'vegetable-oil.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 3,
              step: 'Place your chopped chocolate and butter in a small bowl and microwave for 1 minute, stirring halfway. Stir until the mixture is smooth. Set aside to cool for a few minutes.',
              ingredients: [
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' }
              ],
              equipment: [
                { id: 404762, name: 'microwave', localizedName: 'microwave', image: 'microwave.jpg' },
                { id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }
              ],
              length: { number: 1, unit: 'minutes' }
            },
            {
              number: 4,
              step: 'Add chocolate/butter mixture, vanilla extract, and salt to the food processor; pulse to blend.',
              ingredients: [
                { id: 2050, name: 'vanilla extract', localizedName: 'vanilla extract', image: 'vanilla-extract.jpg' },
                { id: 19081, name: 'chocolate', localizedName: 'chocolate', image: 'milk-chocolate.jpg' },
                { id: 1001, name: 'butter', localizedName: 'butter', image: 'butter-sliced.jpg' },
                { id: 2047, name: 'salt', localizedName: 'salt', image: 'salt.jpg' }
              ],
              equipment: [
                { id: 404771, name: 'food processor', localizedName: 'food processor', image: 'food-processor.png' }
              ]
            },
            {
              number: 5,
              step: 'Pour batter into a large bowl and stir in the flour.',
              ingredients: [
                { id: 20081, name: 'all purpose flour', localizedName: 'all purpose flour', image: 'flour.png' }
              ],
              equipment: [{ id: 404783, name: 'bowl', localizedName: 'bowl', image: 'bowl.jpg' }]
            },
            {
              number: 6,
              step: 'Spread batter into a foil-lined 8x8" baking pan coated with nonstick cooking spray. Smooth the top and sprinkle evenly with the walnuts (if using).',
              ingredients: [
                { id: 4679, name: 'cooking spray', localizedName: 'cooking spray', image: 'cooking-spray.png' },
                { id: 12155, name: 'walnuts', localizedName: 'walnuts', image: 'walnuts.jpg' },
                { id: 0, name: 'spread', localizedName: 'spread', image: '' }
              ],
              equipment: [
                { id: 404646, name: 'baking pan', localizedName: 'baking pan', image: 'roasting-pan.jpg' },
                { id: 404765, name: 'aluminum foil', localizedName: 'aluminum foil', image: 'aluminum-foil.png' }
              ]
            },
            {
              number: 7,
              step: 'Bake for 25 to 30 minutes, or until a toothpick inserted into the center comes out clean.',
              ingredients: [],
              equipment: [
                { id: 404644, name: 'toothpicks', localizedName: 'toothpicks', image: 'toothpicks.jpg' },
                { id: 404784, name: 'oven', localizedName: 'oven', image: 'oven.jpg' }
              ],
              length: { number: 25, unit: 'minutes' }
            },
            {
              number: 8,
              step: 'Let the brownies cool in the pan on a wire rack for 15 minutes.',
              ingredients: [],
              equipment: [
                { id: 405900, name: 'wire rack', localizedName: 'wire rack', image: 'wire-rack.jpg' },
                { id: 404645, name: 'frying pan', localizedName: 'frying pan', image: 'pan.png' }
              ],
              length: { number: 15, unit: 'minutes' }
            },
            { number: 9, step: 'Cut into squares and serve', ingredients: [], equipment: [] }
          ]
        }
      ],
      originalId: null,
      spoonacularSourceUrl: 'https://spoonacular.com/black-bean-brownies-635063'
    }
  ]
}
