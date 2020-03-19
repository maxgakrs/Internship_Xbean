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
       
            scoreDisplay1: {
                default: null,
                type: cc.Label
            },
            scoreDisplay2: {
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
            E5: {
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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        this.life=2;
        this.enanamies=5;
        this.victory3.active = false;
        this.lose.active = false;
        this.skill1=0;
        this.S1.active = false;
    },
    atkmon1 : function(){
        this.enanamies--;
        this.life--;
        this.skill1++;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E1.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.life==0){
            this.lose.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
    },
    atkmon2 : function(){
        this.enanamies--;
        this.life--;
        this.skill1++;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E2.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.life==0){
            this.lose.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
    },
    atkmon3 : function(){
        this.enanamies--;
        this.life--;
        this.skill1++;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E3.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.life==0){
            this.lose.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
       
    },
    atkmon4 : function(){
        this.enanamies--;
        this.skill1++;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E4.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
       
    },
    atkmon5 : function(){
        this.enanamies--;
        this.skill1++;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E5.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
        
    },
    skill1s : function(){
        this.enanamies--;
        this.enanamies--;
        this.enanamies--;
        this.E1.active = false;
        this.E2.active = false;
        this.E3.active = false;
        this.S1.active = false;
        if(this.enanamies<0){
            this.scoreDisplay2.string = 'Enemies : 0' ;
            this.victory3.active = true;
            }
    },
    re : function(){

        cc.director.loadScene('LV3');
    },
    home : function(){

        cc.director.loadScene('story1');
    },
    next : function(){

        cc.director.loadScene('LV4');
    }


    // update (dt) {},
});
