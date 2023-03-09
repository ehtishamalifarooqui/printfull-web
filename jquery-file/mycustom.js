
        $(document).ready(function(){
           $('#display-new-btn').click(function(){
              
               $('#display-new').slideToggle();
           }); 
        //  1 
           $('#color-toggle-show').click(function(){
              
               $('#color-toggle-show-display').slideToggle();
               
               $('#size-show-display').hide();
                $('#branding-options-display').hide();
                $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
               $('#most-popular-show').hide();
               $('#new-item-display').hide();
               
           });
        //   2
              $('#size-show').click(function(){
              
               $('#size-show-display').slideToggle();
            $('#color-toggle-show-display').hide();
                   $('#branding-options-display').hide();
                $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
               $('#most-popular-show').hide();
               $('#new-item-display').hide();
              });
        //   3
           $('#branding-options').click(function(){
              
               $('#branding-options-display').slideToggle();
               $('#color-toggle-show-display').hide();
                //   $('#branding-options-display').hide();
                $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
               $('#most-popular-show').hide();
                 $('#size-show-display').hide();
                 $('#new-item-display').hide();
           });
        //   4
           $('#technique-show').click(function(){
              
               $('#technique-show-display').slideToggle();
               $('#color-toggle-show-display').hide();
                  $('#branding-options-display').hide();
                // $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
               $('#most-popular-show').hide();
                 $('#size-show-display').hide();
                 $('#new-item-display').hide();
           });
        //   5
           $('#all-filter-show').click(function(){
              
               $('#all-filter-show-display').slideToggle();
               
               $('#color-toggle-show-display').hide();
                  $('#branding-options-display').hide();
                $('#technique-show-display').hide();
            //   $('#all-filter-show-display').hide();
               $('#most-popular-show').hide();
               $('#new-item-display').hide();
                 $('#size-show-display').hide();
           }); 
           $('#most-popular').click(function(){
               $('#most-popular-show').slideToggle();
               $('#color-toggle-show-display').hide();
                  $('#branding-options-display').hide();
                $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
            //   $('#most-popular-show').hide();
                 $('#size-show-display').hide();
                  $('#new-item-display').hide();
           });
           $('#new-item').click(function(){
               $('#new-item-display').slideToggle();
               $('#color-toggle-show-display').hide();
                  $('#branding-options-display').hide();
                $('#technique-show-display').hide();
               $('#all-filter-show-display').hide();
              $('#most-popular-show').hide();
                 $('#size-show-display').hide();
           })
        });
