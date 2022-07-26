/*
小鸟类
 */
(function(){
	var Bird = window.Bird = function(){
		//随机一个鸟的颜色
		var self = this;
		this.color = Math.floor(Math.random()*3);
		this.imgArr = [
			game.R['bird'+this.color+'_0'],
			game.R['bird'+this.color+'_1'],
			game.R['bird'+this.color+'_2']
		]
		this.hasEmegy = false;
		// 小鸟初始位置
		this.y = game.canvas.height*0.7*0.5;
		this.x = 80
		//不同的小鸟状态图
		this.wingStep = 0;
		//小鸟自己的帧数，用于下落，上升算法
		this.bfp = 0;
		this.d = 0
		this.update = function(){
			//计算自己的碰撞区域
			this.T = this.y+13;
			this.L = this.x+6;
			this.B = this.y+37
			this.R = this.x+40
			this.wingStep++;
			this.wingStep == 3 ? this.wingStep=0: this.wingStep
			//小鸟下落计算
			if(!this.hasEmegy){
				this.y += 0.2*(this.bfp);
			}else{
				//小鸟上升
				this.y -= 0.2*((20-this.bfp))
			}
			
			if(this.bfp > 30){
				this.hasEmegy = false;
			}
			this.bfp++;
			this.d += 0.02;
			// //
			// if(this.y > game.canvas.height*0.7){
			// 	this.y=100;
			// 	this.bfp=0
			// }

		}
		this.render = function(){
			game.ctx.save()
			game.ctx.translate(this.x+24,this.y+24);
			game.ctx.rotate(this.d);
			game.ctx.drawImage(this.imgArr[this.wingStep],-24,-24);
			game.ctx.restore();
		}

		game.canvas.onclick=function(){
			self.hasEmegy = true;
			self.bfp = 0;
			self.d = -0.3
		}
	}
})()