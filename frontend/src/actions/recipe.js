/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/
export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedRecipe = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})

export const executeRecipeSearch = async (id) => {
  const response = await fetch(`/api/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const searchResults = await response.json()
  return searchResults
}

// TODO: fix action
export const searchRecipe = (id) => {
  return (dispatch) => {
    dispatch(fetchingRecipe())
    return executeRecipeSearch(id)
      .then((res) => dispatch(fetchedRecipe(res)))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}
