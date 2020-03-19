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
        Player: {
            default: null,
            type: cc.Node,
            
        },
        UPPad: {
            default: null,
            type: cc.Node,
            
        },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.UClick=false;
         this.DClick=false;
         this.LClick=false;
         this.RClick=false;
         this.LUClick=false;
         this.LDClick=false;
         this.RUlick=false;
         this.RDlick=false;
         this.speed=3;
        //  this.UPPad.on('touchmove', function(event){
        //    // this.x += delta.x;
        //    console.log("Tuch Move");
        //     this.Player += this.speed;          
        // }, this.Player);

     },
     offAction(){
        this.UClick=false;
        this.DClick=false;
        this.LClick=false;
        this.RClick=false;
        this.LUClick=false;
        this.LDClick=false;
        this.RUlick=false;
        this.RDlick=false;
     },
     UClick1(){
      this.offAction();
      this.UClick=true;
    
     },
     DClick1(){
        this.offAction();
        this.DClick=true;
    },
    LClick1(){
        this.offAction();
        this.LClick=true;
    },
    RClick1(){
        this.offAction();
        this.RClick=true;
    },
    URClick1(){
        this.offAction();
        this.RUlick=true;
    },
    ULClick1(){
        this.offAction();
        this.LUlick=true;
    },
    DRClick1(){
        this.offAction();
        this.RDlick=true;
    },
    DLClick1(){
        this.offAction();
        this.LDlick=true;
    },

    
   

     update (dt) {
         
         if(this.UClick==true){
             this.Player.y+=this.speed;
             console.log("UP");
         }
         else if(this.DClick==true){
            this.Player.y-=this.speed;
        }
        else if(this.RClick==true){
            this.Player.x+=this.speed;
        }
        else if(this.LClick==true){
            this.Player.x-=this.speed;
        }
        else if(this.LUlick==true){
            if(this.Player.x>=0){
                this.Player.x--;
            }
            if(this.Player.y>=0){
                this.Player.y++;
            }
            if(this.Player.x<=0){
                this.Player.x++;
            }
            if(this.Player.y<=0){
                this.Player.y--;
            }

        }
        else if(this.RUlick==true){
            if(this.Player.x>=0){
                this.Player.x++;
            }
            if(this.Player.y>=0){
                this.Player.y++;
            }
            if(this.Player.x<=0){
                this.Player.x--;
            }
            if(this.Player.y<=0){
                this.Player.y--;
            }
        }
        else if(this.LDlick==true){
            this.Player.x--;
            this.Player.y--;
        }
        else if(this.RDlick==true){
            this.Player.x++;
            this.Player.y--;
        }
        

     },
});
