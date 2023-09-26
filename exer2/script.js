function darkMode(){
  document.getElementById('body').style.color = 'black';
  document.getElementById('name').style.color = 'white';
  document.getElementById('body').style.backgroundColor = 'black';
  document.getElementById('text-box').style.backgroundColor = '#5e5e5c';
  document.getElementById('button').style.backgroundColor = '#5e5e5c';
  document.getElementById('text-box').style.border = '3px solid white';
  document.getElementById("button").innerHTML = "Light Mode";
  document.getElementById( "button" ).setAttribute( "onClick", "javascript: lightMode();");
}

function lightMode(){
  document.getElementById('name').style.color = 'black';
  document.getElementById('body').style.backgroundColor = '#adff96';
  document.getElementById('text-box').style.backgroundColor = '#dbffd1';
  document.getElementById('button').style.backgroundColor = 'green';
  document.getElementById('text-box').style.border = '3px solid green';
  document.getElementById("button").innerHTML = "Dark Mode";
  document.getElementById( "button" ).setAttribute( "onClick", "javascript: darkMode();");
}
