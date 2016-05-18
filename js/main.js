
$(document).ready(function(){
  $('#sede').change(function(){
  var value=$('#sede').val();
  if(value==1) $('#foto').html("<img class= 'photos' src='fotos/peru/"+random(codersPeru).image+"'/>")
  else if (value==2) $('#foto').html("<img class= 'photos' src='fotos/mexico/"+random(codersMexico).image+"'/>")
});
  $('#comprobar').click(function(){
    if(($('#inputName').val()==random(codersPeru).nam)||($('#inputName').val()==random(codersMexico).nam)){ $('#mensaje').text("acertaste");}
    else {$('#mensaje').text("intenta");}
  });
 });

function random(arrays){
  var longitud=arrays.length;
  var num=Math.round(Math.random() * (longitud)) + 1;
  var imagen=arrays[num];
  return imagen;
}
