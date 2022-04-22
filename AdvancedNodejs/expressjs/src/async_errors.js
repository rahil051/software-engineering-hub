// const express = require("express");
// require('express-async-errors');

new Promise((resolve, reject) => {
    resolve(new Error());  // This will result in a rejection
  });

// const app = express();

// app.get("/boom", (req, res) => {
//   throw "This will be handled";
// });

// app.get("/boomasync", async (req, res) => {
//     return unhandledRejection.catch(err => {
//         throw err;
//     })
// });

// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }
//   console.error(err);
//   res.status(500).send("Oh no!");
// });

// app.listen(3000, () => console.log("Listening on 3000!"));
