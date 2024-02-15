//your JS code here. If required.
let count = 0;
document.getElementById("incrementBtn")
	.addEventListener("click",()=>
	{
		alert(count);
		count++;
		document.getElementById("counter").innerHTML = count;
		
	
})