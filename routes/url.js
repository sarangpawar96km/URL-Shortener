const express = require("express")
const {handleGenerateNewShortURL, handleRedirectURL, handleAnalytics} = require("../controllers/url")
const router = express.Router()

router.post("/",handleGenerateNewShortURL).get("/:id",handleRedirectURL).get("/analytics/:id",handleAnalytics)

module.exports = router