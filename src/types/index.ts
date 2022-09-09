export type Category = {
    readonly idCategory: string,
    readonly strCategory: string,
    readonly strCategoryDescription: string,
    readonly strCategoryThumb: string
}

export type Categories = {
    readonly categories: Category[]
}

export type Meal =  Record<string,string | null> & {
    readonly dateModified: string,
    readonly idMeal: string,
    readonly strArea: string,
    readonly strCategory: string,
    readonly strCreativeCommonsConfirmed: string | null,
    readonly strDrinkAlternate: string | null,
    readonly strImageSource: string | null,
    readonly strIngredient1: string | null,
    readonly strInstructions: string,
    readonly strMeal: string,
    readonly strMealThumb: string,
    readonly strMeasure1: string,
    readonly strSource: string,
    readonly strTags: string | null,
    readonly strYoutube: string
}

export type Meals = {
    readonly meals: Meal[]
}

export type FavoriteMeal = Pick<Meal, 'idMeal' | 'strMeal' | 'strMealThumb'>

export type CategoryMeals = {
    readonly meals: FavoriteMeal[] | null
}

export type Area = {
    readonly strArea: string;
}

export type Areas = {
    readonly meals: Area[] | null
}