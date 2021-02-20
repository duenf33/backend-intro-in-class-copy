var express = require('express');
var router = express.Router();
var axios = require("axios");
// const bcrypt = require("./bcryptjs")
// const User = require("./model/User");
const {
  getAllUsers,
  sendToSignup,
  sendToLogin,
  getHome,
  postHome,
  signup,
  login,
  deleteUserByEmail,
  deleteUserByID,
  updateUserByID,
  updateUserByEmail,
  logout,
} = require("./controller/userController");

const { checkSignupInputIsEmpty } = require("./lib/checkSignup");
const { checkSignupDataType } = require("./lib/checkSignupDataType");
const { 
  checkLoginEmptyMiddleware, 
  checkEmailFormat, } 
  = require("./lib/checkLogin");

/* GET users listing. */
router.get("/get-all-users", getAllUsers);

router.get("/create-user", sendToSignup);

router.get("/login", sendToLogin)

router.get("/home", getHome);

router.post("/home", postHome);
//v4 async and await
router.post("/create-user", checkSignupInputIsEmpty, checkSignupDataType, signup);

router.post("/login", checkLoginEmptyMiddleware, checkEmailFormat, login);

router.delete("/delete-user-by-id/:id", deleteUserByID);

router.delete("/delete-user-by-email", deleteUserByEmail);

//update user by id
router.put("/update-user-by-id/:id", updateUserByID);

//update user by email
router.put("/update-user-by-email/", updateUserByEmail);

router.get("/logout", logout);

module.exports = router;

// v1
// router.post("/create-user", function (req, res) {
//     const createdUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password
//   });
//   createdUser.save(function (err, userCreated) {
//       if (err) {
//           res.status(400).json({
//               message: "ERROR",
//               errMessage: err.message,
//           });
//       } else {
//           res.status(200).json({
//               message: "User Created",
//               user: userCreated,
//           });
//       }
//   })
// });


// callback
// router.post("/create-user", function (req, res) {   


  

//   userController.signup(req.body, function(err, createdUser) {
//     if (err) {
//       res.status(400).json({
//         message: "ERROR",
//         errMessage: err.message,
//           });
//       } else {
//           res.status(200).json({
//               message: "User Created",
//               user: createdUser,
//           });
//       }  })



// })

// v3 promises
// router.post("/create-user", function (req, res) {
//   userController
//     .signup(req.body)
//     .then((createdUser) => {
//       res.status(200).json({
//         message: "User Created",
//         user: createdUser,
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         message: "ERROR",
//         errMessage: error.message,
//       });
//     });
// });