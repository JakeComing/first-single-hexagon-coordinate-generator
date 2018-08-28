module.exports = function(width, type) {
  console.log("type is:" + type);
  var coordinates = new Array();
  height = (width * Math.sqrt(3)) / 2;
  coordinates[0] = ( 0.5 * width ) +","+0;
  coordinates[1] = width + "," + ( 0.25 * height);
  coordinates[2] = width + "," + ( 0.75 * height);
  coordinates[3] = ( 0.5 * width ) +","+ height;
  coordinates[4] = 0 + "," + ( 0.75 * height);
  coordinates[5] = 0 + "," + ( 0.25 * height);
  return coordinates;
};
