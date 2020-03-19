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
        //System All
        nextlvDoor: {
            default: null,
            type: cc.Node
        },
        BG: {
            default: null,
            type: cc.Node
        },
        gameover: {
            default: null,
            type: cc.Node
        },
        victory: {
            default: null,
            type: cc.Node
        },
        lvlabel: {
            default: null,
            type: cc.Label
        },
        //--Player Seting-- 
        bullet: {
            default: null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        },
        hpPlayer: {
            default: null,
            type: cc.Node
        },
        damageText: {
            default: null,
            type: cc.Label
        },
        //--Enemy1 Seting-- 
        Enemy1: {
            default: null,
            type: cc.Node
        },
        hpEnemy1: {
            default: null,
            type: cc.Node
        },
        bulletEnemy1: {
            default: null,
            type: cc.Node
        },
        damageEnemy1Text: {
            default: null,
            type: cc.Label
        },
        //--Enemy2 Seting-- 
        Enemy2: {
            default: null,
            type: cc.Node
        },
        hpEnemy2: {
            default: null,
            type: cc.Node
        },
        bulletEnemy2: {
            default: null,
            type: cc.Node
        },
        damageEnemy2Text: {
            default: null,
            type: cc.Label
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         //System game
         this.hitbox=100;
         this.speedbulletEnemy=3;
         this.LV=1;
         this.lvlabel.string="Level : "+this.LV;
         //Player 
         this.PlayerX=this.player.x;
         this.PlayerY=this.player.y;
         this.timePlayer=0;
         this.speedbullet=20;
         this.damagebullet=10;
         this.HpPlayer=100;
         this.bullet.x=this.player.x;
         this.bullet.y=this.player.y;
         //Enemy1
         this.HpEnemy1=100;
         this.bulletEnemy1.x=this.Enemy1.x;
         this.bulletEnemy1.y=this.Enemy1.y;
         this.damagebulletEnemy=10;
         this.timeEnemy1=0;
          //Enemy2
          this.HpEnemy2=100;
          this.bulletEnemy2.x=this.Enemy2.x;
          this.bulletEnemy2.y=this.Enemy2.y;
          this.damagebulletEnemy2=10;
          this.timeEnemy2=0;
          this.E2moveR=true;
         this.E2moveL=false;
         //check Player move
         this.notmovetime=0;
         this.NotmoveX=this.player.x;
         this.NotmoveY=this.player.y;
     },
     setUpLV2(){
        this.LV++;
        this.lvlabel.string="Level : "+this.LV;
        this.COL-=10
       
        if(this.BG.active==true){
            this.BG.active=false;
        }
        else if(this.BG.active==false){
            this.BG.active=true;
        }
        this.timePlayer=0;
        this.bullet.x=this.player.x;
        this.bullet.y=this.player.y;
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.speedbulletEnemy=+3;
        //Enemy1
        this.Enemy1.active=true;
        this.bulletEnemy1.active=true;
        this.HpEnemy1=100;
        this.hpEnemy1.setScale(this.HpEnemy1,1);
        this.E1moveR=true;
        this.E1moveL=false;
        //this.Enemy1.x-=100;
        this.bulletEnemy1.x=this.Enemy1.x;
        this.bulletEnemy1.y=this.Enemy1.y;
        this.damagebulletEnemy+=10;
        this.timeEnemy1=0;
         //Enemy2
         this.Enemy2.active=true;
         this.bulletEnemy2.active=true;
         this.HpEnemy2=100;
         this.hpEnemy2.setScale(this.HpEnemy2,1);
        
        // this.Enemy2.y+=50;
         this.bulletEnemy2.x=this.Enemy2.x;
         this.bulletEnemy2.y=this.Enemy2.y;
         this.damagebulletEnemy2+=10;
         this.timeEnemy2=0;

         this.victory.active=false;
         this.nextlvDoor.active=false;

     },
    HP50(){
        this.HpPlayer+=50;
        this.hpPlayer.setScale(this.HpPlayer,1);
        this.setUpLV2();

    },
    ATKD15(){
        this.damagebullet+=15;  
        this.setUpLV2();
    },
    ATKSP(){
        this.speedbullet+=15;
        this.setUpLV2();
    },
    setGrid(){
         //Setขอบ 
        if(this.player.x<126.99){
            this.player.x=126.99;
        }
        else if(this.player.x>615.174){
            this.player.x=615.174;
        }
        else if(this.player.y<89.636){
            this.player.y=89.636;
        }
        else if(this.player.y>1001.035){
            this.player.y=1001.035;
        }
    },
    resetText(){
         //รีเซ็ตText
        if(this.timePlayer==10){
            this.damageText.string="";
        }
        if(this.timeEnemy1==10){
            this.damageEnemy1Text.string="";
        }
    },
    resetBullet(){
       //รีเซ็ตกระสุน
       //Player Bullet
        if(this.timePlayer==60){
        this.bullet.x=this.player.x;
        this.bullet.y=this.player.y
        this.timePlayer=0;
         }
       //Enemy Bullet
        if(this.timeEnemy1==(300-(this.speedbulletEnemy*10))){
        this.bulletEnemy1.x=this.Enemy1.x;
        this.bulletEnemy1.y=this.Enemy1.y;
        this.timeEnemy1=0;
         } 
         if(this.timeEnemy2==(300-(this.speedbulletEnemy*10))){
            this.bulletEnemy2.x=this.Enemy2.x;
            this.bulletEnemy2.y=this.Enemy2.y;
            this.timeEnemy2=0;
             } 
    },
    resetGame(){
        this.victory.active=false;
        cc.director.loadScene('game');
    },
    hitEnemy1(){
        //Set UP
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet.x<=this.Enemy1.x+this.hitbox&&
            this.bullet.y<=this.Enemy1.y+this.hitbox&&
            this.bullet.x>=this.Enemy1.x-this.hitbox&&
            this.bullet.y>=this.Enemy1.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            this.HpEnemy1-=this.damagebullet;
            this.hpEnemy1.setScale(this.HpEnemy1,1);
            this.damageText.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            if(this.HpEnemy1<=0){
                this.Enemy1.active=false;
                this.bulletEnemy1.active=false;
               
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bullet.x=this.player.x;
             this.bullet.y=this.player.y
             this.timePlayer=0;
         }
    },
    Enemy1Shoot(){
        //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        if(this.bulletEnemy1.x<=this.player.x+this.hitbox&&
            this.bulletEnemy1.y<=this.player.y+this.hitbox&&
            this.bulletEnemy1.x>=this.player.x-this.hitbox&&
            this.bulletEnemy1.y>=this.player.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemy;
            this.hpPlayer.setScale(this.HpPlayer,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebulletEnemy;
             //เช็คHPถ้าน้อยกว่า=0
            if(this.HpPlayer<=0){
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemy1);
             //รีเซ็ตกระสุน
            this.bulletEnemy1.x=this.Enemy1.x;
            this.bulletEnemy1.y=this.Enemy1.y;
            this.timeEnemy1=0;
         }
    },
    hitEnemy2(){
        //Set UP
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet.x<=this.Enemy2.x+this.hitbox&&
            this.bullet.y<=this.Enemy2.y+this.hitbox&&
            this.bullet.x>=this.Enemy2.x-this.hitbox&&
            this.bullet.y>=this.Enemy2.y-this.hitbox&&
            this.Enemy2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            this.HpEnemy2-=this.damagebullet;
            this.hpEnemy2.setScale(this.HpEnemy2,1);
            this.damageText.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            if(this.HpEnemy2<=0){
                this.Enemy2.active=false;
                this.bulletEnemy2.active=false;
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bullet.x=this.player.x;
             this.bullet.y=this.player.y
             this.timePlayer=0;
         }
    },
    Enemy2Shoot(){
        //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        if(this.bulletEnemy2.x<=this.player.x+this.hitbox&&
            this.bulletEnemy2.y<=this.player.y+this.hitbox&&
            this.bulletEnemy2.x>=this.player.x-this.hitbox&&
            this.bulletEnemy2.y>=this.player.y-this.hitbox&&
            this.Enemy2.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemy;
            this.hpPlayer.setScale(this.HpPlayer,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebulletEnemy;
             //เช็คHPถ้าน้อยกว่า=0
            if(this.HpPlayer<=0){
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemy1);
             //รีเซ็ตกระสุน
            this.bulletEnemy2.x=this.Enemy2.x;
            this.bulletEnemy2.y=this.Enemy2.y;
            this.timeEnemy2=0;
         }
    },
     update (dt) {
        this.timePlayer++;
         this.timeEnemy1++;
         this.timeEnemy2++;
         
         this.bullet.active=true;
        // this.Enemy1.y--;
         this.bullet.y+=this.speedbullet;
         this.bulletEnemy1.y-=this.speedbulletEnemy;
         this.bulletEnemy2.y-=this.speedbulletEnemy;
        
        if(this.Enemy1.x>615.174){
            this.E1moveR=true;
            this.E1moveL=false;
        }
        if(this.Enemy1.x<126.99){
            this.E1moveL=true;
            this.E1moveR=false;
        }
        if(this.E1moveR==true)
        {
            this.Enemy1.x--;
        }
        if(this.E1moveL==true)
        {
            this.Enemy1.x++;
        }
        if(this.Enemy2.x>615.174){
            this.E2moveR=true;
            this.E2moveL=false;
        }
        if(this.Enemy2.x<126.99){
            this.E2moveL=true;
            this.E2moveR=false;
        }
        if(this.E2moveR==true)
        {
            this.Enemy2.x--;
        }
        if(this.E2moveL==true)
        {
            this.Enemy2.x++;
        }
         if(this.Enemy2.active==false&&this.Enemy2.active==false){
            this.nextlvDoor.active=true;
         }
         //กระสุนของ Player ล็อกเป้า Enemy1
        //  if(this.timePlayer==30){
        //     if(this.Enemy1.active==true){
        //         this.bullet.x=this.Enemy1.x;
        //     }
        //  }
        //เคลื่อนที่ไม่ยิง
        // if(this.player.x==this.NotmoveX&&this.player.y==this.NotmoveY){
        //     this.timePlayer++;
        // }
        // else{
        //     this.notmovetime++;
        //     if(this.notmovetime==10){
        //         this.notmovetime=0;
        //         this.NotmoveX=this.player.x;
        //         this.NotmoveY=this.player.y;
        //     }
        // }
        //เปิดวาบไปด่านต่อไป
        if(this.nextlvDoor.active==true){
           if(this.player.x<=this.nextlvDoor.x+this.hitbox&&
            this.player.y<=this.nextlvDoor.y+this.hitbox&&
            this.player.x>=this.nextlvDoor.x-this.hitbox&&
            this.player.y>=this.nextlvDoor.y-this.hitbox&&
            this.nextlvDoor.active==true){
                this.victory.active=true;
            }
        }
        this.hitEnemy1();
        this.Enemy1Shoot();
        this.hitEnemy2();
        this.Enemy2Shoot();
        this.resetText();  
        this.resetBullet();
        this.setGrid();
      
     },
});
