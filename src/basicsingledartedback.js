export default function(part) {
    let { Point, points, Path, paths, measurements, options } = part.shorthand();
    const inch = 25.4;
  
    // Design pattern here
    points.origin = points.one;
    points.rHem = points.origin.translate(measurements.backHipArc + options.manipulateHem, measurements.length);
    points.lHem = points.origin.shift(-90, measurements.length);
    points.rHip = points.origin.translate(measurements.backHipArc, options.naturalWaistToHip);
    points.rWaist = points.origin.translate(measurements.backWaistArc / 2 + options.backDartWidth, -(1/2) * inch);
    points.waistCp = points.rWaist.shift(195, points.origin.dx(points.rWaist) / 3);
    points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
    points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.lHem) / 2.5);
    points.topRight = points.origin.shift(0, measurements.backHipArc);
    points.bottomRight = points.topRight.shift(-90, measurements.length);
  
    paths.waistCurve = new Path()
    .move(points.origin)
    ._curve(points.waistCp, points.rWaist)
    let waistlength = paths.waistCurve.length()/2;
  
    // Dart Points
    points.rightDartC = paths.waistCurve
      .shiftAlong(waistlength);
    points.rightDartR = paths.waistCurve
      .shiftAlong(waistlength + options.backDartWidth/2);
    points.rightDartL = paths.waistCurve
      .shiftAlong(waistlength - options.backDartWidth/2);
    points.rightDartPoint = points.rightDartC
      .shift(-90, options.backRightDartLength);
    /*points.leftDartR = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2 + options.dartGap);
    points.leftDartL = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2 + options.dartGap + options.backDartWidth);
    points.leftDartC = paths.waistCurve
      .shiftAlong(waistlength);
    points.leftDartPoint = points.leftDartC
      .shift(-91, options.backLeftDartLength);*/
    
  
    paths.seam = new Path()
      .move(points.origin)
      .line(points.lHem)
      .line(points.rHem)
      ._curve(points.cp2, points.rHip)
      ._curve(points.cp1, points.rWaist)
  
    /*paths.leftDart = new Path()
      .move(points.leftDartL)
      .line(points.leftDartPoint)
      .line(points.leftDartR)*/
  
    paths.rightDart = new Path()
      .move(points.rightDartL)
      .line(points.rightDartPoint)
      .line(points.rightDartR)

    paths.seamnew = new Path()
      .move(points.rWaist)
      .line(points.nine)
    paths.backdart = new Path()
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