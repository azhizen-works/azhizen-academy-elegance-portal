const express = require("express");
const axios = require("axios");
const getSlackWebhook = require("../utils/getSlackWebhook");

const router = express.Router();

router.post("/get-in-touch", async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      FormMessage,
    } = req.body;

    const webhookUrl = await getSlackWebhook("MediaPage/Get-In-Touch");

    const message = {
      text: `*Media Page - Get in touch Message*\n
*Name:* ${name}
*E-Mail:* ${email}
*Mobile Number:* ${mobile}
*Message:* ${FormMessage}
*Messaged At:* ${new Date().toLocaleString()}
      `,
    };

    await axios.post(webhookUrl, message);

    res.json({ success: true });
  } catch (error) {
    console.error("Slack notification failed:", error.message);
    res.status(500).json({ error: "Slack notification failed" });
  }
});


router.post("/contact-us", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      FormMessage,
    } = req.body;

    const webhookUrl = await getSlackWebhook("MediaPage/Contact-Us");

    const message = {
      text: `*Media Page Contact Us Message*\n
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${FormMessage}
*Messaged At:* ${new Date().toLocaleString()}
      `,
    };

    await axios.post(webhookUrl, message);

    res.json({ success: true });
  } catch (error) {
    console.error("Slack notification failed:", error.message);
    res.status(500).json({ error: "Slack notification failed" });
  }
});

module.exports = router;
