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
        textboxG:{
            default: null,
            type:cc.Label
        },
        coin:{
            default: null,
            type:cc.Label
        },
        EndC1:{
            default: null,
            type:cc.Label
        },
        EndC2:{
            default: null,
            type:cc.Label
        },
        EndC3:{
            default: null,
            type:cc.Label
        },
        EndC4:{
            default: null,
            type:cc.Label
        },
        P1:{
            default: null,
            type:cc.Node
        },
        P2:{
            default: null,
            type:cc.Node
        },
        P3:{
            default: null,
            type:cc.Node
        },
        P4:{
            default: null,
            type:cc.Node
        },
        Neko1:{
            default: null,
            type:cc.Node
        },
        Neko2:{
            default: null,
            type:cc.Node
        },
        Neko3:{
            default: null,
            type:cc.Node
        },
        Neko4:{
            default: null,
            type:cc.Node
        },
        victory:{
            default: null,
            type:cc.Node
        },
        H1:{
            default: null,
            type:cc.Node
        },
        H2:{
            default: null,
            type:cc.Node
        },
        H3:{
            default: null,
            type:cc.Node
        },
        H4:{
            default: null,
            type:cc.Node
        },
        H2_3:{
            default: null,
            type:cc.Node
        },
        H3_1:{
            default: null,
            type:cc.Node
        },
        H2_4:{
            default: null,
            type:cc.Node
        },
        H3_4:{
            default: null,
            type:cc.Node
        },
        H1_4:{
            default: null,
            type:cc.Node
        },
        H1_2:{
            default: null,
            type:cc.Node
        },
        cat1lv0:{
            default: null,
            type:cc.Node
        },
        cat1lv1:{
            default: null,
            type:cc.Node
        },
        cat1lv2:{
            default: null,
            type:cc.Node
        },
        cat1lv3:{
            default: null,
            type:cc.Node
        },
        cat1lv4:{
            default: null,
            type:cc.Node
        },
        cat1lv5:{
            default: null,
            type:cc.Node
        },
        cat1lv6:{
            default: null,
            type:cc.Node
        },
        cat2lv0:{
            default: null,
            type:cc.Node
        },
        cat2lv1:{
            default: null,
            type:cc.Node
        },
        cat2lv2:{
            default: null,
            type:cc.Node
        },
        cat2lv3:{
            default: null,
            type:cc.Node
        },
        cat2lv4:{
            default: null,
            type:cc.Node
        },
        cat2lv5:{
            default: null,
            type:cc.Node
        },
        cat2lv6:{
            default: null,
            type:cc.Node
        },
        cat3lv0:{
            default: null,
            type:cc.Node
        },
        cat3lv1:{
            default: null,
            type:cc.Node
        },
        cat3lv2:{
            default: null,
            type:cc.Node
        },
        cat3lv3:{
            default: null,
            type:cc.Node
        },
        cat3lv4:{
            default: null,
            type:cc.Node
        },
        cat3lv5:{
            default: null,
            type:cc.Node
        },
        cat3lv6:{
            default: null,
            type:cc.Node
        },
        cat4lv0:{
            default: null,
            type:cc.Node
        },
        cat4lv1:{
            default: null,
            type:cc.Node
        },
        cat4lv2:{
            default: null,
            type:cc.Node
        },
        cat4lv3:{
            default: null,
            type:cc.Node
        },
        cat4lv4:{
            default: null,
            type:cc.Node
        },
        cat4lv5:{
            default: null,
            type:cc.Node
        },
        cat4lv6:{
            default: null,
            type:cc.Node
        },
        
        catneww:{
            default: null,
            type: cc.Node
        },
        catNlv1:{
            default: null,
            type:cc.Node
        },
        catNlv2:{
            default: null,
            type:cc.Node
        },
        catNlv3:{
            default: null,
            type:cc.Node
        },
        catNlv4:{
            default: null,
            type:cc.Node
        },
        catNlv5:{
            default: null,
            type:cc.Node
        },
        catNlv6:{
            default: null,
            type:cc.Node
        },
        catR1:{
            default: null,
            type:cc.Node
        },
        catR2:{
            default: null,
            type:cc.Node
        },
        catR3:{
            default: null,
            type:cc.Node
        },
        catR4:{
            default: null,
            type:cc.Node
        },
        HS:{
            default: null,
            type:cc.Node
        },
        
        catShop:{
            default: null,
            type:cc.Node
        },
        ShopCat4:{
            default: null,
            type:cc.Node
        },

        ShopCat5:{
            default: null,
            type:cc.Node
        },
        ShopCat5:{
            default: null,
            type:cc.Node
        },
        tv:{
            default: null,
            type:cc.Node
        },
        tvS:{
            default: null,
            type:cc.Node
        },
        titleGame:{
            default: null,
            type:cc.Node
        },
        

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        //  this.H1.active=false;
        //  this.H2.active=false;
        //  this.H3.active=false;
        //  this.H4.active=false;
         this.totorial=true;
         this.oldNeko1x = this.Neko1.x;
         this.oldNeko1y = this.Neko1.y;
         this.oldNeko2x = this.Neko2.x;
         this.oldNeko2y = this.Neko2.y;
         this.oldNeko3x = this.Neko3.x;
         this.oldNeko3y = this.Neko3.y;
         this.oldNeko4x = this.Neko4.x;
         this.oldNeko4y = this.Neko4.y;
         this.cat1LV=0;
         this.cat2LV=0;
         this.cat3LV=0;
         this.cat4LV=0;
         this.timeSS=0;
         this.timeS2=0;
         this.timeS3=0;
         this.NotMove=true;
         this.shopSW=false;
         this.lv1rat = false;
         this.lv2rat = false;
         this.lv3rat = false;
         this.lv4rat = false;

         this.lv1new = false;
         this.lv2new = false;
         this.lv3new = false;
         this.lv4new = false;
         this.lv5new = false;
         this.lv6new = false;
        // this.H1.active=true;
         this.Coin = 150;
         this.CatEnd1=1;
         this.CatEnd2=1;
         this.CatEnd3=1;
         this.CatEnd4=1;
         this.coin.string = this.Coin;

     },
     newClickE:function(){
        this.timeSS=0;
        this.timeS3=0;
         if(this.cat4lv6.active==true){
            cc.director.loadScene("game");
         }
            this.victory.active = false;
         
       
     },
     HSClick:function(){
        this.timeS3=0;
       if(this.totorial==true&&this.Coin>=150&&this.cat1lv1.active==true){
        this.Coin-=150;   
        this.coin.string = this.Coin;
        this.HS.active = false;
        this.Neko2.active = true;
        this.H2.active=true;
       }
       else if(this.totorial==false&& this.lv4new == false){
            if(this.Neko1.active==false&&this.Coin>=150){
                this.Coin-=150; 
                this.Neko1.active=true;
                this.coin.string = this.Coin;
            }
            else if(this.Neko2.active==false&&this.Coin>=150){
                this.Coin-=150; 
                this.Neko2.active=true;
                this.coin.string = this.Coin;
            }
            else if(this.Neko3.active==false&&this.Coin>=150){
                this.Coin-=150; 
                this.Neko3.active=true;
                this.coin.string = this.Coin;
            }
            else if(this.Neko4.active==false&&this.Coin>=150){
                this.Coin-=150; 
                this.Neko4.active=true;
                this.coin.string = this.Coin;
            }
            
       }
       else if(this.totorial==false&& this.lv4new == true){
            if(this.shopSW==false){
                this.catShop.active=true;
                this.shopSW=true;
            }
            else if(this.shopSW==true){
                this.catShop.active=false;
                this.shopSW=false;
            }
       }
    },
    buyCatLV1:function(){
        this.timeS3=0;
        if(this.Neko1.active==false&&this.Coin>=150){
            this.Coin-=150; 
            this.Neko1.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
        }
        else if(this.Neko2.active==false&&this.Coin>=150){
            this.Coin-=150; 
            this.Neko2.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
        }
        else if(this.Neko3.active==false&&this.Coin>=150){
            this.Coin-=150; 
            this.Neko3.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
        }
        else if(this.Neko4.active==false&&this.Coin>=150){
            this.Coin-=150; 
            this.Neko4.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
        }

    },
    buyCatLV2:function(){
        this.timeS3=0;
        if(this.Neko1.active==false&&this.Coin>=300){
            this.Coin-=300; 
            this.Neko1.active=true;
            this.cat1lv0.active=false;
            this.cat1lv2.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat1LV=2;
        }
        else if(this.Neko2.active==false&&this.Coin>=300){
            this.Coin-=300; 
            this.Neko2.active=true;
            this.cat2lv0.active=false;
            this.cat2lv2.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat2LV=2;
        }
        else if(this.Neko3.active==false&&this.Coin>=300){
            this.Coin-=300; 
            this.Neko3.active=true;
            this.cat3lv0.active=false;
            this.cat3lv2.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat3LV=2;
        }
        else if(this.Neko4.active==false&&this.Coin>=300){
            this.Coin-=300; 
            this.Neko4.active=true;
            this.cat4lv0.active=false;
            this.cat4lv2.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat4LV=2;
        }

    },
    buyCatLV3:function(){
        this.timeS3=0;
        if(this.Neko1.active==false&&this.Coin>=600){
            this.Coin-=600; 
            this.Neko1.active=true;
            this.cat1lv0.active=false;
            this.cat1lv3.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat1LV=3;
        }
        else if(this.Neko2.active==false&&this.Coin>=600){
            this.Coin-=600; 
            this.Neko2.active=true;
            this.cat2lv0.active=false;
            this.cat2lv3.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat2LV=3;
        }
        else if(this.Neko3.active==false&&this.Coin>=600){
            this.Coin-=600; 
            this.Neko3.active=true;
            this.cat3lv0.active=false;
            this.cat3lv3.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat3LV=3;
        }
        else if(this.Neko4.active==false&&this.Coin>=600){
            this.Coin-=600; 
            this.Neko4.active=true;
            this.cat4lv0.active=false;
            this.cat4lv3.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat4LV=3;
        }

    },
    buyTV:function(){
        this.timeS3=0;
        if(this.Coin>=100000){
            this.Coin-=100000;
            this.tv.active = true;
            this.tvS.active=false;
            this.coin.string = this.Coin;
        }
    },
    buyCatLV4:function(){
        this.timeS3=0;
        if(this.Neko1.active==false&&this.Coin>=1200){
            this.Coin-=1200; 
            this.Neko1.active=true;
            this.cat1lv0.active=false;
            this.cat1lv4.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat1LV=4;
        }
        else if(this.Neko2.active==false&&this.Coin>=1200){
            this.Coin-=1200; 
            this.Neko2.active=true;
            this.cat2lv0.active=false;
            this.cat2lv4.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat2LV=4;
        }
        else if(this.Neko3.active==false&&this.Coin>=1200){
            this.Coin-=1200; 
            this.Neko3.active=true;
            this.cat3lv0.active=false;
            this.cat3lv4.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat3LV=4;
        }
        else if(this.Neko4.active==false&&this.Coin>=1200){
            this.Coin-=1200; 
            this.Neko4.active=true;
            this.cat4lv0.active=false;
            this.cat4lv4.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat4LV=4;
        }

    },
    buyCatLV5:function(){
        this.timeS3=0;
        if(this.Neko1.active==false&&this.Coin>=2400){
            this.Coin-=2400; 
            this.Neko1.active=true;
            this.cat1lv0.active=false;
            this.cat1lv5.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat1LV=5;
        }
        else if(this.Neko2.active==false&&this.Coin>=2400){
            this.Coin-=2400; 
            this.Neko2.active=true;
            this.cat2lv0.active=false;
            this.cat2lv5.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat2LV=5;
        }
        else if(this.Neko3.active==false&&this.Coin>=2400){
            this.Coin-=2400; 
            this.Neko3.active=true;
            this.cat3lv0.active=false;
            this.cat3lv5.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat3LV=5;
        }
        else if(this.Neko4.active==false&&this.Coin>=2400){
            this.Coin-=2400; 
            this.Neko4.active=true;
            this.cat4lv0.active=false;
            this.cat4lv5.active=true;
            this.coin.string = this.Coin;
            this.catShop.active=false;
            this.cat4LV=5;
        }

    },
     RatCatALL:function(){
        this.catR1.active = false;
        this.lv1rat=false;
        this.catR2.active = false;
        this.lv2rat=false;
        this.catR3.active = false;
        this.lv3rat=false;
        this.catR4.active = false;
        this.lv4rat=false;
        this.coin.string = this.Coin;
    },
     RatCat1:function(){
        this.timeS3=0;
        this.timeSS=0;  
        if(this.catR1.active==true){
            this.catR1.active = false;
            if(this.cat1LV==1){
                this.Coin+=30;
            }
            if(this.cat1LV==2){
                this.Coin+=60;
            }
            if(this.cat1LV==3){
                this.Coin+=120;
            }
            if(this.cat1LV==4){
                this.Coin+=240;
            }
            if(this.cat1LV==5){
                this.Coin+=480;
            }
            if(this.cat1LV==6){
                this.Coin+=960*this.CatEnd1;
            }
        }
        this.coin.string = this.Coin;
    },
    RatCat2:function(){
        this.timeS3=0;
        this.timeSS=0;  
        if(this.catR2.active==true){
            this.catR2.active = false;
            if(this.cat2LV==1){
                this.Coin+=30;
            }
            if(this.cat2LV==2){
                this.Coin+=60;
            }
            if(this.cat2LV==3){
                this.Coin+=120;
            }
            if(this.cat2LV==4){
                this.Coin+=240;
            }
            if(this.cat2LV==5){
                this.Coin+=480;
            }
            if(this.cat2LV==6){
                this.Coin+=960*this.CatEnd2;
            }
        }
        this.coin.string = this.Coin;
    },
    RatCat3:function(){
        this.timeS3=0;
        this.timeSS=0;  
        if(this.catR3.active==true){
            this.catR3.active = false;
            if(this.cat3LV==1){
                this.Coin+=30;
            }
            if(this.cat3LV==2){
                this.Coin+=60;
            }
            if(this.cat3LV==3){
                this.Coin+=120;
            }
            if(this.cat3LV==4){
                this.Coin+=240;
            }
            if(this.cat3LV==5){
                this.Coin+=480;
            }
            if(this.cat3LV==6){
                this.Coin+=960*this.CatEnd3;
            }
        }
        this.coin.string = this.Coin;
    },
    RatCat4:function(){
        this.timeS3=0;
        this.timeSS=0;  
        if(this.catR4.active==true){
            this.catR4.active = false;
            if(this.cat4LV==1){
                this.Coin+=30;
            }
            if(this.cat4LV==2){
                this.Coin+=60;
            }
            if(this.cat4LV==3){
                this.Coin+=120;
            }
            if(this.cat4LV==4){
                this.Coin+=240;
            }
            if(this.cat4LV==5){
                this.Coin+=480;
            }
            if(this.cat4LV==6){
                this.Coin+=960*this.CatEnd4;
            }
        }
        this.coin.string = this.Coin;
    },

    cat1lv0Click:function(){
        this.cat1lv0.active=false;
        this.cat1lv1.active=true;
        if(this.totorial==true){
            this.H1.active=false;
            this.lv1new=true;
            this.victory.active = true;
            this.HS.active=true;
            
        }
        this.cat1LV=1;
        
    },
    cat2lv0Click:function(){
        this.cat2lv0.active=false;
        this.cat2lv1.active=true;
        if(this.totorial==true){
            this.H2.active=false;
            this.H1_2.active=true;
        }
        this.cat2LV=1;
    },
    cat3lv0Click:function(){
        this.cat3lv0.active=false;
        this.cat3lv1.active=true;
        this.cat3LV=1;
        this.lv1new=true;
    },
    cat4lv0Click:function(){
        this.cat4lv0.active=false;
        this.cat4lv1.active=true;
        this.cat4LV=1;
        this.lv1new=true;
    },
    playgame:function(){
        this.titleGame.active=false;
        this.H1_2.active=true;
        this.Neko1.active=true;
        this.Neko2.active=true;
    },
    reGame:function(){
        cc.director.loadScene("game");
    },
   
    checkNewCat:function(){
        this.timeS3=0;
        this.timeS2=0;
        this.timeSS=0;
        this.H1_2.active=false;
        this.H1_4.active=false;
        this.H2_4.active=false;
        this.H3_1.active=false;
        this.H3_4.active=false;
        if(this.cat1LV==3||this.cat2LV==3||this.cat3LV==3||this.cat4LV==3){
            if(this.lv3new==false){
                this.catNlv2.active=false;
                this.catNlv3.active=true;
                this.victory.active=true;
                this.lv3new=true;
            }
        }
        if(this.cat1LV==4||this.cat2LV==4||this.cat3LV==4||this.cat4LV==4){
            if(this.lv4new==false){
                this.catNlv3.active=false;
                this.catNlv4.active=true;
                this.victory.active=true;
                this.lv4new=true;
            }
        }
        if(this.cat1LV==5||this.cat2LV==5||this.cat3LV==5||this.cat4LV==5){
            if(this.lv5new==false){
                this.catNlv4.active=false;
                this.catNlv5.active=true;
                this.victory.active=true;
                this.lv5new=true;
                this.ShopCat4.active=true;
            }
        }
        if(this.cat1LV==6||this.cat2LV==6||this.cat3LV==6||this.cat4LV==6){
            if(this.lv6new==false){
                this.catNlv4.active=false;
                this.catNlv5.active=true;
                this.victory.active=true;
                this.ShopCat5.active=true;
                this.lv6new=true;
            }
        }
    },
    
    

    update (dt) {
        this.timeSS++;
        this.timeS2++;
        this.timeS3++;
       // console.log("T1"+this.timeSS);
       //console.log("T2"+this.timeS2);
        if(this.timeS3==200){
            if(this.cat1LV==this.cat2LV&&this.cat1LV>0&&this.cat2LV>0
                &&(this.cat1LV!=this.cat3LV||this.cat1LV!=this.cat4LV)){
                this.H1_2.active=true;
            }
            else if(this.cat2LV==this.cat3LV&&this.cat3LV>0&&this.cat2LV>0
                &&(this.cat2LV!=this.cat1LV||this.cat2LV!=this.cat4LV)){
                this.H2_3.active=true;
            }
            else if(this.cat3LV==this.cat1LV&&this.cat3LV>0&&this.cat1LV>0
                &&(this.cat3LV!=this.cat2LV||this.cat3LV!=this.cat4LV)){
                this.H3_1.active=true;
            }
            else if(this.cat2LV==this.cat4LV&&this.cat2LV>0&&this.cat4LV>0
                &&(this.cat2LV!=this.cat1LV||this.cat2LV!=this.cat3LV)){
                this.H2_4.active=true;
            }
            else if(this.cat3LV==this.cat4LV&&this.cat3LV>0&&this.cat4LV>0
                &&(this.cat3LV!=this.cat1LV||this.cat3LV!=this.cat2LV)){
                this.H3_4.active=true;
            }
            else if(this.cat1LV==this.cat4LV&&this.cat1LV>0&&this.cat4LV>0
                &&(this.cat1LV!=this.cat2LV||this.cat1LV!=this.cat3LV)){
                this.H1_4.active=true;
            }
            
        }
        
       
        if(this.Neko1.x!=this.oldNeko1x||this.Neko1.y!=this.oldNeko1y||
           this.Neko2.x!=this.oldNeko2x||this.Neko2.y!=this.oldNeko2y||
           this.Neko3.x!=this.oldNeko3x||this.Neko3.y!=this.oldNeko3y||
           this.Neko4.x!=this.oldNeko4x||this.Neko4.y!=this.oldNeko4y)
        {
            this.timeS3=0;
        } 
                
        if(this.timeS2==500&&this.totorial==false){
            if(this.catR1.active==false&&this.Neko1.active==true&&this.cat1lv0.active==false){
                this.catR1.active=true;
                
            }
            if(this.catR2.active==false&&this.Neko2.active==true&&this.cat2lv0.active==false){
                this.catR2.active=true;
            }
            if(this.catR3.active==false&&this.Neko3.active==true&&this.cat3lv0.active==false){
                this.catR3.active=true;
            }
            if(this.catR4.active==false&&this.Neko4.active==true&&this.cat4lv0.active==false){
                this.catR4.active=true;
            }
            
        }
        if(this.timeS2==500){
            this.timeS2=0;
        }
        if(this.totorial==true){
            if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
            &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)
            &&this.cat1lv1.active==true&&this.cat2lv1.active==true){
                this.timeS3=0;
                this.cat2LV=2;
                this.cat1LV=2;
                this.cat3LV=3;
                this.cat4LV=4;
                this.timeSS=0;
                this.Neko1.x= this.oldNeko1x;
                this.Neko1.y=this.oldNeko1y;
                this.cat2lv2.active=true;
                this.cat2lv1.active=false;
                this.cat3lv3.active=true;
                this.cat4lv4.active=true;
                this.H1_2.active=false;
                this.catNlv1.active=false;
                this.catNlv2.active=true;
                this.victory.active = true;
                this.cat1lv2.active=true;
                this.cat1lv1.active=false;
                this.Neko1.active=true;
                this.cat3lv3.active=true;
                this.cat3lv0.active=false;
                this.Neko3.active=true;
                this.cat4lv4.active=true;
                this.cat4lv0.active=false;
                this.Neko4.active=true;
                this.textboxG.string="Let merge them!";
                //this.Neko3.active=true;
                //this.Neko4.active=true;
               // this.totorial = false;
                
            } 
            else if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
            &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)
            &&this.cat1lv2.active==true&&this.cat2lv2.active==true){
                this.timeS3=0;
                this.cat2LV=3;
                this.cat1LV=0;
                this.cat3LV=3;
                this.cat4LV=4;
                this.timeSS=0;
                this.cat2lv3.active=true;
                this.cat2lv2.active=false;
                this.cat3lv3.active=true;
                this.cat4lv4.active=true;
                this.H1_2.active=false;
                this.Neko1.x= this.oldNeko1x;
                this.Neko1.y=this.oldNeko1y;
               // this.H1_2.active=false;
                this.catNlv2.active=false;
                this.catNlv3.active=true;
                this.victory.active = true;
                //this.cat1lv3.active=true;
                this.cat1lv2.active=false;
                this.Neko1.active=false;
                
                
            } 
            else if((this.Neko2.x<this.Neko3.x+20&&this.Neko2.y<this.Neko3.y+20)
            &&(this.Neko2.x>this.Neko3.x-20&&this.Neko2.y>this.Neko3.y-20) 
            &&this.cat2lv3.active==true&&this.cat3lv3.active==true){
                this.timeS3=0;
                this.cat2LV=0;
                this.cat3LV=4;
                this.timeSS=0;
                this.cat3lv3.active=false;
                this.cat3lv4.active=true;
                this.H2_3.active=false;
                this.catNlv3.active=false;
                this.catNlv4.active=true;
                this.victory.active = true;
                this.cat2lv3.active=false;
                this.Neko2.active=false;
                
                
            } 
            else if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
            &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)
            &&this.cat3lv4.active==true&&this.cat4lv4.active==true){
                this.timeS3=0;
                this.cat3LV=0;
                this.cat4LV=5;
                this.cat1LV=5;
                this.timeSS=0;
                this.cat4lv4.active=false;
                this.cat4lv5.active=true;
                this.H3_4.active=false;
                this.catNlv4.active=false;
                this.catNlv5.active=true;
                this.victory.active = true;
                this.cat3lv4.active=false;
                this.cat1lv5.active=true;
                this.Neko1.active=true;
                this.Neko3.active=false;
                
                
            } 
            else if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
            &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)
            &&this.cat1lv5.active==true&&this.cat4lv5.active==true){
                this.timeS3=0;
                this.cat1LV=0;
                this.cat4LV=6;
                this.timeSS=0;
                this.cat4lv5.active=false;
                this.cat4lv6.active=true;
                this.H1_4.active=false;
                this.catNlv5.active=false;
                this.catNlv6.active=true;
                this.victory.active = true;
                this.cat1lv5.active=false;
                this.Neko1.active=false;
              
                
            } 

        }
        else{
            //-Cat1 Cat2//
            //LV1
            if(this.cat1LV==1&&this.cat2LV==1){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=2;
                this.cat1LV=0;
                this.cat2lv2.active=true;
                this.cat2lv1.active=false;
                this.cat1lv0.active=true;
                this.cat1lv1.active=false;
                this.Neko1.active=false;
                this.checkNewCat();
                this.H1_2.active=false;
                }
            }
             //LV2
            if(this.cat1LV==2&&this.cat2LV==2){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=3;
                this.cat1LV=0;
                this.cat2lv3.active=true;
                this.cat2lv2.active=false;
                this.cat1lv0.active=true;
                this.cat1lv2.active=false;
                this.Neko1.active=false;
                this.H1_2.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat1LV==3&&this.cat2LV==3){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=4;
                this.cat1LV=0;
                this.cat2lv4.active=true;
                this.cat2lv3.active=false;
                this.cat1lv0.active=true;
                this.cat1lv3.active=false;
                this.Neko1.active=false;
                this.H1_2.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat1LV==4&&this.cat2LV==4){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=5;
                this.cat1LV=0;
                this.cat2lv5.active=true;
                this.cat2lv4.active=false;
                this.cat1lv0.active=true;
                this.cat1lv4.active=false;
                this.Neko1.active=false;
                this.H1_2.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat1LV==5&&this.cat2LV==5){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=6;
                this.cat1LV=0;
                this.cat2lv6.active=true;
                this.cat2lv5.active=false;
                this.cat1lv0.active=true;
                this.cat1lv5.active=false;
                this.Neko1.active=false;
                this.H1_2.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat1LV==6&&this.cat2LV==6){
                if((this.Neko1.x<this.Neko2.x+20&&this.Neko1.y<this.Neko2.y+20)
                &&(this.Neko1.x>this.Neko2.x-20&&this.Neko1.y>this.Neko2.y-20)){
                this.cat2LV=6;
                this.cat1LV=0;
                this.CatEnd2+=this.CatEnd1;
                this.CatEnd1=1;
                this.cat2lv6.active=true;
                this.cat1lv0.active=true;
                this.cat1lv6.active=false;
                this.Neko1.active=false;
                this.EndC1.active=false;
                this.EndC2.active=true;
                this.H1_2.active=false;
                this.EndC2.string="X"+this.CatEnd2;
                this.checkNewCat();
                }
            }

            //-Cat1 Cat3//
            //LV1
            if(this.cat1LV==1&&this.cat3LV==1){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=2;
                this.cat1LV=0;
                this.cat3lv2.active=true;
                this.cat3lv1.active=false;
                this.cat1lv0.active=true;
                this.cat1lv1.active=false;
                this.Neko1.active=false;
                this.H3_1.active=false;
                this.checkNewCat();
                }
            }
             //LV2
            if(this.cat1LV==2&&this.cat3LV==2){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=3;
                this.cat1LV=0;
                this.cat3lv3.active=true;
                this.cat3lv2.active=false;
                this.cat1lv0.active=true;
                this.cat1lv2.active=false;
                this.Neko1.active=false;
                this.H3_1.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat1LV==3&&this.cat3LV==3){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=4;
                this.cat1LV=0;
                this.cat3lv4.active=true;
                this.cat3lv3.active=false;
                this.cat1lv0.active=true;
                this.cat1lv3.active=false;
                this.Neko1.active=false;
                this.H3_1.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat1LV==4&&this.cat3LV==4){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=5;
                this.cat1LV=0;
                this.cat3lv5.active=true;
                this.cat3lv4.active=false;
                this.cat1lv0.active=true;
                this.cat1lv4.active=false;
                this.Neko1.active=false;
                this.H3_1.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat1LV==5&&this.cat3LV==5){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=6;
                this.cat1LV=0;
                this.cat3lv6.active=true;
                this.cat3lv5.active=false;
                this.cat1lv0.active=true;
                this.cat1lv5.active=false;
                this.Neko1.active=false;
                this.H3_1.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat1LV==6&&this.cat3LV==6){
                if((this.Neko1.x<this.Neko3.x+20&&this.Neko1.y<this.Neko3.y+20)
                &&(this.Neko1.x>this.Neko3.x-20&&this.Neko1.y>this.Neko3.y-20)){
                this.cat3LV=6;
                this.cat1LV=0;
                this.CatEnd3+=this.CatEnd1;
                this.CatEnd1=1;
                this.cat3lv6.active=true;
                this.cat1lv0.active=true;
                this.cat1lv6.active=false;
                this.Neko1.active=false;
                this.EndC1.active=false;
                this.EndC3.active=true;
                this.H3_1.active=false;
                this.EndC3.string="X"+this.CatEnd3;
                this.checkNewCat();
                }
            }
            //-Cat1 Cat4//
            //LV1
            if(this.cat1LV==1&&this.cat4LV==1){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=2;
                this.cat1LV=0;
                this.cat4lv2.active=true;
                this.cat4lv1.active=false;
                this.cat1lv0.active=true;
                this.cat1lv1.active=false;
                this.Neko1.active=false;
                this.H1_4.active=false;
                this.checkNewCat();
                }
            }
             //LV2
            if(this.cat1LV==2&&this.cat4LV==2){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=3;
                this.cat1LV=0;
                this.cat4lv3.active=true;
                this.cat4lv2.active=false;
                this.cat1lv0.active=true;
                this.cat1lv2.active=false;
                this.Neko1.active=false;
                this.H1_4.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat1LV==3&&this.cat4LV==3){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=4;
                this.cat1LV=0;
                this.cat4lv4.active=true;
                this.cat4lv3.active=false;
                this.cat1lv0.active=true;
                this.cat1lv3.active=false;
                this.Neko1.active=false;
                this.H1_4.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat1LV==4&&this.cat4LV==4){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=5;
                this.cat1LV=0;
                this.cat4lv5.active=true;
                this.cat4lv4.active=false;
                this.cat1lv0.active=true;
                this.cat1lv4.active=false;
                this.Neko1.active=false;
                this.H1_4.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat1LV==5&&this.cat4LV==5){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat1LV=0;
                this.cat4lv6.active=true;
                this.cat4lv5.active=false;
                this.cat1lv0.active=true;
                this.cat1lv5.active=false;
                this.Neko1.active=false;
                this.H1_4.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat1LV==6&&this.cat4LV==6){
                if((this.Neko1.x<this.Neko4.x+20&&this.Neko1.y<this.Neko4.y+20)
                &&(this.Neko1.x>this.Neko4.x-20&&this.Neko1.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat1LV=0;
                this.CatEnd4+=this.CatEnd1;
                this.CatEnd1=1;
                this.cat4lv6.active=true;
                this.cat1lv0.active=true;
                this.cat1lv6.active=false;
                this.Neko1.active=false;
                this.EndC1.active=false;
                this.EndC4.active=true;
                this.H1_4.active=false;
                this.EndC4.string="X"+this.CatEnd4;
                this.checkNewCat();
                }
            }
            //-Cat2 Cat4//
            //LV1
            if(this.cat2LV==1&&this.cat4LV==1){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=2;
                this.cat2LV=0;
                this.cat4lv2.active=true;
                this.cat4lv1.active=false;
                this.cat2lv0.active=true;
                this.cat2lv1.active=false;
                this.H2_4.active=false;
                this.Neko2.active=false;
                this.checkNewCat();
                }
            }
             //LV2
            if(this.cat2LV==2&&this.cat4LV==2){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=3;
                this.cat2LV=0;
                this.cat4lv3.active=true;
                this.cat4lv2.active=false;
                this.cat2lv0.active=true;
                this.cat2lv2.active=false;
                this.Neko2.active=false;
                this.H2_4.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat2LV==3&&this.cat4LV==3){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=4;
                this.cat2LV=0;
                this.cat4lv4.active=true;
                this.cat4lv3.active=false;
                this.cat2lv0.active=true;
                this.cat2lv3.active=false;
                this.Neko2.active=false;
                this.H2_4.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat2LV==4&&this.cat4LV==4){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=5;
                this.cat2LV=0;
                this.cat4lv5.active=true;
                this.cat4lv4.active=false;
                this.cat2lv0.active=true;
                this.cat2lv4.active=false;
                this.Neko2.active=false;
                this.H2_4.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat2LV==5&&this.cat4LV==5){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat2LV=0;
                this.cat4lv6.active=true;
                this.cat4lv5.active=false;
                this.cat2lv0.active=true;
                this.cat2lv5.active=false;
                this.Neko2.active=false;
                this.H2_4.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat2LV==6&&this.cat4LV==6){
                if((this.Neko2.x<this.Neko4.x+20&&this.Neko2.y<this.Neko4.y+20)
                &&(this.Neko2.x>this.Neko4.x-20&&this.Neko2.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat2LV=0;
                this.CatEnd4+=this.CatEnd2;
                this.CatEnd2=1;
                this.cat4lv6.active=true;
                this.cat2lv0.active=true;
                this.cat2lv6.active=false;
                this.Neko2.active=false;
                this.EndC2.active=false;
                this.EndC4.active=true;
                this.H2_4.active=false;
                this.EndC4.string="X"+this.CatEnd4;
                this.EndC2.string="X"+this.CatEnd2;
                this.checkNewCat();
                }
            }
            
            
        
        //-Cat3 Cat2//
            //LV1
            if(this.cat3LV==1&&this.cat2LV==1){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat3LV=2;
                this.cat3LV=0;
                this.cat2lv2.active=true;
                this.cat2lv1.active=false;
                this.cat3lv0.active=true;
                this.cat3lv1.active=false;
                this.Neko3.active=false;
                this.H2_3.active=false;
                this.checkNewCat();
                }
            }
             //LV2
            if(this.cat3LV==2&&this.cat2LV==2){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat2LV=3;
                this.cat3LV=0;
                this.cat2lv3.active=true;
                this.cat2lv2.active=false;
                this.cat3lv0.active=true;
                this.cat3lv2.active=false;
                this.Neko3.active=false;
                this.H2_3.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat3LV==3&&this.cat2LV==3){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat2LV=4;
                this.cat3LV=0;
                this.cat2lv4.active=true;
                this.cat2lv3.active=false;
                this.cat3lv0.active=true;
                this.cat3lv3.active=false;
                this.Neko3.active=false;
                this.H2_3.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat3LV==4&&this.cat2LV==4){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat2LV=5;
                this.cat3LV=0;
                this.cat2lv5.active=true;
                this.cat2lv4.active=false;
                this.cat3lv0.active=true;
                this.cat3lv4.active=false;
                this.Neko3.active=false;
                this.H2_3.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat3LV==5&&this.cat2LV==5){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat2LV=6;
                this.cat3LV=0;
                this.cat2lv6.active=true;
                this.cat2lv5.active=false;
                this.cat3lv0.active=true;
                this.cat3lv5.active=false;
                this.Neko3.active=false;
                this.H2_3.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat3LV==6&&this.cat2LV==6){
                if((this.Neko3.x<this.Neko2.x+20&&this.Neko3.y<this.Neko2.y+20)
                &&(this.Neko3.x>this.Neko2.x-20&&this.Neko3.y>this.Neko2.y-20)){
                this.cat2LV=6;
                this.cat3LV=0;
                this.CatEnd2+=this.CatEnd3;
                this.CatEnd3=1;
                this.cat2lv6.active=true;
                this.cat3lv0.active=true;
                this.cat3lv6.active=false;
                this.Neko3.active=false;
                this.EndC3.active=false;
                this.EndC2.active=true;
                this.H2_3.active=false;
                this.EndC2.string="X"+this.CatEnd2;
                this.checkNewCat();
                }
            }
            //-Cat3 Cat4//
            //LV1
            if(this.cat3LV==1&&this.cat4LV==1){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=2;
                this.cat3LV=0;
                this.cat4lv2.active=true;
                this.cat4lv1.active=false;
                this.cat3lv0.active=true;
                this.cat3lv1.active=false;
                this.Neko3.active=false;
                this.H3_4.active=false;
                this.checkNewCat();
                }
            }
             //LV2
            if(this.cat3LV==2&&this.cat4LV==2){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=3;
                this.cat3LV=0;
                this.cat4lv3.active=true;
                this.cat4lv2.active=false;
                this.cat3lv0.active=true;
                this.cat3lv2.active=false;
                this.Neko3.active=false;
                this.H3_4.active=false;
                this.checkNewCat();
                }
            }
             //LV3
            if(this.cat3LV==3&&this.cat4LV==3){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=4;
                this.cat3LV=0;
                this.cat4lv4.active=true;
                this.cat4lv3.active=false;
                this.cat3lv0.active=true;
                this.cat3lv3.active=false;
                this.Neko3.active=false;
                this.H3_4.active=false;
                this.checkNewCat();
                }
            }
             //LV4
            if(this.cat3LV==4&&this.cat4LV==4){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=5;
                this.cat3LV=0;
                this.cat4lv5.active=true;
                this.cat4lv4.active=false;
                this.cat3lv0.active=true;
                this.cat3lv4.active=false;
                this.Neko3.active=false;
                this.H3_4.active=false;
                this.checkNewCat();
                }
            }
             //LV5
            if(this.cat3LV==5&&this.cat4LV==5){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat3LV=0;
                this.cat4lv6.active=true;
                this.cat4lv5.active=false;
                this.cat3lv0.active=true;
                this.cat3lv5.active=false;
                this.Neko3.active=false;
                this.H3_4.active=false;
                this.checkNewCat();
                }
            }
            //LV6
            if(this.cat3LV==6&&this.cat4LV==6){
                if((this.Neko3.x<this.Neko4.x+20&&this.Neko3.y<this.Neko4.y+20)
                &&(this.Neko3.x>this.Neko4.x-20&&this.Neko3.y>this.Neko4.y-20)){
                this.cat4LV=6;
                this.cat3LV=0;
                this.CatEnd4+=this.CatEnd3;
                this.CatEnd3=1;
                this.cat4lv6.active=true;
                this.cat3lv0.active=true;
                this.cat3lv6.active=false;
                this.Neko3.active=false;
                this.EndC3.active=false;
                this.EndC4.active=true;
                this.H3_4.active=false;
                this.EndC4.string="X"+this.CatEnd4;
                this.checkNewCat();
                }
            }

              //Bin
            if((this.Neko1.x<95&&this.Neko1.y<175)
                &&(this.Neko1.x>55&&this.Neko1.y>135)){
                this.cat1LV=0;
                this.cat1lv0.active=true;
                this.cat1lv1.active=false;
                this.cat1lv2.active=false;
                this.cat1lv3.active=false;
                this.cat1lv4.active=false;
                this.cat1lv5.active=false;
                this.cat1lv5.active=false;
                if(this.Neko1.active==true){
                    this.Coin+=150;
                    this.coin.string=this.Coin;
                    this.Neko1.active=false;
                }
                
            }
           
            if((this.Neko2.x<95&&this.Neko2.y<175)
                &&(this.Neko2.x>55&&this.Neko2.y>135)){
                this.cat2LV=0;
                this.cat2lv0.active=true;
                this.cat2lv1.active=false;
                this.cat2lv2.active=false;
                this.cat2lv3.active=false;
                this.cat2lv4.active=false;
                this.cat2lv5.active=false;
                this.cat2lv6.active=false;
                if(this.Neko2.active==true){
                    this.Coin+=150;
                    this.coin.string=this.Coin;
                    this.Neko2.active=false;
                }
                
            }
            if((this.Neko3.x<95&&this.Neko3.y<175)
                &&(this.Neko3.x>55&&this.Neko3.y>135)){
                this.cat3LV=0;
                this.cat3lv0.active=true;
                this.cat3lv1.active=false;
                this.cat3lv2.active=false;
                this.cat3lv3.active=false;
                this.cat3lv4.active=false;
                this.cat3lv5.active=false;
                this.cat3lv5.active=false;
                if(this.Neko3.active==true){
                    this.Coin+=150;
                    this.coin.string=this.Coin;
                    this.Neko3.active=false;
                }
                
            }
            if((this.Neko4.x<95&&this.Neko4.y<175)
                &&(this.Neko4.x>55&&this.Neko4.y>135)){
                this.cat4LV=0;
                this.cat4lv0.active=true;
                this.cat4lv1.active=false;
                this.cat4lv2.active=false;
                this.cat4lv3.active=false;
                this.cat4lv4.active=false;
                this.cat4lv5.active=false;
                this.cat4lv5.active=false;
                if(this.Neko4.active==true){
                    this.Coin+=150;
                    this.coin.string=this.Coin;
                    this.Neko4.active=false;
                }
                
            }
           
            
            
            
        
            
        
        
            if(this.timeS3==200){
                this.timeS3=0;
            }
       
       
            }
        if(this.timeSS==160){
                this.Neko1.x= this.oldNeko1x;
                this.Neko1.y= this.oldNeko1y;
                this.Neko2.x= this.oldNeko2x;
                this.Neko2.y= this.oldNeko2y;
                this.Neko3.x= this.oldNeko3x;
                this.Neko3.y= this.oldNeko3y;
                this.Neko4.x= this.oldNeko4x;
                this.Neko4.y= this.oldNeko4y; 
                this.timeSS=0;   
        }
    },
});
