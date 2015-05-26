var d = new Date();
var time = "";

function getTime()

{
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	time = h+":"+m+":"+s;
	document.write(time);
}

getTime();
function checkTime(i)
{

	if(i<10)
	i="0" + i;
	return i;

}