import express, { Request, Response } from "express";

const app = express();
const port = 6000;

app.get("/", (req: Request, res: Response) => {
  console.log("hello");
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
