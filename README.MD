<h1 align="center">SatoruMD <img src="https://i.giphy.com/media/pPbcqcLelFmj6/giphy.webp" width="50px"/><br></h1>
<p align="center">
  <img src="https://opedyboy.sirv.com/Welcome/1654526477427.jpg" alt="" width="400" height="200"/></p>

<p align="center">

</p>


------

## <h2 align="center">SOBRE O PROJETO <img  src="https://acegif.com/wp-content/gif/thinking-emoji-30.gif" width="30" height="25"/></h2>

 <p align="center"> O Satoru é um bot de WhatsApp que desenvolvi no meu tempo livre... É claro, com ajuda. Créditos no final da pagina.</p>
 
 <h3 align="center"> Como funciona? <img  src="https://acegif.com/wp-content/uploads/loading-73.gif" width="30" height="25"/></h3>
 
<p align="center">
  O projeto foi feito utilizando NodeJS, então, é necessário algum terminal para executa-lo, seja pelo Termux (android), linux, ou o própio terminal do windows desde que tenha o Node instalado. </p>
  <p  align="center">O bot fúncionará através do WhatsApp Web, e desta forma responderá os comandos de forma automática.</p>
  <p align="center">Não é mais necêssário permanecer online no WhatsApp  para que o bot funcione, desde que o terminal esteja ativo, por isso recomendo o uso de VPS ou heroku</p>
  
  <div align="center">

# <h1 align="center">Instalação manual 👇</h1>

## Requisitos (Windows) <img src="https://c.tenor.com/7uUwTU_EwVgAAAAM/mahinda-rajapaksha.gif" height="20"/>
 [Node.js](https://nodejs.org/en/) 
 <br>
  [Git](https://git-scm.com/downloads)
 <br>
  [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
 <br>
  [Libwebp](https://developers.google.com/speed/webp/download)
  <br>
 Recomendações: 
 <br>
  Windows: Vscode
 <br>
  Android: Acode



## No Termux/Ssh/Ubuntu <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc14tOfBqJieCDn3Ly_ETmNs959K4VQsYBg&usqp=CAU" height="25"/>
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/bruno918/satorumd.git
cd satorumd
git clone https://github.com/bruno918/node_modules.git
node index.js

Na próxima execução use sh gojo.sh

```

## `Na VPS` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc14tOfBqJieCDn3Ly_ETmNs959K4VQsYBg&usqp=CAU" height="25"/>
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagemagick
apt install bash
git clone https://github.com/bruno918/satorumd.git
cd satorumd
git clone https://github.com/bruno918/node_modules.git
sh gojo.sh
```

##  Atenção <img src="https://c.tenor.com/sLgNruA4tsgAAAAC/warning-lights.gif" height='25'/>
tanto o bot quanto o baileys multi device estão em beta, peço compreensão por conta de alguns erros

Vire dono &&  edite o algumas opções em .js [`config.js`](https://github.com/bruno918/satorumd/blob/main/settings.js)
Bot feito utilizando a [`Ayumi-Apis`](https://ayumi-apis.herokuapp.com/).A melhor rest-api brasileira! 


## ```LINKS UTEIS```

- [`GRUPO`](https://tinyurl.com/24mr83r3)
- [`DONO`](https://api.whatsapp.com/send/?phone=5555933005901&text=slv%20dono&app_absent=0)
- [`NÚMERO DO BOT`](https://api.whatsapp.com/send/?phone=14502314093&text=menu&app_absent=0)

# HEROKU 👇

[`Tutorial`](https://raw.githubusercontent.com/bruno918/Ed-dependencias/main/Heroku)

## ` BUILDPACKS QUE EU USO` <img src="https://miro.medium.com/max/960/1*7yyQGCF5xBxWlUzNz-D-OQ.gif" />

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
https://github.com/DuckyTeam/heroku-buildpack-imagemagick
https://github.com/jayshreeanand/heroku-buildpack-libwebp
https://github.com/pathwaysmedical/heroku-buildpack-tesseract
heroku/nodejs
```


## Agradecimentos  <img src=" https://i.pinimg.com/originals/b0/5d/9d/b05d9ddf76e6c18d4d52f327fd0d0c5d.gif"/> 
 [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
 [`Mhankbarbar`](https://github.com/MhankBarBar)
 [`DikaArdnt`](https://github.com/DikaArdnt)
 [`Xeon`](https://github.com/DGXeon/CheemsBot-MD2)
 [`Ayumi-Api`](https://ayumi-apis.herokuapp.com/)
 Principalmente ao Breno/Sayo, o maior contribuidor.

Faça uma doação
 Minha chave pix:  efc33c68-78bf-4447-a400-5f99eaa0a5dd.

## Possui alguma duvida? Entre em contato comigo!!
</div>
