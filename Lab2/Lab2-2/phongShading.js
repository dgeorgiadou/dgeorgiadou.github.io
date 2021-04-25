   
window.onload = function init()
{
	var canvas = document.getElementById("gl-canvas");
	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl)
	{
		alert("WebGL isn't available");
	}
   var ele = document.getElementById("bulge");
   ele.oninput = ele.onchange = function (event) {
	  var bulge = (event.srcElement || event.target).value;
	  document.getElementById("bulgeVal").innerHTML = bulge;
	  gl.uniform1f(getUniformLocation, bulge);
		alert("test");
   };
  //ele.value = 50;
   document.getElementById("bulgeVal").innerHTML = document.getElementById("bulge").value;
}