

/*
!function(){var t=document.getElementsByTagName("toast")[0];t.style.zIndex="6",t.style.color="white",t.style.position="absolute",t.style.bottom="40px",t.style.textAlign="center",t.style.backgroundColor="#404040",t.style.margin="auto",t.style.marginLeft="20px",t.style.marginRight="20px",t.style.maxWidth="700px",t.style.borderRadius="20px",t.style.boxSizing="border-box",t.style.paddingLeft="13px",t.style.paddingRight="13px",t.style.paddingTop="10px",t.style.paddingBottom="10px",t.style.justifyContent="center",t.style.display="none"}(),$t=null,toast=(()=>({show:(t,e,l,n)=>{if(null!==t&&""!==t){var s=document.getElementsByTagName("toast")[0];s.innerHTML=t,s.style.display="inline-block",s.style.fontFamily=n,s.style.marginLeft=(window.innerWidth-s.offsetWidth)/2+"px",null!==$t&&""!==$t&&clearTimeout($t),$t=setTimeout(function(){$("toast").fadeOut(l)},e)}}}));
*/

!function(){var t=document.getElementsByTagName("toast")[0];t.style.zIndex="6",t.style.color="white",t.style.position="absolute",t.style.bottom="40px",t.style.textAlign="center",t.style.backgroundColor="#404040",t.style.margin="auto",t.style.marginLeft="20px",t.style.marginRight="20px",window.innerWidth>600?t.style.maxWidth="700px":t.style.maxWidth=window.innerWidth-40+"px",t.style.wordWrap="break-word",t.style.borderRadius="20px",t.style.boxSizing="border-box",t.style.paddingLeft="13px",t.style.paddingRight="13px",t.style.paddingTop="10px",t.style.paddingBottom="10px",t.style.justifyContent="center",t.style.display="none"}(),$t=null,toast=(()=>({show:(t,e,n,i)=>{if(null!==t&&""!==t){var l=document.getElementsByTagName("toast")[0];l.innerHTML=t,l.style.display="inline-block",l.style.fontFamily=i,l.style.marginLeft=(window.innerWidth-l.offsetWidth)/2+"px",null!==$t&&""!==$t&&clearTimeout($t),$t=setTimeout(function(){$("toast").fadeOut(n)},e)}}}));
/*(function(){
  var bn=document.getElementsByTagName("toast")[0];
  bn.style.zIndex="6";
  bn.style.color="white";
  bn.style.position="absolute";
  bn.style.bottom="40px";
  bn.style.textAlign="center";
  bn.style.backgroundColor="#404040";
  bn.style.margin="auto";
  bn.style.marginLeft="20px";
  bn.style.marginRight="20px";
  if(window.innerWidth>600){
      bn.style.maxWidth="700px";
  }else{
      bn.style.maxWidth=(window.innerWidth-40)+"px";
  }
  bn.style.wordWrap="break-word";
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
       if(a!==null && a!==""){
     var x = document.getElementsByTagName("toast")[0];
     x.innerHTML=a;
     x.style.display="inline-block";
     x.style.fontFamily=d;
     x.style.marginLeft=((window.innerWidth-x.offsetWidth)/2)+"px";
     if($t!==null && $t!==""){
       clearTimeout($t);
     }
     $t=setTimeout(function(){
       $("toast").fadeOut(c);
       //x.style.display="none";//a=null;
     }, b);
       }
   },
 });
 */
