btnNext=document.querySelector("input[value='next']");
btnprev=document.querySelector("input[value='previous']");
counter=1;
btnNext.onclick=function(){
    //imgObj=this;
   next= setInterval(function(){
        counter++;
        if(counter==4) 
        counter=1;
        document.images[0].src="img/"+counter+".jpg";
        clearInterval(next);
    },1000);
}
counter=3;
btnprev.onclick=function(){
   prev= setInterval(function(){
        counter--;
        if(counter==0) 
        counter=3;
        document.images[0].src="img/"+counter+".jpg";
        clearInterval(prev);
        
    },1000);
}

