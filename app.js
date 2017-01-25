var map = new GeolocMapa({mapPanel:'gmap', editable:true, marker:true});
map.init();

function getMark(){
  var mark = map.getMark();
  console.log(mark.position.toString());
  $("#txtCoords").val(mark.position.toString());
  $("#fldLat").val(mark.position.lat());
  $("#fldLng").val(mark.position.lng());
}
