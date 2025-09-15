const str = document.querySelectorAll(".st");

function highlight() {
    //Write your code here
	for(let i = 0;i<str.length;i++){
		str[i].style.color = "rgb(0, 128, 0)";
	}

}


function return_normal() {
    //Write your code here
	for(let i = 0;i<str.length;i++){
		str[i].style.color = "rgb(0, 0, 0)";
	}
    
}
