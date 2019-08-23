window.onload=function(){
    var div=document.getElementById('moveMajor');
    var keyT=keyB=keyL=keyR=false;//设置指定键初始值
    setInterval(function(){//设置定时器，键盘按下每隔10毫秒执行一次移动操作
        if(keyL){
            div.style.left=div.offsetLeft-10+"px";
            }
        else if(keyR){
            div.style.left=div.offsetLeft+10+"px";
            }
        if(keyT){
            div.style.top=div.offsetTop-10+"px";
            }
        else if(keyB){
            div.style.top=div.offsetTop+10+"px";
            };  
            limit()//limit()函数限制div移动防止溢出
        },10);

    document.onkeydown=function(event){//keydown事件，keyCode绑定移动键位
        var event=event||window.event;
        switch(event.keyCode){
            case 37:
                keyL=true;//if语句执行，div左移动
                return;
            case 38:
                keyT=true;
                return;
            case 39:
                keyR=true;
                return;
            case 40:
                keyB=true;
                return;
            }
        }
    document.onkeyup=function(event){//keyup事件，用户松开按键时移动停止
        var event=event||window.event;
        switch(event.keyCode){
            case 37:
                keyL=false;
                break;
            case 38:
                keyT=false;
                break;
            case 39:
                keyR=false;
                break;
            case 40:
                keyB=false;
                break;
            }
        }
    function limit(){
        (div.offsetLeft<=0)&&(div.style.left=0);
        //防止左溢出
        (div.offsetTop<=0)&&(div.style.top=0);
        //防止上溢出
        (div.offsetLeft+div.offsetWidth>=document.documentElement.clientWidth)&&(div.style.left=document.documentElement.clientWidth-div.offsetWidth+"px");
        //防止右溢出
        (div.offsetTop+div.offsetHeight>=document.documentElement.clientHeight)&&(div.style.top=document.documentElement.clientHeight-div.offsetHeight+"px");
        //防止下溢出
        }
    };

    // function subtitle() {
    //     document.getElementById('subtitle').innerHTML = 'HELLO!';
    //     setTimeout(function(){
    //        document.getElementById('subtitle').innerHTML = 'HELLO!';
    //     }, 50000); 
    // }

    var airplane = document.querySelector('.airplane');
    var talk = document.querySelector('.subtitle');

    // 隨機對話
    var content = ['SORRY,THE PAGE NOTFOUND.', 'HELLO', 'TRY TO MOVE (USE KEYBOARD ←↑↓→)'];

    airplane.addEventListener('click',function(){
        talk.classList.toggle('active');
        talk.innerHTML = content[Math.floor(Math.random() * 3)];
    },false);

    
// touch
    var touchthis = document.querySelector('.all_title');
    var documentWidth=window.screen.availWidth,
    startx = null,
    starty = null,
    endx = null,
    endy = null;

    touchthis.addEventListener("touchstart", function(event) {
	startx=event.touches[0].pageX;
	starty=event.touches[0].pageY;
})
    touchthis.addEventListener("touchmove", function(event) {
	event.preventDefault();
})
    touchthis.addEventListener("touchend", function(event) {
	endx=event.changedTouches[0].pageX;
	endy=event.changedTouches[0].pageY;
	var dx=endx-startx;
	var dy=endy-starty;

	//判断是滑动还是点击
	if(Math.abs(dx)<0.3*documentWidth && Math.abs(dy)<0.3*documentWidth)
		return;

	if(Math.abs(dx)>=Math.abs(dy)){
		if(dx>0){
            console.log("moveRight");
		}else{
            console.log("moveLeft");
		}
	}else{
		if(dy>0){
            console.log("moveDown");
		}else{
            console.log("moveTop");
		}
	}
})