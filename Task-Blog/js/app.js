$("#myform").submit(function(e) {
    e.preventDefault();
});

var file;
fileName.addEventListener('change', function(e){
	 file = e.target.files[0];
});

//getting ref of last child in db
var fileValue;
	firebase.database().ref().limitToLast(1).on('value', function(snapshot) {    
    snapshot.forEach((child) => {
     fileValue = parseInt(child.val().index);       
   });

    retriveData();
    retriveImg();

});




function pushData(){
	
	
	document.getElementById('submit-btn').disabled=true;
	var storageRef=firebase.storage().ref((fileValue+1).toString());
	var task=storageRef.put(file);
	task.on('state_changed',

	function progress(snapshot){
				
		},

	function error(err){

		},
	function complete(){
		
		var ref = firebase.database().ref();
		var data = {
				index:fileValue+1,
				title: document.getElementById('title-blog').value,
				body: document.getElementById('message-text').value,
				name:document.getElementById('name').value,
				type:document.getElementById('type').value
		}
		ref.push(data);

		setTimeout(function(){
			location.reload();

		},2000);
		

		}

	);

	



}//push data closed







function retriveData(){
	var ref = this.db.ref();
	ref.on('value',gotData,errData)	
}


function gotData(data){
	var data = data.val();
	var key = Object.keys(data);

	for(let j=1;j<key.length;j++)
	{
		var k = key[j];
		var title = data[k].title;
		var body = data[k].body;
		var name = data[k].name;
		var type = data[k].type;
		var index = data[k].index;
		var newEle = `

			<div class ="box${index}">
					<div class="card" style="width:100%;height:100%;border: 2px solid #ddd; border-radius: 5px; ">
				  <img src="" id="img-${index}" class="card-img-top" alt="...">
				  <div class="card-body" style="padding-left: 12px; padding-right: 12px;padding-top: 10px;">
				  		<h4 class="card-title"><i style="color:orange;padding-right: 10px; " class="fa fa-pencil-square-o" aria-hidden="true"></i>${type}</h4>
						    <h3 class="card-title">${title}
						    	<i style="float: right; margin-left:20px; cursor: pointer;" class="fa fa-ellipsis-h" aria-hidden="true" >
							    	<div class="dropdown-content" style="font-size: 15px;font-family: monospace;min-width: 80px;">
										<a >Edit</a>
										<a >Report</a>
										<a >More</a>
									</div>
						   		 </i>
							</h3>
					    <p class="card-text" style="font-size: 18px;">${body}</p>
					    <div class="info">
					    	<ul>
					    		<li><img src="img/p1.png"></li>
					    		<li><h3>${name}</h3></li>
					    		<li><b><i style="font-size: 14px; padding-left: 15px;"  class="fa fa-share-alt" aria-hidden="true"><strong style="display: none;"> Share</strong></i></b></li>
					    	</ul>
					    </div>
			  		</div>
				</div>
			</div>
			

			`
		document.getElementById('conta').innerHTML += newEle;
		document.getElementsByClassName(`box${index}`)[0].style.width = '100%';
		document.getElementsByClassName(`box${index}`)[0].style.fontFamily = 'Bahnschrift';
		document.getElementsByClassName(`box${index}`)[0].style.boxShadow ='0px 8px 16px 0px rgba(0,0,0,0.2)';
		document.getElementsByClassName(`box${index}`)[0].style.gridColumn = '2/3';
		document.getElementsByClassName(`box${index}`)[0].style.gridRow = `${index}/${index+1}`;

		
		document.getElementById('posts').textContent=`(${j})`;
	}
}

function errData(e){
	console.log(e)
}


function retriveImg(){
	var i = 1;
	var storageRef = firebase.storage().ref();
	storageRef.listAll().then(function(result) {
  	result.items.forEach(function(imageRef) {
  		i++;
	    displayImage(imageRef,i);

  });
})
}

function displayImage(imageRef,i) {
  imageRef.getDownloadURL().then(function(url) {
	document.getElementById(`img-${i}`).src = url;  
  }).catch(function(error) {
    // Handle any errors
  });
}