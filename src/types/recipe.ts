type ExtendedIngredientType = {
  aisle: string
  amount: number
  consitency: string
  id: number
  image: string
  measures: {
    metric: {
      amount: number
      unitLong: string
      unitShort: string
    }
    us: {
      amount: number
      unitLong: string
      unitShort: string
    }
  }
  meta: string[]
  name: string
  original: string
  originalName: string
  unit: string
}

type ProductMatchType = {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  score: number
  link: string
}

type WinePairingType = {
    pairedWines: string[],
    pairingText: string,
    productMatches: ProductMatchType[]
}

export type SingleRecipeType = {
    id: 716429,
    title: string,
    image: string,
    imageType: string,
    servings: number,
    readyInMinutes: number,
    license: string,
    sourceName: string,
    sourceUrl: string,
    spoonacularSourceUrl: string,
    aggregateLikes: number,
    healthScore: number,
    spoonacularScore: number,
    pricePerServing: number,
    analyzedInstructions: string[],
    cheap: boolean,
    creditsText: string,
    cuisines: string[],
    dairyFree: boolean,
    diets: string[],
    gaps: string,
    glutenFree: boolean,
    instructions: string,
    ketogenic: boolean,
    lowFodmap: boolean,
    occasions: string[],
    sustainable: boolean,
    vegan: boolean,
    vegetarian: boolean,
    veryHealthy: boolean,
    veryPopular: boolean,
    whole30: boolean,
    weightWatcherSmartPoints: number,
    dishTypes: string[],

    extendedIngredients:ExtendedIngredientType[],

    summary: string,

    winePairing: WinePairingType
}

export type RecipesType = {
    recipes: SingleRecipeType[]
}