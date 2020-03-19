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
    },
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.node.on('touchmove', function(event){
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);
        
     },
    
    //  onCollisionEnter: function (other, self) {
    //     console.log('on collision enter');
    
    //     // Collider Manager will calculate the value in world coordinate system, and put them into the world property
    //     var world = self.world;
    
    //     // Collider Component aabb bounding box
    //     var aabb = world.aabb;
    
    //     // The position of the aabb collision frame before the node collision
    //     var preAabb = world.preAabb;
    
    //     // world transform
    //     var t = world.transform;
    
    //     // Circle Collider Component world properties
    //     var r = world.radius;
    //     var p = world.position;
    
    //     // Rect and Polygon Collider Component world properties
    //     var ps = world.points;
    // },
    // onCollisionStay: function (other, self) {
    //     console.log('on collision stay');
    // },
    // onCollisionExit: function (other, self) {
    //     console.log('on collision exit');
    // },
     

     update (dt) {
        
        
     },
});
