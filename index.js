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


//--------------------------------------ENZO------------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 180010538758045696) {
        console.log("enzo est arrivé.");
        member.roles.add("601897509522112532").then(membre => {
            console.log("Rôle gardien du conseil attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle gardien du conseil fail");
        })
        member.roles.add("664861753393283082").then(membre => {
            console.log("Rôle csgo attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle csgo fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
        member.roles.add("683368751579791490").then(membre => {
            console.log("Rôle winx esport attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle winx esport fail");
        })
    }
})
//--------------------------------------DXSMR-----------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 333733236083654657) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("664861753393283082").then(membre => {
            console.log("Rôle csgo attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle csgo fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
        member.roles.add("755830979238690967").then(membre => {
            console.log("Rôle among us attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle among us fail");
        })
        member.roles.add("704071520418398218").then(membre => {
            console.log("Rôle cinephile attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle cinephile fail");
        })
        member.roles.add("683368751579791490").then(membre => {
            console.log("Rôle winx esport attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle winx esport fail");
        })
        member.roles.add("753195414458597416").then(membre => {
            console.log("Rôle penitent attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle penitent fail");
        })
        member.roles.add("771437920250232853").then(membre => {
            console.log("Rôle eco attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle eco fail");
        })
    }
})
//--------------------------------------AWINK9----------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 227104616901378048) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("664861753393283082").then(membre => {
            console.log("Rôle csgo attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle csgo fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
        member.roles.add("755830979238690967").then(membre => {
            console.log("Rôle among us attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle among us fail");
        })
        member.roles.add("704071520418398218").then(membre => {
            console.log("Rôle cinephile attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle cinephile fail");
        })
        member.roles.add("683368751579791490").then(membre => {
            console.log("Rôle winx esport attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle winx esport fail");
        })
        member.roles.add("753195414458597416").then(membre => {
            console.log("Rôle penitent attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle penitent fail");
        })
        member.roles.add("771437920250232853").then(membre => {
            console.log("Rôle eco attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle eco fail");
        })
        member.roles.add("777527251322798127").then(membre => {
            console.log("Rôle homophobe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle homophobe fail");
        })
    }
})
//--------------------------------------LE 16 PUTO-------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 227131011606118400) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("664861753393283082").then(membre => {
            console.log("Rôle csgo attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle csgo fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
        member.roles.add("755830979238690967").then(membre => {
            console.log("Rôle among us attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle among us fail");
        })
        member.roles.add("704071520418398218").then(membre => {
            console.log("Rôle cinephile attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle cinephile fail");
        })
        member.roles.add("683368751579791490").then(membre => {
            console.log("Rôle winx esport attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle winx esport fail");
        })
        member.roles.add("753195414458597416").then(membre => {
            console.log("Rôle penitent attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle penitent fail");
        })
        member.roles.add("771437920250232853").then(membre => {
            console.log("Rôle eco attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle eco fail");
        })
        member.roles.add("777527251322798127").then(membre => {
            console.log("Rôle homophobe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle homophobe fail");
        })
    }
})
//--------------------------------------MAMAXOU----------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 339986096144515075) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
    }
})
//--------------------------------------OSCAR-----------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 202898061385662465) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
        member.roles.add("664861753393283082").then(membre => {
            console.log("Rôle csgo attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle csgo fail");
        })
        member.roles.add("755830979238690967").then(membre => {
            console.log("Rôle among us attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle among us fail");
        })
        member.roles.add("683368751579791490").then(membre => {
            console.log("Rôle winx esport attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle winx esport fail");
        })
        member.roles.add("704071520418398218").then(membre => {
            console.log("Rôle cinephile attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle cinephile fail");
        })
    }
})
//--------------------------------------CESAR------------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 173439999331663872) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
        member.roles.add("574302993827233830").then(membre => {
            console.log("Rôle dj attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle dj fail");
        })
    }
})
//--------------------------------------FIN AUTO-ROLE----------------------------------------
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
        msg.channel.send("resumé des commandes disponibles pour le bot. \n-gay \n-dice \n-salut \n-stat \n-amon \n-sexe \n-suis je le pharaon ?\n-autorole");

    if (msg.content == prefix + "chachi")
        msg.channel.send("chachi")

    if {(msg.content == prefix + "autorole")
        msg.channel.send("Les personnes prises en charge par l'autorole sont :\n-Enzo\n-Louis\n-Jules (Dxsmr)\n-Maxence\n-Cesaire\n-Oscar.")}

    if {(msg.author.id == 173439999331663872)
        msg.reply("chut")}
    if {(msg.author.id == 325563711290867713)
        msg.reply("grr")}
    if {(msg.content == prefix + "test")
        msg.reply("positif").then(message => {
            console.log("reussi");
        }).catch(() => {
            console.log("echec");
        })}
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