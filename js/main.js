 // STYLING FUNCTIONS, EVENTS AND CODE
//nh NH    

  
var coverpage= document.querySelector('#coverpage');

let slidebutton= document.querySelector('.slideup');

slidebutton.addEventListener('click', function () {
coverpage.classList.toggle('slidemove');
 gamecommences(questionat);
 init()
    
 
} )



    const questions=[
            {
            question:'In what year did Nigeria attain independece ?',
            options: ['1st November 1999', '25th May 1909','4th July 1878','30th January 1990', ' 24th March 1900',],
            answer: '25th May 1909'
            } ,
            { 
                question:'In what Season of Game of thrones did the Arya stark ask the question "what\'s west of westeros " ?',
                options: ['Season six (6)', 'Season five (5)','Season seven (7)','Season fourteen (14)', 'Season ten (10)'],
                answer: 'Season six (6)'
            },  
                                                
            {  
                question:'What is Arya Stark\'s Real Name?',
                options: ['Maisie Williams', 'Kit Harrington','Thomas Dubwa','Lena Headey', 'Jeniffer Lawrence'],
                answer: 'Maisie Williams'        
            },
            {  
                question:'The term "PANSEXUAL" refers to individuals of what kind of sexuality',
                options: ['The Opposite sex', 'The same sex','Both sexes','All sexes', 'All of the above mentioned'],
                   answer: 'All sexes'
  
            },
            { 
                question:'What\'s the name of this gaming platform?,',
                options: ['Gamebrain.org', 'Gamersclub.org','Brainstorm.com','Brainhack.com', 'Brainsqueeze.org'],
                answer: 'Brainstorm.com'   
            },

            { 
                question:'How Many points have you amassed so far?',
                 options: ['50',  '200','256', 'durh,it\'s right there on the screen!', '405'],
                   answer: 'I can\'t possibly remember' 
            },   
       
          
          
        ] 
        
let questionat=0; 
let winpoints=0;            
let losepoints=0;
let optiondisp=  document.querySelectorAll('.option');

function init() {
    rightorwrong()   
    nextoption() 

}
function gamecommences(currentq) {
        let screendisp= document.querySelector('#screen');
        screendisp.textContent=questions[currentq].question;
        for(i =0; i<optiondisp.length;i++)  {  
                optiondisp[i].textContent=questions[currentq].options[i]; 
                }
             }    
let won= document.querySelector('#won');
let lost= document.querySelector('#lost');                    
function rightorwrong() {
        for(i=0; i<optiondisp.length;i++)  {  
                optiondisp[i].addEventListener("click", function () {
                    if (this.textContent== questions[questionat].answer) {
                     winpoints+=5; 
                     won.textContent = winpoints;                                                                                                                                                                                                                                                                                                                                                                                      
                    var winorlose= document.querySelector('.winorlose');
                        winorlose.innerHTML='Correct! YOU HAVE EARNED 5 POINTS';
                        let dialogbox= document.querySelector('#alertbox');
                        dialogbox.classList.toggle('alertdisplay'); }   
                   else{
                        losepoints+=5;
                        lost.textContent= losepoints;
                        var winorlose= document.querySelector('.winorlose');
                          let dialogbox= document.querySelector('#alertbox');
                        winorlose.innerHTML="OOPS! YOU DIDN'T GET IT RIGHT. THE CORRECT ANSWER IS " + "" + questions[questionat].answer; 
                        dialogbox.classList.toggle('alertdisplay');    
                               
                    }
                    
                }
                )
            }
            }
function pointstats() {
    let points= document.querySelector('.displayop')
    for (let i = 0; i < points.length; i++) {
        const el = points[i];
        if (el.classList.includes("won")){
            let check= el.innerHTML
            el.textContent===winpoints;
        }
        else if (el.classList.includes("lost") ){
            console.log(el);
            el.textContent===losepoints;
        }
    }
     
}

function nextoption() {    
            let decision= document.querySelectorAll('.decision');
            for(i=0; i<decision.length; i++) {
                let dialogbox= document.querySelector('#alertbox');
                decision[i].addEventListener("click", function() {
                dialogbox.classList.toggle('alertdisplay');
                let action = this.dataset.action;
                if (action === "restart") {
                    questionat = 0;
                    
                    gamecommences(questionat)
                } else if (action === "forfeit") {
                    gamecommences(questionat);
                } else if (action === "next") {
                    questionat+=1;
                    if (questionat < questions.length) {
                    gamecommences(questionat);
                    }
                    else {
                        alert('You\'ve reached the end!');
                        winpoints=0;
                        losepoints=0;
                    questionat=0;
                    won.textContent=0;
                    lost.textContent=0;
                    gamecommences(questionat);                                                                                                                                                                                     
                   }
               
                }
                  
                 } )
    } 
}
                // if (this.textContent=="RESTART") {
                //      gamecommences(questionat);
                //  } 
                //  else if (this.textContent=="FORFEIT") {
                     
                // } 
                // else if (this.textContent==" NEXT") {   
                //     questionat++;    
                //     gamecommences(questionat)
                //  }
                 
                      
                 
                
            
        
            
    
        
    

