window.onload = function(){
	for(let i=0;i<=5;i++)
	// document.getElementsByClassName('dropdown-content')[i].style.display = 'none';
	document.getElementsByClassName('nav-btn')[0].style.borderColor = 'black';

	// LogIn(1);
}


function toggle(){
	if(document.getElementsByClassName('dropdown-content')[0].style.display == 'none'){
		document.getElementsByClassName('dropdown-content')[0].style.display = 'block';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(180deg)';
	}
	
	else{
		document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(-360deg)';
	}		
}

window.onclick = function(event){

	if(document.getElementById('account').style.display == 'none')
		document.getElementsByClassName('fix-image')[0].style.display = 'block';

	if(event.target == document.getElementById('m-signIn')){
		document.getElementsByClassName('open-m')[0].click();
		if(document.getElementById('c-pass').style.display == 'block'){
			let fname = document.getElementById('f-name').value;
			let lname = document.getElementById('l-name').value;

			if(fname == "" || lname == ""){
				alert("Invalid input field!");
				window.location.reload();
			}
			else{
				document.getElementById('edit-img').style.display='block';
				document.getElementById('btn-leave-group').textContent ="Leave Group";
				var name = fname +" "+ lname;
				document.getElementById('Name').innerHTML = `

					<b>Hi</b>, ${name} </h4>

				`;
			}
		}
	

	}


	if(event.target == document.getElementById('nav').children[0])
	{
		document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(-360deg)';
	}
}

document.getElementById('m-signIn').onclick = function(){
	var ele = document.getElementById('account');
	ele.style.display = 'none';
	document.getElementsByClassName('fix-image')[0].style.display = 'block';
}


function LogIn(key){

	if(key==-1)
	{	
		document.getElementById('logorsin').textContent = "or, Sign Up";
		document.getElementById('logorsin').onclick = function(){
			SignUp(-1);
		}
	}

	document.getElementById('f-name').style.display = 'none';
	document.getElementById('l-name').style.display = 'none';
	document.getElementById('c-pass').style.display = 'none';
	document.getElementById('m-signIn').textContent ="Sign In";
	document.getElementById('m-head').textContent = "Sign In";
	document.getElementById('f-pass').style.display = 'block';
	document.getElementById('c-pass').style.display = 'none';
	document.getElementById('terms').style.display = 'none';

	document.getElementById('que').innerHTML = `

		Don't have account yet? <span id="ask" onclick="SignUp(0)" style="color:#0000ff;cursor:pointer">Create new for free!</span>

	`;
	
	if(key==1)
	document.getElementsByClassName('open-m')[0].click();

}
function SignUp(key){
	if(key==-1)
	{	
		document.getElementById('logorsin').textContent = "or, Sign In";
		document.getElementById('logorsin').onclick = function(){
			LogIn(-1);
		}

	}
	document.getElementById('f-name').style.display = 'inline';
	document.getElementById('l-name').style.display = 'inline';
	document.getElementById('c-pass').style.display = 'block';
	document.getElementById('m-signIn').textContent ="Create Account";
	document.getElementById('m-head').textContent = "Create Account";
	document.getElementById('f-pass').style.display = 'none';
	document.getElementById('c-pass').style.display = 'block';
	document.getElementById('terms').style.display = 'block';

	document.getElementById('que').innerHTML = `
		Already have an account? <span id="ask" onclick="LogIn(0)" style="color:#0000ff; cursor:pointer;">Sign In</span>
	`;
	if(key==1)
	document.getElementsByClassName('open-m')[0].click();
}

if(window.innerWidth<=480)
{
	
	
	function leaveJoin(){
		if(document.getElementById('edit-img').style.display=='none')
		{
			SignUp(1);
		}
		else{
			document.getElementById('edit-img').style.display='none';
			document.getElementById('btn-leave-group').textContent ="Join Group";
		}
	}

}
else{
	function leaveJoin(){
		if(document.getElementById('edit-img').style.display=='none')
		{
			document.getElementById('edit-img').style.display='block';
			document.getElementById('btn-leave-group').textContent ="Leave Group";
		}
		else{
			document.getElementById('edit-img').style.display='none';
			document.getElementById('btn-leave-group').textContent ="Join Group";
		}
	}
}
