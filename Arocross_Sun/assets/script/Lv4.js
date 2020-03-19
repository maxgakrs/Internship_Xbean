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
            E6: {
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
        this.life=3;
        this.enanamies=6;
        this.victory3.active = false;
        this.lose.active = false;
        this.skill1=0;
        this.S1.active = false;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
    },
    atkmon1 : function(){
        this.skill1++;
        this.E1.active = false;
        this.enanamies--;
        if(this.E2.active ==false){
            this.enanamies++;
            this.E2.active = true;
        }
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
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
        this.skill1++;
        this.E3.active = false;
        this.enanamies--;
        if(this.E4.active ==false){
            this.E4.active = true;
            this.enanamies++;
        }
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
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
        this.life--;
        this.enanamies--;
        this.skill1++;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E5.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
            }
        if(this.life==0){
                this.lose.active = true;
               // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
            }
        
    },
    atkmon6 : function(){
        this.life--;
        this.enanamies--;
        this.skill1++;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        this.E6.active = false;
        if(this.skill1==3){
            this.S1.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        if(this.enanamies==0){
            this.victory3.active = true;
        }
        if(this.life==0){
                this.lose.active = true;
               // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
        
    },
    skill1s : function(){
        if( this.E1.active == true){
            this.enanamies--;
            this.E1.active = false;
        }
        if( this.E2.active == true){
            this.enanamies--;
            this.E2.active = false;
        }
        if( this.E3.active == true){
            this.enanamies--;
            this.E3.active = false;
        }
        
        this.S1.active = false;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        if(this.enanamies<=0){
            this.scoreDisplay2.string = 'Enemies : 0' ;
            this.victory3.active = true;
            }
    },
    re : function(){

        cc.director.loadScene('LV4');
    },
    home : function(){

        cc.director.loadScene('story1');
    },
    next : function(){

        cc.director.loadScene('gameover');
    }


    // update (dt) {},
});
