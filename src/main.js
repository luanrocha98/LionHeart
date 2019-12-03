"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let display = new Display("tela");
let keydown = null;
window.addEventListener('keydown', (event) => {
    keydown = event.key;
});
window.addEventListener('DOMContentLoaded', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let actorBuilder = new ActorBuilder();
        let dormitorioSrc = "src/assets/background/dormitorio.jpg";
        let telhadoSrc = "src/assets/background/telhado.jpg";
        let cafeteriaSrc = "src/assets/background/cafeteria.jpg";
        let corredorDormitoriosSrc = "src/assets/background/corredorDormitorios.jpg";
        let quartoInivSrc = "src/assets/background/quartoIniv.jpg";
        let dormitorio;
        let telhado;
        let corredorDormitorios;
        let quartoIniv;
        let cafeteria = yield ImageLoader.get(cafeteriaSrc);
        ;
        dormitorio = yield ImageLoader.get(dormitorioSrc);
        telhado = yield ImageLoader.get(telhadoSrc);
        corredorDormitorios = yield ImageLoader.get(corredorDormitoriosSrc);
        quartoIniv = yield ImageLoader.get(quartoInivSrc);
        let header = new HeaderDialog({
            text: "Ainda me sinto fraco e sonolento. Eu não deveria ter ido dormir tão tarde a noite passada.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: dormitorio,
        });
        let CenaE2 = new ScriptBuilder(1, new HeaderDialog({
            text: "Vou ter que mentir sobre a festa...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios
        })).addDialog(new Battle({
            title: "Acerte no intervalo amarelo para ter sucesso na mentira.",
            speakers: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios,
            critical: 2,
            chances: 2
        })).build().header;
        let CenaD1 = new ScriptBuilder(1, new HeaderDialog({
            text: "Hm… Tudo bem, eu espero.",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O TT parece maior, agora que parei pra observar.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "E ele tá com bastante espinhas. A puberdade já não tinha passado?",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Ah, Lunado, preciso te mostrar minhas novas roupas que fiz ontem a noite. Ficaram babado!",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Usei alguns tecidos que encontrei no Achados E perdidos, tem muita coisa boa lá!",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Usei novas técnicas de costura e AAAAAH, você precisa ver!",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Adoro ver a Iniv orgulhosa do que faz. Dá pra sentir a paixão.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Dá pra sentir tanto que algumas lágrimas caem involuntariamente do meu rosto quando sinto.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Sim, sim. Vou adorar ver!",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "(TT dá o cartaz do Plexu para o Lunado secar suas lágrimas.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Vou usar um deles essa noite, vai ser show.",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "TT, terminei de cortar já.",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "(Iniv orgulhosa do resultado dá um espelho para TT.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Wooow, ficou monstro!",
            speakers: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Tá do mesmo tamanho de sempre. Serio! Não mudou nada.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Vou pegar a extensão aqui, Iniv...",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .build().header;
        let CenaD2 = new ScriptBuilder(1, new HeaderDialog({
            text: "Eu vou lá no quarto e volto daqui a pouco.",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado sai do quarto e vê Bru no corredor.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Lunado! Você viu que teve pudim hoje na cantina?",
            speakers: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Eae, Bru! Já to sabendo sim.",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Não deveria ter acordado tão tarde, definitivamente...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Você vai fazer algo essa noite? Tô precisando de ajuda pra uma trabalho.",
            speakers: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new Survey({
            options: [
                {
                    title: "Falar a verdade sobre a festa.",
                    course: CenaE2
                },
                {
                    title: "Tentar mentir sobre a festa",
                    course: CenaE2
                },
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Bru").setPosition({ x: 300 }).build(),
            ],
            background: corredorDormitorios
        })).build().header;
        /*   .addDialog(new DefaultDialog({
            text: "(Lunado entra no seu quarto pensativo fechando a porta.)",
            speakers: [
            actorBuilder.setName("Narrador").build()
            ],
            listenners: [
            actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
            background: dormitorio!
          }))
          .addDialog(new DefaultDialog({
            text: "Quando você fez aqueles cartazes da festa?",
            speakers: [
            actorBuilder.setName("Lunado").build()
            ],
            listenners: [
            actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
            background: dormitorio!
          }))
          .addDialog(new DefaultDialog({
            text: "Você esqueceu que eu não durmo quando tô animado pra algo?",
            speakers: [
            actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            background: dormitorio!
          }))
          .addDialog(new DefaultDialog({
            text: "É verdade, me lembro do Plexu atleta que ficou uma semana sem dormir animado com uma maratona.",
            speakers: [
            actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
            actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
            background: dormitorio!
          }))
          .addDialog(new DefaultDialog({
            text: "Foi insano.",
            speakers: [
            actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
            actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
            background: dormitorio!
          })).build().header; */
        let CenaC = new ScriptBuilder(1, new HeaderDialog({
            text: "Tá comendo cocô? Claro que não!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            background: dormitorio
        }))
            .addDialog(new DefaultDialog({
            text: "Não fica aí parado. Me ajuda a pendurar esse globo aqui, meu parça.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Ah, o Plexu festeiro usa gírias também...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado ajuda o amigo com as decorações da festa.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Ajudando o Plexu, percebi o quanto é divertido estar na presença dele,",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E ele é engraçado pra caralho com esse jeitinho estranho dele.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "O Plexu festeiro é simpático.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "(Mii entra no quarto.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Mii!",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Bom dia princeso.",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado e Mii se abraçam forte.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Caramba, como o Mii tá cheiroso hoje...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Na real ele sempre foi, mas atualmente está bem mais.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "O Abraço dele é bem apertado, parece que ele está bem feliz em me ver.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Vocês deveriam ter ido tomar café hoje. Teve pudim no cardápio.",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E apenas dois garotos me deram o telefone deles.",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Só dois? ...",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            listenners: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Exatamente! Teve também o tio da cantina, mas decidi não adicionar ele a conta.",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Justo.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            listenners: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E que poha é essa aí?",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Plexu festeiro...",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Aahh, tendi.",
            speakers: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "As vezes fico impressionado em como o Mii entende as coisas com poucas palavras,",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Isso o torna uma ótima pessoa pra se contar.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Lunado, vê se alguém tem uma extensão sobrando pra ligar essas luzes aqui.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            listenners: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E se alguém te perguntar sobre alguma caixinha de som, você diz que não viu nada. Morou?",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            listenners: [
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build(),
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Você que manda, festeiro! Não vi caixa nenhuma!",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado sai do quarto e fecha a porta.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 100 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Sempre achei que o ensino médio seria algo assustador e estranho pra mim.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Apesar de ser algo cansativo e desgastante, está sendo muito bom.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Principalmente pois tenho amigos que me ajudam a não passar por isso sozinho...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Não sei o que seria sem eles.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado chega na porta do quarto 101.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Cheguei. A Iniv provavelmente deve ter uma extensão que nos empreste, ela sempre tem o que a gente precisa...",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Eu adoro o jeito que ela costumiza tudo que está ao seu redor.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Sempre que olho pra essa porta cheia de adesivos e rabiscos (mesmo sendo proibido),",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "Me lembro do quanto ela é radical e criativa.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado bate na porta do quarto e escuta uma voz lá de dentro dizendo para entrar.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            background: corredorDormitorios
        }))
            .addDialog(new DefaultDialog({
            text: "(Lunado entra no quarto. Lá está Iniv cortando o cabelo do TT.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Iniv! TT!",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "inhai pacera!",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Fala!",
            speakers: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Iniv está radiante, como sempre.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Ela tá cortando o cabelo do TT, que inclusive está ficando muito bom.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Acho que ele corta o cabelo toda semana, porque não tem como ficar tão baixinho assim sempre.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O quarto estava super bagunçado. Cheio de roupas, tintas e papéis.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "A Iniv deve gostar dele assim, então está tudo bem.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O que te traz aqui, fofo?",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O Plexu acordou festeiro hoje. Ele vai fazer uma discote...",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Já sabemos, ele já nos convidou...",
            speakers: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "(TT mostra um cartaz que anuncia o evento.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O cartaz tem o Plexu usando um óculos escuros estranhos e dando um sorriso que eu nunca imaginei o Plexu dando.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Pensando bem me sinto assustado olhando bem pra ele.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "O Plexu realmente tá empolgado com isso tudo. Ele imprimiu isso hoje de manhã?",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Enfim, ele está precisando de uma extensão lá.",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new DefaultDialog({
            text: "Ah, eu só tenho essa que estou usando agora, mas já estou acabando, se quiser esperar…",
            speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build()
            ],
            listenners: [
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        }))
            .addDialog(new Survey({
            options: [
                {
                    title: "Esperar a Iniv terminar",
                    course: CenaD1
                },
                {
                    title: "Voltar para o quarto",
                    course: CenaD2
                },
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Iniv").setPosition({ x: 600 }).build(),
                actorBuilder.setName("TT").setPosition({ x: 300, y: 200 }).build()
            ],
            background: quartoIniv
        })).build().header;
        let CenaB1 = new ScriptBuilder(1, new HeaderDialog({
            text: "Eu pensei em falar sobre a furadeira enquanto eu estava dormindo, mas o Plexu é bem aleatório assim as vezes.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            background: dormitorio
        }))
            .addDialog(new DefaultDialog({
            text: "Wow, parece bem divertido e faz um tempo que não tem um evento legal assim aqui na Lion High.",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Quais as atrações que vão ter nessa festa?",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Sobre os garras, o Plexu festeiro já fez algo sobre,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "vamos nos revezar pra ficar de alerta pra quando eles chegarem.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E sobre o som, o clube de música vai se apresentar aqui do lado no anfiteatro,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: " e a música deles vai ecoar no campus inteiro, então nem vão escutar a gente.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Nada vai empedir essa festa de acontecer!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "As vezes eu esqueço que quando o Plexu ta animado, ele só ouve as coisas que lhe convém.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: " Mas o Plexu sempre pensa em tudo mesmo, sempre bem preparado. ",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Ok que são sempre uns planos doidos, mas ele se dedica.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            /* .addDialog(new Battle({
              title: "Jogue para saber como está  o humor dA Iniv hoje... Boa sorte.",
              speakers: [
                actorBuilder.setName("Iniv").setPosition({ x: 425 }).build(),
                actorBuilder.setName("Plexu").setPosition({ x: 800 }).build(),
                actorBuilder.setName("Mii").setPosition({ x: 50 }).build()
              ],
              critical: 2,
              chances: 2
            })) */
            .addDialog(new DefaultDialog({
            text: "Adivinha o que vai tocar na festa?",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new Survey({
            options: [
                {
                    title: "Eletrônica",
                    course: CenaC
                },
                {
                    title: "Funk",
                    course: CenaC
                },
                {
                    title: "Sertanejo",
                    course: CenaC
                }
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).build().header;
        let CenaB2 = new ScriptBuilder(1, new HeaderDialog({
            text: "Eu pensei em falar sobre a furadeira enquanto eu estava dormindo, mas o Plexu é bem aleatório assim as vezes,",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            background: dormitorio
        }))
            .addDialog(new DefaultDialog({
            text: "Poxa, e quando você pretendia informar isso pra gente?",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Sobre os garras, o Plexu festeiro já fez algo sobre,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "vamos nos revezar pra ficar de alerta pra quando eles chegarem.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E sobre o som, o clube de música vai se apresentar aqui do lado no anfiteatro,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: " e a música deles vai ecoar no campus inteiro, então nem vão escutar a gente.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Nada vai empedir essa festa de acontecer!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "As vezes eu esqueço que quando o Plexu ta animado, ele só ouve as coisas que lhe convém.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Mas o Plexu sempre pensa em tudo mesmo, sempre bem preparado. ",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Ok que são sempre uns planos doidos, mas ele se dedica.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Adivinha o que vai tocar na festa!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new Survey({
            options: [
                {
                    title: "Eletrônica",
                    course: CenaC
                },
                {
                    title: "Funk",
                    course: CenaC
                },
                {
                    title: "Sertanejo",
                    course: CenaC
                }
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).build().header;
        ;
        let CenaB3 = new ScriptBuilder(1, new HeaderDialog({
            text: "Eu pensei em falar sobre a furadeira enquanto eu estava dormindo, mas o Plexu é bem aleatório assim as vezes,",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
            background: dormitorio
        }))
            .addDialog(new DefaultDialog({
            text: "Cê tá precisando de ajuda? ...",
            speakers: [
                actorBuilder.setName("Lunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Sobre os garras, o Plexu festeiro já fez algo sobre,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "vamos nos revezar pra ficar de alerta pra quando eles chegarem.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "E sobre o som, o clube de música vai se apresentar aqui do lado no anfiteatro,",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: " e a música deles vai ecoar no campus inteiro, então nem vão escutar a gente.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Nada vai empedir essa festa de acontecer!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "As vezes eu esqueço que quando o Plexu ta animado, ele só ouve as coisas que lhe convém.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Mas o Plexu sempre pensa em tudo mesmo, sempre bem preparado. ",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Ok que são sempre uns planos doidos, mas ele se dedica.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new DefaultDialog({
            text: "Adivinha o que vai tocar na festa!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        }))
            .addDialog(new Survey({
            options: [
                {
                    title: "Eletrônica",
                    course: CenaC
                },
                {
                    title: "Funk",
                    course: CenaC
                },
                {
                    title: "Sertanejo",
                    course: CenaC
                }
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).build().header;
        let scriptController = new ScriptBuilder(1, header)
            .addDialog(new DefaultDialog({
            text: "Mas foi por uma boa causa, tive que ajudar um amigo em um projeto e... Bem, deu tudo certo. ",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
        })).addDialog(new DefaultDialog({
            text: "Mas que barulheira é essa?!!",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
        })).addDialog(new DefaultDialog({
            text: "(Lunado abre os olhos e vê Plexu, seu colega de quarto, em cima de uma escada com uma furadeira tentando furar o teto.)",
            speakers: [
                actorBuilder.setName("Narrador").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "Mas que... porra? Outra vez o Plexu fazendo coisas doidas e aleatórias pela manhã.",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "O que deve ser agora? Uma... discoteca no quarto?",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "DISCOTECA NO QUARTO!!!!!!!",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "Ele deu pra ler mentes agora?",
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "O Plexu festeiro vai dar uma festa do caralho essa noite, e não encontrou um lugar melhor pra fazer a festa",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new DefaultDialog({
            text: "Então, decidiu fazer aqui no quarto.",
            speakers: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).addDialog(new Survey({
            options: [
                {
                    title: "Irado, o que vai ter nela?",
                    course: CenaB1
                },
                {
                    title: "E não perguntou pra gente sobre isso?",
                    course: CenaB2
                },
                {
                    title: "E você tá precisando de ajuda?",
                    course: CenaB3
                }
            ],
            speakers: [
                actorBuilder.setName("PensamentoLunado").build()
            ],
            listenners: [
                actorBuilder.setName("Plexu").setPosition({ x: 500 }).build()
            ],
        })).build();
        let loader = new GameLoader(...Script.allActors);
        loader.onload = (n) => {
            let el = document.getElementById('loading');
            el.innerHTML = n.toString();
        };
        loader.setupObjects().then(() => {
            // CHAT AQUI
            let chat = new DisplayChat("tela", scriptController.dialog.content);
            let dialogIsSurvey = false;
            let dialogIsBattle = false;
            let inBattle = false;
            setInterval(() => {
                window.requestAnimationFrame(() => __awaiter(this, void 0, void 0, function* () {
                    if (inBattle) {
                        let control = scriptController.dialog;
                        control.tick();
                        if (control.chances > 0) {
                            if (keydown === ' ') {
                                control.hit();
                            }
                        }
                        else {
                            inBattle = false;
                            scriptController.nextDialog();
                        }
                    }
                    if (keydown === ' ' && !inBattle) {
                        scriptController.nextDialog();
                        dialogIsSurvey = scriptController.isSurvey();
                        dialogIsBattle = scriptController.isBattle();
                        if (dialogIsBattle) {
                            inBattle = true;
                        }
                    }
                    if (dialogIsSurvey) {
                        let control = scriptController.dialog;
                        if (keydown === "ArrowDown") {
                            control.selectOption(control.selected + 1);
                            scriptController.dialog = control;
                        }
                        if (keydown === "ArrowUp") {
                            control.selectOption(control.selected - 1);
                            scriptController.dialog = control;
                        }
                    }
                    scriptController.buildScene().build().controller((actors, background, listenners) => {
                        Display.background(background);
                        let title = "";
                        let fontColor = "black";
                        /// MOSTRA TODOS OS QUE ESTÃO FALANDO
                        actors.forEach((actor) => {
                            title = actor.name;
                            Display.imageAndScale({
                                img: actor.sprite,
                                x: actor.position.x,
                                y: actor.position.y,
                                scale: actor.scale,
                                opacity: 1
                            });
                            /// AQUI MUDA AS VARIAVEIS COM TITULO E COR DA FONTE
                            if (actor.name === "PensamentoLunado") {
                                title = "";
                                fontColor = "purple";
                            }
                            if (actor.name === "Narrador") {
                                title = "";
                            }
                        });
                        /// MOSTRA TODOS OS OUVINTES
                        listenners.forEach(listenner => {
                            listenner.setup();
                            if (title === "" || title === "Lunado")
                                Display.imageAndScale({
                                    img: listenner.sprite,
                                    x: listenner.position.x,
                                    y: listenner.position.y,
                                    scale: listenner.scale,
                                    opacity: 1
                                });
                            else
                                Display.imageAndScale({
                                    img: listenner.sprite,
                                    x: listenner.position.x,
                                    y: listenner.position.y,
                                    scale: listenner.scale,
                                    opacity: 0.8
                                });
                        });
                        chat.drawWindow();
                        if (dialogIsSurvey) {
                            chat.drawSurvey(scriptController.dialog, title, fontColor);
                        }
                        else if (dialogIsBattle) {
                            chat.drawBattle(scriptController.dialog, title);
                        }
                        else {
                            chat.drawDialog(scriptController.dialog, title, fontColor);
                        }
                    });
                    keydown = null;
                }));
            }, 1000 / 120);
        });
    });
});
