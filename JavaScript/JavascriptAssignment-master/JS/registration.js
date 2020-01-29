
function nameValidation()
{
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
    var letters = /^[A-Za-z]+$/;
    
    if(fname.match(letters) && lname.match(letters))
    {
        addUser();
    }
    else
    {
    alert('Please input alphabet characters only');
    return false;
      
    }
}

function addUser()
{   
    var userArray=new Array();
    //let userArray;
    let todo=[];
    var currentUserId=document.getElementById("username").value;
    var getImg=sessionStorage.getItem("profileSessionKey");

    var userObj={
    'firstName':document.getElementById("firstNametxt").value,
    'lastName':document.getElementById("lastNametxt").value,
    'emailAddr':document.getElementById("username").value,
    'pass':document.getElementById("pwd").value,
    'gen':document.querySelector('input[name="gender"]:checked').value,
    'addres':document.getElementById("address").value,
    'todoItem':todo,
    'picture':getImg
};
    
 //    userArray=JSON.parse(localStorage.getItem('user'));
    

    if(localStorage.getItem('user'))
    {
            userArray=JSON.parse(localStorage.getItem('user'));
            var exist=false;
        
        
            for(var counter=0;counter<userArray.length;counter++)
            {
                    if((userArray[counter].emailAddr)==currentUserId)
                    {
                        exist=true;

                    }

            }
     

            if(exist==true)
            {
                    window.confirm(" emailId  already exist");
                    return false;

            }
           
           else
            {
                
                userArray.push(userObj);
                var stringifyUser=JSON.stringify(userArray);
                localStorage.setItem('user',stringifyUser);
                window.location = './login.html';
            
    
            }
    
    
    }
    
    else
    {
        userArray.push(userObj);
        var stringifyUser=JSON.stringify(userArray);
        localStorage.setItem('user',stringifyUser);
        window.location = './login.html';

    }






}


function convertProfileImage()
{
    let image = document.getElementById("profileImg").files[0];

    getimgbase64(image);

    function getimgbase64(image)
    {
        let readImg = new FileReader();
        readImg.readAsDataURL(image);

        read_img.onload = function () {
            let profileUrl = readImg.result;
            sessionStorage.setItem("profileSessionKey",profileUrl);
            document.getElementById("imgId").src = sessionStorage.profileSessionKey;
        };

        readImg.onerror = function (error) {
        };
    }
}





