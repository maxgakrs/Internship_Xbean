// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn HP-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/HP-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/HP-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scoreDisplay1: {
            default: null,
            type: cc.Label
        },
        scoreDisplay2: {
            default: null,
            type: cc.Label
        },
        scoreDisplay3: {
            default: null,
            type: cc.Label
        },
        atkp1: {
            default: null,
            type: cc.Label
        },
        atkp3: {
            default: null,
            type: cc.Label
        },
        atkp4: {
            default: null,
            type: cc.Label
        },
        E1: {
            default: null,
            type: cc.Node
        },
        E2: {
            default: null,
            type: cc.Node
        },
        E3: {
            default: null,
            type: cc.Node
        },
        E4: {
            default: null,
            type: cc.Node
        },
        S1: {
            default: null,
            type: cc.Node
        },
       
        victory3: {
            default: null,
            type: cc.Node
        },
        lose: {
            default: null,
            type: cc.Node
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // HP-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
     this.S1.active=false;
     this.HP=1000;
     this.time=50;
     this.victory3.active = false;
     this.lose.active = false;
     this.atk1=10
     this.atk3=30
     this.atk4=10
     this.skill1=7;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.atkp1.string =this.atk1;
        this.atkp3.string =this.atk3;
        this.atkp4.string =this.atk4;
    },
    P1 : function(){
        this.HP-=this.atk1;
        this.skill1--;
        this.time--;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.E1.active = false;
        this.atk1=10
        this.atkp1.string =this.atk1;
        this.atkp3.string =this.atk3;
        this.atkp4.string =this.atk4;
        if(this.skill1<=0){
            this.scoreDisplay3.string = 0;
            this.S1.active = true;
        }
        if(this.HP<=0){
            this.victory3.active = true;
        }
        if(this.time==0){
            this.lose.active = true;
        }
    },
   
    P2 : function(){
        this.skill1--;
        this.time--;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.E1.active = true;
        this.E4.active = true;
        this.E3.active = true;
        this.atkp1.string =this.atk1;
        this.atkp3.string =this.atk3;
        this.atkp4.string =this.atk4;
        if(this.skill1<=0){
            this.scoreDisplay3.string = 0;
            this.S1.active = true;
        }
        if(this.HP<=0){
            this.victory3.active = true;
        }
        if(this.time==0){
            this.lose.active = true;
        }
    },
    
    P3 : function(){
        this.time--;
        this.HP-=this.atk3;
        this.skill1--;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.E3.active = false;
        this.atk1+=20
        this.atk3+=20
        this.atk4+=20
        this.atk3=30
        this.atkp1.string =this.atk1;
        this.atkp3.string =this.atk3;
        this.atkp4.string =this.atk4;
        if(this.skill1==0){
            this.scoreDisplay3.string = 0;
            this.S1.active = true;
        }
        if(this.HP<=0){
            this.victory3.active = true;
        }
        if(this.time==0){
            this.lose.active = true;
        }
    },
    P4 : function(){
        this.time--;
        this.HP-=this.atk4;
        this.skill1--;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.E4.active = false;
        this.atk4=10
        this.atkp1.string =this.atk1;
        this.atkp3.string =this.atk3;
        this.atkp4.string =this.atk4;
        if(this.skill1<=0){
            this.scoreDisplay3.string = 0;
            this.S1.active = true;
        }
        if(this.HP<=0){
            this.victory3.active = true;
        }
        if(this.time==0){
            this.lose.active = true;
        }
    },
    Skil1s : function(){
        this.time--;
        this.HP-=30;
        this.skill1=7;
        this.scoreDisplay1.string = 'HP : ' + this.HP;
        this.scoreDisplay2.string = 'Try to click  ' + this.time +' time';
        this.scoreDisplay3.string = this.skill1;
        this.S1.active = false;
        if(this.skill1==0){
            this.S1.active = true;
        }
        if(this.HP<=0){
            this.victory3.active = true;
        }
        if(this.time==0){
            this.lose.active = true;
        }
    },
    re : function(){

        cc.director.loadScene('bossLv2');
    },
    home : function(){

        cc.director.loadScene('boss1');
    },
    next : function(){

        cc.director.loadScene('boss3');
    }

    
    // update (dt) {},
});
