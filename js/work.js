 
$(document).ready(function () {
     var width = $(window).width();

     if (width < 767.98) {
         
$(".top-h p").html('Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/> accusantium doloremque laudantium, totam rem aperi<br/>am, eaque ipsa quae ab illo inventore veritatis et quasi<br/> architecto beatae vitae dicta sunt explicabo.');
         
         
     }
    
    $(".drop-parent1 .drop").on('click',function(){
        
        $(this).toggleClass("active-onclick");
        $(".drop-parent1 .drop h4").toggleClass("active-onclick-h4 ");
        
        $(".drop-parent1 p").slideToggle();    
    });
    
     $(".drop-parent2 .drop").on('click',function(){
        
        $(this).toggleClass("active-onclick");
        $(".drop-parent2 .drop h4").toggleClass("active-onclick-h4 ");
        
        $(".drop-parent2 p").slideToggle();    
    });
    
     $(".drop-parent3 .drop").on('click',function(){
        
        $(this).toggleClass("active-onclick");
        $(".drop-parent3 .drop h4").toggleClass("active-onclick-h4 ");
        
        $(".drop-parent3 p").slideToggle();    
    });
    
     $(".drop-parent4 .drop").on('click',function(){
        
        $(this).toggleClass("active-onclick");
        $(".drop-parent4 .drop h4").toggleClass("active-onclick-h4 ");
        
        $(".drop-parent4 p").slideToggle();    
    });
    
    if (576.1 > width < 768) {
        
        $(".creative2 .p-here").html('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut<br/> perspiciatis unde omnis iste natus error sit voluptatem.');
        $(".drop-grandfather .for-p p").html('Sed ut perspiciatis unde omnis iste natus error s.it voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.')
        
        
        
    }
    
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        
        
        if (sc > 30) {
            
            
            $(".big-box .baby-box").addClass("fadeInUp");
            
            
        }
        if (sc > 357) {
            
            $(".big-mid-site .top-h").addClass("fadeInUp")
        }
        
         if (sc > 516) {
            
            $(".big-mid-site .cv1 .one ,.big-mid-site .cv3 .three ,.big-mid-site .cv-pic").addClass("fadeInUp")
        }
        if (sc > 916) {
            
            $(".big-mid-site .cv1 .two ,.big-mid-site .cv3 .four ").addClass("fadeInUp")
        }
         if (sc > 1243) {
            
            $(".big-access .small-access ").addClass("fadeInUp")
        }
        
        if (sc > 1698) {
            
            $(".big-our-creative ").addClass("fadeInUp")
        }
        if (sc > 2535) {
            
            $(".gallery-grandfather .h-p ").addClass("fadeInUp")
        }
        
        if (sc > 2720) {
            
            $(".gallery-grandfather .baby1").addClass("fadeInUp")
        }
        if (sc > 3392) {
            
            $(".team-grandfather .h-p").addClass("fadeInUp")
        }
        
        if (sc > 3653) {
            
            $(".team-grandfather .child1,.team-grandfather .child2,.team-grandfather .child3,.team-grandfather .child4").addClass("fadeInUp")
        }
        
        /*
        console.log(sc);
        */
        
    })
   
    



 });
