export const getRecipes = () => {
    return {
      type: 'GET_RECIPES'
    }
}

export const recipesLoaded = recipes => {
    console.warn('recipesLoaded', recipes)

    return {
      type: 'RECIPES_LOADED',
      data: recipes
    }
}