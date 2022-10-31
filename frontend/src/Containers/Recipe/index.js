import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  RecipeWrapper,
  MainWrapper,
  RecipeDetailLeft,
  RecipeDetailRight,
  NameWrapper,
  InstructionWrapper,
  Ingredient,
} from "./styles"
import * as actions from "../../actions"
import withRouter from "./withRouter"

class Recipe extends Component {
  constructor(props) {
    super(props)
    const { searchRecipe } = this.props
    searchRecipe(this.props.params.id)
  }
  render() {
    const { recipe, isLoading } = this.props
    return (
      <RecipeWrapper>
        {recipe && recipe.ok && (
          <MainWrapper>
            <RecipeDetailLeft>
              <NameWrapper>{recipe.data.name}</NameWrapper>
              <InstructionWrapper>
                {recipe.data.instructions}
              </InstructionWrapper>
            </RecipeDetailLeft>
            <RecipeDetailRight>
              {recipe.data.ingredients.map((ing) => (
                <Ingredient key={ing._id}>{ing.name}</Ingredient>
              ))}
            </RecipeDetailRight>
          </MainWrapper>
        )}
      </RecipeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipe: actions.searchRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Recipe))
