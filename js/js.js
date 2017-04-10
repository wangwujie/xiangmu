var arrEle=document.getElementsByTagName('p');
var show=document.getElementById('show');
for(i=0;i<arrEle.length;i++){
  arrEle[i].onclick=function(){
      show.innerHTML+=this.innerHTML;
}
}
var qw=document.getElementById('dengyu');
qw.onclick=function(){
	var jieguo=document.getElementById('show').innerHTML;
    show.innerHTML=eval(jieguo);
}
var qw1=document.getElementById('qingchu1');
qw1.onclick=function(){
	show.innerHTML='';
	
}