let City,tianqi;
// 引入远程数据
// 关于城市的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		City=obj.data;
	}
})

// 关于天气的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		tianqi=obj.data;
		console.log(tianqi)
		// var tem=tianqi.weather.
	}
})

// 当页面加载完成的时候
window.onload=function(){
	update();
	// 当点击按钮消失
	var button=document.getElementsByClassName("button");
	console.log(button);
	button[0].onclick=function(){
		// alert("这是一个按钮");
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="none";
	}
	var pos=document.getElementsByClassName("pos")[0];
	pos.onclick=function(){
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="block";
	}

}


// js
// 1.当整个页面加完成时，才可以对元素进行操作；
// 2.获取元素：document.getElementsByClassName("")[0];
// 3.添加事件函数
// 4.进行样式操作

function update(){

	let citys=document.getElementsByClassName("city")[0];
	for (let i in City){
		// console.log(i);
			let cityS=document.createElement("div");
			cityS.className="citys";
			let title=document.createElement("div");
			title.className="title";
			title.innerHTML=i;
			cityS.appendChild(title);
			// citys.appendChild(cityS);

		var con=document.createElement("div");
		con.className="con";
		
		for(let j in City[i]){
		var box3=document.createElement("div");
		box3.className="box";
		box3.innerHTML=j;
		con.appendChild(box3);
		cityS.appendChild(con);
		}

		citys.appendChild(cityS);


	}
	let chengshi=document.getElementsByClassName("pos")[0];
	chengshi.innerHTML=tianqi.city;

	let kongqi=document.getElementsByTagName("h5")[0];
	kongqi.innerHTML=tianqi.weather.quality_level;
// 	var icon1=document.getElementById("icon1");
//    icon1.style=`background-image:url(img/${weather.weather.dat_weather_icon_id
// }.png)`;

var icon=document.getElementsByClassName("conPic")[0];
console.log(icon);
icon.style=`background-image:url(img/${tianqi.weather.dat_weather_icon_id}.png)`;
var hourR=tianqi.weather.hourly_forecast;
console.log(hourR);
var list=document.getElementsByClassName("wrap")[0];
for(let i in hourR){
	console.log(hourR[i]);
	var box=document.createElement("div");
	box.className="box";
	var time=document.createElement("div");
	time.className="time";
	time.innerHTML=hourR[i].hour+":00";
	box.appendChild(time);
	list.appendChild(box);

}

}


