
class dustbin extends BaseClass { 
	constructor(x, y){
	  super(x,y,50,50);
	  this.image = loadImage("sprites/dustbingreen.png");
	  Matter.body.setAngle(this.body,angle)
	}

  
display()
{

	super.display();
	var posBottom=this.bottomBody.position
    var posLeft=this.leftWallBody.position;
	var posRight=this.rightWallBody.position;

}
}
 