const SteamUser = require('steam-user');
const client = new SteamUser();

const logOnOptions = {
  accountName: "randy1001",
  password: "randy110"
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

    } else {
      num = params[1]:
      
    }
    console.log("Friend message from " + steamID.getSteam3RenderedID() + ": " + message);
    
  }
});