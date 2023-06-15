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
  

function modalShow(posted){
  $(function(){
    let index = 0;
    let posts;
    let $imageModal = $(".js-image-modal");
  
    $(".post").on("click", function(){
 
      let $url = $(this).children().attr("src");
      console.log($imageModal.children(".js-modal-pic") )
      let $index = $(this).data("index");
      $imageModal.addClass("show");
      $imageModal.children(".js-modal-pic").attr("src", $url);     
      index = $(this).data("index")
      posts = posted;  
     
      $("body").addClass("noscroll");

      //モバイルスワイプ処理
      const minimumDistance = 30
      let startX = 0
      let startY = 0
      let endX = 0
      let endY = 0
      let isTouch = false;
      $(".js-modal-pic").on("touchstart", function(e){
        
        startX = e.touches[0].pageX
        startY = e.touches[0].pageY
        isTouch = true;
      })
      $(".js-modal-pic").on("touchmove", function(e){
        
        endX = e.changedTouches[0].pageX
        endY = e.changedTouches[0].pageY
      })
      $(".js-modal-pic").on('touchend', function(e){
       
        if(isTouch){
          const distanceX = Math.abs(endX - startX)
          // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
          if (endX > startX && distanceX > minimumDistance) {
            // スワイプ後の動作
            //console.log('右');
            if(index === 0){
              index = posts.length-1;
            }else{
              index = index - 1;
            }
            isTouch = false;
          }else if(endX < startX && distanceX > minimumDistance){
            //console.log('左');
            if(index === posts.length-1){
              index = 0;
            }else{
              index = index + 1;
            }
            isTouch = false;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }

 
      })
      //モバイルスワイプ処理終了

      //スライダークローズ処理
      $(".js-close-image-modal-btn, .js-image-modal").on("click", function(e){ 
        if($(e.target).hasClass("js-left-arrow")){
          if(index === 0){
            index = posts.length-1;
          }else{
            index = index - 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }else if($(e.target).hasClass("js-right-arrow")){
          if(index === posts.length-1){
            index = 0;
          }else{
            index = index + 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }else if(!$(e.target).hasClass("js-modal-pic")){
         
          $(".js-close-image-modal-btn").parent().removeClass("show");
          $imageModal.children(".js-modal-pic").attr("src", "");
          $("body").removeClass("noscroll")
          
        }
      })
      //スライダークローズ処理
    })
  })
}


export {mainFadeIn,graphShow,modalShow};