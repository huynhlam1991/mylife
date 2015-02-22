function Ball(mapWidth,mapHeight){
	this.mapHeight =mapHeight;
	this.mapWidth =mapWidth;
	
	this.radius=20;//ban kinh
	this.spX =3; //toc do di chuyen theo chieu x
	this.spY =3;//toc do di chuyen theo chieu y
	
	this.vitriX = Math.floor(Math.random()*(this.mapWidth-2*this.radius)); //set vi tri ngau nhien cho qua bong khong bi trung voi vien
	this.vitriY = Math.floor(Math.random()*(this.mapHeight-2*this.radius));//vi tri cua tam xy
}
Ball.prototype.draw= function(hinhtron,alpha){
	if(!alpha)
		alpha = 255;
	hinhtron.beginPath();//bat buoc khi ve 1 hinh tron moi 
	hinhtron.fillStyle="rgba(255,100,100,"+alpha+")";
	hinhtron.arc(this.vitriX,this.vitriY,this.radius,0,Math.PI*2,true);
	hinhtron.closePath();
	hinhtron.fill();
}
Ball.prototype.move = function(){
	this.vitriX += this.spX;
	this.vitriY += this.spY;
	
	this.left = this.vitriX - this.radius;
	this.top = this.vitriY - this.radius;
	this.right = this.vitriX + this.radius;
	this.bottom = this.vitriY + this.radius;
}
Ball.prototype.checkCollision = function(){
	if(this.left<=0||this.right>= this.mapWidth) this.spX = -this.spX;
	if(this.top<=0||this.bottom>= this.mapHeight) this.spY = -this.spY;
}