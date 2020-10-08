const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '카파') {
    message.channel.send('바보');
  }
});

client.login(token);

client.on('message', (message) => {
  if(message.content === '우진') {
    message.channel.send('제작자 ◟( ˘ ³˘)◞');
  }
});

client.on('message', (message) => {
  if(message.content === '무노') {
    message.channel.send('무노마을 최고의 촌장님!');
  }
});

client.on('message', (message) => {
  if(message.content === '푸슉') {
    message.channel.send('천사가 따로없네?!');
  }
});

client.on('message', (message) => {
  if(message.content === '파이어') {
    message.channel.send('포켔몬?');
  }
});

client.on('message', (message) => {
  if(message.content === '루피') {
    message.channel.send('군침이 싹 도노');
  }
});

client.on('message', (message) => {
  if(message.content === '시발') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅅㅂ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === 'tlqkf') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '병신') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅄ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㄲㅈ') {
    message.channel.send('힝');
  }
});

client.on('message', (message) => {
  if(message.content === '수박') {
    message.channel.send('아조씨');
  }
});

client.on('message', (message) => {
  if(message.content === '꺼져') {
    message.channel.send('힝');
  }
});

client.on('message', (message) => {
  if(message.content === '이익') {
    message.channel.send('이이익!');
  }
});

client.on('message', (message) => {
  if(message.content === '개새끼') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '개') {
    message.channel.send('멍멍');
  }
});

client.on('message', (message) => {
  if(message.content === '개새') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㄳㄲ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '/help를 쳐보세요.' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === 'ㅋ') {
    message.channel.send('뭘 쪼개(퍽)');
  }
});

client.on('message', (message) => {
  if(message.content === '/help') {
    message.channel.send('``/help: 도움말을 엽니다``');
  }
});

client.on('message', (message) => {
  if(message.content === '우진바보') {
    message.channel.send('지-건');
  }
});

client.on('message', (message) => {
  if(message.content === '카파바보') {
    message.channel.send('ㅇㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '우진 바보') {
    message.channel.send('지-건');
  }
});

client.on('message', (message) => {
  if(message.content === '카파 바보') {
    message.channel.send('ㅇㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '프슉') {
    message.channel.send('오타 수준');
  }
});

client.on('message', (message) => {
  if(message.content === '사랑해') {
    message.channel.send('누구세요');
  }
});

client.on('message', (message) => {
  if(message.content === '아쿠아') {
    message.channel.send('바부');
  }
});

client.on('message', (message) => {
  if(message.content === '파라') {
    message.channel.send('앗 뜨거워');
  }
});

client.on('message', (message) => {
  if(message.content === '오마에와 모 신데이루') {
    message.channel.send('나니?!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅗ') {
    message.channel.send('ㅗㅗ');
  }
});

client.on('message', (message) => {
  if(message.content === '엔터') {
    message.channel.send('천사');
  }
});

client.on('message', (message) => {
  if(message.content === '실버') {
    message.channel.send('골드');
  }
});

client.on('message', (message) => {
  if(message.content === '이스터에그') {
    message.channel.send('놀랍게도 아무것도 없다');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭이떡') {
    message.channel.send('뭘봐 조랭이떡 같이 생긴게ㅡㅡ');
  }
});

client.on('message', (message) => {
  if(message.content === '합') {
    message.channel.send('체!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아') {
    message.channel.send('네넵!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 사랑해') {
    message.channel.send('뭘봐 이 조랭이 떡 같이 생긴게');
  }
});

client.on('message', (message) => {
  if(message.content === '죽어') {
    message.channel.send('💔');
  }
});

client.on('message', (message) => {
  if(message.content === '네오') {
    message.channel.send('히이이이이이이이이이이이이이이이익!!!!!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '안녕') {
    message.channel.send('하이 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '하이') {
    message.channel.send('방가워 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '방가워') {
    message.channel.send('안녕 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 욕해줘') {
    message.channel.send('욕은 나뻐...제발 욕해줘 쳐주면 해줄지도 히힛..?');
  }
});

client.on('message', (message) => {
  if(message.content === '제발 욕해줘') {
    message.channel.send('씨발련');
  }
});

client.on('message', (message) => {
  if(message.content === '따라하지마') {
    message.channel.send('말대꾸하지마!!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 바보') {
    message.channel.send('죽을래?!');
  }
});

client.on('message', (message) => {
  if(message.content === '뭘봐') {
    message.channel.send('너 ❤');
  }
});

client.on('message', (message) => {
  if(message.content === '히힛') {
    message.channel.send('변태');
  }
});

client.on('message', (message) => {
  if(message.content === '크시') {
    message.channel.send('미래에는 내가 더 멋진 봇이 될 꺼라고!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅄ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '야발') {
    message.channel.send('욕 하지마!');
  }
});

message.member.guild.members.find(x => x.id == userId).ban(kick_msg)
if(message.content.startsWith('!주사위')) {
  let min = 1;
  let max = 6;
  let dice_num = parseInt(Math.random() * (max - min) + min);
  return message.reply(`${dice_num}가 나왔습니다.`);
} else if(message.content.startsWith('!야')) {
  let arr = [
    '왜',
    '뭐',
    '뭠마',
  ]
  let min = 0;
  let max = arr.length;
  let index = parseInt(Math.random() * (max - min) + min);
  return message.reply(`${arr[index]}가 나왔습니다.`);
}



