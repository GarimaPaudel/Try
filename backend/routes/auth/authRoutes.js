const { registerUser, loginUser, forgotPassword, verifyOtp, resetPassword } = require("../../controller/auth/authController")
const { reportProblem } = require("../../controller/user/reportProblem")
const isAuthenticated = require("../../middleware/isAuthenticated")
const catchAsync = require("../../services/catchAsync")

const router = require("express").Router()

router.route("/register").post(catchAsync(registerUser))
router.route("/login").post(loginUser)
router.route("/forgotPassword").post(catchAsync(forgotPassword))
router.route("/verifyOtp").post(catchAsync(verifyOtp))
router.route("/resetPassword").post(catchAsync(resetPassword))




module.exports = router