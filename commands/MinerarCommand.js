const Discord = require("discord.js")
const mongoose = require("mongoose")
const db = require("../database.js")

exports.run = (vary, message, args) => {
  let prata = (replys1[Math.floor(Math.random() * replys1.length)])
  var raplays1 = [
    "0",
    "14",
    "13",
    "12",
    "11",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0"
];
let ferro = (replys2[Math.floor(Math.random() * replys2.length)])
var replays2 = [
    "0",
    "14",
    "13",
    "19",
    "11",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0"
];
let ouro = (replys3[Math.floor(Math.random() * replys3.length)])
var replys3 = [
    "0",
    "14",
    "13",
    "6",
    "11",
    "10",
    "9",
    "8",
    "7",
    "6",
    "1",
    "0"
];

const embed = new Discord.RichEmbed()
    .setColor(RANDOM)
    .setTitle(`:moneybag: **${message.author}** você `minerou` e ganhou:`)
    .addField(`Prata`, ` ```${prata}``` `)
    .addField(`Ferro`, ` ```${ferro}``` `)
    .addField(`Ouro`, ` ```${ouro}``` `)

  db.Users.findOne({userID: message.author.id}, (err, user) =>{
      if (user) {
          if ((86400000 / 2) - (Date.now() - user.coinsLastTime) > 0) return message.channel.send('Você já pegou seus coins diários hoje, espere para pegar novamente')
          user.prata += prata
          user.ferro += ferro
          user.ouro += ouro
          user.minerarLastTime = Date.now()
          message.reply(embed)
          user.save();
          ;
} else {
          message.channel.send('Use `v;registrar` para se registrar!')
      }
      });
}

exports.config = {
    name: 'minerar',
    aliases: ['mine']
}
