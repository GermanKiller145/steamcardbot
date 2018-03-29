const SteamUser = require('steam-user');
const client = new SteamUser();
const config = require("./config.json");

const logOnOptions = {
  accountName: config.user,
  password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  if(config.debug === true){
    client.gamesPlayed(config.debgame)
  } else {
    client.gamesPlayed("1 CSGO Key - " + config.sets_csgokey + " Sets | 1 TF2 - " + config.sets_tfkey + "Sets");
  }
  
});

client.on('friendMessage', function(steamID, message) {
  params = message.split(" ", 2);
  if(params[0] === "!buy"){
    if(params[1] <= "0"){
      client.chatMessage(steamID, "Please type an amout of keys you wanna pay.");
    } else {
      num = params[1];
      client.chatMessage(steamID, "Processing...");
      num_sets = num * config.sets_csgokey;
      client.chatMessage(steamID, "I've send you a trade offer with " + num_sets + " Sets.");
    }
    console.log("Client: " + steamID.getSteam3RenderedID() + "; Message: " + message);
  }
});