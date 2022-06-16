type ExtendedIngredientType = {
  aisle: string
  amount: number
  consistency: string
  nameClean: string
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
  pairedWines: string[]
  pairingText: string
  productMatches: ProductMatchType[]
}

type AnalyzedInstructionsIngredientType = {
  id: number
  name: string
  localizedName: string
  image: string
}

type AnalyzedInstructionsEquipmentType = {
  id: number
  name: string
  localizedName: string
  image: string
  temperature?: {
    number: number
    unit: string
  }
}

type AnalyzedInstructionsStepType = {
  number: number
  step: string
  ingredients: AnalyzedInstructionsIngredientType[]
  equipment: AnalyzedInstructionsEquipmentType[]
  length?: { number: number; unit: string }
}

type AnalyzedInstructionsType = {
  name: string
  steps: AnalyzedInstructionsStepType[]
}

export type SingleRecipeType = {
  id: number
  title: string
  image: string
  imageType: string
  servings: number
  readyInMinutes: number
  license?: string
  sourceName: string | null
  sourceUrl: string
  openLicense: number

  spoonacularSourceUrl: string
  aggregateLikes: number
  healthScore: number
  spoonacularScore?: number
  pricePerServing: number
  analyzedInstructions: AnalyzedInstructionsType[]
  cheap: boolean
  creditsText: string | null
  cuisines: string[]
  dairyFree: boolean
  diets: string[]
  gaps: string

  preparationMinutes: number
  cookingMinutes: number
  glutenFree: boolean
  instructions: string
  ketogenic?: boolean
  lowFodmap: boolean
  occasions: string[]
  sustainable: boolean
  vegan: boolean
  vegetarian: boolean
  veryHealthy: boolean
  veryPopular: boolean
  whole30?: boolean
  weightWatcherSmartPoints: number
  dishTypes: string[]
  originalId: number | null
  extendedIngredients: ExtendedIngredientType[]
  summary: string

  winePairing?: WinePairingType
} | null

export type RecipesType = {
  recipes: SingleRecipeType[]
}

export type SimilarRecipeType = {
  id: number
  title: string
  imageType: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
}

export type SimilarRecipesType = SimilarRecipeType[]
