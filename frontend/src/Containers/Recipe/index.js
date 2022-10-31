import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  RecipeWrapper,
  detailWrapper,
  leftDetail,
  rightDetail,
  nameStyle,
  ingStyle,
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
          <div style={detailWrapper}>
            <div style={leftDetail}>
              <div style={nameStyle}>{recipe.data.name}</div>
              <div>{recipe.data.instructions}</div>
            </div>
            <div style={rightDetail}>
              {recipe.data.ingredients.map((ing) => (
                <div style={ingStyle} key={ing._id}>
                  {ing.name}
                </div>
              ))}
            </div>
          </div>
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
