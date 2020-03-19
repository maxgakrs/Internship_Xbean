cc.Class({
    extends: cc.Component,

    properties: {
        object: {
            default: null,
            type: cc.Node
        },
        speed: 100,
        damage:10,
        gun:130
    },

    // use this for initialization
    onLoad: function () {

    },

    onCollisionEnter: function (other, self) {
        this.node.destroy();
        var scene = cc.director.getScene();
        var bullet = cc.instantiate(this.node);
        bullet.position = this.object.position;
        bullet.y+=this.gun;
        bullet.active = true;
        scene.addChild(bullet);
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.y += this.speed * dt;
    },
});
