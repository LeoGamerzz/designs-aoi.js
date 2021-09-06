const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "", //Discord Bot Token
prefix: "=" //Discord Bot Prefix
})

bot.status({
    text: "Status",
    type: "PLAYING",
    status: "dnd",
    time: 12
  })

bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `$title[]
$description[
<a:informationicon:869450376309514261> My ping - $botPing ms
<a:informationicon:869450376309514261> API latmecy - $pingms]
$color[RANDOM]` 
})

bot.command({
    name: "embed",
    aliases: "say",
    code: `
    $description[ $spliTtext[1]]
    $color[D300F8]
    $textsplit[$message;///]`
   })

   bot.command({
       name: "help",
       code: `
       $title[My commands]
       $description[

        ***Members Commands***
        <a:arrowgold:869450279655985203>  =help - Show my commands
        <a:arrowgold:869450279655985203>  =ping - Show my ping 
        <a:arrowgold:869450279655985203>  =dog - Dog pics and facts 
        <a:arrowgold:869450279655985203>  =8ball - 8Ball 

        ***Mods Commands***
        <a:arrowgold:869450279655985203>  =say - create embed
        <a:arrowgold:869450279655985203>  =purge - purge messages ]
           $color[RANDOM]`
   })

   bot.command({
    name: "purge",
    code: `
    $if[$message[2]==]
    $sendMessage[**$message[1] Messages deleted successfully**{delete:2s};no]
    $clear[$message[1];everyone;$channelID;no]
    $wait[2s]
    $deletecommand
    $onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message]]==true;:x: Please provide a valid amount! {delete:5s}]
    
    $elseIf[$message[2]!=]
    $sendMessage[**<a:ELITE_dot:869450809929256971> $message[2] Messages deleted successfully**{delete:5s};no]
    $clear[$message[2];$findUser[$message[1]];$channelID;no]
    $wait[2s]
    $deletecommand
    $endelseIf
    $endif
    $onlyPerms[managemessages;:x: You need manage messages permission to use this command {delete:2s}]
    $onlyBotPerms[managemessages;:x: I don't have manage messages permission! {delete:2s}]
    $onlyIf[$message!=;Usage: =purge <no.> or =purge <user> <no.>]
    `
    })
    

    bot.command({
      name: "8ball",
      code: `
      $argsCheck[>1; Be sure to write something to ask the 8-Ball!]
      $title[]
      $description[🎱 $jsonRequest[https://no-api-key.com/api/v1/magic8ball;response] ]
      $color[RANDOM]`
      })

       bot.command({
        name: "dog",
        code: `
       $description[**$jsonRequest[https://no-api-key.com/api/v1/animals/dog;fact]**]
       
       $image[$jsonRequest[https://no-api-key.com/api/v1/animals/dog;image]]
       `
        })
