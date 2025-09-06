import e, { type Application } from "express";
import cors from 'cors'
import { ORIGIN } from "./constants/index.js";

const app: Application = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));``
app.use(cors({
  origin: ORIGIN,
  methods: ["PUT", "GET", "POST", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type/json"],
}))


import adminRouter from './routes/admin.routes.js';
import globalErrCatch from "./utils/globalErr.util.js";

app.use("/api/v1/admin",adminRouter);

app.use(globalErrCatch);
export { app };

