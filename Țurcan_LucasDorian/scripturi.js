var numePoza = "Imagine";
function cerculete(circle)
{
	var numePoza = ""
	var poze = document.getElementsByClassName("poze");
	var cerc = document.getElementsByClassName("cerc");
	var i;
	if(circle==1)
	{
		for(i=0; i<poze.length; i++) {
			poze[i].src = "Imagine"+(circle+i)+".jpg";
		}
			cerc[0].innerHTML = '●';
			cerc[1].innerHTML = '○';
	}
	if(circle==2)
	{
		for(i=0;i<poze.length;i++) {
			poze[i].src = "Imagine"+(2*circle+i)+".jpg"
		}
		cerc[0].innerHTML = '○';
		cerc[1].innerHTML = '●';
	}
}
function sageti(directie)
{
	var poze =  document.getElementsByClassName("poze");
	var cerc = document.getElementsByClassName("cerc");
	var k = poze[0].src.slice(0,-4);
	k = k[k.length-1];
	var i;
	if(directie=="stanga")
	{
		if(k==4)
		{
			for(i=0; i<poze.length; i++) {
				poze[i].src = "Imagine"+(1+i)+".jpg";
			}
				cerc[0].innerHTML = '●';
				cerc[1].innerHTML = '○';
		}
		if(k==1)
		{
			for(i=0;i<poze.length;i++) {
				poze[i].src = "Imagine"+(4+i)+".jpg"
			}
			cerc[0].innerHTML = '○';
			cerc[1].innerHTML = '●';
		}
	}
	if(directie=="dreapta")
	{
		if(k==1)
		{
			for(i=0; i<poze.length; i++) {
				poze[i].src = "Imagine"+(4+i)+".jpg";
			}
				cerc[0].innerHTML = '○';
				cerc[1].innerHTML = '●';
		}
		if(k==4)
		{
			for(i=0;i<poze.length;i++) {
				poze[i].src = "Imagine"+(1+i)+".jpg"
			}
			cerc[0].innerHTML = '●';
			cerc[1].innerHTML = '○';
		}
	}
}
var Slid=1;
function SlideSHOW()
{
	var poze =  document.getElementsByClassName("poze");
	var cerc = document.getElementsByClassName("cerc");
	for(i=0;i<poze.length;i++) {
			poze[i].src = "Imagine"+(Slid+i)+".jpg"
	}
	if(Slid==1)
	{
		cerc[0].innerHTML = '●';
		cerc[1].innerHTML = '○';
	} else {
		cerc[1].innerHTML = '●';
		cerc[0].innerHTML = '○';
	}
	setTimeout(SlideSHOW, 3000); //se schimba imaginea la fiecare 3 secunde
	Slid+=3;
	if(Slid > poze.length*2) {Slid = 1;}
}
	