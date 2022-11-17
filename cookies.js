var policyurl = "cookies.html",
    okcolor = "rgb(0, 32, 96)";

document.write("<div id='cookie-bar' style='position:fixed; bottom:0; left:0; width: 100%;  text-align: center; padding: 12px 0; margin:0;  background: rgba(244, 244, 244, 0.9);  color: #919191;  font: 14px arial, sans-serif;'><div style='display:inline-block;width:78%;margin:0; font-family: Arial;'>Ce site web utilise des cookies - <a id='cookie-policy' href='" + policyurl + "' style='color: #919191;font-weight:bold;'>Consulter notre politique des cookies !</a>.</div><div style='width:20%;'></div></div><span id='agree' style='position:fixed;bottom:5px;right:48%;color: #FFFFFF;background: " + okcolor + ";border-radius: 3px; line-height: 30px; padding: 0 8px;margin: 0;font-weight: 600;'>Ok</span>");


document.getElementById("agree").addEventListener("click", hideCookiebar);

function hideCookiebar() {
    document.getElementById("agree").style.display = 'none';
    document.getElementById("cookie-bar").style.display = 'none';
}