import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "dress",
  version,
  design: "Roopin619",
  code: "Roopin619",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    armholeoptions:
      [
        "shoulderslopedepth", "armholecenter", "armbottomwidth",
        { armholecp: ["topcpspread", "midcp2spread", "midcp1spread", "bottomcpspread"] },
        { armtopshiftup: ["armtopshift"] },
        { armholedart: ["armholedartlength", "armholedartwidth", "frontdart", "afterdartcurvefactor"] }
      ],
    neckoptions:
      [
        { neckcpspread: ["neckcprightspread", "neckcpbottomspread"] },
        { neckcpangle: ["neckcprightangle", "neckcpbottomangle"] },
        { neckdimensions: ["neckwidth", "neckdepth"] }
      ],
    waistdart: ["waistdartwidth", "waistdartlength"],
    Type: ["skirttype"],
    Hem: ["manipulateHem"],
    Dart: [
      "dartGap", "waistDartPosition",
      { Front: ["frontLeftDartLength", "frontRightDartLength", "frontDartWidth"] },
      { Back: ["backLeftDartLength", "backRightDartLength", "backDartWidth"] }
    ],
  },
  measurements: ["topToWaist", "naturalWaist", "shoulderToShoulder", "naturalWaistToUnderarm",
    "highBust", "bustSpan", "shoulderSlope", "length", "frontWaistArc", "backWaistArc",
    "hemLine", "frontHipArc", "backHipArc", "hipsCircumference"
  ],
  dependencies: {
    bodicefront: ["neck", "armhole"],
    bodiceback: ["neckback", "armholewithoutdart"]
  },
  inject: {
    neck: 'armhole',
    neckback: 'armholewithoutdart',
    bodicefront: 'neck',
    bodiceback: 'neckback',
    front: 'bodicefront',
    back: 'bodiceback',
    alinefront: 'bodicefront',
    godetfront: 'bodicefront',
    basicsingledartedfront: 'bodicefront',
    alineback: 'bodiceback',
    godetback: 'bodiceback',
    basicsingledartedback: 'bodiceback'
  },
  hide: ["alinefront", "alineback", "godetfront", "godet", "godetback",
    "basicsingledartedfront", "basicsingledartedback", "armhole", "armholewithoutdart",
    "neck", "neckback", "bodicefront", "bodiceback"
  ],
  parts: ["front", "back", "extra", "alinefront", "alineback", "godetback", "godetfront",
    "godet", "basicsingledartedfront", "basicsingledartedback", "armhole", "armholewithoutdart",
    "neck", "neckback", "bodicefront", "bodiceback"
  ],
  options: {
    //Importing from arm hole
    bottomcpspread: { pct: 18, min: 0, max: 100 },
    midcp1spread: { pct: 10, min: 0, max: 100 },
    midcp2spread: { pct: 9, min: 0, max: 100 },
    topcpspread: { pct: 20, min: 0, max: 100 },
    shoulderslopedepth: { mm: 19.05, min: 0, max: 25.4 },
    armtopshift: { mm: 0, min: 0, max: 177.8 },
    armholecenter: { mm: 0, min: 0, max: 50 },
    armbottomwidth: { mm: 0, min: 0, max: 12.7 },

    //armholedartoptions
    armholedartlength: { mm: 0, min: 0, max: 76.2 },
    armholedartwidth: { mm: 25.4, min: 0, max: 12.7 },

    //neck hole
    neckwidth: { mm: 127, min: 0, max: 177.8 },
    neckdepth: { mm: 76.2, min: 0, max: 177.8 },
    neckcprightspread: { pct: 50, min: 0, max: 100 },
    neckcpbottomspread: { pct: 50, min: 0, max: 100 },
    neckcprightangle: { deg: 0, min: -90, max: 90 },
    neckcpbottomangle: { deg: 0, min: -90, max: 90 },
    frontdart: {
      list: ['no', 'yes'],
      dflt: 'no'
    },
    afterdartcurvefactor: { mm: 0.15, min: 0, max: 0.5 },

    //waist dart
    waistdartwidth: { mm: 50.8, min: 0, max: 50.8 },
    waistdartlength: { mm: 0, min: -101.6, max: 12.7 },

    manipulateHem: { mm: 0, min: -50.8, max: 50.8 },
    frontLeftDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    frontRightDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    backLeftDartLength: { mm: 139.7, min: 88.9, max: 190.5 },
    backRightDartLength: { mm: 127, min: 76.2, max: 177.8 },
    frontDartWidth: { mm: 25.4, min: 0, max: 63.5 },
    backDartWidth: { mm: 25.4, min: 0, max: 69.8 },
    waistDartPosition: { mm: 86.4, min: 35.6, max: 137.2 },
    naturalWaistToHip: { mm: 228.6, min: 177.8, max: 279.4 },
    dartGap: { mm: 25.4, min: 12.7, max: 50.8 },
    skirttype: {
      list: ['aline', 'godet', 'basicsingledarted'],
      dflt: 'basicsingledarted'
    },
    naturalWaistToHip: { mm: 203.2, min: 127, max: 279.4 },
    hemExcess: { mm: 0, min: -76.2, max: 203.2 },
    numOfGodets: { dflt: "8", list: ["4", "8", "12", "16"] },
    godetWidth: { mm: 101.6, min: 50.8, max: 152.4 },
    godetLength: { mm: 254, min: 177.8, max: 330.2 }
  }
};