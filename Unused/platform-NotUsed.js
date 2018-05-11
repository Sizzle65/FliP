class Platform {
	constructor(x,y,width,height,color){
		makeRectangle(width,height,color);
		this.x = x;
		this.y = y;
	}
	
	function makeRectangle(width=50,height=50,color=0xFF0000){
		let rect = new PIXI.Graphics()
		rect.beginFill(color);
		rect.drawRect(-width*.5, -height*.5, width, height);
		rect.endFill();
		return rect
	}
}