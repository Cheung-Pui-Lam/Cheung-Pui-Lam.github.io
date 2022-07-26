(function(){
	//背景类
	var Land = window.Land = function(){
		this.image = game.R.land;
		this.y = game.canvas.height*0.75
		this.w = 336;
		this.h = 112;
		this.x = 0;
		this.speed = 1;
		this.update = function(){
			//耦合衔接背景滚动
			this.x -=game.level;
			if(-this.x>this.w){
				this.x = 0;
			}
		}
		this.render = function(){
			game.ctx.drawImage(this.image,this.x,this.y);
			game.ctx.drawImage(this.image,this.x+this.w,this.y);
			game.ctx.drawImage(this.image,this.x+this.w*2,this.y);
			//补地
			game.ctx.fillStyle = '#ded895';
			game.ctx.fillRect(this.x,this.y+this.h-5,game.canvas.width*2,game.canvas.height-this.y-this.h);
		}
	}
})()