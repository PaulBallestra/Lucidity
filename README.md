# Lucidity
## PRENEZ LE CONTRÔLE

Lucidity est une application pour aider a faire des rêves lucides.

- Une envie de voler ? 🪁
- Ou d’aller sur la lune ? 🌙
- Peaufiner une passion ? 🎸
- De poser une question à vos subconscient ? 🧠
- Vaincre votre plus grande phobie ? 🕷️


## Features
- OnBoarding
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656021471/Lucidity/Screenshot_1656021383_xdrf49.png" alt="OnBoarding - First Page" width="200"/>
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656021474/Lucidity/Screenshot_1656021387_uscysd.png" alt="OnBoarding - Final Page" width="200"/>
- Inscription/Connexion avec API Custom (https://github.com/PaulBallestra/Lucidity_API)
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656021796/Lucidity/Screenshot_1656021757_zpgmcf.png" alt="Inscription - Page" width="200"/>
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656021790/Lucidity/Screenshot_1656021752_n0mo1d.png" alt="Connexion - Page" width="200"/>
- Liste des Techniques
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022087/Lucidity/Screenshot_1656021933_lddvww.png" alt="Techniques - Page" width="200"/>

- Calendrier avec stats (RêveClassic/RêveLucide)
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022086/Lucidity/Screenshot_1656021948_h9pwvo.png" alt="Calendrier - Landing Page" width="200"/>

- Création d'un Rêve (Id, Titre, SubTitre, Content, Date, isLucid) lors d'un click sur une date du calendrier
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022503/Lucidity/Screenshot_1656022481_q7zfq9.png" alt="CreateDream - Page" width="200"/>


> Note: `OUTILS` - Contient toutes les features suivantes :
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022610/Lucidity/Screenshot_1656022603_iecljj.png" alt="Outils - Page" width="200"/>
- DreamBook : Liste de tous les rêves de l'utilisateur classés par Dates
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022720/Lucidity/Screenshot_1656022680_ajc6v0.png" alt="DreamBook - Page" width="200"/>

- Test de réalité : Choix du type && Push Notification si un(des) jour(s) est(sont) activé(s) - Toutes les 4h
<img src="https://res.cloudinary.com/dn3nebjeg/image/upload/v1656022721/Lucidity/Screenshot_1656022713_yz9maq.png" alt="RealityTests - Page" width="200"/>

- Réveils avec AUTO-STOP pour arrêter le réveil sans le toucher
> Note: `Reveils - Page` - N'est pas encore existant


## Technologies
- [react-native] - ios/android base app
- [node.js] - evented I/O for the backend

![React Native Logo](https://pbs.twimg.com/profile_images/640366756305891328/b5bKLcgu_200x200.png)

## Installation

Lucidity demande [Node.js](https://nodejs.org/) v10+ pour build.

Installez les dependences et devDependencies et lanxez le serveur.

```sh
npm install
npx react-native link
```
