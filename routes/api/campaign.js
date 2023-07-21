const router = require("express").Router();
const Campaign = require("../models/Campaign");

router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find().select("-description");

    res.status(200).json({
      ok: true,
      campaigns,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const campaign = await Campaign.findOne({ slug });

    if (!campaign) {
      return res.status(404).json({
        ok: false,
        message: "No campaign found",
      });
    }

    res.status(200).json({
      ok: true,
      campaign,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
