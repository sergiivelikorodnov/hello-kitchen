import { SearchRecipesType } from '../types/recipe'


export const searchRecipesMock: SearchRecipesType = {
  'results': [
    {
      'id': 715446,
      'title': 'Slow Cooker Beef Stew',
      'image': 'https://spoonacular.com/recipeImages/715446-312x231.jpg',
      'imageType': 'jpg'
    },
    {
      'id': 715415,
      'title': 'Red Lentil Soup with Chicken and Turnips',
      'image': 'https://spoonacular.com/recipeImages/715415-312x231.jpg',
      'imageType': 'jpg'
    },
    {
      'id': 766453,
      'title': "Hummus and Za'atar",
      'image': 'https://spoonacular.com/recipeImages/766453-312x231.jpg',
      'imageType': 'jpg'
    },
    {
      'id': 716627,
      'title': 'Easy Homemade Rice and Beans',
      'image': 'https://spoonacular.com/recipeImages/716627-312x231.jpg',
      'imageType': 'jpg'
    }
  ],
  'offset': 4,
  'number': 4,
  'totalResults': 5220
}

export const loadmoreRecipesMock: SearchRecipesType = {
    'results': [
      {
        'id': 1,
        'title': 'Slow Cooker Beef Stew',
        'image': 'https://spoonacular.com/recipeImages/715446-312x231.jpg',
        'imageType': 'jpg'
      },
      {
        'id': 2,
        'title': 'Red Lentil Soup with Chicken and Turnips',
        'image': 'https://spoonacular.com/recipeImages/715415-312x231.jpg',
        'imageType': 'jpg'
      },
    ],
    'offset': 6,
    'number': 2,
    'totalResults': 5220
  }