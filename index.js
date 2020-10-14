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
  if(message.content === '조랭아 푸슉') {
    message.channel.send('무노마을에서 가장 착하고 멋지고 키크고 인성 좋고 목소리 좋고 게임도 잘하고 머리도 좋은 무노마을 촌장님 :)');
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

  if(message.content.startsWith('/전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) {
      let contents = message.content.slice('/전체공지'.length);
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

client.on('message', (message) => {
  if(message.content === '조랭아 심심해') {
    message.channel.send('!놀아줘를 쳐봐');
  }
});

client.on('message', (message) => {
  if(message.content === '!놀아줘') {
    message.channel.send('아싸도 아니고 혼자 놀아(퍽)');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 춤춰') {
    message.channel.send('너 고양이가 춤추는거 본적 있니?!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 조랭 조랭') {
    message.channel.send('머랭 머랭~');
  }
});

client.on('message', (message) => {
  if(message.content === '퓨') {
    message.channel.send('전!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 고양이') {
    message.channel.send('뭐래 난 고양이가 아니야');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 강아지') {
    message.channel.send('그런 하등한 생물의 이름을 꺼내지 마세요 흥!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 오우') {
    message.channel.send('싸발적이고');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 오타') {
    message.channel.send('두구ㅏ우ㅑㅐㅇㅍㄷㄴㅁ');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 심심해') {
    message.channel.send('근데 뭐 확 막 그냥');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 하핳') {
    message.channel.send('하하핳하핳하ㅏ핳ㅎ하핳');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 헤헿') {
    message.channel.send('헤헤헤헤헤ㅔ헤헤ㅔㅎ헿');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 웃어') {
    message.channel.send('하 . 하 . 하');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 좋아해') {
    message.channel.send('난 너 싫은뎅? 하하핳');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 test') {
    message.channel.send('정상 작동');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가 뭘 알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 무노') {
    message.channel.send('무노 무노~!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가 뭘알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가뭘알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가 몰 알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가 몰알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 니가몰알아') {
    message.channel.send('조랭이떡 같이 생긴게!!!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 ?') {
    message.channel.send('무노?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 조랭이') {
    message.channel.send('떡!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 떡') {
    message.channel.send('저요..?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 Arcata') {
    message.channel.send('별의 마을 촌짱!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 arcata') {
    message.channel.send('별의 마을 촌짱!');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 둠칙둠칫') {
    message.channel.send('둠칫둠칫둠칫');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 둠칫둠칫') {
    message.channel.send('둠칫둠칫둠칫');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 둠칙 둠칫') {
    message.channel.send('둠칫둠칫둠칫');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 둠칙 둠칫') {
    message.channel.send('둠칫둠칫둠칫');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 둠칫 둠칫') {
    message.channel.send('둠칫둠칫둠칫');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 아싸') {
    message.channel.send('카파?');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 이잉') {
    message.channel.send('이이잉~');
  }
});

client.on('message', (message) => {
  if(message.content === '조랭아 얼간이 칭호 어때?') {
    message.channel.send('오오 바로 추가하자~!');
  }
});

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const momenttz = require('moment-timezone');
const MessageAdd = require('./db/message_add.js')
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";
const adminUserId = 250693463065100298;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })

  let state_list = [
    '!help를 쳐보세요.',
    '메렁메렁',
    '에베베베베',
  ]
  let state_list_index = 1;
  let change_delay = 3000; // 이건 초입니당. 1000이 1초입니당.

  function changeState() {
    setTimeout(() => {
      // console.log( '상태 변경 -> ', state_list[state_list_index] );
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  // changeState();
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on("messageUpdate", (message) => {
  MessageSave(message, true)
});

client.on('message', (message) => {
  MessageSave(message)
  if(message.author.bot) return;

  if(message.channel.type == 'dm') {
    if(message.author.id == adminUserId) return;

    /* not use embed */
    let msg = message.author+'이(가) 메세지를 보냈습니다.\n'+message.content;
    client.users.find(x => x.id == adminUserId).send(msg)

    // /* use embed */
    // let embed = new Discord.RichEmbed()
    // let img = message.author.avatar ? `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=256` : undefined;
    // let user = message.author.username+'#'+message.author.discriminator
    // let msg = message.content;
    // embed.setColor('#186de6')
    // embed.setAuthor(user+'이(가) 메세지를 보냈습니다.', img)
    // embed.setFooter(`콜라곰 BOT ❤️`)
    // embed.addField('메세지 내용', msg, true);
    // embed.setTimestamp()
    // client.users.find(x => x.id == adminUserId).send(embed);
  }

  if(message.content.startsWith('!역할추가')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    if(message.channel.type != 'dm' && checkPermission(message)) return

    if(message.content.split('<@').length == 3) {
      if(message.content.split(' ').length != 3) return;

      var userId = message.content.split(' ')[1].match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi).join('')
      var role = message.content.split(' ')[2].match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi).join('')

      message.member.guild.members.find(x => x.id == userId).addRole(role);
    }
  }

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '!si') {
    let embed = new Discord.RichEmbed()
    let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#186de6')
    embed.setAuthor('server info of 콜라곰 BOT', img)
    embed.setFooter(`콜라곰 BOT ❤️`)
    embed.addBlankField()
    embed.addField('RAM usage',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('running time', `${duration}`, true);
    embed.addField('user',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('server',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);
    
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(message.content == 'embed') {
    let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('muno_woojin', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('muno_woojin', img)

    message.channel.send(embed)
  } else if(message.content == '!help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!help', desc: 'he'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
      {name: '!전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '!청소', desc: '텍스트 지움'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 콜라곰 BOT')
        .setColor('#186de6')
        .setFooter(`콜라곰 BOT ❤️`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('/청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('/청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  } else if(message.content.startsWith('/강퇴')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    console.log(message.mentions);

    let userId = message.mentions.users.first().id;
    let kick_msg = message.author.username+'#'+message.author.discriminator+'이(가) 강퇴시켰습니다.';
    
    message.member.guild.members.find(x => x.id == userId).kick(kick_msg)
  } else if(message.content.startsWith('/밴')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    console.log(message.mentions);

    let userId = message.mentions.users.first().id;
    let kick_msg = message.author.username+'#'+message.author.discriminator+'이(가) 강퇴시켰습니다.';

    message.member.guild.members.find(x => x.id == userId).ban(kick_msg)
  } else if(message.content.startsWith('/주사위')) {
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
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}

function getEmbedFields(message, modify=false) {
  if(message.content == '' && message.embeds.length > 0) {
    let e = message.embeds[0].fields;
    let a = [];

    for(let i=0;i<e.length;i++) {
        a.push(`\`${e[i].name}\` - \`${e[i].value}\`\n`);
    }

    return a.join('');
  } else if(modify) {
    return message.author.lastMessage.content;
  } else {
    return message.content;
  }
}

function MessageSave(message, modify=false) {
  imgs = []
  if (message.attachments.array().length > 0) {
    message.attachments.array().forEach(x => {
      imgs.push(x.url+'\n')
    });
  }

  username = message.author.username.match(/[\u3131-\uD79D^a-zA-Z^0-9]/ugi)
  channelName = message.channel.type != 'dm' ? message.channel.name : ''
  try {
    username = username.length > 1 ? username.join('') : username
  } catch (error) {}

  try {
    channelName = channelName.length > 1 ? channelName.join('') : channelName
  } catch (error) {}

  var s = {
    ChannelType: message.channel.type,
    ChannelId: message.channel.type != 'dm' ? message.channel.id : '',
    ChannelName: channelName,
    GuildId: message.channel.type != 'dm' ? message.channel.guild.id : '',
    GuildName: message.channel.type != 'dm' ? message.channel.guild.name : '',
    Message: getEmbedFields(message, modify),
    AuthorId: message.author.id,
    AuthorUsername: username + '#' + message.author.discriminator,
    AuthorBot: Number(message.author.bot),
    Embed: Number(message.embeds.length > 0), // 0이면 false 인거다.
    CreateTime: momenttz().tz('Asia/Seoul').locale('ko').format('ll dddd LTS')
  }

  s.Message = (modify ? '[수정됨] ' : '') + imgs.join('') + s.Message

  MessageAdd(
    s.ChannelType,
    s.ChannelId,
    s.ChannelName,
    s.GuildId,
    s.GuildName,
    s.Message,
    s.AuthorId,
    s.AuthorUsername,
    s.AuthorBot,
    s.Embed,
    s.CreateTime,
  )
    // .then((res) => {
    //   console.log('db 저장을 했다.', res);
    // })
    .catch(error => console.log(error))
}


client.login(token);
