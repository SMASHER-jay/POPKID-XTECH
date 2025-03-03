"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🤓", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Popkiddevs/POPKID-XTECH';
  const img = 'https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow Friend
this is* *popkid-xtech bot 👊.*\n *Join Group Chat* https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l

🗼 *REPOSITORY:* ${data.html_url}
💫 *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
🙊 *OWNER:* *POPKID-KE*
🍃 *THEME:* *popkid md*
🍷 *❤️Its Your Favorite Teenager❤️*
____________________________________
💙💖❤️🧡💛💚💜🤍🖤❤️🧡💛💚
____________________________________
            *CODED BY POPKID*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
