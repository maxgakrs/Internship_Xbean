
cc.Class({
    extends: cc.Component,

    properties: {
        Player: {
            default: null,
            type: cc.Node
        },
        PlayerHP: {
            default: null,
            type: cc.Node
        },
        Enemy: {
            default: null,
            type: cc.Node
        },
        EnemyBullet: {
            default: null,
            type: cc.Node
        },
        HPEnemy: {
            default: null,
            type: cc.Node
        },
      
    },
     onLoad () {
         this.HP=100;
         this.damagebullet=10;
         this.EnemyBullet.x=this.Enemy.x;
         this.EnemyBullet.y=this.Enemy.y;
         this.speedBullet=10;
         this.hitbox=100;
     },

     update (dt) {
        this.EnemyBullet.y-=this.speedBullet;
        if(this.EnemyBullet.x<=this.Player.x+this.hitbox&&
            this.EnemyBullet.y<=this.Player.y+this.hitbox&&
            this.EnemyBullet.x>=this.Player.x-this.hitbox&&
            this.EnemyBullet.y>=this.Player.y-this.hitbox&&
            this.Enemy.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemy;
            this.hpPlayer.setScale(this.HpPlayer,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebulletEnemy;
             //เช็คHPถ้าน้อยกว่า=0
            if(this.HpPlayer<=0){
                this.player.active=false;
                this.player.active=false;
            }
            console.log("HPPlayer="+this.HpEnemy1);
             //รีเซ็ตกระสุน
            this.bulletEnemy1.x=this.Enemy1.x;
            this.bulletEnemy1.y=this.Enemy1.y;
            this.timeEnemy1=0;
         }
     },
});
