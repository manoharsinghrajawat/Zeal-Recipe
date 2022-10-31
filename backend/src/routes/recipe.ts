import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"
import { Validator } from "node-input-validator"
import { rollbar } from "../rollbar/rollbar"

/*
const recipeCleaner = (recipe): { id: string; name: StringConstructor; instructions: string; ingredients: [] } => {
  const { id, name, instructions, ingredients } = recipe
  return { id, name, instructions, ingredients }
}
*/
export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validator = new Validator(req.params, {
    id: "required|minLength:12",
  })
  const matched = await validator.check()
  if (!matched) {
    return res.status(422).send(validator.errors)
  } else {
    RecipeModel.findOne({ _id: req.params.id },
      function (err,recipe) {
        if (err) {
          return res.status(500).send({
            ok: false,
            error: 'There is some issue with the server! Please come back later.'
          })
        } else if (!recipe) {
          return res.status(500).send({
            ok: false,
            error: 'There is no recipe found for this id provided'
          })
        }
        return res.send({
          ok: true,
          data: recipe,
        })
      }
    )
  }
}
