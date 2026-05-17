# Projekt: Arbejderboligerne

Mobil-baseret museumsoplevelse til Industrimuseet i Horsens.
Brugeren vælger en af 4 karakterer fra en arbejderfamilie i 1955 (Hanne, Niels, Holger, Jytte) og swiper sig gennem deres historie, sidequest og afsluttende QR-skærm.

## Stack

- React 19.2.5
- Vite 8.0.10
- framer-motion 12.38.0
- react-swipeable 7.0.2
- Vanilla CSS Modules (ingen Tailwind, ingen CSS-in-JS)
- Ingen router — navigation håndteres med useState i App.jsx via en switch på `currentScreen`

## Skærm-flow

```
start
  └── familyIntroScreens (Screen0–Screen5, sender direkte videre via onSelectCharacter)
        └── characterDetails (CharacterIntro + 2 detail-skærme per karakter)
              ├── onBack → characterSelect (alternativ karakter-vælger)
              └── onNext → sidequest (1 per karakter)
                    ├── onBack → characterDetails
                    └── onQrBack → characterSelect
```

`characterSelect` bruges som tilbage-destination fra `characterDetails` og `sidequest`. Det kan også nås direkte via state, men er ikke en del af det lineære flow.

`qrScreen` findes som case i App.jsx men kaldes ikke aktivt i flowet endnu.

`Guide`-skærmen ligger stadig på disk (`src/screens/Guide/`) men er **ikke længere koblet til App.jsx** — kan slettes hvis den ikke skal bruges.

## Folder-struktur

Status-markører:
- ✅ = filen har indhold
- 🟡 = filen er stub (få linjer placeholder, kan renderes uden crash)
- ⚪ = filen er tom (0 linjer)

```
arbejderboligerne/
├── README.md                                ✅
├── STRUCTURE.md                             ✅  (denne fil)
├── eslint.config.js                         ✅
├── index.html                               ✅  (peger på /src/index.jsx)
├── package.json                             ✅
├── vite.config.js                           ✅  (host:true ligger fejlagtigt på root, burde være under server:{})
├── public/                                  (tom)
└── src/
    ├── App.jsx                              ✅  (state-baseret nav: start → familyIntroScreens → characterDetails → sidequest, characterSelect/qrScreen som side-cases)
    ├── App.module.css                       ⚪
    ├── index.jsx                            ✅  (createRoot mount-fil)
    │
    ├── assets/
    │   └── images/
    │       ├── QRKODER/
    │       │   ├── HanneQRKODE.svg          ✅
    │       │   ├── NielsQRKODE.svg          ✅
    │       │   ├── HolgerQRKODE.svg         ✅
    │       │   └── JytteQRKODE.svg          ✅
    │       ├── familie/
    │       │   ├── start-fam.svg            ✅
    │       │   ├── fam-intro1a.svg          ✅
    │       │   ├── fam-intro1b.svg          ✅
    │       │   ├── fam-intro2.svg           ✅
    │       │   ├── fam-intro3.svg           ✅
    │       │   ├── fam-intro4.svg           ✅
    │       │   ├── fam-intro5.svg           ✅
    │       │   ├── hanne-cirkel.svg         ✅
    │       │   ├── niels-cirkel.svg         ✅
    │       │   ├── holger-cirkel.svg        ✅
    │       │   ├── jytte-cirkel.svg         ✅
    │       │   ├── hanne/
    │       │   │   ├── hanne1.svg           ✅
    │       │   │   ├── hanne2.svg           ✅
    │       │   │   └── hanneQR.svg          ✅
    │       │   ├── niels/
    │       │   │   ├── niels1a.svg          ✅
    │       │   │   ├── niels1b.svg          ✅
    │       │   │   ├── niels2.svg           ✅
    │       │   │   └── nielsQR.svg          ✅
    │       │   ├── holger/
    │       │   │   ├── holger1a.svg         ✅
    │       │   │   ├── holger1b.svg         ✅
    │       │   │   ├── holger2a.svg         ✅
    │       │   │   ├── holger2b.svg         ✅
    │       │   │   └── holgerQR.svg         ✅
    │       │   └── jytte/
    │       │       ├── jytte1.svg           ✅
    │       │       ├── jytte2a.svg          ✅
    │       │       ├── jytte2b.svg          ✅
    │       │       └── jytteQR.svg          ✅
    │       └── illustrations/
    │           ├── QRKODE.svg               ✅
    │           ├── arrow.svg                ✅
    │           ├── back.svg                 ✅
    │           ├── brev.svg                 ✅
    │           ├── guide.svg                ✅
    │           ├── radio.svg                ✅
    │           ├── tv.svg                   ✅
    │           ├── PilThojre.svg            ✅
    │           ├── PilTvenstre.svg          ✅
    │           ├── Guide-step1.svg          ✅
    │           ├── Guide-step2.svg          ✅
    │           ├── Guide-step3.svg          ✅
    │           ├── Guide-step4.svg          ✅
    │           ├── Hanne-dilemma.svg        ✅
    │           ├── Niels-dilemma.svg        ✅
    │           ├── Holger-dilemma.svg       ✅
    │           ├── Jytte-dilemma.svg        ✅
    │           └── star1.svg ... star16.svg ✅  (16 stjerner total)
    │
    ├── components/
    │   ├── CharacterButton/
    │   │   ├── CharacterButton.jsx          ⚪
    │   │   └── CharacterButton.module.css   ⚪
    │   └── ProgressBar/
    │       ├── ProgressBar.jsx              ✅
    │       └── ProgressBar.module.css       ✅
    │
    ├── data/
    │   ├── characters.js                    ✅  (de 4 karakterer med metadata)
    │   ├── screens.js                       ✅  (tekster til Family Intro Screen 0–5)
    │   └── sideQuests.js                    ✅  (opgave-definitioner per karakter)
    │
    ├── screens/
    │   ├── Start/
    │   │   ├── start.jsx                    ✅  (eksporterer komponent ved navn `Splash`, prop: onNext)
    │   │   └── start.module.css             ✅
    │   │
    │   ├── FamilyIntro/
    │   │   ├── FamilyIntroScreens.jsx       ✅  (wrapper — router mellem Screen0–5; props: startAt, onSelectCharacter)
    │   │   ├── FamilyIntroScreens.module.css ✅
    │   │   └── screens/
    │   │       ├── Screen0.jsx              ✅
    │   │       ├── Screen1.jsx              ✅
    │   │       ├── Screen2.jsx              ✅
    │   │       ├── Screen3.jsx              ✅
    │   │       ├── Screen4.jsx              ✅
    │   │       ├── Screen5.jsx              ✅
    │   │       └── styles/
    │   │           ├── Screen0.module.css   ✅
    │   │           ├── Screen1.module.css   ✅
    │   │           ├── Screen2.module.css   ✅
    │   │           ├── Screen3.module.css   ✅
    │   │           ├── Screen4.module.css   ✅
    │   │           └── Screen5.module.css   ✅
    │   │
    │   ├── CharacterSelect/
    │   │   ├── CharacterSelect.jsx          🟡  (prop: onSelectCharacter)
    │   │   └── CharacterSelect.module.css   ✅
    │   │
    │   ├── CharacterDetails/
    │   │   ├── CharacterDetails.jsx         ✅  (wrapper — router mellem CharacterIntro + 8 detail-skærme; props: character, startAt, onNext, onBack)
    │   │   ├── CharacterDetails.module.css  ✅
    │   │   └── screens/
    │   │       ├── CharacterIntro.jsx       ✅  (fælles intro-skærm før detail-skærme)
    │   │       ├── HanneDetail1.jsx         ✅
    │   │       ├── HanneDetail2.jsx         ✅
    │   │       ├── NielsDetail1.jsx         ✅
    │   │       ├── NielsDetail2.jsx         ✅
    │   │       ├── HolgerDetail1.jsx        ✅
    │   │       ├── HolgerDetail2.jsx        ✅
    │   │       ├── JytteDetail1.jsx         ✅
    │   │       ├── JytteDetail2.jsx         ✅
    │   │       └── styles/
    │   │           ├── CharacterIntro.module.css   ✅
    │   │           ├── HanneDetail1.module.css     ✅
    │   │           ├── HanneDetail2.module.css     ✅
    │   │           ├── NielsDetail1.module.css     ✅
    │   │           ├── NielsDetail2.module.css     ✅
    │   │           ├── HolgerDetail1.module.css    ✅
    │   │           ├── HolgerDetail2.module.css    ✅
    │   │           ├── JytteDetail1.module.css     ✅
    │   │           └── JytteDetail2.module.css     ✅
    │   │
    │   ├── Sidequest/
    │   │   ├── Sidequest.jsx                🟡  (wrapper — vælger 1 af 4 sidequests baseret på character; props: character, startAt, onBack, onQrBack)
    │   │   ├── Sidequest.module.css         ✅
    │   │   └── screens/
    │   │       ├── SidequestHanne.jsx       ⚪
    │   │       ├── SidequestNiels.jsx       ⚪
    │   │       ├── SidequestHolger.jsx      ⚪
    │   │       ├── SidequestJytte.jsx       ⚪
    │   │       └── styles/
    │   │           ├── SidequestHanne.module.css   ⚪
    │   │           ├── SidequestNiels.module.css   ⚪
    │   │           ├── SidequestHolger.module.css  ⚪
    │   │           └── SidequestJytte.module.css   ⚪
    │   │
    │   ├── Guide/                           ⚠  (Ikke koblet til App.jsx længere — kan slettes)
    │   │   ├── Guide.jsx                    🟡
    │   │   └── Guide.module.css             ✅
    │   │
    │   └── QRScreen/
    │       ├── QRScreen.jsx                 🟡  (props: character, onBack)
    │       └── QRScreen.module.css          ✅
    │
    └── styles/
        ├── global.css                       ✅  (importeres i index.jsx)
        ├── variables.css                    ⚪
        └── animations.css                   ⚪
```

## App.jsx state-API

```js
currentScreen: "start" | "familyIntroScreens" | "characterSelect" | "characterDetails" | "sidequest" | "qrScreen"
selectedCharacter: "hanne" | "niels" | "holger" | "jytte" | null
subScreen: string | null   // passes til wrappers som prop `startAt`
```

## Konventioner

- Wrapper-komponenter (FamilyIntroScreens, CharacterDetails, Sidequest) modtager `startAt`-prop som valgfri override af initial underskærm.
- Underskærme kaldes ved camelCase ID: `screen0`, `screen1`, `hanneDetail2`, `sidequestNiels`, `characterIntro` osv.
- CSS Modules: alle styles importeres som `import styles from "./X.module.css"`.
- Filnavn-konvention: PascalCase for komponenter, undtagen `Start/start.jsx` (lille s) som er en undtagelse.

## Ændringer siden sidste version af STRUCTURE.md

- Ny mappe: `src/assets/images/QRKODER/` med 4 QR-koder per karakter
- Nye illustrations: 4 Guide-step SVGs, 4 dilemma SVGs, PilThojre/PilTvenstre, arrow, back
- Ny underskærm: `CharacterDetails/screens/CharacterIntro.jsx` (fælles intro før detail-skærmene)
- `src/components/DevMenu/` er fjernet
- `Guide` er ikke længere koblet i App.jsx (mappen ligger stadig på disk)
- FamilyIntroScreens sender nu direkte til characterDetails via `onSelectCharacter` (springer characterSelect over i hovedflowet)
- Sidequest har nye props: `onBack` og `onQrBack` (i stedet for `onNext`)
- QRScreen har `onBack` (i stedet for `onReset`)
- Mange CSS Modules + alle Character Detail-skærme er nu udfyldt
- data/characters.js og data/sideQuests.js er nu udfyldt
