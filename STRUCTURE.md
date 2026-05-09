# Projekt: Arbejderboligerne

Mobil-baseret museumsoplevelse til Industrimuseet i Horsens.
Brugeren vælger en af 4 karakterer fra en arbejderfamilie i 1955 (Hanne, Niels, Holger, Jytte) og swiper sig gennem deres historie, sidequest, guide og afsluttende QR-skærm.

## Stack

- React 19.2.5
- Vite 8.0.10
- framer-motion 12.38.0
- react-swipeable 7.0.2
- Vanilla CSS Modules (ingen Tailwind, ingen CSS-in-JS)
- Ingen router — navigation håndteres med useState i App.jsx via en switch på `currentScreen`

## Skærm-flow (lineært)

`start` → `familyIntroScreens` (5 underskærme) → `characterSelect` → `characterDetails` (2 underskærme per karakter) → `sidequest` (1 per karakter) → `guide` → `qrScreen`

## Folder-struktur

Status-markører:
- ✅ = filen har indhold
- 🟡 = filen er stub (få linjer placeholder, kan renderes uden crash)
- ⚪ = filen er tom (0 linjer)

```
arbejderboligerne/
├── README.md                                ✅
├── eslint.config.js                         ✅
├── index.html                               ✅  (peger på /src/index.jsx)
├── package.json                             ✅
├── vite.config.js                           ✅  (host:true ligger fejlagtigt på root, burde være under server:{})
├── public/                                  (tom)
└── src/
    ├── App.jsx                              ✅  (state-baseret nav, props: startAt sendes til wrappers)
    ├── App.module.css                       ⚪
    ├── index.jsx                            ✅  (createRoot mount-fil)
    │
    ├── assets/
    │   └── images/
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
    │           ├── brev.svg                 ✅
    │           ├── guide.svg                ✅
    │           ├── radio.svg                ✅
    │           ├── tv.svg                   ✅
    │           └── star1.svg ... star16.svg ✅  (16 stjerner total)
    │
    ├── components/
    │   ├── CharacterButton/
    │   │   ├── CharacterButton.jsx          ⚪
    │   │   └── CharacterButton.module.css   ⚪
    │   ├── DevMenu/
    │   │   ├── DevMenu.jsx                  ✅  (midlertidig nav-menu, fjernes før release)
    │   │   └── DevMenu.module.css           ✅
    │   └── ProgressBar/
    │       ├── ProgressBar.jsx              ⚪
    │       └── ProgressBar.module.css       ⚪
    │
    ├── data/
    │   ├── characters.js                    ⚪  (skal indeholde de 4 karakterer: navn, alder, rolle, billed-stier)
    │   ├── screens.js                       ⚪  (skal indeholde tekster til Family Intro Screen 1-5)
    │   └── sideQuests.js                    ⚪  (skal indeholde opgave-definitioner per karakter)
    │
    ├── screens/
    │   ├── Start/
    │   │   ├── start.jsx                    ✅  (eksporterer komponent ved navn `Splash`, prop: onStart eller onNext)
    │   │   └── start.module.css             ✅
    │   │
    │   ├── FamilyIntro/
    │   │   ├── FamilyIntroScreens.jsx       🟡  (wrapper — skal route mellem Screen1-5; modtager prop `startAt`)
    │   │   ├── FamilyIntroScreens.module.css ✅
    │   │   └── screens/
    │   │       ├── Screen1.jsx              ✅
    │   │       ├── Screen2.jsx              ✅
    │   │       ├── Screen3.jsx              ✅
    │   │       ├── Screen4.jsx              ✅
    │   │       ├── Screen5.jsx              ✅
    │   │       └── styles/
    │   │           ├── Screen1.module.css   ⚪
    │   │           ├── Screen2.module.css   ⚪
    │   │           ├── Screen3.module.css   ⚪
    │   │           ├── Screen4.module.css   ⚪
    │   │           └── Screen5.module.css   ⚪
    │   │
    │   ├── CharacterSelect/
    │   │   ├── CharacterSelect.jsx          🟡  (skal vise 4 karakter-knapper, prop: onSelectCharacter)
    │   │   └── CharacterSelect.module.css   ⚪
    │   │
    │   ├── CharacterDetails/
    │   │   ├── CharacterDetails.jsx         🟡  (wrapper — skal route mellem 8 underskærme baseret på character + startAt)
    │   │   ├── CharacterDetails.module.css  ⚪
    │   │   └── screens/
    │   │       ├── HanneDetail1.jsx         ⚪
    │   │       ├── HanneDetail2.jsx         ⚪
    │   │       ├── NielsDetail1.jsx         ⚪
    │   │       ├── NielsDetail2.jsx         ⚪
    │   │       ├── HolgerDetail1.jsx        ⚪
    │   │       ├── HolgerDetail2.jsx        ⚪
    │   │       ├── JytteDetail1.jsx         ⚪
    │   │       ├── JytteDetail2.jsx         ⚪
    │   │       └── styles/
    │   │           ├── HanneDetail1.module.css   ⚪
    │   │           ├── HanneDetail2.module.css   ⚪
    │   │           ├── NielsDetail1.module.css   ⚪
    │   │           ├── NielsDetail2.module.css   ⚪
    │   │           ├── HolgerDetail1.module.css  ⚪
    │   │           ├── HolgerDetail2.module.css  ⚪
    │   │           ├── JytteDetail1.module.css   ⚪
    │   │           └── JytteDetail2.module.css   ⚪
    │   │
    │   ├── Sidequest/
    │   │   ├── Sidequest.jsx                🟡  (wrapper — vælger 1 af 4 sidequests baseret på character)
    │   │   ├── Sidequest.module.css         ⚪
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
    │   ├── Guide/
    │   │   ├── Guide.jsx                    🟡  (props: character, onNext, onBack)
    │   │   └── Guide.module.css             ⚪
    │   │
    │   └── QRScreen/
    │       ├── QRScreen.jsx                 🟡  (props: character, onReset)
    │       └── QRScreen.module.css          ⚪
    │
    └── styles/
        ├── global.css                       ✅  (importeres i index.jsx)
        ├── variables.css                    ⚪
        └── animations.css                   ⚪
```

## App.jsx state-API

```js
currentScreen: "start" | "familyIntroScreens" | "characterSelect" | "characterDetails" | "sidequest" | "guide" | "qrScreen"
selectedCharacter: "hanne" | "niels" | "holger" | "jytte" | null
subScreen: string | null   // sættes af DevMenu, passes til wrappers som prop `startAt`
```

## Konventioner

- Wrapper-komponenter (FamilyIntroScreens, CharacterDetails, Sidequest) modtager `startAt`-prop som valgfri override af initial underskærm.
- Underskærme kaldes ved camelCase ID: `screen1`, `hanneDetail2`, `sidequestNiels` osv.
- CSS Modules: alle styles importeres som `import styles from "./X.module.css"`.
- Filnavn-konvention: PascalCase for komponenter, undtagen `Start/start.jsx` (lille s) som er en undtagelse.
