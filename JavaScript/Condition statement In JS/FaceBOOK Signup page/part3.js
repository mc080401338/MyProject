var f_event = document.getElementById("firstname");
f_event.onblur = function f_name()
{
  var f_name = document.getElementById("firstname").value;/*here is vaule of box is selected*/
  var f_name_input = document.getElementById("firstname");/*here is box selected*/
  var f_icon  = document.getElementById("f_warning");
  if(f_name == "")
  {
    f_name_input.style.border = "1px solid red";
    f_icon.style.display = "block";
  }

} 