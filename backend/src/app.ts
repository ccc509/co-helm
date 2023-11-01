import cors from "cors";
import express, { Request, Response } from "express";
import { v4 } from "uuid";
import predict, { Prediction } from "./predict";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

type PredictionWithId = Prediction & { id: string };
const predictions: PredictionWithId[] = [];

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to the backend`);
});

app.post("/api/files", (req: Request, res: Response) => {
  res.status(201).send();
});

app.post("/api/guideline", async (req: Request, res: Response) => {
  const uuid = v4();
  const { text } = req.body;

  const prediction = await predict({ guidelinesText: text });
  predictions.push({ ...prediction, id: uuid });
  res.status(201).send();
});

app.get("/api/history", async (req: Request, res: Response) => {
  console.log({ predictions });
  res.status(200).json({ predictions });
});
