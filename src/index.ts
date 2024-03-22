import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from bun");
});

app.listen(3000, () => {
  console.log("up and running at http://localhost:3000");
});
