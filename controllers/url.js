const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if(!body.url) return res.status(404).json({error:"URL not found"})
  const redirectURL = body.url
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: redirectURL,
    visitHistory: [],
  });
  if(redirectURL){
  return res.render("home", {
    id: shortID,
  });
}
}

async function handleRedirectURL(req, res) {
  try {
    const shortId = req.params.id;
    const entry = await URL.findOne({ shortId });
    if (!entry) {
      return res.status(404).send("ShortURL not found");
    }
    await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamps: Date.now(),
          },
        },
      },
      { new: true } // This option ensures you get the updated document
    );

    if (!entry) {
      return res.status(404).send("URL not found");
    }

    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleAnalytics(req, res) {
  const shortId = req.params.id;
  const host = req.headers.host;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
    host: host,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleAnalytics,
};
