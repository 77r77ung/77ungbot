#디스코드 봇 01. 까꿍봇

# 모듈 불러오기
import discord, asyncio
from discord.ext import commands

from dice import *

# 토큰 불러오기
token = "token"
# bot 설정
intents = discord.Intents.all()
intents.members = True
bot = commands.Bot(command_prefix = "",intents=intents)

@bot.event
async def on_ready(): # bot이 online이 되었을 때
    print("[notice] 까꿍이 출동! ฅ^•ﻌ•^ฅ")
    print(bot.user) # bot 프로필(닉네임#태그) 출력
    await bot.change_presence(status=discord.Status.online, activity=discord.Game("그루밍"))

@bot.command(aliases=["안녕", "안뇽", "안농", "안녕하세요", "하이", "ㅎㅇ", "안니영", "ㅇㄴㅇ", "인사", "하위", "하윙", "해윙", "해위"])
async def hello(ctx):
    await ctx.send("{}, 안냥 ฅ^•ﻌ•^ฅ".format(ctx.author.mention))

@bot.command(aliases=["잘가", "잘 가", "바이", "바위"])
async def bye(ctx):
    await ctx.send("{}, 냥안 ฅ^•ﻌ•^ฅ".format(ctx.author.mention))

@bot.command(aliases=["잘자", "굿밤", "잘 자", "굿 밤"])
async def goodnight(ctx):
    await ctx.send("고양이 꿈 꿔 ฅ^•ﻌ•^ฅ")

'''
# 정의되지 않은 명령어가 실행될 시
@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.CommandNotFound):
        await ctx.send("무슨 말인지 모른당!")
'''

# 주사위 게임
@bot.command()
async def 주사위(ctx):
    result, _color, bot, user = dice()
    embed = discord.Embed(title="결과다냥", description = None, color = _color)
    embed.add_field(name = "까꿍의 숫자", value= ":game_die: " + bot, inline = True)
    embed.add_field(name = ctx.author.name+"의 숫자", value = ":game_die: " + user, inline=True)
    embed.set_footer(text="결과: " + result)
    await ctx.send(embed=embed)

bot.run(token)