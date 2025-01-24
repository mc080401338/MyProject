var input = document.getElementById("box");
var form = document.getElementById("frm");

form.onsubmit = function ()
{
  if(input.value == "a")
  {
    window.alert = "Vowel";
  }
  else if(input.value == "e")
  {
window.alert("Vowel")
  }
  else if (input.value ==  "i")
  {
    window.alert("Vowel");
  }
  else if (input.value ==  "o")
    {
      window.alert("Vowel");
    }
    else if (input.value ==  "u")
      {
        window.alert("Vowel");
      }
         else
  {
    window.alert("Consonent");
  }
}
