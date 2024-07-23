const display = document.getElementById("display");

function dofuntion(input)
{
  display.value +=input;  
}
function cleardis()
{
  display.value = " ";
}
function calcualte()
{
  try
  {
    display.value = eval(display.value);
  }
  catch(err)
  {
    alert("invalid");
  }
}