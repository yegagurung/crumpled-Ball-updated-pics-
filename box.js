class Box {
    constructor(x,y) {
      this.x=x
      this.y=y
      this.boxwidth=200
      this.boxheight=100
      this.boxthickness=20
      this.angle=0
      
      this.image=loadImage("dustbingreen.png")  
      
      this.bottombody = Bodies.rectangle(this.x,this.y,this.boxwidth,this.boxthickness,{isStatic:true});
      this.leftbody = Bodies.rectangle(this.x-this.boxwidth/2,this.y-this.boxheight/2,this.boxthickness,this.boxheight,{isStatic:true});
      this.rightbody = Bodies.rectangle(this.x+this.boxwidth/2,this.y-this.boxheight/2,this.boxthickness,this.boxheight,{isStatic:true});
      Matter.Body.setAngle(this.leftbody,this.angle)
      Matter.Body.setAngle(this.rightbody,-1*this.angle)
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
    }
    display(){
      var pos =this.bottombody.position;
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      push()
      translate(pos.x,pos.y+10)

      rectMode(CENTER);
      angleMode(RADIANS)
      fill("blue");
      imageMode(CENTER)
      
      image(this.image,0, -this.boxheight/2,this.boxwidth,this.boxheight);
      pop()
      
      push()
      translate(posleft.x,posleft.y)
        
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(this.angle)
      
      fill("blue");
      //rect(0, 0, this.boxthickness, this.boxheight);
      pop()
    
      push()
      translate(posright.x,posright.y)
        
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(-1*this.angle)
      
      fill("blue");
      //rect(0, 0, this.boxthickness, this.boxheight);
      pop()
    }
  };