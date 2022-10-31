import React, { Component } from "react"
import { RecipeWrapper, recipeStyle, RecipeTextStyle } from "./styles"
import { connect } from "react-redux"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import LinearProgress from "@material-ui/core/LinearProgress"
import { Link } from "react-router-dom"

class RecipeItems extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { recipes, isLoading } = this.props
    return (
      <RecipeWrapper style={{ overflowY: "scroll" }}>
        {recipes && (
          <List>
            {recipes.map((recipe) => (
              <ListItem
                style={recipeStyle}
                key={recipe.id}
                component={Link}
                to={`/recipedetailpage/${recipe.id}`}
              >
                <ListItemText primary={recipe.name} />
              </ListItem>
            ))}
          </List>
        )}
        {isLoading && <LinearProgress />}
      </RecipeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}

export default connect(mapStateToProps)(RecipeItems)
