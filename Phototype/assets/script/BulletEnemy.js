cc.Class({
    extends: cc.Component,

    properties: {
        object: {
            default: null,
            type: cc.Node
        },
        speed: 100,
        damage:10,
        gun:160
    },

    // use this for initialization
    onLoad: function () {

    },

    onCollisionEnter: function (other, self) {
        if(this.object.position!=this.node.position){
        this.node.destroy();
        var scene = cc.director.getScene();
        var bullet = cc.instantiate(this.node);
        bullet.position = this.object.position;
        bullet.active = true;
        bullet.y-=this.gun;
        scene.addChild(bullet);
    }
        
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.object.active==false){
            this.node.destroy();
        }
        this.node.y -= this.speed * dt;
    },
});
