import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"
import { builtRecipes } from "./data"
import { RecipeModel } from "./models"

const createRecipes = async (): Promise<void> => {
  try {
    await RecipeModel.insertMany(builtRecipes)
  } catch (err) {
    console.log("Creation Issue: ", err)
  }
}
 
export const createAndConnectToServer = async (): Promise<void> => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "verifyMASTER" });
  // add default recipes
  await createRecipes()
}
