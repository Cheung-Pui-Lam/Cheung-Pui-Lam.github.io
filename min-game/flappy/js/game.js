(function(){
	var Game = window.Game = function(id){
		var _this = this;
		_this.level = 2;
		_this.canvas = document.querySelector(id);
		_this.ctx = this.canvas.getContext('2d');
		//帧编号
		_this.fpnum = 0
		_this.pipArr = [];
		_this.isgameover = false;
		_this.init = function(){
			//兼容各设备视窗
			var windowWidth = document.documentElement.clientWidth;
			var windowHeight = document.documentElement.clientHeight;
			windowWidth = windowWidth>414 ? 414 : windowWidth;
			windowWidth = windowWidth<320 ? 320 : windowWidth;
			windowHeight = windowHeight>812 ? 812 : windowHeight;
			windowHeight = windowHeight<568 ? 568 : windowHeight;
			this.canvas.width = windowWidth
			this.canvas.height = windowHeight
		}
		//图片预加载
		_this.loadAllResourse = function(callback){
			_this.R = {};
			var allReady = 0;
			_this.image = [
				{'name':'bg_day','url':'img/bg_day.png'},
				{'name':'bg_night','url':'img/bg_night.png'},
				{'name':'bird0_0','url':'img/bird0_0.png'},
				{'name':'bird0_1','url':'img/bird0_1.png'},
				{'name':'bird0_2','url':'img/bird0_2.png'},
				{'name':'bird1_0','url':'img/bird1_0.png'},
				{'name':'bird1_1','url':'img/bird1_1.png'},
				{'name':'bird1_2','url':'img/bird1_2.png'},
				{'name':'bird2_0','url':'img/bird2_0.png'},
				{'name':'bird2_1','url':'img/bird2_1.png'},
				{'name':'bird2_2','url':'img/bird2_2.png'},
				{'name':'land','url':'img/land.png'},
				{'name':'pipe_down','url':'img/pipe_down.png'},
				{'name':'pipe_up','url':'img/pipe_up.png'},
				{'name':'number_score_0','url':'img/number_score_00.png'},
				{'name':'number_score_1','url':'img/number_score_01.png'},
				{'name':'number_score_2','url':'img/number_score_02.png'},
				{'name':'number_score_3','url':'img/number_score_03.png'},
				{'name':'number_score_4','url':'img/number_score_04.png'},
				{'name':'number_score_5','url':'img/number_score_05.png'},
				{'name':'number_score_6','url':'img/number_score_06.png'},
				{'name':'number_score_7','url':'img/number_score_07.png'},
				{'name':'number_score_8','url':'img/number_score_08.png'},
				{'name':'number_score_9','url':'img/number_score_09.png'},
				{'name':'ready','url':'img/text_ready.png'},
				{'name':'game_over','url':'img/text_game_over.png'},
				{'name':'play','url':'img/button_play.png'},


			]
			for(var i = 0;i < _this.image.length;i++){
				_this.R[_this.image[i].name] = new Image();
				_this.R[_this.image[i].name].src = _this.image[i].url
				_this.R[_this.image[i].name].onload = function(){
					allReady++;
					_this.ctx.clearRect(0,0,_this.canvas.width,_this.canvas.height);
					var txt = '正在加载'+allReady+'/'+_this.image.length+'张图片';
					_this.ctx.font = '15px 微软雅黑';
					_this.ctx.textAlign = 'center';
					_this.ctx.fillText(txt,_this.canvas.width/2,_this.canvas.height/2);
					if(allReady == _this.image.length){
						// alert('图片加载完毕')
						callback();
					}
				}
			}
		}
		this.gameover = function(){
			player.pause();
			window.clearInterval(_this.timer)
			var img = _this.R.game_over;
			_this.ctx.drawImage(img, _this.canvas.width/2-102,_this.canvas.height*0.2)
			_this.canvas.onclick=function(){
				window.location.reload();
			}
		}
		this.eventstart = function(){
			_this.canvas.onclick=function(){
				_this.start();
			}
		}
		this.ready = function(){
			_this.score = 0;
			// 实例化背景类
			_this.background = new Background();
			//实例化大地类Land
			_this.land = new Land();
			//实例化小鸟
			_this.bird = new Bird();
			_this.ctx.clearRect(0,0,_this.canvas.width,_this.canvas.height);
				//渲染背景
				// _this.background.update();
				_this.background.render();
				//渲染大地
				// _this.land.update();
				_this.land.render();
				//渲染小鸟
				// _this.bird.update();
				_this.bird.render();
				//打印分数
				var scoreLength = _this.score.toString().length;
				for(var i=0;i<scoreLength;i++){
					_this.ctx.drawImage(_this.R['number_score_'+_this.score.toString().charAt(i)],100+i*20,100);
				}
				if(_this.isgameover){
					_this.gameover();
				}
			var img = _this.R.ready;
			var button = _this.R.play
			_this.ctx.drawImage(img,_this.canvas.width/2-93,_this.canvas.height*0.2);
			_this.ctx.drawImage(button,_this.canvas.width/2-58,_this.canvas.height*0.3);
			_this.eventstart();
		}
		//开始游戏
		this.start = function(){
			player.play();
			_this.score = 0;
			// 实例化背景类
			_this.background = new Background();
			//实例化大地类Land
			_this.land = new Land();
			//实例化管子类
			_this.pipe = new Pipe();
			//实例化小鸟
			_this.bird = new Bird();
			
			setInterval(function(){
				new Pipe();
			},3000);
			_this.timer = setInterval(function(){
				_this.ctx.clearRect(0,0,_this.canvas.width,_this.canvas.height);
				//渲染背景
				_this.background.update();
				_this.background.render();
				//渲染管子
				for(var i = 0;i < _this.pipArr.length;i++){
					_this.pipArr[i].update();
					_this.pipArr[i].render();
				}
				//渲染大地
				_this.land.update();
				_this.land.render();
				_this.fpnum++;
				_this.ctx.fillText('TIME:'+parseInt(_this.fpnum/50),50,50);
				//渲染小鸟
				_this.bird.update();
				_this.bird.render();
				//打印分数
				var scoreLength = _this.score.toString().length;
				for(var i=0;i<scoreLength;i++){
					_this.ctx.drawImage(_this.R['number_score_'+_this.score.toString().charAt(i)],100+i*20,100);
				}
				if(_this.isgameover){
					_this.gameover();
				}
			},20)
		}

		//设置画布属性
		_this.init();
		// 读取资源
		_this.loadAllResourse(function(){
			_this.ready();

		})
	}	
})()