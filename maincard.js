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

var newfile=loadjson("carddata.json");
newfile.then(data=>{
	console.log(data);
	card1(data.details);
	card2(data.carddetails);
	
})

var child1=document.querySelector(".child1");



function card1(det){
	var image1=document.createElement("img");
	image1.src=det.image;
	child1.appendChild(image1);

	var name1=document.createElement("h2");
	name1.textContent=det.name;
	child1.appendChild(name1);

	var rolno1=document.createElement("p");
	rolno1.textContent=det.number;
	child1.appendChild(rolno1);

	var button = document.createElement('input');
	button.setAttribute('type', 'button');
    button.setAttribute('value', 'Static Resume');
    button.setAttribute('class','btn1');
    button.setAttribute('onclick', 'staticbutton()');
    child1.appendChild(button);
}

function staticbutton(){
	window.location.href = "resume.html";	
}

function dynamicbutton(){
	window.location.href="index.html";	
}

var child2=document.querySelector(".child2");

function card2(carddet){
	var image2=document.createElement("img");
	image2.src=carddet.image;
	child2.appendChild(image2);

	var name2=document.createElement("h2");
	name2.textContent=carddet.name;
	child2.appendChild(name2);

	var rolno2=document.createElement("p");
	rolno2.textContent=carddet.number;
	child2.appendChild(rolno2);

	var button2 = document.createElement('input');
	button2.setAttribute('type', 'button');
    button2.setAttribute('value', 'dynamic Resume');
    button2.setAttribute('class','btn2');
    button2.setAttribute('onclick', 'dynamicbutton()');
    child2.appendChild(button2);
}

