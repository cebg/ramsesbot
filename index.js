const Discord = require("discord.js");

const Client = new Discord.Client;
const ytdl = require("ytdl-core") //(Pour qu'il puisse communiquer avec ytb) c'est installé mtn lol
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
      /*  member.roles.add("601897509522112532").then(membre => {
            console.log("Rôle gardien du conseil attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle gardien du conseil fail");
        })*/
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
//--------------------------------------FERNANDEZ(ALTACCOUNT)--------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 781113881887899659) {
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
//--------------------------------------JEAN/AWAK--------------------------------------------
Client.on("guildMemberAdd", member => {
    if (member.id == 335805930698571786) {
        console.log(" est arrivé.");
        member.roles.add("325585554106220554").then(membre => {
            console.log("Rôle plebe attribué. ==> " + membre.displayName);
        }).catch(() => {
            console.log("Rôle plebe fail");
        })
    }
})
//--------------------------------------FIN AUTO-ROLE----------------------------------------
Client.on("message", msg => {
    if (msg.author.bot) return; // evidemment pour eviter que cet imbecile se reponde a lui meme.

    if (msg.content == prefix + "?") {
        msg.react("❔")
    }
    
    //------------------------------------Fin KICK via commandes------------------------------------------
    //------------------------------------------TROLL------------------------------------------------
    if (msg.content == prefix + "tg"){
        msg.delete()
        if (msg.member.voice.channel) {
        msg.member.voice.channel.join().then(connection => {
            let dispatcher = connection.play(ytdl("https://youtu.be/EvTC5Da3INU", {quality: "highestaudio"}))
            dispatcher.on("finish", () =>{
                dispatcher.destroy()
                connection.disconnect()
            } )
        }).catch(err => {
            console.log("ceci est un echec mon brave")

        })
    }
    
}
if (msg.content === prefix + "ramses") {
    msg.delete()
    msg.channel.send("https://media.discordapp.net/attachments/782289396732526613/804107169657389076/Ramsesbot.png")
}
        //-----------------------------------------MUSIQUE-/TEST/----------------------------------------
    Client.on("message", msg => {
        if (msg.content.startsWith(prefix + "p")) {
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join().then(connection => {
                    let args = msg.content.split(" ")
                    if (!args[1]) {
                        var embedmusique = new Discord.MessageEmbed()
                        .setColor("#FFFF00")
                        .setTitle("**Ramses Musique**")
                        .setDescription('Aucun lien youtube !\n La syntaxe correcte de la commande est "-p <urlyoutube>".')
                        .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
                        .setFooter("Embed produit et présenté par #lebg8303")
                        .setTimestamp()
                         const channel01 = Client.channels.cache.find(channel => channel.id === "804062264821940255")
                       // channel01.send("**Aucun lien youtube.**")
                        channel01.send(embedmusique)
                        connection.disconnect()
                    }
                    else {
                        let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }))
                        dispatcher.on("finish", () => {
                            dispatcher.destroy()
                            connection.disconnect()
                        })

                        dispatcher.on("error", err => {
                            console.log("erreur de dispatcher" + err)
                           // const channel01 = Client.channels.cache.find(channel => channel.id === "804062264821940255")
                          //  channel01.send("Résultats de l'erreur ==>\n" + err)
                        var embedmusique2 = new Discord.MessageEmbed()
                        .setColor("#FFFF00")
                        .setTitle("**Ramses Musique**")
                        .setDescription('erreur :' + err)
                        .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
                        .setFooter("Embed produit et présenté par #lebg8303")
                        .setTimestamp()
                        const channel01 = Client.channels.cache.find(channel => channel.id === "804062264821940255")
                        channel01.send(embedmusique2)
                            connection.disconnect()
                        })
                    }

                }).catch(err => {
                    msg.reply("**Impossible de se connecter ou aucun lien youtube donné!\n Peut être un probleme de rôles.**")
                    console.log("L'erreur ==>" + err)
                    msg.author.send("L'erreur ==>" + err + "\n j'avais la flemme de faire un embed pour cette erreur mdr\n si t'as cette erreur sache que c'est celle qui est la moins probable d'arriver donc tu dois être une sacré grosse merde👍")
                    
                })
            }
            else {
                const channel01 = Client.channels.cache.find(channel => channel.id === "804062264821940255")
                var embedmusique3 = new Discord.MessageEmbed()
                        .setColor("#FFFF00")
                        .setTitle("**Ramses Musique**")
                        .setDescription('Utilisateur non-connecté dans un channel vocal')
                        .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
                        .setFooter("Embed produit et présenté par #lebg8303")
                        .setTimestamp()
                channel01.send(embedmusique3)
            }
        }
    })
        // -----------------------------------CLEAR-------------------------------------------------
        if (msg.content.startsWith("-del")) {
            msg.delete();
            if (msg.member.hasPermission("MANAGE_MESSAGES")) {
                let args = msg.content.split(" ")
                if (args[1]) {
                    if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {

                        msg.channel.bulkDelete(args[1])
                        console.log(args[1] + " messages on été supprimés.")
                        const channel01 = Client.channels.cache.find(channel => channel.id === "804062264821940255")
                        channel01.send(args[1] + " message(s) supprimé(s).")
                        console.log("Message envoyé dans le channel log sur discord.")

                    }
                    else if(isNaN(args[1])) {

                        var embed3 = new Discord.MessageEmbed()
                        .setColor("#FFFF00")
                        .setTitle("Echec -del")
                        .setDescription('Il faut renseigner un nombre pour la commande "-del" entre 1 et 98.\n Les messages doivent être récent (14 jours maximum).')
                        .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
                        .setFooter("Embed produit et présenté par #lebg8303")
                        .setTimestamp()
                        msg.author.send(embed3)
                        console.log("Erreur de syntaxe")
                    }

                }

            }
           else if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.author.send("Pas la permission de supprimer des messages avec la commande -del sur le server"+ msg.guild.name +".")
           }
        }
            // -----------------------------------FIN-CLEAR-----------------------------------------------


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

        if (msg.content == prefix + "cmd") {
            msg.delete()
            var embed = new Discord.MessageEmbed()
            .setColor("#FFFF00")
            .setTitle("**Commandes de RamsesBot.**")
            .setAuthor("lebg#8303", "https://media.discordapp.net/attachments/782252712024342558/803734305410252820/ErYCnRAXAAUQjv0.png?width=960&height=638" ,/*"Ici inserer le lien du site robinmichelle."*/)
            .setDescription("resumé des commandes disponibles pour le bot.\nTEMPMUTE+KICK+MUTE v1.2")
            .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
            .addField("Commandes utile", "-salut \n-stat \n-sexe \n-suis je le pharaon ?\n-p <URLYTB>\n-autorole\n-?\n-tg\n-ramses", true)
            .addField("Commandes Chachi", "-gay\n-dice", true)
            .addField("Commande Admin", "*-mute (ADMIN)* \n*-kick (ADMIN)*\n*-tempmute(ADMIN) => -tempmute <@personne> <nbSecondes>*\n-del <nbMessage>", true)
            .setFooter("Embed produit et présenté par #lebg8303")
            .setTimestamp()
            msg.author.send(embed)
            msg.delete()
        }

    if (msg.content == prefix + "cmd2") {
        msg.delete()
        msg.author.send("resumé des commandes disponibles pour le bot.\nTEMPMUTE+KICK+MUTE v1.2 \n-gay \n-dice \n-salut \n-stat \n-sexe \n-suis je le pharaon ?\n-autorole\n-mute (ADMIN) \n-kick (ADMIN)\n-tempmute(ADMIN) => -tempmute <@personne> <nbSecondes>\n-react\n-del <nbMessage>\n-p <URLYTB>");
    }

    if (msg.content == prefix + "chachi") {
        msg.channel.send("chachi")
    }

    if (msg.content == prefix + "autorole") {
       
        var embed2 = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setTitle("**Autorole**")
        .setAuthor("lebg#8303", "https://media.discordapp.net/attachments/782252712024342558/803734305410252820/ErYCnRAXAAUQjv0.png?width=960&height=638" ,/*"Ici inserer le lien du site robinmichelle."*/)
        .setDescription("**Utilisateur qui ont l'autorole actif.**\nl’autorole est un ingénieux stratagème conçu par matthieu ayant pour but d’attribuer des rôles automatiquement lorsqu’une personne spécifique rejoint le discord désiré")
        .setThumbnail("https://media.discordapp.net/attachments/782252712024342558/803929129753641040/Ramsesbot2.png")
        .addField("Les personnes prises en compte par l'autorole sont :", "\n-Enzo\n-Louis\n-Jules (Dxsmr)\n-Maxence\n-Cesaire\n-Oscar\n-Fernandez\nJean/Awak")
        .setFooter("Embed produit et présenté par #lebg8303")
        .setTimestamp()
        
        msg.author.send(embed2)
        msg.delete()
        //msg.author.send("Les personnes prises en charge par l'autorole sont :\n-Enzo\n-Louis\n-Jules (Dxsmr)\n-Maxence\n-Cesaire\n-Oscar\n-Fernandez\nJean/Awak")
    }

    if (msg.author.id == 173439999331663872) {
        msg.reply("chut")
    }

    if (msg.content == prefix + "test") {
        msg.reply("positif").then(message => {
            console.log("reussi");
        }).catch(() => {
            console.log("echec");
        })
        msg.channel.send("au covid...")
    }
    /*msg.reply("oui grand pharaon ?");*/
});
Client.on("ready", () => {
    Client.user.setActivity(prefix + "cmd", { type: 'WATCHING' });
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