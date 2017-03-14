$(function(){
    $(".dropdown").hover(function(){
        $(this).find(".dropdown-menu").css("display","block");
        $(this).find(".top-down").css("transform","rotate(-180deg)")
        
    },function(){
       $(this).find(".dropdown-menu").css("display","none");
        $(this).find(".top-down").css("transform","none")
    })
    
    
    $(".input-input-par").focusin(function(){
        $(this).find(".focus-menu").css("display","block")
    }).focusout(function(){
        $(this).find(".focus-menu").css("display","none")
    });
    
    
    $(".main1-l-2-head").find("a").mouseover(function(index){
        $(this).css({"color":"red","border-bottom-color":"red"}).siblings().css({"color":"inherit","border-bottom-color":"inherit"})
       var index=$(this).index()+1;
        var str=".main1-l-2-body-"+index;
        $(str).css({"display":"block",}).siblings().css({"display":"none",}).mouseover(0);
    });
    
    $(".main1-l-3>a").hover(function(){
        
        $(this).find(".main1-l-3-hidimg").show();
    },function(){
        $(this).find(".main1-l-3-hidimg").hide();
    });
    
   
    
    
})