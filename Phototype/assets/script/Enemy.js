

cc.Class({
    extends: cc.Component,

    properties: {
        HP: {
            default: null,
            type: cc.Node
        },
        HPPoint: 100,
        damage: 10,
        
      
    },
    onCollisionEnter: function (other, self) {
        this.HPPoint-=this.damage;
        this.HP.setScale(this.HPPoint,1);
        console.log("hit"+this.damage);
        if(this.HPPoint<=0){
            this.node.destroy();
        }
        
        
    },
     onLoad () {
        
     },

   

    // update (dt) {},
});
