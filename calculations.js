const mysqlConnection = require('./connection');

// import * as $ from 'jquery'
function calculationsmain(data) {
  data = data.inputs;
  // console.log(data);

  // console.log($('#netplotarea'));
  // localStorage.setItem ('key',data)

  // document.getElementById("netplotarea").innerHTML = 10;
  // if (typeof document != 'undefined') {
  //     document.getElementById("netplotarea").innerHTML = 10;
  //   }

  const outputdata = {
    netPlotArea: null,
    grossPlotArea: null,
    basicFSIFactor: null,
    basicFSIArea: null,
    premiumFSIFactor: null,
    premiumFSIArea: null,
    TDRFactor: null,
    TDRArea: null,
    ancillaryFSI: null,
    ancillaryAreaTotal: null,
    totalFSI: null,
    totalBuiltUpArea: null,
    openSpaceReq: null,
    amenitySpaceReq: null,
  };

  var localAuthority = data.localAuthority;
  var plotArea = Number(data.plotArea);
  var roadWidening = Number(data.roadWidening);
  var reservationName = data.reservationName;
  var reservationArea = Number(data.reservationArea);
  var locality = data.locality;
  var reservations = data.reservations;
  var zone = data.zone;
  var roadWidth = data.roadWidth;

  outputdata.netPlotArea = plotArea - roadWidening - reservationArea;
  outputdata.basicFSIFactor = 1.1;
  outputdata.basicFSIArea = Number((outputdata.netPlotArea * outputdata.basicFSIFactor).toFixed(2));
  outputdata.premiumFSIFactor = 0.5;
  outputdata.premiumFSIArea = Number(
    (outputdata.netPlotArea * outputdata.premiumFSIFactor).toFixed(2)
  );
  outputdata.TDRFactor = 0.4;
  outputdata.grossPlotArea = plotArea - roadWidening;

  outputdata.TDRArea = Number((outputdata.netPlotArea * outputdata.TDRFactor).toFixed(2));
  var permissibleFSIFactor =
    outputdata.basicFSIFactor + outputdata.premiumFSIFactor + outputdata.TDRFactor;
  var permissibleFSIArea = outputdata.basicFSIArea + outputdata.premiumFSIArea + outputdata.TDRArea;

  var ancillaryFSIComm = 0.8;
  var ancillaryFSIRes = 0.6;
  var commAreaPercent = 0; //dynamic
  var resAreaPercent = 1; //dynamic
  var ancillaryCommArea = Number(
    (permissibleFSIArea * ancillaryFSIComm * commAreaPercent).toFixed(2)
  );
  var ancillaryResArea = Number((permissibleFSIArea * ancillaryFSIRes * resAreaPercent).toFixed(2));

  outputdata.ancillaryFSI = Number(
    ((ancillaryCommArea + ancillaryResArea) / permissibleFSIArea).toFixed(2)
  );

  outputdata.ancillaryAreaTotal = ancillaryCommArea + ancillaryResArea;
  outputdata.totalBuiltUpArea = permissibleFSIArea + ancillaryCommArea + ancillaryResArea;
  outputdata.totalFSI = Number((outputdata.totalBuiltUpArea / outputdata.netPlotArea).toFixed(2));

  outputdata.openSpaceReq =
    outputdata.netPlotArea * 0.1 < 200 ? 200 : Number((outputdata.netPlotArea * 0.1).toFixed(2));
  if (outputdata.netPlotArea < 20000) {
    outputdata.amenitySpaceReq = 0;
  } else if (outputdata.netPlotArea >= 20000) {
    if (outputdata.netPlotArea * 0.05 < reservationArea) {
      outputdata.amenitySpaceReq = 0;
    } else {
      outputdata.amenitySpaceReq = outputdata.netPlotArea * 0.05 - reservationArea;
    }
  }

  outputdata.amenitySpaceReq = Number(outputdata.amenitySpaceReq.toFixed(2));

  // mysqlConnection.query("SELECT tdrfactor FROM tdr WHERE tdrroad = '${RoadWidth}' AND tdrlocality = '${Locality}' ", (err, rows, fields)=>{
  //     if(!err)
  // {
  //     //TDRFactor = rows
  //     console.log(rows);
  // }
  // else{
  //     console.log(err);
  // }
  // })

  // mysqlConnection.query(
  //   'SELECT basicFSI FROM mainrelationtable WHERE locality = ? AND roadwidth = ?',
  //   [locality, roadWidth],
  //   (err, result) => {
  //     if (!err) {
  //       TDRFactor = result;
  //       console.log(result);
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // );

  return outputdata;
}

module.exports = { calculationsmain };
