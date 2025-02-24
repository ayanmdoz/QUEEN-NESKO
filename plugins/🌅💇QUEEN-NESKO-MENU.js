const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{
let dec = `
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ *Oᴡɴᴇʀ:* αчαn mσdz
├ׁ̟̇❍✎ *Mᴏᴅ:* Públic
├ׁ̟̇❍✎ *🄻ɪʙʀᴇʀɪᴀ:* Baileys
├ׁ̟̇❍✎ *🄱ᴏᴛ:* Oғᴄ
├ׁ̟̇❍✎ *:quєєn nєskσ Oғᴄ* 
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ M̸E̸N̸U̸ L̸I̸S̸T̸ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .Dʟᴍᴇɴᴜ
├ׁ̟̇❍✎ .Gʀᴏᴜᴘᴍᴇɴᴜ
├ׁ̟̇❍✎ .Pᴏʀɴᴏᴍᴇɴᴜ
├ׁ̟̇❍✎ .Oᴡɴᴇʀᴍᴇɴᴜ
├ׁ̟̇❍✎ .Cᴏɴᴠᴇʀᴛᴍᴇɴᴜ
├ׁ̟̇❍✎ .Aɪᴍᴇɴᴜ
├ׁ̟̇❍✎ .Aɴɪᴍᴇᴍᴇɴᴜ
├ׁ̟̇❍✎ .Fᴜɴᴍᴇɴᴜ
├ׁ̟̇❍✎ .Oᴛʜᴇʀᴍᴇɴᴜ
├ׁ̟̇❍✎ .Mᴏᴠɪᴇᴍᴇɴᴜ
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/pakaya.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec =`
        *D̸O̸W̸N̸L̸O̸A̸D̸ M̸E̸N̸U̸* 

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .play _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .play2 _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .play3 _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .play4 _ɴᴀᴍᴇ ᴏʀ ʟɪɴᴋ_
├ׁ̟̇❍✎ .song _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .song2 _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .video _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .video2 _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .ytmp3 _ʟɪɴᴋ ʏᴏᴜᴛᴜʙᴇ_
├ׁ̟̇❍✎ .ytmp4 _ʟɪɴᴋ ʏᴏᴜᴛᴜɴᴇ_
├ׁ̟̇❍✎ .ytmp3doc _ʟɪɴᴋ ʏᴏᴜᴛᴜɴᴇ_
├ׁ̟̇❍✎ .ytmp4doc _ʟɪɴᴋ ʏᴏᴜᴛᴜɴᴇ_
├ׁ̟̇❍✎ .spotify _ɴᴀᴍᴇ ᴏʀ ʟɪɴᴋ_
├ׁ̟̇❍✎ .facebook _ʟɪɴᴋ_
├ׁ̟̇❍✎ .instagram _ʟɪɴᴋ_
├ׁ̟̇❍✎ .tiktok _ʟɪɴᴋ_
├ׁ̟̇❍✎ .pinterest _ɴᴀᴍᴇ ᴏʀ ʟɪɴᴋ_
├ׁ̟̇❍✎ .twitter _ʟɪɴᴋ_
├ׁ̟̇❍✎ .img _ɴᴀᴍᴇ_
├ׁ̟̇❍✎ .apk _ɴᴀᴍᴇ_
├ׁ̟̇❍✎ .apk2 _ɴᴀᴍᴇ_
├ׁ̟̇❍✎ .mediafire _ʟɪɴᴋ ᴍᴇᴅғɪʀᴇ_
├ׁ̟̇❍✎ .gdrive _ʟɪɴᴋ ᴅɢʀɪᴠᴇ_
├ׁ̟̇❍✎ .darama _ɴᴀᴍᴇ ᴏʀ ʟɪɴᴋ_
├ׁ̟̇❍✎ .audio _ɴᴀᴍᴇ sᴏɴɢ_
├ׁ̟̇❍✎ .audio2 _ɴᴀᴍᴇ sᴏɴɢ_
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `
        *G̸R̸O̸U̸P̸ M̸E̸N̸U̸* 
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .grouplink _ʟɪɴᴋ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .kickall _ʀᴇᴍᴏᴠᴇ ᴀʟʟ_
├ׁ̟̇❍✎ .kickall2 _ʀᴇᴍᴏᴠᴇ ᴀʟʟ_
├ׁ̟̇❍✎ .kickall3 _ʀᴇᴍᴏᴠᴇ ᴀʟʟ_
├ׁ̟̇❍✎ .add _ᴛᴇxᴛ ɴᴜᴍʙᴇʀ_ 
├ׁ̟̇❍✎ .remove _ʀᴇᴍᴏᴠᴇ ᴍᴇᴍʙᴇʀ_
├ׁ̟̇❍✎ .kick _ʀᴇᴍᴏᴠᴇ ᴍᴇᴍʙᴇʀ_
├ׁ̟̇❍✎ .promote _ᴘʀᴏᴍᴏᴛᴇ ᴀᴅᴍɪɴ_
├ׁ̟̇❍✎ .demote _ᴅᴇᴍᴏᴛᴇ ᴀᴅᴍɪɴ_
├ׁ̟̇❍✎ .dismiss _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .revoke _ʟɪɴᴋ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .setgoodbye _ɴᴇᴡ ᴍᴇssᴀɢᴇ ɢᴏᴏᴅʙʏᴇ_
├ׁ̟̇❍✎ .setwelcome _ɴᴇᴡ ᴍᴇssᴀɢᴇ ᴡᴇʟᴄᴏᴍᴇ_
├ׁ̟̇❍✎ .delete ....
├ׁ̟̇❍✎ .getpic _ᴀᴅᴅ ᴘɪᴄ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .ginfo _ɪɴғᴏʀᴍᴀᴛɪᴏɴ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .disappear on
├ׁ̟̇❍✎ .disappear off
├ׁ̟̇❍✎ .disappear _7D,24H_
├ׁ̟̇❍✎ .updategname _ɴᴇᴡ ɴᴀᴍᴇ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .updategdesc _ɴᴇᴡ ᴅᴇsᴄ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .joinrequests
├ׁ̟̇❍✎ .nikal _ᴏᴡɴᴇʀ_
├ׁ̟̇❍✎ .senddm _ᴏᴡɴᴇʀ_
├ׁ̟̇❍✎ .mute
├ׁ̟̇❍✎ .unmute 
├ׁ̟̇❍✎ .lockgc _ʟᴏᴄᴋ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .unlockgc _ᴜɴʟᴏᴄᴋ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .invite _ʟɪɴᴋ ɢʀᴏᴜᴘ_
├ׁ̟̇❍✎ .tag _ᴍᴇɴᴛɪᴏɴ ᴍᴇᴍʙᴇʀ_
├ׁ̟̇❍✎ .hidetag _ᴛᴇxᴛ_ 
├ׁ̟̇❍✎ .tagadmins _ᴍᴇɴᴛɪᴏɴ ᴀʟʟ_
├ׁ̟̇❍✎ .tagall _ᴍᴇɴᴛɪᴏɴ ᴀʟʟ_
├ׁ̟̇❍✎ .allreq ...
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *O̸W̸N̸E̸R̸ M̸E̸N̸U̸* 
   ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .owner
├ׁ̟̇❍✎ .ᴍᴇɴᴜ
├ׁ̟̇❍✎ .ʟɪsᴛᴄᴍᴅ
├ׁ̟̇❍✎ .ʙʟᴏᴄᴋ
├ׁ̟̇❍✎ .ᴜɴʙʟᴏᴄᴋ
├ׁ̟̇❍✎ .ғᴜʟʟᴘᴘ
├ׁ̟̇❍✎ .sᴇᴛᴘᴘ
├ׁ̟̇❍✎ .ʀᴇsᴛᴀʀᴛ
├ׁ̟̇❍✎ .sʜᴜᴛᴅᴏᴡɴ
├ׁ̟̇❍✎ .ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
├ׁ̟̇❍✎ .ᴀʟɪᴠᴇ
├ׁ̟̇❍✎ .ɢᴊɪᴅ
├ׁ̟̇❍✎ .ᴊɪᴅ
├ׁ̟̇❍✎ .sᴇᴛʙɪᴏ
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *₵Ø₦VɆⱤ₮ M̸E̸N̸U̸* 
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .sᴛɪᴄᴋᴇʀ _ᴄᴏɴᴠᴇʀᴛs ɪᴍᴀɢᴇ ᴛᴏ sᴛɪᴄᴋᴇʀ_ 
├ׁ̟̇❍✎ .sᴛɪᴄᴋᴇʀ2 _ᴄᴏɴᴠᴇʀᴛs ɪᴍᴀɢᴇ ᴛᴏ sᴛɪᴄᴋᴇʀ_
├ׁ̟̇❍✎ .ғᴀɴᴄʏ 
├ׁ̟̇❍✎ .ᴛᴀᴋᴇ 
├ׁ̟̇❍✎ .ᴛᴏᴍᴘ3 _ᴄᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ᴛᴏ ᴀᴜᴅɪᴏ_
├ׁ̟̇❍✎ .ᴛᴛs _ᴄᴏɴᴠᴇʀᴛs ᴡᴏʀᴅs ᴛᴏ ᴀᴜᴅɪᴏ_
├ׁ̟̇❍✎ .ᴛʀᴛ _ᴛʀᴀᴅᴜᴛᴏʀ_
├ׁ̟̇❍✎ .ᴀᴛᴛᴘ
├ׁ̟̇❍✎ .ᴛᴏɪᴍɢ
├ׁ̟̇❍✎ .ᴛᴏʜᴅ
├ׁ̟̇❍✎ .ᴠᴠ
├ׁ̟̇❍✎ .ɪᴍɢ2ᴜʀʟ
├ׁ̟̇❍✎ .ᴛᴏᴀɴɪᴍᴇ
├ׁ̟̇❍✎ .ᴛɪɴʏᴜʀʟ
├ׁ̟̇❍✎ .ᴄᴏʟᴏʀɪᴢᴇ
├ׁ̟̇❍✎ .ᴛᴛᴘ
├ׁ̟̇❍✎ .ᴜʀʟ
├ׁ̟̇❍✎ .s
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *₳ł M̸E̸N̸U̸* 
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .ᴀɪ _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .ɢᴘᴛ _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .ɢᴘᴛ4 _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .ʙʟᴀᴄᴋʙᴏx
├ׁ̟̇❍✎ .ᴍᴇᴛᴀ _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .ʙɪɴɢ _ᴛᴇxᴛ_
├ׁ̟̇❍✎ .ᴄᴏᴘɪʟᴏᴛ _ᴛᴇxᴛ_
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// ᴍᴏᴠɪᴇ menu

cmd({
    pattern: "moviemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *M̸O̸V̸I̸E̸ M̸E̸N̸U̸* 
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .ᴍᴏᴠɪᴇ 
├ׁ̟̇❍✎ .ᴍᴏᴠɪᴇᴅʟ
├ׁ̟̇❍✎ .ᴍᴠᴅʟ2
├ׁ̟̇❍✎ .sɪɴʜᴀʟᴀsᴜʙ
├ׁ̟̇❍✎ .sɪɴʜᴀʟᴀsᴜʙ2
├ׁ̟̇❍✎ .ғɪʀᴇᴍᴏᴠɪᴇ
├ׁ̟̇❍✎ .ᴄɪɴᴇɪɴғᴏ
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// fun menu 

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *₣Ʉ₦ M̸E̸N̸U̸* 
   ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .ɪɴsᴜʟᴛ
├ׁ̟̇❍✎ .ᴊᴏᴋᴇ
├ׁ̟̇❍✎ .ʜᴀᴄᴋ
├ׁ̟̇❍✎ .ʜᴇᴀʀᴛ
├ׁ̟̇❍✎ .ʜᴀᴘᴘʏ
├ׁ̟̇❍✎ .sᴀᴅ
├ׁ̟̇❍✎ .ᴀɴɢʀʏ
├ׁ̟̇❍✎ .sʜʏ
├ׁ̟̇❍✎ .ᴋɪss
├ׁ̟̇❍✎ .ᴍᴏᴏɴ
├ׁ̟̇❍✎ .ᴄᴜɴғᴜᴢᴇᴅ
├ׁ̟̇❍✎ .ʜᴀɴᴅ
├ׁ̟̇❍✎ .ɴɪᴋᴀʟ
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// anime menu

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *A̶N̶I̶M̶E̶ M̸E̸N̸U̸* 
   ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .ᴅᴏɢ
├ׁ̟̇❍✎ .ᴋɪɴɢ
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ1
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ2
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ3
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ4
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇɢɪʀʟ4
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇ1
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇ2
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇ3
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇ4
├ׁ̟̇❍✎ .ᴀɴɪᴍᴇ5
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// ᴘᴏʀɴᴏ menu

cmd({
    pattern: "pornomenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *P̸O̸R̸N̸O̸ M̸E̸N̸U̸* 
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .xɴxx _ɴᴀᴍᴇ ᴏʀ ʟɪɴᴋ_
├ׁ̟̇❍✎ .ᴘᴜssʏʙᴅʟ _ɴᴀᴍᴇ_
├ׁ̟̇❍✎ .xᴠᴅᴇᴏ _ɴᴀᴍᴇ_
├ׁ̟̇❍✎ .xɴxxsᴇᴀʀᴄʜ _ɴᴀᴍᴇ_
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
        *Ø₮ⱧɆⱤ M̸E̸N̸U̸* 
   ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ quєєn nєskσ ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🔥⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ .ғᴀᴄᴛ
├ׁ̟̇❍✎ .ᴄᴘᴘ
├ׁ̟̇❍✎ .ʀᴡ
├ׁ̟̇❍✎ .ᴅᴇғɪɴᴇ 
├ׁ̟̇❍✎ .ɴᴇᴡs
├ׁ̟̇❍✎ .ᴡɪᴋɪᴘᴇᴅɪᴀ
├ׁ̟̇❍✎ .ɢᴘᴀss
├ׁ̟̇❍✎ .ɢɪᴛsᴛᴀʟᴋ
├ׁ̟̇❍✎ .sᴀᴠᴇ
├ׁ̟̇❍✎ .sᴇɴᴅ
├ׁ̟̇❍✎ .ᴀʟɪᴠᴇ
├ׁ̟̇❍✎ .ᴘɪɴɢ
├ׁ̟̇❍✎ .sʏsᴛᴇᴍ
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝
> P͎O͎W͎E͎R͎E͎D͎ B͎Y͎ A͎Y͎A͎N͎ M͎O͎D͎Z͎ I͎N͎C͎ 🚩
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/p6Fn0hQf/temp-image.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363395078593786@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});