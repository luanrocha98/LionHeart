
// let actorBuilder = new ActorBuilder();

// let dormitorioSrc = "src/assets/background/2.jpg";
// let telhadoSrc = "src/assets/background/2.jpg";
// let dormitorio: HTMLImageElement | null;
// let telhado: HTMLImageElement | null;


// dormitorio = await ImageLoader.get(dormitorioSrc);
// telhado = await ImageLoader.get(telhadoSrc);



// let Lunado = actorBuilder.setName("Lunado").setPosition({ x: 0 }).build();
// let plexu = actorBuilder.setName("plexu").setPosition({ x: 0 }).build();


// let header = new HeaderDialog({
//   text: "Ainda me sinto fraco e sonolento. Eu não deveria ter ido dormir tão tarde a noite passada.",
//   speakers: [
//     actorBuilder.setName("Lunado").setPosition({ x: 0 }).build()
//   ],
//   background: dormitorio!,
// })


// let scriptController: ScriptController = new ScriptBuilder(1, header)
//   .addDialog(new DefaultDialog({
//     text: "Mas foi por uma boa causa, tive que ajudar um amigo em um projeto e... Bem, deu tudo certo. ",
//     speakers: [
//       actorBuilder.setName("Lunado").setPosition({ x: 150 }).build()
//     ],
//   })).addDialog(new DefaultDialog({
//     text: "Mas que barulheira é essa?!!",
//     speakers: [
//       actorBuilder.setName("Lunado").setPosition({ x: 150 }).build()
//     ],
//   })).addDialog(new DefaultDialog({
//     text: "Mas que... porra? Outra vez o plexu fazendo coisas doidas e aleatórias pela manhã. O que deve ser agora? Uma... discoteca no quarto?",
//     speakers: [
//       actorBuilder.setName("Lunado").setPosition({ x: 0 }).build()
//     ],
//   })).addDialog(new DefaultDialog({
//     text: "DISCOTECA NO QUARTO!!!!!!!",
//     speakers: [
//       actorBuilder.setName("plexu").setPosition({ x: 0 }).build()
//     ],
//     background: telhado!
//   })).addDialog(new DefaultDialog({
//     text: "Ele deu pra ler mentes agora?",
//     speakers: [
//       actorBuilder.setName("Lunado").setPosition({ x: 0 }).build()
//     ],
//     background: dormitorio!
//   })).addDialog(new DefaultDialog({
//     text: "O plexu festeiro vai dar uma festa do caralho. E tem lugar melhor pra festa? A gente tem um quarto.",
//     speakers: [
//       actorBuilder.setName("plexu").setPosition({ x: 0 }).build()
//     ],
//     background: telhado!
//   })).addDialog(new Survey({
//     options: [
//       {
//         title: "Eu tô tão cansado...",
//         course: new Battle({
//           title: "Tente convencer o plexu a desistir da festa...",
//           speakers: [
//             actorBuilder.setName("Lunado").setPosition({ x: 0 }).build(),
//             actorBuilder.setName("plexu").setPosition({ x: 300 }).build()
//           ]
//         })
//       },
//       {
//         title: "Ainda bem eu tava precisando de uma festa.",
//         course: new DefaultDialog({
//           text: "Tudo bem, você precisa de ajuda aí?",
//           speakers: [
//             actorBuilder.setName("Lunado").setPosition({ x: 0 }).build(),
//             actorBuilder.setName("plexu").setPosition({ x: 300 }).build()
//           ],
//           after: new DefaultDialog({
//             text: "O plexu resolve tudo!",
//             background: telhado!,
//             speakers: [actorBuilder.setName("plexu").setPosition({ x: 300 }).build()]
//           })
//         })
//       }
//     ],
//     speakers: [
//       actorBuilder.setName("Lunado").setPosition({ x: 0 }).build()
//     ],
//     background: dormitorio!
//   })).build();

