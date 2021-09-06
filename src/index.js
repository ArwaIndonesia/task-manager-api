const express = require("express");

require("./db/mongoose.js");
const userrouter = require("./routers/user.js");
const taskrouter = require("./routers/tasks.js");
const multer = require("multer");
const app = express();

const port = process.env.PORT;

// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("please upload a doc file"));
//     }
//     cb(undefined, true);
//   },
// });

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance!");
// });

app.use(express.json());

app.use(userrouter);
app.use(taskrouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myfunction = async () => {
//   const token = jwt.sign({ id: "abc123" }, "myfirsttoken", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "myfirsttoken");
//   console.log(data);
// };
// myfunction();

// const Tasks = require("./models/task.js");
// const User = require("./models/user.js");

// const main = async () => {
// const task = await Tasks.findById("6130bc9425544bd39af90fc6");
// await task.populate("owner");
// console.log(task.owner);
// const tasks = await Tasks.find({ owner: "6130b5e3905889271a93d16c" });
// // await user.populate("tasks");
// console.log(tasks);
// };
// main();
