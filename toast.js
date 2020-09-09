(function(){
  var bn=document.getElementsByTagName("toast")[0];
  bn.style.zIndex="6";
  bn.style.color="white";
  bn.style.position="absolute";
  bn.style.bottom="40px";
  bn.style.textAlign="center";
  bn.style.backgroundColor="#000";
  bn.style.margin="auto";
  bn.style.marginLeft="20px";
  bn.style.marginRight="20px";
  bn.style.maxWidth="700px";
  bn.style.borderRadius="20px";
  bn.style.boxSizing="border-box";
  bn.style.paddingLeft="13px";
  bn.style.paddingRight="13px";
  bn.style.paddingTop="10px";
  bn.style.paddingBottom="10px";
  bn.style.justifyContent="center";
  bn.style.display="none";
 })();

 $t=null;
 toast = () => ({
   show: (a,b,c,d) => {
     var x = document.getElementsByTagName("toast")[0];
     x.innerHTML=a;
     x.style.display="inline-block";
     x.style.fontFamily=d;
     x.style.marginLeft=((window.innerWidth-x.offsetWidth)/2)+"px";
     if($t!=null){
       clearTimeout($t);
     }
     $t=setTimeout(function(){
       $("toast").fadeOut(c);
       //x.style.display="none";//a=null;
     }, b);
   },
 });
