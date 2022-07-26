/*
管子类
 */

(function(){
	var Pipe = window.Pipe = function(){
		this.pipe_up = game.R.pipe_up;
		this.pipe_down = game.R.pipe_down;
		//总高度
		this.allheight = game.canvas.height*0.75
		//空隙宽度
		this.interspace = 120;
		// 上下管的高度
		this.downheight = parseInt((Math.random()*6+2)/10*this.allheight*0.7);
		this.upheight = this.allheight-this.downheight-this.interspace;

		this.y =this.allheight -160
		this.x = game.canvas.width;
		//图片宽高
		this.w = 52;
		this.h = 320;
		game.pipArr.push(this);
		this.update = function(){
			this.x -= game.level;
			if(game.bird.T <0 || game.bird.B > this.allheight){
				game.isgameover = true
				return false;
			}
			//检测自己是否碰到小鸟
			if(game.bird.R > this.x && game.bird.L < this.x+52){
				if(game.bird.T<this.downheight || game.bird.B > this.downheight+this.interspace){
					game.isgameover = true
					return false;
				}
			}
			if(game.bird.L == this.x+52 ||game.bird.L==this.x+53){
				game.score++
			}
			if(this.x<-60){
				for(var i =0; i<game.pipArr.length;i++){
					if(game.pipArr[i] == this){
						game.pipArr.splice(i,1);
					}
				}
			}
		}
		this.render = function(){
			game.ctx.drawImage(this.pipe_up,0,0,this.w,this.upheight,this.x,this.allheight-this.upheight,this.w,this.upheight);
			game.ctx.drawImage(this.pipe_down,0,this.h-this.downheight,this.w,this.downheight,this.x,0,this.w,this.downheight);
		}
	}
})()