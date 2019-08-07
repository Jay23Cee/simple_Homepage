var accordions = document.getElementsByClassName("accordion");  // getting the buttons.
var content  // the next element sibling is storedhere
var last    // Last accordions wll be stored here



for ( var i=0; i < accordions.length; i++){
         // when button click. -> function.
        accordions[i].onclick = function(){  
        
         if(last != this){
               // if this is a new click button Hide ALL.
                hideAll(accordions);
          }
            
        // When the button is click
        this.classList.toggle("is-open")
        
        
        // Getting the next Element <Div class='Accordtion-Content'>
        content = this.nextElementSibling;  
        content.classList.toggle("is-open")
        
        //Checking is content is open
        if(content.style.maxHeight)
        {
            // content is open , needs to be close
            content.style.maxHeight= null;
            
            
        }
        else
        {
            // content needs to be open
            content.style.maxHeight = content.scrollHeight + "px"  // opening
            
        }
        
         //copying this info to LAST. just to validate  if a new button is beingclick
        last=this;
        
        
    } 
    
    
}



// This Function is used to close the open cotent.
function hideAll(acc) {
    
    
     // Looping thru all the buttons .
    for (i = 0; i < acc.length; i++) 
    {
                
                 // closing previous content
        acc[i].nextElementSibling.style.maxHeight = null  
            
                // turning toggle off
        acc[i].classList.toggle("is-open", false);
        
        
                // turning off sibling toggle off
        acc[i].nextElementSibling.classList.toggle("is-open", false);
    }
    
}
