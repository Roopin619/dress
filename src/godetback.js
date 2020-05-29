export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;
  // Godets other than 4 fixed ones
  let varGodets = parseInt(options.numOfGodets) / 4;
  let godetWidth = options.godetWidth;
  let godetGap = ((measurements.backHipArc + options.manipulateHem) - (godetWidth * varGodets)) / varGodets;

  if (godetWidth * varGodets > (measurements.backHipArc + options.manipulateHem)) {
    godetWidth = (measurements.backHipArc + options.manipulateHem) / varGodets;
    godetGap = 0;
  }

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.backHipArc + options.manipulateHem, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.backHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.backWaistArc / 2 + options.backDartWidth * 2, -(1 / 2) * inch);
  points.waistCp = points.rWaist.shift(195, points.origin.dx(points.rWaist) / 3);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.topRight = points.origin.shift(0, measurements.backHipArc);
  points.bottomRight = points.topRight.shift(-90, measurements.length);

  paths.waistCurve = new Path()
    .move(points.origin)
    ._curve(points.waistCp, points.rWaist)

  // Dart Points
  let waistlength = paths.waistCurve.length() / 2;
  points.leftDartC = paths.waistCurve
    .shiftAlong(waistlength);
  points.leftDartR = paths.waistCurve
    .shiftAlong(waistlength + options.backDartWidth / 2);
  points.leftDartL = paths.waistCurve
    .shiftAlong(waistlength - options.backDartWidth / 2);
  points.leftDartPoint = points.leftDartC
    .shift(-90, options.backLeftDartLength);

  paths.seam = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.rHem)
    ._curve(points.cp2, points.rHip)
    ._curve(points.cp1, points.rWaist)

  paths.leftDart = new Path()
    .move(points.leftDartL)
    .line(points.leftDartPoint)
    .line(points.leftDartR)

  // Left Fixed Half Godet
  points.lFGodetTop = points.lHem.shift(90, options.godetLength);
  points.lFGodetRight = points.lFGodetTop.translate(godetWidth / 2, options.godetLength);
  points.lFGodetRightTop = points.lFGodetRight.shift(90, 0.8 * options.godetLength);
  points.lFGodetTopRcp = points.lFGodetRight.shift(90, options.godetLength);
  paths.lFGodet = new Path()
    .move(points.lFGodetTop)
    ._curve(points.lFGodetTopRcp, points.lFGodetRightTop)
    .line(points.lFGodetRight);

  // Right Fixed Half Godet
  points.rFGodetTop = points.rHem.shift(90, options.godetLength);
  points.rFGodetLeft = points.rFGodetTop.translate(-godetWidth / 2, options.godetLength);
  points.rFGodetLeftTop = points.rFGodetLeft.shift(90, 0.8 * options.godetLength);
  points.rFGodetTopLcp = points.rFGodetLeft.shift(90, options.godetLength);
  paths.rFGodet = new Path()
    .move(points.rFGodetTop)
    ._curve(points.rFGodetTopLcp, points.rFGodetLeftTop)
    .line(points.rFGodetLeft);

  // Variable Godets
  for (let i = 1; i < varGodets; i++) {
    points[`godet${i}Top`] = points.lFGodetTop.shift(0, i * (godetWidth + godetGap));
    // Left half path
    points[`godet${i}Left`] = points[`godet${i}Top`].translate(-godetWidth / 2, options.godetLength);
    points[`godet${i}LeftTop`] = points[`godet${i}Left`].shift(90, 0.8 * options.godetLength);
    points[`godet${i}TopLcp`] = points[`godet${i}Left`].shift(90, options.godetLength);
    paths[`godet${i}L`] = new Path()
      .move(points[`godet${i}Top`])
      ._curve(points[`godet${i}TopLcp`], points[`godet${i}LeftTop`])
      .line(points[`godet${i}Left`]);
    // Right half path
    points[`godet${i}Right`] = points[`godet${i}Top`].translate(godetWidth / 2, options.godetLength);
    points[`godet${i}RightTop`] = points[`godet${i}Right`].shift(90, 0.8 * options.godetLength);
    points[`godet${i}TopRcp`] = points[`godet${i}Right`].shift(90, options.godetLength);
    paths[`godet${i}R`] = new Path()
      .move(points[`godet${i}Top`])
      ._curve(points[`godet${i}TopRcp`], points[`godet${i}RightTop`])
      .line(points[`godet${i}Right`]);
  }

  paths.seamnew = new Path()
      .move(points.rWaist)
      .line(points.nine)
  paths.frontdart = new Path()
      .move(points.eightL)
      .line(points.seven)
      .line(points.eightR)

  // Complete?
  if (complete) {
    if (sa) {
    }
    // Paperless?
    if (paperless) {
    }
  }
  return part;
}