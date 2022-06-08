import { toast } from 'react-toastify';

export const API_BASE_URL = 'https://api.spoonacular.com/recipes';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY = '98fe7fe0097f42bf897770b0399b62421';

export enum NotificationMessage {
  Error = 'Sorry. Something went wrong',
}

export const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};
