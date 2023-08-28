import $ from "jquery";


 



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
  

function ModalShow(posted,srcType){
  let images;

  $(function(){
    let $imageModal = $(".js-image-modal");
    let $showModal = $(".js-show-modal");
  
    $showModal.on("click", function(){
      let $url = $(this).children().attr("src");
      let index = $(this).data("index");
      $imageModal.addClass("show");
      $imageModal.children(".js-modal-pic").attr("src", $url);     
      images = posted;  
      if(images.length === 1){
        $(".js-left-arrow").addClass("hide");
        $(".js-right-arrow").addClass("hide");
      }
      $(".js-slide-number").text(`${index+1}/${images.length}`)
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
              index = images.length-1;
            }else{
              index = index - 1;
            }
            isTouch = false;
          }else if(endX < startX && distanceX > minimumDistance){
            //console.log('左');
            if(index === images.length-1){
              index = 0;
            }else{
              index = index + 1;
            }
            isTouch = false;
          }
          $imageModal.children(".js-modal-pic").attr("src", srcType==="wordpress"?$(images[index]).children().attr("src"):images[index].media_url); 
          $(".js-slide-number").text(`${index+1}/${images.length}`)
        }
      })
      //モバイルスワイプ処理終了

      //スライダー処理
      $(".js-close-image-modal-btn, .js-image-modal").on("click", function(e){ 
        if($(e.target).hasClass("js-left-arrow")){
          if(index === 0){
            index = images.length-1;
          }else{
            index = index - 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", srcType==="wordpress"?$(images[index]).children().attr("src"):images[index].media_url);
          $(".js-slide-number").text(`${index+1}/${images.length}`) 
        }else if($(e.target).hasClass("js-right-arrow")){
          if(index === images.length-1){
            index = 0;
          }else{
            index = index + 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", srcType==="wordpress"?$(images[index]).children().attr("src"):images[index].media_url); 
          $(".js-slide-number").text(`${index+1}/${images.length}`)
        }else if(!$(e.target).hasClass("js-modal-pic")){
         
          $(".js-close-image-modal-btn").parent().removeClass("show");
          $imageModal.children(".js-modal-pic").attr("src", "");
          $("body").removeClass("noscroll")
          
        }
      })
      //スライダークローズ処理
    })
    
  });

  return(
    <>
      <div className="image_modal js-image-modal">
          <span className='js-left-arrow left-arrow'></span>
          <button className="js-close-image-modal-btn">✕</button>
          <img className="js-modal-pic modal-pic" src="" alt="" />
          <span className='js-right-arrow right-arrow'></span> 
          <span className='js-slide-number slide-number'></span> 
      </div>
    </>
  )
}

function fixedSearch(){
  $(function(){
    let $searchBox = $(".js-search_area_input");
    let $searchArea = $(".js-search_area");
    let $resetBtn = $(".js-search_area_reset");
    let $searchIcon = $(".js-search_area_icon");
    $searchBox.on("focus", function(){    
       $searchIcon.addClass("fixed");      
    })

    $searchBox.on("blur", function(){
      if(!$(this).val()){
        $searchIcon.removeClass("fixed");
      }
    })

    $(window).on("scroll", ()=>{
      //let scrollHeight = $(window).height();
      let currentHeight = $(window).scrollTop();
      //let searchBoxHeight = $searchBox.scrollTop();
      //$searchBox.removeClass("show")
      //console.log($searchArea.offset() )

      if($searchArea.offset().top <currentHeight){
        if(!$searchArea.hasClass("fixed")){
          //console.log($searchBox.hasClass("fixed"))
           $searchArea.addClass("fixed"); 
           $resetBtn.addClass("fixed");
           $searchIcon.removeClass("fixed");
           //$searchBox.prop('disabled', true);
        }
       
      }
      if(currentHeight < 60){
        $searchArea.removeClass("fixed");
         $searchArea.removeClass("show");
         $resetBtn.removeClass("fixed");
          $searchBox.prop('disabled', false);
          
      }

    })


     $searchArea.on("click", function(){
     // console.log(11)
          if($searchArea.hasClass("fixed")){
            $searchArea.addClass("show");
            $searchBox.prop('disabled', false);
            $searchIcon.addClass("fixed");
          }
        })
    })  

  

}

export {graphShow,ModalShow,fixedSearch};