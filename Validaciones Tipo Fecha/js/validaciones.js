$(document).ready(function(){
    $('#errorCampoRequerido').hide();
    $('#errorFormato').hide();
    $('#ErrorFechaMayorActual').hide();
    $('#errorCampoRequerido2').hide();
    $('#errorFormato2').hide();
    $('#ErrorFechaMenorActual').hide();
});
const Validar=()=>{
    $('#errorCampoRequerido').hide();
    $('#errorFormato').hide();
    $('#ErrorFechaMayorActual').hide();
    $('#errorCampoRequerido2').hide();
    $('#errorFormato2').hide();
    $('#ErrorFechaMenorActual').hide();
    let banderaCampoRequerido=false;
    let banderaFormato=false;
    let banderaFecha=false;
    let fecha1=$('#fecha1').val();
    let fecha2=$('#fecha2').val();
    if(fecha1 === null || fecha1===''){
        banderaCampoRequerido=false;
        return $('#CampoRequerido').show();
    }else{
        banderaCampoRequerido=true;
    }
    if(fecha1.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)==false){
        banderaFormato=false;
        return $('#errorFormato').show();
    }else{
        banderaFormato=true;
    }
    if(fecha1>fecha2){
        banderaFecha=false;
        return $('#ErrorFechaMayorActual').show();
    }else{
        bandera=true;
    }
    if(fecha2==null || fecha2==''){
        banderaCampoRequerido=false;
        return $('#errorCampoRequerido2').show();
    }else{
        banderaCampoRequerido=true;
    }
    if(fecha.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)==false){
        banderaFormato=false;
        return $('#errorFormato2').show();
    }else{
        banderaFormato=true;
    }
    if(fecha2<fecha1){
        banderaFecha=false;
        return $('#ErrorFechaMenorActual').show();
    }else{
        banderaFecha=true;
    }
    if(banderaCampoRequerido==true && banderaFormato==true && banderaFecha==true){
        return alert(`la Primer Fecha es ${fecha1} y la fecha dos es ${fecha2}`);
    }else{
        return alert('Error en las Fechas');
    }
}