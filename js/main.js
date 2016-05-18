$(document).ready(function(){
    var coder,coderm;
  $('#sede').change(function(){
  var value=$('#sede').val();
  if(value==1) {
      coder = random(codersPeru)
      $('#foto').html("<img class= 'photos' src='fotos/peru/"+coder.image+"'/>")}
  else if (value==2) {
      coderm = random(codersMexico)
    $('#foto').html("<img class= 'photos' src='fotos/mexico/"+coderm.image+"'/>")}
});
 var cont=0;
 var puntaje=0;
  $('#comprobar').click(function(){
    if(($('#inputName').val()==coder.nam)||($('#inputName').val()==coderm.nam)){
        $('#mensaje').text("acertaste");
        puntaje=puntaje+5;
        $('#puntaje').html(puntaje);
        clean();
        coder = random(codersPeru);
        coderm = random(codersMexico);
        $('#foto').html("<img class= 'photos' src='fotos/peru/"+coder.image+"'/>");
        cont=0;
    }
    else {
        cont++;
        $('#mensaje').text("intenta nuevamente");
        puntaje--;
        $('#puntaje').html(puntaje);
        clean();
        if(cont===4) {
            coder = random(codersPeru);
            coderm = random(codersMexico);
            $('#foto').html("<img class= 'photos' src='fotos/peru/"+coder.image+"'/>");
            cont=0;
        }
    }
  });
 });
function random(arrays){
  var longitud=arrays.length;
  var num=Math.round(Math.random() * (longitud)) + 1;
  var imagen=arrays[num];
  return imagen;
}
function clean(){
   var tex = document.getElementById("inputName");
   tex.value="";
   tex.focus();
}
