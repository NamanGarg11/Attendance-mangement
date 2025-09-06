import { app } from "./app.js";

app.listen(8080, (err) => {
  if (err) throw err;
  console.log('server is running on port 8080');
})
