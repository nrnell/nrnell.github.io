import discord
import os

client = discord.Client(intents=discord.Intents.all())
nomention = discord.AllowedMentions.none()
discord_avatar = 'https://cdn.discordapp.com/embed/avatars/0.png'

@client.event
async def on_ready():

    try:
        print('Success')
    except:
        pass

# client.run(os.getenv('TOKEN'))

print(os.getenv('TOKEN'))