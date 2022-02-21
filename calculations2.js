const mysqlConnection = require('./connection');

function calculations2(data) {
  data = data.Output2Inputs;
  var htbd = Number(data.htOfBuilding);
  var htpk = Number(data.htOfParking);
  var netht = htbd - htpk;

  var special = data.special;

  output2send = {
    frontGround: special ? 6 : 3,
    frontFirst: special ? 6 : 3,
    frontTop: (netht / 5).toFixed(2),
    frontClear: special ? 4.5 : 2,
    sideGround: special ? 6 : 3,
    sideFirst: special ? 6 : 3,
    sideTop: (netht / 5).toFixed(2),
    sideClear: special ? 4.5 : 2,
    minSide: (netht / 6).toFixed(2),
    minArea: ((netht / 6) * (netht / 6)).toFixed(2),
    innerChowk: (netht / 7).toFixed(2),
    exteriorChowk: (netht / 8).toFixed(2),
  };

  return output2send;
}

module.exports = { calculations2 };
