window.onload=function(){
    /**add event listener to all input items where type=text  */
    const inputQues = document.querySelectorAll('input.question');
    function hoverHandler(){
        console.log('mouse ouver');
        this.style.borderBottom='solid 2px green';
    }
    function mouseOutHandler(){
        console.log('mouseOutHandler');
        this.style.borderBottom='solid 3px rgb(221, 218, 218)';
    }
    for(var i=0;i<=5;i++){
        inputQues[i].addEventListener('mouseover',hoverHandler);
    }
    for(var i=0;i<=5;i++){
        inputQues[i].addEventListener('mouseout',mouseOutHandler);
    }

    /*when click client button, display main frams */
    const mainFrame = document.getElementById("main");
    const clientButton = document.getElementById("clientsMenu");
    function clientOnClick(){
        console.log('clicked clients');
        mainFrame.style.display="inline";
        clientButton.style.backgroundColor="rgb(34,134,59)";
        clientButton.style.color="white";
    }
   clientButton.addEventListener('click',clientOnClick);
  
   
/* add event listener for id=search */
   const inputSerach = document.getElementById('search');
   function OnInputHandler(){
       this.value=' ';
       this.style.borderBottom='solid 3px rgb(34,134,59)';
       this.style.outline="none";
   }
   inputSerach.addEventListener('focus',OnInputHandler)

/* add event listener for class=questions of inpu elements */
   for(var i=0;i<=5;i++){
    inputQues[i].addEventListener('focus',OnInputHandler)
   }
   
   /** show corresponding content when general infomation */
  const generalInfo=document.getElementById('generalInfo');
   const generalTab=document.getElementById('generalTab');
   function displayGI(){
    generalTab.style.display='inline';
        familyTreeTab.style.display='none';
        generalInfo.style.outline='none';
        assessmentTab.style.display='none';
        generalInfo.style.borderBottom='solid 4px green';
        placementTab.style.display='none';
        placementTab.style.border='none';
   }
   generalInfo.addEventListener('click',displayGI);


   /**dislpay placement tab when click place menu */
   const placementMenu=document.getElementById('placement');
   const placementTab=document.getElementById('placementTab');
   function displayPl(){
    placementTab.style.display='inline';
    generalTab.style.display='none';
    generalTab.style.borderBottom='none';
    familyTreeTab.style.display='none';
    placementMenu.style.borderBottom='solid 4px green';
    placementMenu.style.outline='none';
   }
   placementMenu.addEventListener('click',displayPl);

   /**dislpay family tree tab when click family tree */
   const familyTreeMenu=document.getElementById('familyTree');
   const familyTreeTab=document.getElementById('familyTreeTab');
   function displayFT(){
    placementTab.style.display='none';
    generalTab.style.display='none';
    assessmentTab.style.display='none';
    familyTreeTab.style.display='inline';

    generalTab.style.borderBottom='none';
    familyTreeMenu.style.borderBottom='solid 4px green';
    familyTreeMenu.style.outline='none';
   }
   familyTreeMenu.addEventListener('click',displayFT);
   
/*show assessment tab when click assessment menu */
const assessmentMenu=document.getElementById('assessment');
const assessmentTab=document.getElementById('assessmentTab');
function displayAS(){
    placementTab.style.display='none';
    generalTab.style.display='none';
    familyTreeTab.style.display='none';
    assessmentTab.style.display='inline';

    generalTab.style.borderBottom='none';
    familyTreeMenu.style.borderBottom='none';
    placementMenu.style.borderBottom='none';

    assessmentMenu.style.borderBottom='solid 4px green';
    assessmentMenu.style.outline='none';
}
assessmentMenu.addEventListener('click',displayAS);


   /**hide the nav bar when click collabse */
   const collapse=document.getElementById('collapse');
   const nav=document.getElementById('nav');
   function collabseHandler(){
    nav.style.display='none';
   }
   collapse.addEventListener('click',collabseHandler);

   /**set style when mouse over tab menu */
   const menus=document.querySelectorAll('.aMenu')
   function menuMouseOutHandler(){
    this.style.border='none';
}
   for(var i=0;i<menus.length;i++){
       menus[i].addEventListener('mouseover',hoverHandler);
   }
   for(var i=0;i<menus.length;i++){
    menus[i].addEventListener('mouseout',menuMouseOutHandler);
}
/*   */

}