import {Client, Events, GatewayIntentBits} from 'discord.js';

//create new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

//listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

//login for the token from .env.local
client.login(process.env.DISCORD_TOKEN);