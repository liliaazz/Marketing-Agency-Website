
  

    
  window.onload = function(){

    var img_review = document.getElementById("img_review");
    let namereviewer = document.getElementById("nameR");
    let paragraph = document.getElementById("paragraph");


    document.getElementById("anishaAvatar").onclick=function(){
        sum("avatar-anisha","Anisha koli","Manage has supercharged our team's workflow. The maintain visibility on larger milestones at all times keeps everyone motivated");
    }

    document.getElementById("richardAvatar").onclick=function(){
        sum("avatar-richard","richard dogberg"," Manage allows us to provide structure and keep us organized and focused. i cant stop thanking them!");
    }

    document.getElementById("shanaiAvatar").onclick=function(){
        sum("avatar-shanai","shanai deen","Their software allow us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in sync without being intrusive");

    }

    function sum(imgName,name, para){

        img_review.src = `images/${imgName}.png`;
        namereviewer.innerHTML = `${name}`;
        paragraph.innerHTML = `${para}`;
    
    
    }

    }

