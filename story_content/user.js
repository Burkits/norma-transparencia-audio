function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FC5sYcBPu5":
        Script1();
        break;
      case "6Q8jTq8oMXc":
        Script2();
        break;
  }
}

function Script1()
{
  var m_names = new Array("Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if(dd<10) { dd='0'+dd } 
var date= dd+' '+m_names[mm]+', '+yyyy;
var player = GetPlayer();
player.SetVar("SystemDate",date);
}

function Script2()
{
  window.print()
}

