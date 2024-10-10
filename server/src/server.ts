import app from "./app";

const PORT = 4000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server started on port ${PORT} on host ${HOST}!`);
});
