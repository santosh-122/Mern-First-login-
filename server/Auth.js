const express = require( "express");
const {allExports} = require( "npm_login_test");

const router = express.Router();
const CLIENT_URL = "http://localhost:3000/myprofile";


 const socialMediaData1 = (req, res) => {
 console.log("Home page ",JSON.stringify(req.user))
  return res.redirect(CLIENT_URL)
}

const socialMediaError = (req, res) => {

  res.status(401).json({
    success: false,
    message: "failure",
  });
}

router.get('/google/callback/success', socialMediaData1);
router.get('/google/callback/failure', socialMediaError);

router.get('/google', allExports.googleData);
router.get("/google/callback", allExports.googleCallback)

module.exports.socialMediaData1= socialMediaData1
module.exports.socialMediaError =socialMediaError
module.exports = router