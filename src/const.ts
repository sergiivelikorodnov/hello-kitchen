import { toast } from 'react-toastify';

export const API_BASE_URL = 'https://api.spoonacular.com/recipes';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY = '4130f3aa79cf43d5bb92e3d1101227e9';

export enum NotificationMessage {
  Error = 'Sorry. Something went wrong',
}

export const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};


export const dishesList = [
  {
    value: '',
    name: 'Select Type'
  },
  {
    value: 'dessert',
    name: 'Desert'
  },
  {
    value: 'lunch',
    name: 'Lunch'
  },
  {
    value: 'main course',
    name: 'Main Course'
  },
  {
    value: 'main dish',
    name: 'Main Dish'
  },
  {
    value: 'dinner',
    name: 'Dinner'
  }
]

export const SortingType = {
  POPULAR: 'Popularity',
  PRICE: 'Price',
  HEALTH: 'Health',
  TIME_COOKING: 'Time Cooking',
};

export const sortList = [
  {
    value: '',
    name: 'Select Sorting'
  },
  {
    value: 'popularity',
    name: 'Popularity'
  },
  {
    value: 'price',
    name: 'Price'
  },
  {
    value: 'health',
    name: 'Health'
  },
  {
    value: 'time-cooking',
    name: 'Time Cooking'
  }
]

export const cuisineList = [
  {
    value: '',
    name: 'Select Cuisine'
  },
  {
    value: 'American',
    name: 'American'
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
    value: 'Italian',
    name: 'Italian'
  },
  {
    value: 'Jewish',
    name: 'Jewish'
  },
  {
    value: 'Mediterranean',
    name: 'Mediterranean'
  }
]