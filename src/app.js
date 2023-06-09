import $ from "jquery";
 
function mainFadeIn(){
    $(function(){
        $("#root").on('DOMSubtreeModified propertychange', ()=>{
            let $main = $(".main");
          if($main.css("opacity") == 0){
            $main.css("opacity", 1);
            
          };    
             
        })
      })
}


function graphShow(){
    $(function(){
      $('.js-tab-front').on('click', ()=>{
        //console.log($(this))
        $(this).css("background", "white")
        $('.js-content').removeClass("show")
        $('.js-content-front').addClass("show");
      })
      $('.js-tab-back').on('click', ()=>{
        $('.js-content').removeClass("show")
        $('.js-content-back').addClass("show");
      })
      $('.js-tab-other').on('click', ()=>{
        $('.js-content').removeClass("show")
        $('.js-content-other').addClass("show");
      })
    })
  }
  

export {mainFadeIn,graphShow};