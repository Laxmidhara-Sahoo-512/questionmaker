 function work(){
   
   
   const questions=[
      {que:"1.which is the largest animal in the world?",
       answers:[
          {text:"shark",correct:"false"},
          {text:"elephant",correct:"true"},
          {text:"zirraffe",correct:"false"}, 
          {text:"whale",correct:"false"}
       ]
    
      },
      {que:"2.Who is the father of Nation?",
        answers:[
         {text:"Mahatma Gandhi",correct:"true"},
         {text:"Subhas Chandra Bose",correct:"false"},
         {text:"Nelson mandela",correct:"false"},
         {text:"Dr.Bhimrao Ambedkar",correct:"false"}
    
        ]
    
    
    
      },
      {que:"3.What is the full form of HTTP?",
      answers:[
         {text:"Hyper Text Transfer Protocol",correct:"true"},
         {text:"Hyper Text Telecom Protocol",correct:"false"},
         {text:"Hyper Text Transformer Protocol",correct:"false"}, 
         {text:"Hyper Text Telegram Protocol",correct:"false"}
      ]
   
     },
     {que:"4.How many bones are there in human body?",
      answers:[
         {text:"209",correct:"false"},
         {text:"206",correct:"true"},
         {text:"208",correct:"false"}, 
         {text:"211",correct:"false"}
      ]
   
     },
     {que:"5.what is  the name of parliament of USA?",
      answers:[
         {text:"Knesset",correct:"false"},
         {text:"National Assembly",correct:"false"},
         {text:"Cortes Generales",correct:"false"}, 
         {text:"Congress",correct:"true"}
      ]
     
     },
     {que:"6.In which state the classical dance form named Sattriya is performed?",
     answers:[
        {text:"Manipur",correct:"false"},
        {text:"West Bengal",correct:"false"},
        {text:"Assam",correct:"true"}, 
        {text:"Nagaland",correct:"false"}
     ]
    
    },
    {que:"7.First Mughal emperor Babbar came to India from:",
     answers:[
        {text:"Syria",correct:"false"},
        {text:"Greece",correct:"false"},
        {text:"Ferghana",correct:"true"}, 
        {text:"Persia",correct:"false"}
     ]
    
    },
    {que:"8.73rd Ammendment of the  Constitution of India is related to which among of following?",
     answers:[
        {text:"Townships",correct:"false"},
        {text:"Panchayats",correct:"true"},
        {text:"Municipalities",correct:"false"}, 
        {text:"District Boards",correct:"false"}
     ]
    
    },
    {que:"9.What is the total number of High courts in India?",
     answers:[
        {text:"15",correct:"false"},
        {text:"29",correct:"false"},
        {text:"21",correct:"false"}, 
        {text:"25",correct:"true"}
     ]
    
    },
    {que:"10.Telengana became the 29th state of India in which year?",
     answers:[
        {text:"2015",correct:"false"},
        {text:"2014",correct:"true"},
        {text:"2017",correct:"false"}, 
        {text:"2016",correct:"false"}
     ]
    
    },
      
     
    
    ]
    let b=document.getElementById("but");
    b.style.display="none";
    if(currentindex==questions.length){
      alert("you have scored "+(currentindex-wrong)+" out of"+currentindex);
    }
    else{
      document.getElementById("que").innerHTML=questions[currentindex].que;
    let d=document.getElementById("buttons")
    while(d.firstChild){
      d.firstChild.remove();
    }
    questions[currentindex].answers.forEach((value)=>{
       let cre=document.createElement("button")
       cre.innerHTML=value.text;
       cre.dataset.corr=value.correct;cre.setAttribute("class","b")
       d.append(cre);

    })
    let sp=document.getElementsByClassName("b");
         for(let i=0;i<sp.length;i++){
            sp[i].onclick= function (){
               if(sp[i].getAttribute("data-corr")=="false")
               {sp[i].style.backgroundColor=" #ff9393";wrong++; }
               for(let j=0;j<sp.length;j++){
                  if(sp[j].getAttribute("data-corr")=="true"){
                   sp[j].style.backgroundColor="#9aeabc";
                  }
                  sp[j].disabled=true
                }
                
                b.style.display="block";
            }
           
            
            
           
          }
    }
   
    
        




      
    
      
    currentindex++;
    
 


}
let currentindex=0;let wrong=0;

work();