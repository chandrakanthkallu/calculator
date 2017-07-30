<html>
<head>
<link rel="stylesheet" href="mystyle1.css"/>
<script type="text/javascript">
function addnum()
{
var a=document.getElementById("txtFN").value;
var b=document.getElementById("txtSN").value;
var c=parseInt(a)+parseInt(b);
document.getElementById("txtResult").value=c;
}
function subnum()
{
var a=document.getElementById("txtFN").value;
var b=document.getElementById("txtSN").value;
var c=parseInt(a)-parseInt(b);
document.getElementById("txtResult").value=c;
}
function mulnum()
{
var a=document.getElementById("txtFN").value;
var b=document.getElementById("txtSN").value;
var c=parseInt(a)*parseInt(b);
document.getElementById("txtResult").value=c;
}
function divnum()
{
var a=document.getElementById("txtFN").value;
var b=document.getElementById("txtSN").value;
var c=parseInt(a)/parseInt(b);
document.getElementById("txtResult").value=c;
}
function pownum()
{
var c=1;
var exp=b;
var a=parseInt(document.getElementById("txtFN").value);
var b=parseInt(document.getElementById("txtSN").value);
var exp=b;
b=(b>0)?b:(-b);
for(var i=1;i<=b;i++)
var c=c*a;
c=(exp>0)?c:(1/c);

document.getElementById("txtResult").value=c;

}
function clrnum()
{
document.getElementById("txtFN").value='';
document.getElementById("txtSN").value='';
document.getElementById("txtResult").value='';
}
</script>
<table border="1" cellspacing="0" cellpadding="20">
<tr><td colspan=6 align="center" bgcolor="cyan">CALCULATOR</td></tr>
<tr bgcolor="orange"><td colspan=2> first number</td><td colspan=4><input type="text" id="txtFN"></input></td></tr>
<tr><td colspan=2>second number</td><td colspan=5><input type="text" id="txtSN"></input></td></tr>
<tr><td colspan=2>result</td><td colspan=4><input type="text" id="txtResult"></input></td></tr>


<tr bgcolor="green"><td><input type="button"id="btnAdd" value="Add" onclick="return addnum();"></input></td>
<td><input type="button" id="btnPow" value="pow" onclick="return pownum();"></input></td>
<td><input type="button" id="btnSub" value="Sub"  onclick="return subnum();"></input></td>
<td><input type="button" id="btnMul" value="Mul" onclick="return mulnum();"></input></td>
<td><input type="button" id="btnDiv" value="Div" onclick="return divnum();"></input></td>
<td><input type="button" id="btnChar" value="Clr" onclick="return clrnum();"></input></td>
</tr>
</table>
</head>
</html>