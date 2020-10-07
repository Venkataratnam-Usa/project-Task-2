/*function loadJson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200")
		{
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}

loadJson("data.json",function(text){
	let data = JSON.parse(text);//serialized data
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.technicalskills);
})*/

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.technicalskills);
	declareinfo(data.declare);
})

var child1=document.querySelector(".child1");


function basic(det){
	var img1=document.createElement("img");
	img1.src=det.image;
	child1.appendChild(img1);

	var name = document.createElement("h4");
 name.textContent = det.name;
 child1.appendChild(name);

 var email = document.createElement("a");
 email.href="mailto:venkat@gmailcom";
 email.textContent=det.email;
 child1.appendChild(email);

 var number=document.createElement("p");
 number.textContent=det.number;
 child1.appendChild(number);


 var add=document.createElement("h3");
 add.textContent="address";
 child1.appendChild(add);

 child1.appendChild(document.createElement("hr"));

 var address=document.createElement("p");
 address.textContent=det.address;
 child1.appendChild(address);
}

var child2=document.querySelector(".child2");

function careerinfo(info){
	var heading=document.createElement("h2");
	heading.textContent="Career Objective";
	child2.appendChild(heading);

	var hr1=document.createElement("hr");
	hr1.setAttribute('class','hr1');
	child2.appendChild(hr1);


	var data=document.createElement("p");
	data.textContent=info.info;
	child2.appendChild(data);

}

function education(edu){
	var heading2=document.createElement("h2");
	heading2.textContent="Educational Qualification";
	child2.appendChild(heading2);

	var hr2=document.createElement("hr");
	hr2.setAttribute('class','hr2');
	child2.appendChild(hr2);

	var table1=document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata=" ";
	for(var i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

function skills(skillinfo){
	var hd = document.createElement("h3");
	hd.textContent="Technical Skills";
	child2.appendChild(hd);

	var hr3=document.createElement("hr");
	hr3.setAttribute('class','hr3');
	child2.appendChild(hr3);

	
for(i=0;i<skillinfo.length;i++){

  var title = document.createElement("h3");
  title.textContent=skillinfo[i].title;
  child2.appendChild(title);


  var skillul = document.createElement("ul");
  var skillli = document.createElement("li");
  skillli.textContent=skillinfo[i].info;
  skillul.appendChild(skillli);
  child2.appendChild(skillul);
}

function declareinfo(info){
	var heading3=document.createElement("h2");
	heading3.textContent="Declaration";
	child2.appendChild(heading3);

	var hr4=document.createElement("hr");
	hr4.setAttribute('class','hr4');
	child2.appendChild(hr4);


	var data2=document.createElement("p");
	data2.textContent=info.info;
	child2.appendChild(data2);

}

}