const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewurlParser: true,
});
// const User = mongoose.model("User", {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//       validate(value) {
//         if (!validator.isEmail(value)) {
//           throw new Error("Email is invalid");
//         }
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//       minLength: 6,
//       trim: true,
//       validate(value) {
//         if (value.toLowerCase().includes("password")) {
//           throw new Error("Password cannot contain 'password'");
//         }
//       },
//     },
//     age: {
//       type: Number,
//       default: 0,
//       validate(value) {
//         if (value < 0) {
//           throw new Error("age must be a positive number");
//         }
//       },
//     },
//   });

// const me = new User({
//   name: "   John   ",
//   email: "MyEMAIL@MEAD.IO  ",
//   password: "mypass123",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const Tasks = mongoose.model("Tasks", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Tasks({
//   description: "Learning mongoose",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
