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

        //LV1
        question:{
            default: null,
            type: cc.Label
        },     
        Lv_label:{
            default: null,
            type: cc.Label
        },
        victory:{
            default: null,
            type: cc.Node
        }, 
        gameover:{
            default: null,
            type: cc.Node
        },   
        hint:{
            default: null,
            type: cc.Node
        }, 
        mainUI:{
            default: null,
            type: cc.Node
        }, 
        hintLabel:{
            default: null,
            type: cc.Label
        }, 
        lv1:{
            default: null,
            type: cc.Node
        },
            A1:{
                default: null,
                type: cc.Node
            },
            A2:{
                default: null,
                type: cc.Node
            },
            A3:{
                default: null,
                type: cc.Node
            },
            A4:{
                default: null,
                type: cc.Node
            },
        lv2:{
            default: null,
            type: cc.Node
        },
            arkLv2:{
                default: null,
                type: cc.Label
            },
        lv3:{
            default: null,
            type: cc.Node
        },
        lv4:{
            default: null,
            type: cc.Node
        },
            lv4A2:{
                default: null,
                type: cc.Node
            },
        lv5:{
            default: null,
            type: cc.Node
        },
            lv5A1:{
                default: null,
                type: cc.Node
            },
            lv5A2:{
                default: null,
                type: cc.Node
            },
        lv6:{
            default: null,
            type: cc.Node
        },
            lv6A1:{
                default: null,
                type: cc.Node
            },
             lv6A2:{
                default: null,
                type: cc.Node
            },
        lv7:{
            default: null,
            type: cc.Node
        },
        arkLv7:{
            default: null,
            type: cc.Label
        },
        lv8:{
            default: null,
            type: cc.Node
        },
        arkLv8:{
            default: null,
            type: cc.Label
        },
        Lv8box:{
            default: null,
            type: cc.Node
        },
        lv8candy:{
            default: null,
            type: cc.Node
        },
        lv9:{
            default: null,
            type: cc.Node
        },
        lv9sun:{
            default: null,
            type: cc.Node
        },
        lv9moon:{
            default: null,
            type: cc.Node
        },
        lv10:{
            default: null,
            type: cc.Node
        },
        lv10tree1:{
            default: null,
            type: cc.Node
        },
        lv10tree2:{
            default: null,
            type: cc.Node
        },
        lv10door:{
            default: null,
            type: cc.Node
        },
        lv11:{
            default: null,
            type: cc.Node
        },
        lv11A1:{
            default: null,
            type: cc.Node
        },
        lv11A2:{
            default: null,
            type: cc.Node
        },
        lv11A3:{
            default: null,
            type: cc.Node
        },
        lv12:{
            default: null,
            type: cc.Node
        },
        arkLv12:{
            default: null,
            type: cc.Label
        },
        lv12:{
            default: null,
            type: cc.Node
        },
       
        lv12T1:{
            default: null,
            type: cc.Node
        },
       
        lv12T1_1:{
            default: null,
            type: cc.Node
        },
        lv12T1_2:{
            default: null,
            type: cc.Node
        },
        lv12T1_3:{
            default: null,
            type: cc.Node
        },
        lv12T1_4:{
            default: null,
            type: cc.Node
        },
        lv12T2:{
            default: null,
            type: cc.Node
        },
      
        lv12T2_1:{
            default: null,
            type: cc.Node
        },
        lv12T2_2:{
            default: null,
            type: cc.Node
        },
        lv12T2_3:{
            default: null,
            type: cc.Node
        },
        lv12T2_4:{
            default: null,
            type: cc.Node
        },
        lv13:{
            default: null,
            type: cc.Node
        },
        lv13A1:{
            default: null,
            type: cc.Label
        },
        lv13A2:{
            default: null,
            type: cc.Node
        },
        lv14:{
            default: null,
            type: cc.Node
        },
        lv14_A1:{
            default: null,
            type: cc.Node
        },
        lv14_A2:{
            default: null,
            type: cc.Node
        },
        lv14_A3:{
            default: null,
            type: cc.Node
        },
        lv14_A4:{
            default: null,
            type: cc.Node
        },
        lv14_A5:{
            default: null,
            type: cc.Node
        },
        lv14_A6:{
            default: null,
            type: cc.Node
        },
        lv14_A7:{
            default: null,
            type: cc.Label
        },
        
        lv15:{
            default: null,
            type: cc.Node
        },
        lv15A1:{
            default: null,
            type: cc.Node
        },
        lv16:{
            default: null,
            type: cc.Node
        },
        lv16A1:{
            default: null,
            type: cc.Node
        },
        lv17:{
            default: null,
            type: cc.Node
        },
        lv17A1:{
            default: null,
            type: cc.Node
        },
        lv17A2:{
            default: null,
            type: cc.Node
        },

        lv18:{
            default: null,
            type: cc.Node
        },
        lv18A1:{
            default: null,
            type: cc.Node
        },
        lv19:{
            default: null,
            type: cc.Node
        },
        lv20:{
            default: null,
            type: cc.Node
        },
        maplv1:{
            default: null,
            type: cc.Node
        },
        maplv2:{
            default: null,
            type: cc.Node
        },
        maplv3:{
            default: null,
            type: cc.Node
        },
        maplv4:{
            default: null,
            type: cc.Node
        },
        maplv5:{
            default: null,
            type: cc.Node
        },
        maplv6:{
            default: null,
            type: cc.Node
        },
        maplv7:{
            default: null,
            type: cc.Node
        },
        maplv8:{
            default: null,
            type: cc.Node
        },
        maplv9:{
            default: null,
            type: cc.Node
        },
        maplv10:{
            default: null,
            type: cc.Node
        },
        maplv11:{
            default: null,
            type: cc.Node
        },
        maplv12:{
            default: null,
            type: cc.Node
        },
        maplv13:{
            default: null,
            type: cc.Node
        },
        maplv14:{
            default: null,
            type: cc.Node
        },
        maplv15:{
            default: null,
            type: cc.Node
        },
        maplv16:{
            default: null,
            type: cc.Node
        },
        maplv17:{
            default: null,
            type: cc.Node
        },
        maplv18:{
            default: null,
            type: cc.Node
        },
        maplv19:{
            default: null,
            type: cc.Node
        },
        maplv20:{
            default: null,
            type: cc.Node
        },
        item_1:{
            default: null,
            type: cc.Node
        },
        item_2:{
            default: null,
            type: cc.Node
        },
        item_3:{
            default: null,
            type: cc.Node
        },
        item_4:{
            default: null,
            type: cc.Node
        },
        item_5:{
            default: null,
            type: cc.Node
        },
        item_6:{
            default: null,
            type: cc.Node
        },
        item_7:{
            default: null,
            type: cc.Node
        },
        item_8:{
            default: null,
            type: cc.Node
        },
        item_8Label:{
            default: null,
            type: cc.Label
        },
           
                
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        this.settingLV1();
        this.swHint=false;
        this.map=false;
        this.LV=1;
        this.lock2=true;
        this.lock3=true;
        this.lock4=true;
        this.lock5=true;
        this.lock6=true;
        this.lock7=true;
        this.lock8=true;
        this.lock9=true;
        this.lock10=true;
        this.lock11=true;
        this.lock12=true;
        this.lock13=true;
        this.lock14=true;
        this.lock15=true;
        this.lock16=true;
        this.lock17=true;
        this.lock18=true;
        this.lock19=true;
        this.lock20=true;
       
        this.coins=0;
        this.lv20sw1=false;
        this.lv20sw2=false;
        this.lv20sw3=false;

      
    },
    item1Click:function(){
        this.item_1.active=true;
    },
    homeGame: function () {
        cc.director.loadScene('home');
    },
    reGame: function () {
        cc.director.loadScene('game');
    },
    hintClick: function () {
        if(this.swHint==false){this.hint.active=true;this.swHint=true;}
        else if(this.swHint==true){this.hint.active=false;this.swHint=false;}
        if(this.LV==7&this.swHint==true){
            this.lv18A1.active = true;
        }
    },
    loadMapClick: function(){
        this.loadMap();
        if(this.map==false){this.maplv1.active=true;this.map=true;}
        else if(this.map==true){this.maplv1.active=false;this.map=false;}
    },
    loadMap1: function () {
        this.closeallLV();this.LV=1;this.LoadLV();this.maplv1.active=false
    },
    loadMap2: function () {
        if(this.lock2==false){
            this.closeallLV();this.LV=2;this.LoadLV();this.maplv1.active=false
        }
    },
    loadMap3: function () {
        if(this.lock3==false){
            this.closeallLV();this.LV=3;this.LoadLV();this.maplv1.active=false
        }
    },
    loadMap4: function () {
        if(this.lock4==false){
            this.closeallLV();this.LV=5;this.LoadLV();this.maplv1.active=false
        }
    },
    loadMap5: function () {if(this.lock5==false){this.closeallLV();this.LV=5;this.LoadLV();this.maplv1.active=false}},
    loadMap6: function () {if(this.lock6==false){this.closeallLV();this.LV=6;this.LoadLV();this.maplv1.active=false}},
    loadMap7: function () {if(this.lock7==false){this.closeallLV();this.LV=7;this.LoadLV();this.maplv1.active=false}},
    loadMap8: function () {if(this.lock8==false){this.closeallLV();this.LV=8;this.LoadLV();this.maplv1.active=false}},
    loadMap9: function () {if(this.lock9==false){this.closeallLV();this.LV=9;this.LoadLV();this.maplv1.active=false}},
    loadMap10: function () {if(this.lock10==false){this.closeallLV();this.LV=10;this.LoadLV();this.maplv1.active=false}},
    loadMap11: function () {if(this.lock11==false){this.closeallLV();this.LV=11;this.LoadLV();this.maplv1.active=false}},
    loadMap12: function () {if(this.lock12==false){this.closeallLV();this.LV=12;this.LoadLV();this.maplv1.active=false}},
    loadMap13: function () {if(this.lock13==false){this.closeallLV();this.LV=13;this.LoadLV();this.maplv1.active=false}},
    loadMap14: function () {if(this.lock14==false){this.closeallLV();this.LV=14;this.LoadLV();this.maplv1.active=false}},
    loadMap15: function () {if(this.lock15==false){this.closeallLV();this.LV=15;this.LoadLV();this.maplv1.active=false}},
    loadMap16: function () {if(this.lock16==false){this.closeallLV();this.LV=16;this.LoadLV();this.maplv1.active=false}},
    loadMap17: function () {if(this.lock17==false){this.closeallLV();this.LV=17;this.LoadLV();this.maplv1.active=false}},
    loadMap18: function () {if(this.lock18==false){this.closeallLV();this.LV=18;this.LoadLV();this.maplv1.active=false}},
    loadMap19: function () {if(this.lock19==false){this.closeallLV();this.LV=19;this.LoadLV();this.maplv1.active=false}},
    loadMap20: function () {if(this.lock20==false){this.closeallLV();this.LV=20;this.LoadLV();this.maplv1.active=false}},

    loadMap: function () {
        if(this.lock2==false){ this.maplv2.active=false; }
        if(this.lock3==false){ this.maplv3.active=false; }
        if(this.lock4==false){ this.maplv4.active=false; }
        if(this.lock5==false){ this.maplv5.active=false; }
        if(this.lock6==false){ this.maplv6.active=false; }
        if(this.lock7==false){ this.maplv7.active=false; }
        if(this.lock8==false){ this.maplv8.active=false; }
        if(this.lock9==false){ this.maplv9.active=false; }
        if(this.lock10==false){ this.maplv10.active=false; }
        if(this.lock11==false){ this.maplv11.active=false; }
        if(this.lock12==false){ this.maplv12.active=false; }
        if(this.lock13==false){ this.maplv13.active=false; }
        if(this.lock14==false){ this.maplv14.active=false; }
        if(this.lock15==false){ this.maplv15.active=false; }
        if(this.lock16==false){ this.maplv16.active=false; }
        if(this.lock17==false){ this.maplv17.active=false; }
        if(this.lock18==false){ this.maplv18.active=false; }
        if(this.lock19==false){ this.maplv19.active=false; }
        if(this.lock20==false){ this.maplv20.active=false; }
    },
    closeallLV : function(){
        
        if(this.LV==1){ this.lv1.active=false; }
        if(this.LV==2){ this.lv2.active=false; }
        if(this.LV==3){ this.lv3.active=false; }
        if(this.LV==4){ this.lv4.active=false; }
        if(this.LV==5){ this.lv5.active=false; }
        if(this.LV==6){ this.lv6.active=false; }
        if(this.LV==7){ this.lv7.active=false; }
        if(this.LV==8){ this.lv8.active=false; }
        if(this.LV==9){ this.lv9.active=false; }
        if(this.LV==10){ this.lv10.active=false; }
        if(this.LV==11){ this.lv11.active=false; }
        if(this.LV==12){ this.lv12.active=false; }
        if(this.LV==13){ this.lv13.active=false; }
        if(this.LV==14){ this.lv14.active=false; }
        if(this.LV==15){ this.lv15.active=false; }
        if(this.LV==16){ this.lv16.active=false; }
        if(this.LV==17){ this.lv17.active=false; }
        if(this.LV==18){ this.lv18.active=false; }
        if(this.LV==19){ this.lv19.active=false; }
        if(this.LV==20){ this.lv20.active=false; }

    },
    settingLV1: function () {
        
        this.lv1.active = true;
        this.A1.active=false;
        this.gameover.active=false;
        this.victory.active=false;
        this.A2.active=false;
        this.A3.active=false;
        this.A4.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 1';
        this.question.string = "What's the biggest?";
        this.hintLabel.string = "Not in real life";
    },
    settingLV2: function () {
        this.lv1.active=false;
        this.lv2.active=true;
        this.lv2_ask=1;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 2';      
        this.question.string = "How many wheels in the car?";
        this.hintLabel.string = "Let's count";
    },
    settingLV3: function () {
        this.lv2.active=false;
        this.lv3.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 3';
        this.question.string = "Which is unlike anything else?";
        this.hintLabel.string = "It's on the top";
    },
    settingLV4: function () {
        this.lv3.active=false;
        this.lv4.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.lv4A2.active=false;
        this.Lv_label.string = 'LV 4';
        this.question.string = "Find red!!!";
        this.hintLabel.string = "Must try some mistakes";
    },
    settingLV5: function () {
        this.lv4.active=false;
        this.lv5.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.lv5A2.active=true;
        this.Lv_label.string = 'LV 5';
        this.question.string = "Can be plugged in!!!";
        this.hintLabel.string = "2 = 2";
        this.lv5A1.x=-284.697;
        this.lv5A1.y=-62.191;
        this.swLv5=false;

    },
    settingLV6: function () {
        this.lv5.active=false;
        this.lv6.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.lv6A2.active=false;
        this.Lv_label.string = 'LV 6';
        this.question.string = "find water!!!";
        this.hintLabel.string = "From earth to sky";
        this.lv6A1.x=-67.858;
        this.lv6A1.y=44.86;
        this.swLv5=false;
    },
    settingLV7: function () {
        this.lv6.active=false;
        this.lv7.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 7';
        this.question.string = "What is number?";
        this.hintLabel.string = "01";
        this.lv2_ask = 0;
    },
    settingLV8: function () {
        this.lv7.active=false;
        this.lv8.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 8';
        this.question.string = "If put candy in the box how many candy?";
        this.hintLabel.string = "Try to counting in the box";
        this.Lv8box.x=311.71;
        this.Lv8box.y=382;
        this.lv8candy.x=706.933;
        this.lv8candy.y=407.118;
        this.lv2_ask = 0;
    },
    settingLV9: function () {
        this.lv8.active=false;
        this.lv9.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 9';
        this.question.string = "find the moon?";
        this.hintLabel.string = "The moon is on if no sun";
        this.lv9moon.active =false;
        this.lv9sun.x=25.463;
        this.lv9sun.y=93.314;
    },
    settingLV10: function () {
        this.lv9.active=false;
        this.lv10.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 10';
        this.question.string = "open the door?";
        this.hintLabel.string = "key is true???";
        this.lv10door.active =false;
        this.lv10tree2.x=189;
        this.lv10tree2.y=288.045;
        this.lv10tree2.x=189;
        this.lv10tree2.y=298.396;
    },
    settingLV11: function () {
        this.lv10.active=false;
        this.lv11.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 11';
        this.question.string = "Make flowers bloom?";
        this.hintLabel.string = "The butterflies are so beautiful.";
        this.lv11A1.active =false;
        this.lv11A2.active =false;
        this.lv11A3.x=388.392;
        this.lv11A3.y=85.174;
        this.LV11_1=false;
        this.LV11_2=false;
    },
    settingLV12: function () {
        this.lv11.active=false;
        this.lv12.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 12';
        this.question.string = "How much tree?";
        this.hintLabel.string = "try to counting the tree.";
        this.lv11A1.active =false;
        this.lv11A2.active =false;
        this.lv12T1.x=650;
        this.lv12T1.y=352;
        this.lv12T1.active=true;
        this.lv12T1_1.active=true;
        this.lv12T1_2.active=false;
        this.lv12T1_3.active=false;
        this.lv12T1_4.active=false;
        this.lv12T2.x=650;
        this.lv12T2.y=352;
        this.lv12T2.active=true;
        this.lv12T2_1.active=true;
        this.lv12T2_2.active=false;
        this.lv12T2_3.active=false;
        this.lv12T2_4.active=false;
        this.lv12SW1=false;
        this.lv12_ask=1;

        
    },
    settingLV13: function () {
        this.lv12.active=false;
        this.lv13.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 13';
        this.question.string = "What is number?";
        this.hintLabel.string = "??????";
        this.lv13A2.x=741.708;
        this.lv13A2.y=345.064;
        this.lv13_ask = 1;
    },
    settingLV14: function () {
        this.lv13.active=false;
        this.lv14.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 14';
        this.question.string = "how many color?";
        this.hintLabel.string = "I think more 3";
        this.lv14_A1.x=494.975;
        this.lv14_A1.y=249.518;
        this.lv14_A2.x=644.35;
        this.lv14_A2.y=397.601;
        this.lv14_A3.x=398.196;
        this.lv14_A3.y=381.937;
        this.lv14_A4.x=384;
        this.lv14_A4.y=121;
        this.lv14_A5.x=684;
        this.lv14_A5.y=131;
        this.lv14_A6.x=484;
        this.lv14_A6.y=28;
        this.lv14_ask = 1;
    },
    settingLV15: function () {
        this.lv14.active=false;
        this.lv15.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 15';
        this.question.string = "Open the Treasure chest";
        this.hintLabel.string = "The key not in this LV go back to get key";
    },
    settingLV16: function () {
        this.lv15.active=false;
        this.lv16.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 16';
        this.question.string = "Cause a bonfire";
        this.hintLabel.string = "I think must use matches";
    },
    settingLV17: function () {
        this.lv16.active=false;
        this.lv17.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 17';
        this.question.string = "Drive to pick up people";
        this.hintLabel.string = "Try refueling.";
        this.lv17A2.x=825.727;
        this.lv17A2.y=273.219;
    },
    settingLV18: function () {
        this.lv17.active=false;
        this.lv18.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 18';
        this.question.string = "Kill the monster";
        this.hintLabel.string = "find item to kill.";
    },
    settingLV19: function () {
        this.lv18.active=false;
        this.lv19.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 19';
        this.question.string = "Give me 19 coin to next LV";
        this.hintLabel.string = "find coin in the map.";
    },
    settingLV20: function () {
        this.lv19.active=false;
        this.lv20.active=true;
        this.gameover.active=false;
        this.victory.active=false;
        this.hint.active=false;
        this.Lv_label.string = 'LV 20';
        this.question.string = "I don't know to finish";
        this.hintLabel.string = "I think use something key.";
    },
    LoadLV: function () {
        console.log("LV :"+this.LV);
        if(this.LV==1){this.settingLV1();}
        if(this.LV==2){this.settingLV2();}
        if(this.LV==3){this.settingLV3();}
        if(this.LV==4){this.settingLV4();}
        if(this.LV==5){this.settingLV5();}
        if(this.LV==6){this.settingLV6();}
        if(this.LV==7){this.settingLV7();}
        if(this.LV==8){this.settingLV8();}
        if(this.LV==9){this.settingLV9();}
        if(this.LV==10){this.settingLV10();}
        if(this.LV==11){this.settingLV11();}
        if(this.LV==12){this.settingLV12();}
        if(this.LV==13){this.settingLV13();}
        if(this.LV==14){this.settingLV14();}
        if(this.LV==15){this.settingLV15();}
        if(this.LV==16){this.settingLV16();}
        if(this.LV==17){this.settingLV17();}
        if(this.LV==18){this.settingLV18();}
        if(this.LV==19){this.settingLV19();}
        if(this.LV==20){this.settingLV20();}

    },
        LV1_onClickA1: function () {
            this.LV=2;
            this.lock2=false;
            this.A1.active=true;
            this.victory.active=true;  
        },
        LV1_onClickA2: function () {
            this.A2.active=true;
        },
        LV1_onClickA3: function () {
            this.A3.active=true;
        },
        LV1_onClickA4: function () {
            this.A4.active=true;
        },
        LV2_Lclick: function () {
            this.lv2_ask--;
            this.arkLv2.string =this.lv2_ask;
        },
        LV2_Rclick: function () {
            this.lv2_ask++;
            this.arkLv2.string =this.lv2_ask;
        },
        LV2_Okclick: function () {
            if(this.lv2_ask==3){
                this.LV=3;
                this.lock3=false;
                this.gameover.active=false;  
                this.victory.active=true; 
            }       
           
        },
        LV3_yes: function () {
            this.victory.active=true;  
            this.LV=4; 
            this.lock4=false;     
            },
        LV3_No: function () {
        },
        LV4_yes: function () {
            this.victory.active=true;  
            this.LV=5;   
            this.lock5=false;   
            },
        LV4_No: function () {
            this.lv4A2.active=true; 
        },
        LV5_Yes: function () {
           this.swLv5=true;
            this.lv5A2.active=false; 
            this.LV=6;
            this.lock6=false;
        },
        LV6_Yes: function () {
            this.victory.active=true;
            this.LV=7;
            this.lock7=false;
         },
         LV7_Lclick: function () {
            this.lv2_ask--;
            this.arkLv7.string =this.lv2_ask;
        },
        LV7_Rclick: function () {
            this.lv2_ask++;
            this.arkLv7.string =this.lv2_ask;
        },
        LV7_Okclick: function () {
            if(this.lv2_ask==10){
                this.LV=8;
                this.lock8=false;
                this.gameover.active=false;  
                this.victory.active=true;
            }
        },
        LV8_Lclick: function () {
            this.lv2_ask--;
            this.arkLv8.string =this.lv2_ask;
        },
        LV8_Rclick: function () {
            this.lv2_ask++;
            this.arkLv8.string =this.lv2_ask;
        },
        LV8_Okclick: function () {
            if(this.lv2_ask==20){
                this.LV=9;
                this.lock9=false;
                this.gameover.active=false;  
                this.victory.active=true;
            }
            
        },
        LV9_moon: function () {
                this.LV=10;
                this.lock10=false;
                this.gameover.active=false;  
                this.victory.active=true;
        },
        LV12_A1: function () {
            this.lv12T1_1.active=false;
            this.lv12T1_2.active=false;
            this.lv12T1_3.active=true;
        },
        LV12_A1_1: function () {
            this.lv12T1_3.active=false;
            this.lv12T1_4.active=true;
            this.item_2.active=true;
        },
        LV12_A2: function () {
            this.lv12T2_1.active=false;
            this.lv12T2_2.active=false;
            this.lv12T2_3.active=true;
           
        },
        LV12_A2_1: function () {
            this.lv12T2_3.active=false;
            this.lv12T2_4.active=true;
        },
        LV12_Lclick: function () {
            this.lv12_ask--;
            this.arkLv12.string =this.lv12_ask;
        },
        LV12_Rclick: function () {
            this.lv12_ask++;
            this.arkLv12.string =this.lv12_ask;
        },
        LV12_Okclick: function () {
            if(this.lv12_ask==0){
                this.LV=13;
                this.lock13=false;
                this.gameover.active=false;  
                this.victory.active=true;
            }
            
        },
        LV13_Lclick: function () {
            this.lv13_ask--;
            this.lv13A1.string =this.lv13_ask;
        },
        LV13_Rclick: function () {
            this.lv13_ask++;
            this.lv13A1.string =this.lv13_ask;
        },
        LV13_Okclick: function () {
            if(this.lv13_ask==18){
                this.LV=14;
                this.lock14=false;
                this.gameover.active=false;  
                this.victory.active=true;
            }
            
        },
        LV14_Lclick: function () {
            this.lv14_ask--;
            this.lv14_A7.string =this.lv14_ask;
        },
        LV14_Rclick: function () {
            this.lv14_ask++;
            this.lv14_A7.string =this.lv14_ask;
        },
        LV14_Okclick: function () {
            if(this.lv14_ask==6){
                this.LV=15;
                this.lock15=false;
                this.gameover.active=false;  
                this.victory.active=true;
            }
            
        },
        item1UseClick: function () {
            if(this.LV==10){
                this.lv10door.active=true;
                this.LV=11;
                this.lock11=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.item_1.active=false;
            }
            if(this.LV==15){
                this.LV=16;
                this.lock16=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.lv15A1.active=true;
                this.item_1.active=false;
                this.item_4.active=true;
                this.item_5.active=true;
                this.item_6.active=true;
            }
            
        },
        item2UseClick: function () {
            if(this.LV==16){
                this.LV=17;
                this.lock17=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.lv16A1.active=true;
                this.item_2.active=false;
            }
        
            
        },
        item4UseClick: function () {
            if(this.LV==16){
                this.LV=17;
                this.lock17=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.lv16A1.active=true;
                this.item_4.active=false;
            }
            if(this.LV==20){
                this.lv20sw1=true;
                this.item_4.active=false;
                this.lv20finish();
            }
        },
        item5UseClick: function () {
            if(this.LV==17){
                this.LV=18;
                this.lock18=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.item_5.active=false;
            }
            if(this.LV==20){
                this.lv20sw2=true;
                this.item_5.active=false;
                this.lv20finish();
            }
        },
        item6UseClick: function () {
            if(this.LV==18){
                this.LV=19;
                this.lock19=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.item_6.active=false;
            }
            if(this.LV==20){
                this.lv20sw3=true;
                this.item_6.active=false;
                this.lv20finish();
            }
        },
        item7UseClick: function () {
            if(this.LV==18){
                this.LV=19;
                this.lock19=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.item_7.active=false;
                
            }
        },
        item8UseClick: function () {
            if(this.LV==19&this.coins>=19){
                this.LV=20;
                this.lock20=false;
                this.gameover.active=false;  
                this.victory.active=true;
                this.coins-=19;
                this.item_8Label.string = this.coins;
            }
        },
        lv20finish: function () {
            if(this.lv20sw1==true&this.lv20sw2==true&&this.lv20sw3==true){
                this.LV=20;
                this.lock20=false;
                this.gameover.active=true;  
                this.victory.active=false;
                this.mainUI.active=false;
            }
        },
        item3Use: function () {
                this.item_3.active=true;
        },
        item7Use: function () {
            this.item_7.active=true;
            this.lv18A1.active=false;
        },
        item3UseClick: function () {
            if(this.LV==17){
                this.lv17A2.active=true;
                this.lv17A1.active=false;
                this.item_3.active=false;
            }
        },
        itemcoin_grt: function () {
                this.coins++;
            this.item_8Label.string = this.coins;
        },
     update (dt) {
        if(this.swLv5==true){
             if(this.lv5A1.x>55.318&this.lv5A1.x<141.809&this.lv5A1.y<-34.622&this.lv5A1.y>-92.057&this.lv5A2.y!=this.lv5A1.y){
               this.victory.active=true;
             }
        }
        if(this.lv6A1.y<39){
                this.lv6A2.active=true;
        }
        if(this.lv9sun.x>575||this.lv9sun.y>328){
            this.lv9moon.active =true;
        }
        if(this.lv10tree2.y>298.396&this.lv10tree2.x>718.749&this.LV==10){
            this.lv10door.active=true;
            this.LV=11;
            this.lock11=false;
            this.gameover.active=false;  
            this.victory.active=true;
        }
        if(this.lv11A3.y>320 &this.lv11A3.y<380 &this.lv11A3.x>320&this.lv11A3.x<410){
            this.LV11_1=true;
            console.log("LV11SW1=true");
        }
        if(this.lv11A3.y>320 &this.lv11A3.y<380 &this.lv11A3.x>830&this.lv11A3.x<910){
            this.LV11_2=true;
            console.log("LV11SW2=true");
        }
        if(this.LV11_1==true&this.LV11_2==true&this.LV==11){
            this.lv11A1.active=true;
            this.lv11A2.active=true;
            this.LV=12;
            this.lock12=false;
            this.gameover.active=false;  
            this.victory.active=true;
        }
        if(this.lv12T1.x!=650 &this.lv12T1.y!=352& this.lv12T2.x!=650 &this.lv12T2.y!=352){
            if(this.lv12SW1!=true){
                console.log("Frie ON");
            this.lv12T2_2.active=true;
            this.lv12T1_2.active=true;
            this.lv12SW1=true;
            }
        }
        if(this.lv17A2.x<210&this.LV==17){
            this.LV=18;
            this.lock18=false;
            this.gameover.active=false;  
            this.victory.active=true;
        }
        
       
        
     },
});
