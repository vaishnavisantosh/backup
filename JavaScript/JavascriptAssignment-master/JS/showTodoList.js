

function gotoProfile()
{

    window.location = './profile.html';


}


function logout()
{
    sessionStorage.clear();
    window.location='./login.html';
}

function gotoHome()
{
    
}


function display()
{
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let todoParticularUserArray=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            
            
        }   
    }

    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }




}



function getTOdoOfParticularUser()
{


    let sessionId= sessionStorage.getItem("sessionkey");

    

    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    let todoParticularUserArray=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            
            break;
            
            
        }   



    }

    return todoParticularUserArray;



}


function getUserId()
{

    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    
    let index;
    let userId;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            userId=index;
            
            break;
            
            
        }   



    }

    return userId;

}






function showItem()
{
    var userTable = document.getElementById("tableId");
    let todoParticularUserArray=getTOdoOfParticularUser();


    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }

    

    else
    {
        for (var counter = 0; counter<todoParticularUserArray.length;counter++) 
        {
            var list=document.createElement("tr");
            var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ todoParticularUserArray[counter].todoTitle + "</td><td>" + todoParticularUserArray[counter].todoCategory + "</td><td>"+ todoParticularUserArray[counter].todoDue+"</td><td>" + todoParticularUserArray[counter].remainder+"</td><td>" + todoParticularUserArray[counter].public+"</td><td>" + todoParticularUserArray[counter].desc+"</td><td>"+todoParticularUserArray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
            list.innerHTML=row;
            let tableHead=document.getElementById("headId");
            tableHead.appendChild(list);
        
        }
    }     
}




function deleteTodo()
{
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    //let todoParticularUserArray=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            
            var particulatIndex=index;
            
        }   
    }

    var checkedarray=[];
    


    for(var count=0;count<userArrayItem[particulatIndex].todoItem.length;count++)
    {
        if( document.getElementById("ch-"+count).checked == true)
        {
          
     
            checkedarray.push(count);
            //alert(checkedarray);
			
        }
    }
    for(var counter=(checkedarray.length)-1;counter>=0;counter--)
    {
        userArrayItem[particulatIndex].todoItem.splice(checkedarray[counter],1);


     



    }

    
    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);
    //window.location.reload();





   

    
        
}





function filterTodo()
{

    document.getElementById("listForCategory").style.display="inline";
    document.getElementById("listForDate").style.display="inline";
    document.getElementById("searchBytitle").style.display="inline";

}


function filterByCat()
{

    let sessionId= sessionStorage.getItem("sessionkey");

    

    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    let todoParticularUserArray=[];
    let index;
    let particularIndex;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            particularIndex=index;
            break;
        }   
    }
    //let inputValue=userArrayItem[particularIndex].todoItem;

    if(document.getElementById("listForCategory").value==="bycategory")
    {
        
    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }



    

    else
    {
        for (var counter = 0; counter<todoParticularUserArray.length;counter++) 
        {
            var list=document.createElement("tr");
            var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ todoParticularUserArray[counter].todoTitle + "</td><td>" + todoParticularUserArray[counter].todoCategory + "</td><td>"+ todoParticularUserArray[counter].todoDue+"</td><td>" + todoParticularUserArray[counter].remainder+"</td><td>" + todoParticularUserArray[counter].public+"</td><td>" + todoParticularUserArray[counter].desc+"</td><td input type=button value=Edit id=button-"+counter+" ></td></tr>";
            list.innerHTML=row;
            let tableHead=document.getElementById("headId");
            tableHead.appendChild(list);
        
        }
    }     
        
            //alert(filteredarray);

    }

        if(document.getElementById("listForCategory").value==="Social")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Social")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+filteredarray[counter].todoTitle + "</td><td>" +filteredarray[counter].todoCategory + "</td><td>"+ filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td input type=button id=button-"+counter+" ></td></tr>";
                 list.innerHTML=row;
                let tblBody=document.getElementById("headId");
                tblBody.appendChild(list);
        
            }

                //alert(filteredarray);

        }



        if(document.getElementById("listForCategory").value==="Office")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Office")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+filteredarray[counter].todoTitle + "</td><td>" +filteredarray[counter].todoCategory + "</td><td>"+ filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td input type=button id=button-"+counter+" ></td></tr>";
                 list.innerHTML=row;
                let tableHead=document.getElementById("headId");
                tableHead.appendChild(list);
        
            }

                //alert(filteredarray);

        }


        if(document.getElementById("listForCategory").value==="Personal")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Personal")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+filteredarray[counter].todoTitle + "</td><td>" +filteredarray[counter].todoCategory + "</td><td>"+ filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td input type=button id=button-"+counter+" ></td></tr>";
                 list.innerHTML=row;
                let tableHead=document.getElementById("headId");
                tableHead.appendChild(list);
        
            }

                //alert(filteredarray);

        }

}


function filterByName()
{
    let getTitle=document.getElementById("searchBytitle");
    var particularTodo=getTOdoOfParticularUser();
    var titleArray = [];
    let a=document.getElementById("headId");
    let deleteChild=a.lastElementChild;


    
    for(var counter=0;counter<particularTodo.length;counter++)
    {
        if(particularTodo[counter].todoTitle==getTitle)
        {
            titleArray.push(particularTodo[counter]);

        }

    }

    while(deleteChild)
    {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
    }      
                
    for (var counter = 0; counter<filteredarray.length;counter++) 
    {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+titleArray[counter].todoTitle + "</td><td>" +titleArray[counter].todoCategory + "</td><td>"+ titleArray[counter].todoDue+"</td><td>" + titleArray[counter].remainder+"</td><td>" +titleArray[counter].public+"</td><td>" + titleArray[counter].desc+"</td><td input type=button id=button-"+counter+" ></td></tr>";
        list.innerHTML=row;
        let tableHead=document.getElementById("headId");
        tableHead.appendChild(list);
        
    }


    
}


    


function filterByDate()
{



}



function editTodo()
{
    
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    var userId=getUserId();
    var clikedarray;
    var particularTodoCounter;


    for(var count=0;count<userArrayItem[userId].todoItem.length;count++)
    {
        if( document.getElementById("button-"+count).click == true)
        {
          
     
            clickedarray=count;
            //alert(clickedarray);
			
        }
    }

    particularTodoCounter=count-1;

    sessionStorage.setItem('particularTodoCount',particularTodoCounter);

    window.location = './editTodo.html';



    // window.location = './todo.html';




}
