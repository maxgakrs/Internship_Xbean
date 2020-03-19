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
        battle: {
            default: null,
            type: cc.Node
        },
        storynode: {
            default: null,
            type: cc.Node
        },
        storyBG: {
            default: null,
            type: cc.Node
        },
        act1: {
            default: null,
            type: cc.Node
        },
        act2: {
            default: null,
            type: cc.Node
        },
        text: {
            default: null,
            type: cc.Label
        },
        nameText: {
            default: null,
            type: cc.Label
        },
        asari: {
            default: null,
            type: cc.Node
        },
        monster1: {
            default: null,
            type: cc.Node
        },
        monster2: {
            default: null,
            type: cc.Node
        },
        asrariAnimetion: {
            default: null,
            type: cc.Node
        },
        next: {
            default: null,
            type: cc.Node
        },
        skip: {
            default: null,
            type: cc.Node
        },
        arrow1: {
            default: null,
            type: cc.Node
        },
        arrow2: {
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
        this.battle.active = false;
        this.storyBG.active = false;
        this.asari.active = false;
        this.asrariAnimetion.active = false;
        this.monster1.active = false;
        this.monster2.active = false;
        this.asari.active = false;
        this.act1.active = false;
        this.act2.active = false;
        this.arrow1.active = false;
        this.arrow2.active = false;
        this.nameText.string = 'Shina';
        this.text.string = 'Where is here??';
        this.story=0;
        this.battle=false;
      
        
     },

     nextStory : function(){
         this.story++;
        if(this.story==1){
                this.text.string = 'Why is it so dark?';
            }
        if(this.story==2){
                this.monster1.active = true;
                this.monster2.active = true;
                this.text.string = 'Is that monster?';
            }
        if(this.story==3){
                this.text.string = 'No, it is coming to attack me.';
            }
        if(this.story==4){
                this.act1.active = true;
                this.nameText.string = '???';
                this.text.string = "Don't be shocked. I came to help you."; 
            }
        if(this.story==5){
                this.nameText.string = '???';
                this.text.string = "My name is Asari Miyuki."; 
            }
        if(this.story==6){
                this.nameText.string = 'Asari';
                this.text.string = "After this I will fight the monsters with you."; 
            }
        if(this.story==7){
                this.nameText.string = 'Shina';
                this.text.string = "My name is Shina,Nice to meet you."; 
            }
        if(this.story==8){
                this.nameText.string = 'Asari';
                this.text.string = "Shina. Let's start fighting monsters."; 
                
            }
        if(this.story==9){
                this.storyBG.active = true;
                this.act1.active = false;
                this.asari.active = true;
                this.arrow1.active = true;
                this.nameText.string = '[Asari] Life :3';
                this.text.string = "Try to click the monster."; 
                this.battle=true;
                this.next.active=false;
                
            }
        if(this.story==12){
                this.act2.active = true;
                this.asari.active = true;
                this.nameText.string = '?????';
                this.text.string = "Do you think it's over?";           
            }
        if(this.story==13){    
            cc.director.loadScene('LV2');       
            }
                   
        
       
    },
    skipStory : function(){
        cc.director.loadScene('LV2');
    },
    nextmon1 : function(){
        if(this.battle!=false){
        this.story++;
        if(this.story==10){  
            this.nameText.string = '[Asari] Life :2';
            this.text.string = "No!!,Counter attack!!"; 
            this.monster2.active = false;
            this.arrow1.active = false;
            this.arrow2.active = true;
           
        }
    }
    },
    nextmon2 : function(){
        if(this.battle!=false){
        this.story++;
        if(this.story==11){
            this.asrariAnimetion.active = true;    
            this.nameText.string = '[Asari] Life :2';
            this.text.string = "Perfect!!!"; 
            this.monster1.active = false;
            this.arrow2.active = false;
            this.next.active=true;
        }
        }
    },
    // update (dt) {},
});
