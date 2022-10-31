import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import Home from "./Containers/Home"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const WrappedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipedetailpage/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<WrappedHome />, document.getElementById("home"))
