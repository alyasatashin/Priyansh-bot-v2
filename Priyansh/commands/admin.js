const moment = require("moment-timezone");
const fs = require("fs");
const path = require("path");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Tamim", // don't change my credit
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
    const imagePath = path.join(__dirname, "tamim.jpg"); // Ensure file is named correctly

    api.sendMessage({
        body: `
╔════════════════════════╗
       👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👑
╚════════════════════════╝

🧑‍💼 𝗡𝗮𝗺𝗲       : 𝐌𝐝 𝐓𝐚𝐦𝐢𝐦
🚻 𝗚𝗲𝗻𝗱𝗲𝗿     : Male
💔 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻   : ❌ Not Interested
🎂 𝗔𝗴𝗲         : 17+ (Still young & cool)
🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : Islam
🎓 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻   : Student
📍 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻    : Chittagong, Bangladesh

🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸   : koitam na boss baron korche
🎵 𝗧𝗶𝗸𝗧𝗼𝗸       : @Smilyheart100k

⏰ 𝗟𝗮𝘀𝘁 𝗨𝗽𝗱𝗮𝘁𝗲   : ${time}

━━━━━━━━━━━━━━━━━━━━━━━
🚀 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗕𝗼𝘀𝘀 𝗧𝗮𝗺𝗶𝗺 😎
        `,
        attachment: fs.createReadStream(imagePath)
    }, event.threadID, event.messageID);
};
