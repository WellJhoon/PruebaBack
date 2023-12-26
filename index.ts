import dotenv from "dotenv";
import app from "./src/index";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[SERVER ON]: Running in http://localhost:${port}/api `);
});
