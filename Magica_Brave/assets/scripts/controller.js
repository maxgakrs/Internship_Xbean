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
        player:{
            default: null,
            type: cc.Node
        },
        panet:{
            default: null,
            type: cc.Node
        }
        
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchmove', function(event){
            var delta = event.touch.getDelta();
             this.x += delta.x;
             this.y += delta.y;
           
             
             console.log("X-"+this.x);
             console.log("Y-"+this.x);
             if(delta.y>100){
                 this.y=100;
             }
             if(delta.x>100){
                this.x=100;
            }
            if(delta.x>100){
                this.x=100;
            }
           
            
        }, this.player);
    },
    forwardClick : function(){
        this.player.y += 5;
    },
    backwardClick : function(){
        this.player.y -= 5;
    },
    LClick : function(){
        this.player.x -= 5;
    },
    RClick : function(){
        this.player.x += 5;
    },
   

     update (dt) {
    //     this.H.active = true;
    //     if(this.player.x>366){
    //         this.player.x=366;
    //     }
    //     if(this.player.y>507){
    //        this.player.y=507;
    //    }
     },
});
