

!function(){var t=document.getElementsByTagName("toast")[0];t.style.zIndex="6",t.style.color="white",t.style.position="absolute",t.style.bottom="40px",t.style.textAlign="center",t.style.backgroundColor="#404040",t.style.margin="auto",t.style.marginLeft="20px",t.style.marginRight="20px",t.style.maxWidth="700px",t.style.borderRadius="20px",t.style.boxSizing="border-box",t.style.paddingLeft="13px",t.style.paddingRight="13px",t.style.paddingTop="10px",t.style.paddingBottom="10px",t.style.justifyContent="center",t.style.display="none"}(),$t=null,toast=(()=>({show:(t,e,l,n)=>{if(null!==t&&""!==t){var s=document.getElementsByTagName("toast")[0];s.innerHTML=t,s.style.display="inline-block",s.style.fontFamily=n,s.style.marginLeft=(window.innerWidth-s.offsetWidth)/2+"px",null!==$t&&""!==$t&&clearTimeout($t),$t=setTimeout(function(){$("toast").fadeOut(l)},e)}}}));
