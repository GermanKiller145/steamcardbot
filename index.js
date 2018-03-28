const SteamUser = require('steam-user');
const client = new SteamUser();
const config = require("./config.json")

const logOnOptions = {
  accountName: config.user,
  password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
});

client.on('friendMessage', function(steamID, message) {
  params = message.split(" ", 2);
  if(params[0] === "!buy"){
    if(params[1] <= "0"){
      console.log("Client: " + steamID.getSteam3RenderedID() + "; Command: " + message);
    } else {
      num = params[1];
      
    }
  }
});