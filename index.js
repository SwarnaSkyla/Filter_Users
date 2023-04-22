const users=[
    {
        id:1,
        name:"john",
        age:18,
        profession:"Developer"
    },
    {
        id:2,
        name:"jack",
        age:20,
        profession:"Developer"
    },
    {
        id:3,
        name:"karen",
        age:19,
        profession:"Admin"
    }
];
const userbtn=document.getElementById("btn2");
const nameInpt=document.getElementById("ename");
const profInpt=document.getElementById("eprof");
const ageInpt=document.getElementById("eage");

const profFilter=document.getElementById("profession");
const filterbtn=document.getElementById("btn1");
const list=document.getElementById("filtered");
//adding an event listener to add user


userbtn.addEventListener('click',()=>{
    const name=nameInpt.value;
    const profession=profInpt.value;
    const age=parseInt(ageInpt.value);
    const newUser={
        id:users.length,
        name:name,
        profession:profession,
        age:age
    };

    users.push(newUser);


    nameInpt.value='';
    profInpt.value='';
    ageInpt.value='';
});


//add event listener to filter button

filterbtn.addEventListener('click',()=>{

      list.innerHTML='';
      
      const filtervalue=profession.value;
      
      let filterUser=users;
      
      if(filtervalue === ""){
        alert("Choose a Profession : ");
        return;
      }
      if(filtervalue){
        filterUser=users.filter(user => user.profession.toLowerCase() === filtervalue);
        
      }
   
     

      //add values

    //   filterUser.forEach(user => {
    //     const n=user.name;
    //     const p=user.profession;
    //     const ag=user.age;
    //     const li=document.createElement("li");
    //     const spaces=Array(3).fill("").join(" ");
    //     li.innerHTML="Name: "+ n +spaces+ "Profession: "+ p+spaces+"Age: "+ag;
        
    //     list.appendChild(li);
         
    //   });
   
   
    filterUser.forEach(user => {
        const id=user.id;
        const n = user.name;
        const p = user.profession;
        const ag = user.age;
        const li = document.createElement("li");
        li.className="nestoflist";
        const spaces ="   ";
     //   li.innerHTML = id+"."+" "+"Name: " + n +spaces+ "Profession: " + p + "Age: " + ag;
       li.innerHTML=id+".";
       const ul=document.createElement("ul");
       ul.className="newlist";
       const li1=document.createElement("li");
       const li2=document.createElement("li");
       const li3=document.createElement("li");
       li1.innerHTML="Name: "+n;
       li2.innerHTML="Profession: "+p;
       li3.innerHTML="Age: "+ag;
       ul.appendChild(li1);
       ul.appendChild(li2);
       ul.appendChild(li3);
       li.appendChild(ul);

        list.appendChild(li);
      });
     
    
      

});