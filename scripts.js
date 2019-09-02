function changeInviteBg(color){
        document.getElementById("invite").style.background = color; 
        console.log('colour');
    }

function changeInviteFont(font){
        document.getElementsByClassName("font-change").style.fontFamily = font; 
        console.log('font');
    }
    
function changeInviteFontSize(fontSize){
        document.getElementsByClassName("font-change").style.fontSize = fontSize; 
        console.log('fontSize');
    }
    


/*function style1(){
  
  changeInviteBg('#e0f1f9');
  changeInviteFont('Comic Sans MS');
  changeInviteFontSize('15px')
}

function style2(){
  
  changeInviteBg('#f0e3f9');
  
}

/*
function style1() {
  var x = document.getElementById("live-invite");
  if (x.className === "style-1") {
    x.className = "style-2";
  } else {
    x.className = "style-1";
  }
}


