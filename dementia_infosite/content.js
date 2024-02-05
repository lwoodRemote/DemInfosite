    const articles = document.getElementsByTagName('article');
    
    function articNone() {
    
    for (var i = 0; i < articles.length; i++) {
      
      articles[i].style.display = 'none';
      
    }
      
  }


var jsonfile = '';

var hero = '';

function content(jsonfile, hero) {

  var hero_node = document.querySelector('img');

  var request_hero = new Request(hero)
 
 fetch(jsonfile)

 .then (response => response.json())
 
 .then(data => {

 console.log(data.subhead_01);

 console.log(data.text_01);
 
 document.querySelector('#int_00').textContent = data.intro_00;
 

 document.querySelector('#gr_01').textContent = data.grade_01;
 
 document.querySelector('#sh_01').textContent = data.subhead_01;
 
 document.querySelector('#txt_01').textContent = data.text_01;

 
 document.querySelector('#gr_02').textContent = data.grade_02;
 
 document.querySelector('#sh_02').textContent = data.subhead_02;
 
 document.querySelector('#txt_02').textContent = data.text_02;


 document.querySelector('#gr_03').textContent = data.grade_03;

 document.querySelector('#sh_03').textContent = data.subhead_03;

 document.querySelector('#txt_03').textContent = data.text_03;


 document.querySelector('#gr_04').textContent = data.grade_04;

 document.querySelector('#sh_04').textContent = data.subhead_04;

 document.querySelector('#txt_04').textContent = data.text_04;


 document.querySelector('#gr_05').textContent = data.grade_05;

 document.querySelector('#sh_05').textContent = data.subhead_05;

 document.querySelector('#txt_05').textContent = data.text_05;


 document.querySelector('#gr_06').textContent = data.grade_06;

 document.querySelector('#sh_06').textContent = data.subhead_06;

 document.querySelector('#txt_06').textContent = data.text_06;


 document.querySelector('#gr_07').textContent = data.grade_07;

 document.querySelector('#sh_07').textContent = data.subhead_07;

 document.querySelector('#txt_07').textContent = data.text_07;


 document.querySelector('#small_print').textContent = data.smallprint;


 /* intro page */

 document.querySelector('#instruction').textContent = data.instruc_01;


 document.querySelector('#intro_gr_01').textContent = data.grade_01;

 document.querySelector('#intro_txt_01').textContent = data.text_01;


 document.querySelector('#intro_gr_02').textContent = data.grade_02;

 document.querySelector('#intro_txt_02').textContent = data.text_02;


 document.querySelector('#intro_gr_03').textContent = data.grade_03;

 document.querySelector('#intro_txt_03').textContent = data.text_03;


 document.querySelector('#intro_gr_04').textContent = data.grade_04;

 document.querySelector('#intro_txt_04').textContent = data.text_04;


 document.querySelector('#intro_gr_05').textContent = data.grade_05;

 document.querySelector('#intro_txt_05').textContent = data.text_05;


})

fetch(request_hero)

.then (response => response.blob())

.then(imgblob => {

  var imgURL = URL.createObjectURL(imgblob);

  hero_node.src = imgURL;

})

}


/* * * INTRO * * */


function introduction() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[8].style.display = 'inline';

  content('../dementia_infosite/json_files/intro.json','../dementia_infosite/images/introduction.jpeg');

}

window.onload = function() {
  
  introduction();

}


/* * * LIFESTYLE * * */

function life_nutrition() {

  articNone();

  articles[0].style.display ='inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  content('../dementia_infosite/json_files/life_nutrition.json','../dementia_infosite/images/life_nutrition.jpg');

}

function life_activity() {

  articNone();

  articles[0].style.display ='inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  content('../dementia_infosite/json_files/life_activity.json','../dementia_infosite/images/life_activity.jpg');

}



/* * * ENVIRONMENT * * */

function env_interior() {

  articNone();

  articles[0].style.display ='inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  content('../dementia_infosite/json_files/env_interior.json','../dementia_infosite/images/env_interior.jpg');

}


function env_labels() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  content('../dementia_infosite/json_files/env_labels.json','../dementia_infosite/images/env_labels.jpg');

}


function env_tech() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  articles[5].style.display = 'inline';

  articles[6].style.display = 'inline';

  articles[7].style.display = 'inline';

  content('../dementia_infosite/json_files/env_tech.json','../dementia_infosite/images/env_tech.jpg');

}


function env_built() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  articles[9].style.display = 'inline';


  content('../dementia_infosite/json_files/env_built.json','../dementia_infosite/images/env_builtin.jpg');

}


function env_hazards() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  content('../dementia_infosite/json_files/env_hazards.json','../dementia_infosite/images/env_hazards.jpg');

}


/* * * CARE PLAN * * */

function care_carers() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  articles[5].style.display = 'inline';

  articles[9].style.display = 'inline';



  content('../dementia_infosite/json_files/care_carers.json','../dementia_infosite/images/care_carers.jpg');

}

function care_meds() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  articles[5].style.display = 'inline';

  articles[6].style.display = 'inline';


  content('../dementia_infosite/json_files/care_medications.json','../dementia_infosite/images/care_med.jpg');

}


/* * * PATIENT RECORDS * * */


function rec_patient() {

  articNone();

  articles[0].style.display = 'inline';
 
  articles[1].style.display = 'inline';
 
  articles[2].style.display = 'inline';

  articles[3].style.display = 'inline';

  articles[4].style.display = 'inline';

  articles[5].style.display = 'inline';

  articles[6].style.display = 'inline';

  articles[7].style.display = 'inline';


  content('../dementia_infosite/json_files/rec_carersbook.json','../dementia_infosite/images/rec_carebook.jpg');

}
