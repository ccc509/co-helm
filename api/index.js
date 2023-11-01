"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const predict_1 = __importDefault(require("./predict"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3001;
app.use(express_1.default.json());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const predictions = [];
app.get("/", (req, res) => {
  res.send(`Welcome to the backend`);
});
app.post("/api/files", (req, res) => {
  res.status(201).send();
});
app.post("/api/guideline", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const uuid = (0, uuid_1.v4)();
    const { text } = req.body;
    const prediction = yield (0, predict_1.default)({ guidelinesText: text });
    predictions.push(
      Object.assign(Object.assign({}, prediction), { id: uuid })
    );
    res.status(201).send();
  })
);
app.get("/api/history", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ predictions });
  })
);
