import hanneDilemma from "../assets/images/illustrations/Hanne-dilemma.svg";
import holgerDilemma from "../assets/images/illustrations/Holger-dilemma.svg";
import jytteDilemma from "../assets/images/illustrations/Jytte-dilemma.svg";
import nielsDilemma from "../assets/images/illustrations/Niels-dilemma.svg";

import hanneQrCharacter from "../assets/images/familie/hanne/hanneQR.svg";
import holgerQrCharacter from "../assets/images/familie/holger/holgerQR.svg";
import jytteQrCharacter from "../assets/images/familie/jytte/jytteQR.svg";
import nielsQrCharacter from "../assets/images/familie/niels/nielsQR.svg";

import hanneQrCode from "../assets/images/QRKODER/HanneQRKODE.svg";
import holgerQrCode from "../assets/images/QRKODER/HolgerQRKODE.svg";
import jytteQrCode from "../assets/images/QRKODER/JytteQRKODE.svg";
import nielsQrCode from "../assets/images/QRKODER/NielsQRKODE.svg";

export const sideQuests = {
  holger: {
    title: "HOLGER HAR ET DILEMMA",
    subtitle: "HAR DU MULIGHED FOR AT VÆRE HANS HEMMELIGE HJÆLPER?",
    dilemmaImage: holgerDilemma,
    buttonText: "HVORDAN HJÆLPER JEG?",

    qr: {
      characterImage: holgerQrCharacter,
      qrCodeImage: holgerQrCode,
    },
  },

  jytte: {
    title: "JYTTE HAR ET DILEMMA",
    subtitle: "HAR DU MULIGHED FOR AT VÆRE HENDES HEMMELIGE HJÆLPER?",
    dilemmaImage: jytteDilemma,
    buttonText: "HVORDAN HJÆLPER JEG?",

    qr: {
      characterImage: jytteQrCharacter,
      qrCodeImage: jytteQrCode,
    },
  },

  niels: {
    title: "NIELS HAR ET DILEMMA",
    subtitle: "HAR DU MULIGHED FOR AT VÆRE HANS HEMMELIGE HJÆLPER?",
    dilemmaImage: nielsDilemma,
    buttonText: "HVORDAN HJÆLPER JEG?",

    qr: {
      characterImage: nielsQrCharacter,
      qrCodeImage: nielsQrCode,
    },
  },

  hanne: {
    title: "HANNE HAR ET DILEMMA",
    subtitle: "HAR DU MULIGHED FOR AT VÆRE HENDES HEMMELIGE HJÆLPER?",
    dilemmaImage: hanneDilemma,
    buttonText: "HVORDAN HJÆLPER JEG?",

    qr: {
      characterImage: hanneQrCharacter,
      qrCodeImage: hanneQrCode,
    },
  },
};
