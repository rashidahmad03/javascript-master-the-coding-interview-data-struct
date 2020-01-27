/**
 * 
 */
class Player {
	constructor(name,type){
		this.name=name;
		this.type=type;
	}
	introduction(){
		console.log('this is my'+this.name);
		
	}
}
class wizard extends Player{
	constructor(name,type){
		super(name,type);
	}
	Play(){
		console.log("name "+this.type);
	}
}

var sd=new wizard("Rashid","football");
sd.Play();
sd.introduction();