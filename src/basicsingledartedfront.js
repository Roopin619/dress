export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.frontHipArc + options.manipulateHem, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.frontHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.frontWaistArc / 2 + options.frontDartWidth, -(1 / 2) * inch);
  points.waistCp = points.rWaist.shift(195, points.origin.dx(points.rWaist) / 3);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.topRight = points.origin.shift(0, measurements.frontHipArc);
  points.bottomRight = points.topRight.shift(-90, measurements.length);

  paths.waistCurve = new Path()
    .move(points.origin)
    ._curve(points.waistCp, points.rWaist)

  // Dart points
  let waistlength = paths.waistCurve.length() / 2;
  points.leftDartC = paths.waistCurve
    .shiftAlong(waistlength);
  points.leftDartR = paths.waistCurve
    .shiftAlong(waistlength + options.frontDartWidth / 2);
  points.leftDartL = paths.waistCurve
    .shiftAlong(waistlength - options.frontDartWidth / 2);
  points.leftDartPoint = points.leftDartC
    .shift(-90, options.frontLeftDartLength);

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

  if (options.frontdart === 'no') {
    paths.seamnew = new Path()
      .move(points.rWaist)
      .line(points.nine)
    paths.frontdart = new Path()
      .move(points.eightL)
      .line(points.seven)
      .line(points.eightR)
  }

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