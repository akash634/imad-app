//counter code
var button=document.getElementById('counter');





button.onclick =function(){
    
    //create a request object
    
    var request= new XMLHttpRrequest();
    
    //capture aresponse and store in a variable
    
    request.onreadystatechange= function(){
        
        if(reuest.readyState === XMLHttprRequest.DONE){
            // take some action
            
            if(request.status === 200){
               var counter = request.responseText; 
               var span=document.getElementById('count');
               span.innerHTML = counter.toString();
            }
            
        }
        //not done yet
        
    };
    //make the request
    request.open('GET','http://amittal634.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
};