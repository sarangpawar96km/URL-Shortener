const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({});
  const validUrls = allurls.filter(
    (url) => url.redirectUrl && url.redirectUrl.trim() !== ""
  );
  return res.render("home", {
    urls: validUrls,
  });
});

module.exports = router;
