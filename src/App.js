import $ from 'jquery';



function App() {
    $(function(){
      let $header = $('.js-header');
        $('.js-toggle-sp').on('click', ()=>{       
          if($header.hasClass('show')){
            $header.removeClass('show');
            console.log($header.hasClass('show'))
          }else{
            $header.addClass('show');
            console.log($header.hasClass('show'))
          }
  
        })

    
        $('.js-tab-front').on('click', ()=>{
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

export default App;
