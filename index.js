const Discord = require("discord.js");

const Client = new Discord.Client;
const prefix = "-"; // le prefixe est un tiret la donc a envoyer avant chaque message si je merdes pas trop.

Client.on("ready", () => {
    console.log("bot en ligne."); //  la ligne 6 et 7 c'est pour mettre le bot en ligne et pour l'afficher.
});

/*Client.on("guildMemberAdd", member => {

    console.log("nvo membre");
    member.guild.channels.cache.find(channel => channel.id === "325564069748932608").send(":warning: " + member.displayName + " :warning:");

})

Client.on("guildMemberRemove", member => {
    console.log("un mec s'est fait ban");
    member.guild.channels.cache.find(channel => channel.id === "325564069748932608").send(":x: " + member.displayName + " :x:");
})*/

// le numero de channel id c'est l'identifiant d'un channel texte a mettre pour qu'il ecrive quand qqun join et leave le serv.


Client.on("message", msg => {
    if (msg.author.bot) return; // evidemment pour eviter que cet imbecile se reponde a lui meme.

    
    if (msg.author.id == 290186637563002882 && msg.content == prefix + "suis je le pharaon ?") {
        msg.channel.send("tu es le pharaon");
    }
    else if (msg.author.id != 290186637563002882 && msg.content == prefix + "suis je le pharaon ?") { msg.channel.send("tu n'es pas le pharaon imposteur.") }


    if (msg.content == prefix + "stat") {   //afin que chaque citoyen me revele son identité.
        msg.channel.send(msg.author.username + " vient d'envoyer un message");
        msg.channel.send(msg.author.id + " son id.");
    }

    if (msg.content == prefix + "dice") //j'interagis avec ce bg de chachi.
        msg.channel.send("chachi dice")

    if (msg.author.id == 290186637563002882 && msg.content == prefix + "salut") {   // la c'est just pour flatter mon ego.
        msg.reply("bonjour mon pharaon.:flushed:");
    }
    else if (msg.author.id == 227104616901378048 && msg.content == prefix + "salut") {  //la evidemment c'est pour faire chier louis mdr.
        msg.reply("niktamer");
    }

    else if (msg.content == prefix + "salut") msg.reply("salut. :fly:")

    if (msg.content == prefix + "gay")
        msg.channel.send("chachi gay");

    if (msg.content == prefix + "sexe" && msg.author.id == 339986096144515075)
        msg.reply("baise moi le cul maxou :eggplant:");

    else if (msg.content == prefix + "sexe" && msg.author.id == 290186637563002882)
        msg.reply("je te pompe le zboub frero nohomo");

    else if (msg.content == prefix + "sexe")
        msg.reply("je suis fidele a mamaxou...");

    if (msg.content == prefix + "cmd")
        msg.channel.send("resumé des commandes disponibles pour le bot. \n-gay \n-dice \n-salut \n-stat \n-amon \n-sexe \n-suis je le pharaon ?")
    /*msg.reply("oui grand pharaon ?");*/
});

/* 
    resumé des commandes disponibles pour le bot.
    -gay
    -dice
    -salut
    -stat
    -amon
    -sexe
    -suis je le pharaon ?
*/
// https://discord.com/oauth2/authorize?client_id=780802067966197790&scope=bot&permissions=233970752
Client.login(process.env.token)