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

     onLoad () {
        try {
         this.life=2;
         this.enanamies=4;
         this.victory3.active = false;
         this.lose.active = false;
        }
        catch(error) {
           
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }

     },

    atkhp : function(){
        this.life--;
        this.scoreDisplay1.string = 'Life : ' + this.life;
        if(this.life==0){
            this.lose.active = true;
           // cc.sys.localStorage.setItem(‘save’, JSON.stringify(saveData));
        }
    },
    atk2 : function(){

        this.enanamies=this.enanamies-2;
        this.scoreDisplay2.string = 'Enemies : ' + this.enanamies;
        if(this.enanamies==0){
            this.victory3.active = true;
        }
    },
    re : function(){

        cc.director.loadScene('LV2');
    },
    home : function(){

        cc.director.loadScene('story1');
    },
    next : function(){

        cc.director.loadScene('LV3');
    }

    // update (dt) {},
});
