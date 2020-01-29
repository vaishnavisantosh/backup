function basket()
{
    var fruit="mango";
    console.log(fruit);


    function basket1()
    {
        var fruit="apple";
        console.log(fruit);
    }


    basket1();

}

basket();




// after ending of add() function 
function add(a, b){ 
    setTimeout(function()
    {
        console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>")
    },3000); 
    
    } 
      
    // disp() function is called just 
    // after the ending of add() function  
    function disp(){ 
    console.log('This must be printed after addition'); 
    } 
      
    // Calling add() function 
    add(5,6); disp();