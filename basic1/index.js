// function myFunction(p1, p2) {
//   return p1 * p2;
// }


// myFunction(1,2);


const getButton = document.getElementById('get_button');
const sendButton = document.getElementById('send_button');

const getData= function(){
        const xhr = new XMLHttpRequest();
        xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
        xhr.send();

        xhr.onload= function(){
        	const result=xhr.response;
        	console.log(JSON.parse(result));
        };
};

const sendData= function(){
const xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(JSON.stringify({
	title:"foo",
	body: "bar",
	userId: 1
}));

xhttp.onload= function(){
	const result=xhttp.response;
	console.log(JSON.parse(result));
};

}

getButton.addEventListener("click",getData);
sendButton.addEventListener("click",sendData);