let allUser=document.getElementsByClassName('users')[0];    
let users='';
let usersJson='';
	//in first display, only show me 10 name
    async function loadData(limit){
    users=await fetch(`conn.php?limit=${limit}`);
    usersJason=await users.json();
    console.log(usersJason);
	if(usersJason.message==="no result found")
		alert("no result found");
	else
    fillUsers(usersJason);
}
loadData(10);
/*
function fillUsers(a){
let table="<table>";
    for(i=0;i<a.length;i++)
    {
    table+=`<tr><td>${a[i].userId}</td><td>${a[i].userName}</td><td>${a[i].userPassword}</td><td><a href='edit.php?id=${a[i].userId}'>edit</a></td><td><a href='delete.php?id=${a[i].userId}'>delete</a></td><td><a href='#' class='btnUpdate' data-id=${a[i].userId}>update</a></td></tr>`;
    }


        table+="</table>";

allUser.innerHTML=table;    
};
*/
//b is indicator to display b number of card
let b=10;
function fillUsers(a){
		
	a.forEach(function(user,index){
		
		let card=document.createElement("div");
		card.setAttribute("class","card");
		
		let spanName=document.createElement("span");
		spanName.setAttribute("class","spanName");
		let userName=document.createTextNode(user.userName);
		spanName.appendChild(userName)
		
		let labelTitle=document.createElement("label");
		labelTitle.setAttribute("class","labelTitle");
		let labelText=document.createTextNode("user name");
		labelTitle.appendChild(labelText)
		
		//////////////////
		
		let spanPassword=document.createElement("span");
		spanPassword.setAttribute("class","spanPassword");
		let userPassword=document.createTextNode(user.userPassword);
		spanPassword.appendChild(userPassword)
		
		let labelPassword=document.createElement("label");
		labelPassword.setAttribute("class","labelPassword");
		let passwordText=document.createTextNode("user password");
		labelPassword.appendChild(passwordText)
		
		//////////////////
		
		let spanSalary=document.createElement("span");
		spanSalary.setAttribute("class","spanSalary");
		let number=parseInt(user.userSalary);
		let mySalary=number.toLocaleString("en-US", {style:"currency", currency:"USD",maximumFractionDigits:0});
		
		let userSalary=document.createTextNode(mySalary);
		spanSalary.appendChild(userSalary)
		
		let labelSalary=document.createElement("label");
		labelSalary.setAttribute("class","labelSalary");
		let labelSalaryText=document.createTextNode("user salary");
		labelSalary.appendChild(labelSalaryText)
		
		///////////////
		
		let spanAge=document.createElement("span");
		let myDate=new Date(Date.parse(user.userAge))
		
		let now=new Date();
		let age=document.createTextNode(now.getFullYear()-myDate.getFullYear());
		spanAge.appendChild(age);
		
		let labelAge=document.createElement("label");
		labelAge.appendChild(document.createTextNode("age"));
		
		
		////////////////
		
		let linkUpdate=document.createElement("a");
		linkUpdate.setAttribute("href","edit.php?id="+user.userId);
		linkUpdate.appendChild(document.createTextNode("edit using href"));
		
		/////////////
		
		
		let linkDelete=document.createElement("a");
		linkDelete.setAttribute("href","delete.php?id="+user.userId);
		linkDelete.appendChild(document.createTextNode("delete"));
		
		///////////////////
		let buttonDelete=document.createElement("button");
		buttonDelete.setAttribute("onclick",`deleteUser(${user.userId})`);
		buttonDelete.setAttribute("class","btn btnDelete");
		buttonDelete.appendChild(document.createTextNode("delete by button -fetch"))
		
		/////////
		
		let buttonUpdate=document.createElement("button");
		buttonUpdate.setAttribute("class","btn btnUpdate");
		buttonUpdate.setAttribute("data-id",user.userId);
		buttonUpdate.appendChild(document.createTextNode("edit by button -fetch"))
		
		
		
		card.appendChild(labelTitle);
		card.appendChild(spanName);
		
		
		card.appendChild(labelPassword);
		card.appendChild(spanPassword);
		
		card.appendChild(labelSalary);
		card.appendChild(spanSalary);
		
		card.appendChild(labelAge);
		card.appendChild(spanAge);
		
		card.appendChild(linkUpdate)
		card.appendChild(linkDelete)
		
		card.appendChild(buttonUpdate)
		card.appendChild(buttonDelete)
		
		//allUser.appendChild(card);

		if(index<b)
		allUser.appendChild(card);	
		else
		card.style.display="none";
	
	});
	
	
}


let btnUpdate=allUser.querySelectorAll('btnUpdate');

//because update button was created dynamically
//we can not make as simple keyLIstener
 
allUser.addEventListener("click",function(e){
	//if(e.target.matches('.btnUpdate'))
	if(e.target.classList.contains('btnUpdate'))
	{
	let userId=e.target.getAttribute('data-id');	
	getUser(userId);
	}
});

async function getUser(id){
	let res=await fetch('getUser.php?id='+id);
	let jsonRes=await res.json();
	console.log(jsonRes);
	
}

function deleteUser(id){
	let alerts=document.querySelector('.alerts');
	alerts.style.display="flex";
	let choice=document.querySelectorAll('.choice');
	choice.forEach(function(a){
		a.addEventListener("click",async function(){
			if(this.innerText==="yes")
			{
				let res=await fetch('delete.php?id='+id);
				let jsonRes=await res.json();
				console.log(jsonRes);
				console.log(jsonRes.success);
				if(jsonRes.success)
				{
				alert(jsonRes.message)
				allUser.innerHTML ='';
				loadData(10);
				}				
			}
			else
				alert("no");
			alerts.style.display="none";
			
			
		})			
	})
	
	
	
	
	}



let showMore=document.querySelector("#showMore");
showMore.addEventListener("click",function(){
	let divCard=allUser.querySelectorAll(".card");
	allUser.innerHTML ='';
	//in each button click, b became *2
	//in first lunch b=10, in first click, b became 20
	//in second click b became 40 ...
	b=b*2;
	loadData(b);
});

