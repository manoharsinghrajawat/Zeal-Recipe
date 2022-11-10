import express, {Request,Response} from "express"
import bodyParser from "body-parser"
import http from "http"
import path from 'path';
import { createAndConnectToServer } from "./db"
import { searchMiddleware, recipeMiddleware } from "./routes"

const appStartup = async () : Promise<void> => {
  await createAndConnectToServer();
  const app = express()
  const PORT = process.env.PORT || 5000
  // add parsers for the body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
  // create our routes
  app.post("/api/search", searchMiddleware)
  app.get("/api/recipe/:id",recipeMiddleware)
  //Handling errors through rollbar sdk middleware
  app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../../frontend/dist/index.html")
      );
  });
  // create a server
  const httpServer = new http.Server(app)
  httpServer.listen(PORT, () => {
    console.log(`now running on ${PORT}`)
  })
}

appStartup()