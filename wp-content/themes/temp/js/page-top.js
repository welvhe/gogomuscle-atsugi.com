const PageTopButton=document.getElementById('page_top');PageTopButton.addEventListener('click',function foo(){const nowY=window.pageYOffset;window.scrollTo(0,Math.floor(nowY*0.8));if(nowY>0){window.setTimeout(foo,20)}});const obj=document.getElementById("page_top");window.onscroll=function(){var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;if(scrollTop>1000){obj.classList.add("show")}else{obj.classList.remove("show")}}