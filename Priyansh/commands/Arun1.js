const axios = require("axios");
const fs = require("fs");
const request = require("request");

const videoLinks = [
  "https://i.imgur.com/bbigbCj.mp4" // Dil song video
];

// তোমার দেওয়া ছবির লিংক (আমি imgur এ আপলোড করে নিচ্ছি)
const imageLinks = [
  "https://i.imgur.com/7K7FvLa.jpg" // এখানে তোমার ছবি আছে ✅
];

module.exports.config = {
  name: "AdminBot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Md Tamim", // Owner name
  description: "Admin bot likhle gan o photo dey",
  commandCategory: "noprefix",
  usages: "Admin bot",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event }) => {
  const content = event.body ? event.body.toLowerCase() : '';
  if (content.includes("admin bot")) {

    const videoURL = videoLinks[Math.floor(Math.random() * videoLinks.length)];
    const imageURL = imageLinks[Math.floor(Math.random() * imageLinks.length)];

    const videoPath = __dirname + "/cache/adminbot_video.mp4";
    const imagePath = __dirname + "/cache/adminbot_img.jpg";

    const downloadVideo = () => new Promise((resolve) => {
      request(encodeURI(videoURL)).pipe(fs.createWriteStream(videoPath)).on("close", resolve);
    });

    const downloadImage = () => new Promise((resolve) => {
      request(encodeURI(imageURL)).pipe(fs.createWriteStream(imagePath)).on("close", resolve);
    });

    await downloadVideo();
    await downloadImage();

    const message = {
      body: "🎶 𝐀𝐝𝐦𝐢𝐧 𝗶𝘀 𝗺𝘆 𝗯𝗼𝘀𝘀💖 𝙈𝙙 𝙏𝙖𝙢𝙞𝙢 💖\n\n🎵 Here's a Dil song & a special photo just for you! 🥰",
      attachment: [
        fs.createReadStream(videoPath),
        fs.createReadStream(imagePath)
      ]
    };

    api.sendMessage(message, event.threadID, () => {
      fs.unlinkSync(videoPath);
      fs.unlinkSync(imagePath);
    }, event.messageID);
  }
};

module.exports.run = () => {};
