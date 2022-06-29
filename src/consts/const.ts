import { toast } from 'react-toastify'
export const API_BASE_URL = 'https://api.spoonacular.com/recipes'
export const API_IMAGE_URL = 'https://spoonacular.com/recipeImages/'
export const REQUEST_TIMEOUT = 5000

export enum NotificationMessage {
  Error = 'Sorry. Something went wrong'
}

export const toastPosition = {
  position: toast.POSITION.TOP_CENTER
}

export const NUMBER_RECIPES = 8
export const NUMBER_LOADMORE_RECIPES = 4

export const dishesList = [
  {
    value: '',
    name: 'Select Type'
  },
  {
    value: 'main course',
    name: 'Main Course'
  },
  {
    value: 'side dish',
    name: 'Side Dish'
  },
  {
    value: 'dessert',
    name: 'Dessert'
  },
  {
    value: 'appetizer',
    name: 'Appetizer'
  },
  {
    value: 'salad',
    name: 'Salad'
  },
  {
    value: 'bread',
    name: 'Bread'
  },
  {
    value: 'breakfast',
    name: 'Breakfast'
  },
  {
    value: 'soup',
    name: 'Soup'
  },
  {
    value: 'beverage',
    name: 'Beverage'
  },
  {
    value: 'sauce',
    name: 'Sauce'
  },
  {
    value: 'marinade',
    name: 'Marinade'
  },
  {
    value: 'fingerfood',
    name: 'Fingerfood'
  },
  {
    value: 'snack',
    name: 'Snack'
  },
  {
    value: 'drink',
    name: 'Drink'
  }
]

export const SortingType = {
  POPULAR: 'Popularity',
  PRICE: 'Price',
  HEALTH: 'Health',
  TIME_COOKING: 'Time Cooking'
}

export const ImageSize = {
  XS: '90x90',
  S: '240x150',
  M: '312x150',
  L: '312x231',
  XL: '480x360',
  XXL: '556x370',
  XXXL: '636x393'
}

export const sortList = [
  {
    value: '',
    name: 'Select Sorting'
  },
  {
    value: 'meta-score',
    name: 'Meta Score'
  },
  {
    value: 'popularity',
    name: 'Popularity'
  },
  {
    value: 'healthiness',
    name: 'Healthiness'
  },
  {
    value: 'price',
    name: 'Price'
  },
  {
    value: 'time',
    name: 'Time'
  },
  {
    value: 'random',
    name: 'Random'
  },
  {
    value: 'max-used-ingredients',
    name: 'Max used ingredients'
  },
  {
    value: 'min-missing-ingredients',
    name: 'Min missing ingredients'
  },
  {
    value: 'alcohol',
    name: 'Alcohol'
  },
  {
    value: 'caffeine',
    name: 'Caffeine'
  },
  {
    value: 'copper',
    name: 'Copper'
  },
  {
    value: 'energy',
    name: 'Energy'
  },
  {
    value: 'calories',
    name: 'Calories'
  },
  {
    value: 'calcium',
    name: 'Calcium'
  },
  {
    value: 'carbohydrates',
    name: 'Carbohydrates'
  },
  {
    value: 'carbs',
    name: 'Carbs'
  },
  {
    value: 'choline',
    name: 'Choline'
  },
  {
    value: 'cholesterol',
    name: 'Cholesterol'
  },
  {
    value: 'total-fat',
    name: 'Total fat'
  },
  {
    value: 'fluoride',
    name: 'Fluoride'
  },
  {
    value: 'trans-fat',
    name: 'Trans fat'
  },
  {
    value: 'saturated-fat',
    name: 'Saturated fat'
  },
  {
    value: 'fiber',
    name: 'Fiber'
  },
  {
    value: 'folate',
    name: 'Folate'
  },
  {
    value: 'folic-acid',
    name: 'Folic acid'
  },
  {
    value: 'iodine',
    name: 'Iodine'
  },
  {
    value: 'iron',
    name: 'Iron'
  },
  {
    value: 'magnesium',
    name: 'Magnesium'
  },
  {
    value: 'protein',
    name: 'Protein'
  },
  {
    value: 'vitamin-b2',
    name: 'Vitamin B2'
  },
  {
    value: 'riboflavin',
    name: 'Riboflavin'
  },
  {
    value: 'sugar',
    name: 'Sugar'
  },
  {
    value: 'zinc',
    name: 'Zinc'
  }
]

export const cuisineList = [
  {
    value: '',
    name: 'Select Cuisine'
  },
  {
    value: 'African',
    name: 'African'
  },
  {
    value: 'American',
    name: 'American'
  },
  {
    value: 'British',
    name: 'British'
  },
  {
    value: 'Cajun',
    name: 'Cajun'
  },
  {
    value: 'Caribbean',
    name: 'Caribbean'
  },
  {
    value: 'Chinese',
    name: 'Chinese'
  },
  {
    value: 'EasternEuropean',
    name: 'Eastern European'
  },
  {
    value: 'European',
    name: 'European'
  },
  {
    value: 'French',
    name: 'French'
  },
  {
    value: 'German',
    name: 'German'
  },
  {
    value: 'Greek',
    name: 'Greek'
  },
  {
    value: 'Indian',
    name: 'Indian'
  },
  {
    value: 'Irish',
    name: 'Irish'
  },
  {
    value: 'Italian',
    name: 'Italian'
  },
  {
    value: 'Japanese',
    name: 'Japanese'
  },
  {
    value: 'Jewish',
    name: 'Jewish'
  },
  {
    value: 'Korean',
    name: 'Korean'
  },
  {
    value: 'LatinAmerican',
    name: 'Latin American'
  },
  {
    value: 'Mediterranean',
    name: 'Mediterranean'
  },
  {
    value: 'Mexican',
    name: 'Mexican'
  },
  {
    value: 'MiddleEastern',
    name: 'Middle Eastern'
  },
  {
    value: 'Nordic',
    name: 'Nordic'
  },
  {
    value: 'Southern',
    name: 'Southern'
  },
  {
    value: 'Spanish',
    name: 'Spanish'
  },
  {
    value: 'Thai',
    name: 'Thai'
  },
  {
    value: 'Vietnamese',
    name: 'Vietnamese'
  }
]
