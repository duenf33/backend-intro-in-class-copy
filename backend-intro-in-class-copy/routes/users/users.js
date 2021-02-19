var express = require('express');
var router = express.Router();
var axios = require("axios");
// const bcrypt = require("./bcryptjs")
// const User = require("./model/User");
const {
  getAllUsers,
  signup,
  login,
  deleteUserByEmail,
  deleteUserByID,
  updateUserByID,
  updateUserByEmail,
} = require("./controller/userController");

const { checkSignupInputIsEmpty } = require("./lib/checkSignup");
const { checkSignupDataType } = require("./lib/checkSignupDataType");
const { 
  checkLoginEmptyMiddleware, 
  checkEmailFormat, } 
  = require("./lib/checkLogin");
/* GET users listing. */
router.get("/create-user", async function (req, res) {
  res.render("sign-up");
  // res.render("sign-up", { error: null, success: null });
});

router.get("/login", function (req, res) {
  res.render("login", { error: null })
})

router.get("/home", async function (req, res) {

  // try {

  //   let result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=hamster`);

  //   res.json(result.data);
  // } catch (e) {
  //   res.status(500).json({
  //     message: "failure",
  //     data: e.message,
  //   })
  // }


  if (req.session.user) {
    res.render("home", { user: req.session.user.email });
  } else {
    res.render("message", { error: true })
  }
});

router.post("/home", async function (req, res) {
  if (req.session) {
    try {
      let result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.search}`);

      res.render("home", { data: result.data, user: req.session.user.email });
    } catch (e) {
      res.status(500).json({
        message: "failure",
        data: e.message,
      })
    }
  } else {
    res.render("message", { error: true });
  }
});


router.get("/get-all-users", getAllUsers);

//v4 async and await
router.post("/create-user", checkSignupInputIsEmpty, checkSignupDataType, signup);

router.post("/login", checkLoginEmptyMiddleware, checkEmailFormat, login);

router.delete("/delete-user-by-id/:id", deleteUserByID);

router.delete("/delete-user-by-email", deleteUserByEmail);

//update user by id
router.put("/update-user-by-id/:id", updateUserByID);

//update user by email
router.put("/update-user-by-email/", updateUserByEmail);

router.get("/logout", function (req, res) {
  console.log(req.session);

  req.session.destroy();

  console.log(req.session);

  return res.redirect("/users/login");

});

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