// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        },
        pointGo: {
            default: null,
            type: cc.Node
        },
       
    },

    
     onLoad () {
        this.timewalk=0;
        this.walk=false;
        this.oldpointX=this.pointGo.x;
        this.oldpointY=this.pointGo.y;
        this.tuchS=10;
        this.speed=3;
        //ทิศทางการเดิน 8 ทิศ
        this.moveup=false;
        this.movedown=false;
        this.moveleft=false;
        this.moveright=false;
        this.moverightup=false;
        this.moverightdown=false;
        this.moveleftup=false;
        this.moveleftdowb=false;

        this.pointGo.y=this.player.y;
        this.pointGo.x=this.player.x;
     },
     resetMove (){
        this.moveup=false;
        this.movedown=false;
        this.moveleft=false;
        this.moveright=false;
        this.moverightup=false;
        this.moverightdown=false;
        this.moveleftup=false;
        this.moveleftdowb=false;
       
     },

     update (dt) {
        console.log("Time:"+ this.timewalk);
       if(this.player.y!=this.pointGo.y&&this.player.x!=this.pointGo.x&&this.timewalk==0)
       {
           //ขึ้น
           if(this.pointGo.y>this.player.y+this.tuchS&&
                (this.player.x<this.player.x+this.tuchS&&
                 this.player.x>this.player.x-this.tuchS)
             ){
              this.moveup=true;
           }
           //ลง
           else if(this.pointGo.y<this.player.y-this.tuchS&&
                    (this.player.x<this.player.x+this.tuchS&&
                    this.player.x>this.player.x-this.tuchS)
                ){
            this.movedown=true;
            }
            //ซ้าย
           else if(this.pointGo.x<this.player.x-this.tuchS&&
                    (this.player.y<this.player.y+this.tuchS&&
                     this.player.y>this.player.y-this.tuchS)
                ){
                this.moveleft=true;
             }
            //ขวา
           else if(this.pointGo.x>this.player.x+this.tuchS&&
                    (this.player.y<this.player.y+this.tuchS&&
                     this.player.y>this.player.y-this.tuchS)
                ){
              this.moveright=true;
              }
            //ขึ้นซ้าย
           else if(this.pointGo.y>this.player.y+this.tuchS&&
                   this.pointGo.x<this.player.x-this.tuchS){
              this.moveleftup=true;
           }
           //ขึ้นขวา
           else if(this.pointGo.y<this.player.y-this.tuchS&&
                   this.pointGo.x>this.player.x+this.tuchS){
            this.moverightup=true;
            }
            //ลงซ้าย
           else if(this.pointGo.y<this.player.y-this.tuchS&&
                   this.pointGo.x<this.player.x-this.tuchS){
                this.moveleftdowb=true;
             }
            //ลงขวา
           else if(this.pointGo.y<this.player.y-this.tuchS&&
                    this.pointGo.x>this.player.x+this.tuchS){
              this.moverightdown=true;
              }


           this.walk=true;
       }
       if(this.walk==true){
           console.log("Walk ON!!");
           if(this.moveup==true){
            // this.player.x+=this.speed;
            this.player.y+=this.speed;
           } 
           else  if(this.movedown==true){
            // this.player.x+=this.speed;
            this.player.y-=this.speed;
           } 
           else  if(this.moveleft==true){
            // this.player.x+=this.speed;
            this.player.x-=this.speed;
           } 
           else  if(this.moveright==true){
            // this.player.x+=this.speed;
            this.player.x+=this.speed;
           } 
           else  if(this.moverightup==true){
            this.player.y+=this.speed;
            this.player.x+=this.speed;
           } 
           else  if(this.moverightdown==true){
            this.player.x+=this.speed;
            this.player.y-=this.speed;
           } 
           else  if(this.moveleftup==true){
            this.player.y+=this.speed;
            this.player.x-=this.speed;
           } 
           else  if(this.moveleftdowb==true){
            this.player.y+=this.speed;
            this.player.x-=this.speed;
           } 
          
          console.log("Xmove : "+ this.player.x);
          console.log("Ymove : "+ this.player.y);
          console.log("Xold : "+ this.oldpointX);
          console.log("Yold : "+ this.oldpointY);
          this.timewalk++;
        if(this.timewalk>=60){
            this.walk=false;
            this.timewalk=0;
            this.pointGo.y=this.player.y;
            this.pointGo.x=this.player.x;
            this.resetMove ();
        }
       }
        
     },
});
