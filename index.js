const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '조랭아 카파') {
    message.channel.send('바보');
  }
});

client.login(token);

client.on('message', (message) => {
  if(message.content === '조랭아 우진') {
    message.channel.send('제작자 ◟( ˘ ³˘)◞');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 무노') {
    message.channel.send('무노마을 최고의 촌장님!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 푸슉') {
    message.channel.send('절대 악!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 파이어') {
    message.channel.send('포켔몬?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 루피') {
    message.channel.send('군침이 싹 도노');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 시발') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㅅㅂ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 tlqkf') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 병신') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㅄ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㄲㅈ') {
    message.channel.send('힝');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 수박') {
    message.channel.send('아조씨');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 꺼져') {
    message.channel.send('힝');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 이익') {
    message.channel.send('이이익!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 개새끼') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 개') {
    message.channel.send('멍멍');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 개새') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㄳㄲ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '/help를 쳐보세요.' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㅋ') {
    message.channel.send('뭘 쪼개(퍽)');
  }
});

client.on('message', (message) => {
  if(message.content === '/help') {
    message.channel.send('``/help: 도움말을 엽니다, /전체공지 내용: 유저 갠디에 메세지를 보냅니다``');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 우진바보') {
    message.channel.send('지-건');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 카파바보') {
    message.channel.send('ㅇㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 우진 바보') {
    message.channel.send('지-건');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 카파 바보') {
    message.channel.send('ㅇㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 프슉') {
    message.channel.send('오타 수준');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 사랑해') {
    message.channel.send('누구세요');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 아쿠아') {
    message.channel.send('바부');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 파라') {
    message.channel.send('앗 뜨거워');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 오마에와 모 신데이루') {
    message.channel.send('나니?!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㅗ') {
    message.channel.send('ㅗㅗ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 엔터') {
    message.channel.send('천사');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 실버') {
    message.channel.send('골드');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 이스터에그') {
    message.channel.send('놀랍게도 아무것도 없다');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 조랭이떡') {
    message.channel.send('뭘봐 조랭이떡 같이 생긴게ㅡㅡ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 합') {
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
  if(message.content === '조랭아 죽어') {
    message.channel.send('💔');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 네오') {
    message.channel.send('히이이이이이이이이이이이이이이이익!!!!!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 안녕') {
    message.channel.send('하이 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 하이') {
    message.channel.send('방가워 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 방가워') {
    message.channel.send('안녕 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 욕해줘') {
    message.channel.send('욕은 나뻐...조랭아 제발 욕해줘 쳐주면 해줄지도 히힛..?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 제발 욕해줘') {
    message.channel.send('씨발련');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 따라하지마') {
    message.channel.send('말대꾸하지마!!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 바보') {
    message.channel.send('죽을래?!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 뭘봐') {
    message.channel.send('너 ❤');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 히힛') {
    message.channel.send('변태');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 크시') {
    message.channel.send('미래에는 내가 더 멋진 봇이 될 꺼라고!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ㅄ') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 야발') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 발시') {
    message.channel.send('욕 하지마!');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) {
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.on('message', (message) => {
  if(message.content === '조랭아 좆밥') {
    message.channel.send('너!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니 내 누군지 아니?') {
    message.channel.send('내가 어떻게 알아 ㅅㅂ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 그타') {
    message.channel.send('ㅈ 망겜');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 옵치') {
    message.channel.send('매칭 너무 길어 ;;');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 롤') {
    message.channel.send('갓겜!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 이이잉') {
    message.channel.send('앗살라 말라이쿰~');
  }
});

client.on('message', (message) => {
  if(message.content === '오렌지 먹은지') {
    message.channel.send('오렌지~');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 로블록스') {
    message.channel.send('크흠,,,');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 팀 크레센도') {
    message.channel.send('어쩌라고');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 배추') {
    message.channel.send('그게 뭐죠 먹는 건가요?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 자바') {
    message.channel.send('가장 좋은 언어!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 c언어') {
    message.channel.send('길지만 그래도 좋은 언어!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 파이썬') {
    message.channel.send('쉽고 빠르고 재밌는 만능 언어!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 c++') {
    message.channel.send('게임 그래픽 만들 때 쓰이는 언어(?)');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 c#') {
    message.channel.send('그게 뭐죠 먹는 건가요?!');
  }
});

if(message.content.startsWith('!강퇴')) {
  if(message.channel.type == 'dm') {
    return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
  }

  if(message.channel.type != 'dm' && checkPermission(message)) return

  console.log(message.mentions);

  let userId = message.mentions.users.first().id;
  let kick_msg = message.author.username+'#'+message.author.discriminator+'이(가) 강퇴시켰습니다.';

  message.member.guild.members.find(x => x.id == userId).kick(kick_msg)
} else if(message.content.startsWith('!밴')) {
  if(message.channel.type == 'dm') {
    return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
  }

  if(message.channel.type != 'dm' && checkPermission(message)) return

  console.log(message.mentions);

  let userId = message.mentions.users.first().id;
  let kick_msg = message.author.username+'#'+message.author.discriminator+'이(가) 강퇴시켰습니다.';

  message.member.guild.members.find(x => x.id == userId).ban(kick_msg)
}

function checkPermission(message) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
  return true;
} else {
  return false;
}
}
