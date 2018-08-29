module.exports = function(width, pointyTopBool) {
  var coordinates = new Array();
  if (pointyTopBool) {
    var height = Math.round((width * Math.sqrt(3)) * 50) / 100;
    coordinates[0] = [Math.round( 50 * width ) / 100 , 0];
    coordinates[1] = [width , Math.round( 25 * height ) / 100];
    coordinates[2] = [width , Math.round( 75 * height) / 100];
    coordinates[3] = [Math.round( 50 * width ) / 100, height];
    coordinates[4] = [0 , Math.round( 75 * height) / 100];
    coordinates[5] = [0 , Math.round( 25 * height) / 100];
    return coordinates;
  } else if (!pointyTopBool) {
    // flat top calculations
  }
};
