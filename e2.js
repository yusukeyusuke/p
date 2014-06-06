function Sleep( T ){ 
   var d1 = new Date().getTime(); 
   var d2 = new Date().getTime(); 
   while( d2 < d1+1000*T ){
       d2=new Date().getTime(); 
   } 
   return; 
} 
console.log("Timer start");
Sleep( 0.325 );
console.log("Timer end");
