module.exports = function(width, pointyTopBool) {
  var coordinates = new Array();
  if (pointyTopBool) {
    var height = Math.round((width * Math.sqrt(3)) * 50) / 100;
    coordinates['top'] = [Math.round( 50 * width ) / 100 , 0];
    coordinates['topright'] = [width , Math.round( 25 * height ) / 100];
    coordinates['bottomright'] = [width , Math.round( 75 * height) / 100];
    coordinates['bottom'] = [Math.round( 50 * width ) / 100, height];
    coordinates['bottomleft'] = [0 , Math.round( 75 * height) / 100];
    coordinates['topleft'] = [0 , Math.round( 25 * height) / 100];
    return coordinates;
  } else if (!pointyTopBool) {
    // flat top calculations
    coordinates['topright'] = [ Math.round(), Math.round() ];
    coordinates['right'] = [ Math.round(), Math.round() ];
    coordinates['bottomright'] = [ Math.round(), Math.round() ];
    coordinates['bottomleft'] = [ Math.round(), Math.round() ];
    coordinates['left'] = [ Math.round(), Math.round() ];
    coordinates['topleft'] = [ Math.round(), Math.round() ];
  }
};
