//get all nodes with the class topnav

const btns_topnav = document.querySelectorAll('.topnav');

//loop through the length / list of topnav button elements

for (var j = 0; j < btns_topnav.length; j++) {
  
  btns_topnav[j].addEventListener("click", function() {

    //get elements with class name topactive (currently active button) 
    
    var btn_top_selected = document.getElementsByClassName('topactive');

    //add the topactive class to the current selected button
    
    btn_top_selected[0].className = btn_top_selected[0].className.replace(" topactive", "");
    
    this.classList += " topactive";

    console.log({

      'topactive' : btns_topnav[2].classList.contains('topactive'),
  });
    
  });
  
  }


  //get all elements with the class sn_life

const btns_subnav = document.querySelectorAll('.subnav');

console.log(btns_subnav);

//loop through the length / list of sn_life button elements

for (var s = 0; s < btns_subnav.length; s++) {
  
  btns_subnav[s].addEventListener("click", function() {

    //get elements with class name subactive (currently active button) 
    
    var btn_sub_selected = document.getElementsByClassName('subactive');

    //add the subactive class to the current selected button
    
    btn_sub_selected[0].className = btn_sub_selected[0].className.replace(" subactive", "");
    
    this.classList += " subactive";

  });
  
  }


  function clear_subactive(){

    for (var cs = 0; cs < btns_subnav.length; cs++) {

      btns_subnav[cs].classList.remove("subactive");



    }

  }


    /* make a function that on top nav button selection - if classname != subactive then add the class name and remove from elsewhere - 
    add this to toggle buttons*/



  // alternate subnav visibility depending on which top nav button is selected
  
  var sec_subnav = document.querySelectorAll('.sub');

  function subNone() {
      
    for (var i = 0; i < sec_subnav.length; i++) {
      
      sec_subnav[i].style.display = 'none';
    }
      
  }

  function introToggle() {
      
    subNone();
    
    sec_subnav[0].style.display = 'block';
    
        
    }


  function lifeToggle() {
      
    subNone();
    
    sec_subnav[1].style.display = 'block';

    clear_subactive();

    btns_subnav[0].classList += " subactive";

        
    }

    
    function envToggle() {
      
      subNone();
      
      sec_subnav[2].style.display = 'block';

      clear_subactive();

      btns_subnav[2].classList += " subactive";
                        
    }
    
    
    function careToggle() {
      
      subNone();
      
      sec_subnav[3].style.display = 'block';

      clear_subactive();

      btns_subnav[7].classList += " subactive";
      
    }

    function patientToggle() {
      
      subNone();

      sec_subnav[4].style.display = 'block';
            
    }

