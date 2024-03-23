import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
app.use(express.json());

let ETH_BALANCE = 200;
let USDC_BALANCE = 680000;

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello from Dex");
});

app.post("/buy-asset", (req: Request, res: Response) => {
  const quantity = req.body.quantity;
  const updatedEthQuantity = ETH_BALANCE - quantity;
  const updatedUsdcBalance = (ETH_BALANCE * USDC_BALANCE) / updatedEthQuantity;
  const paidAmount = updatedUsdcBalance - USDC_BALANCE;

  ETH_BALANCE = updatedEthQuantity;
  USDC_BALANCE = updatedUsdcBalance;

  res.json({ message: `You paid ${paidAmount} USDC for ${quantity} ETH` });
});

app.listen(3000, () => {
  console.log("up and running at http://localhost:3000");
});
