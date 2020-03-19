

cc.Class({
    extends: cc.Component,

    properties: {
        CAT:{
            default: null,
            type:cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.oldx = this.node.x;
        this.oldy = this.node.y;
         this.node.on('touchmove', function(event){
             var delta = event.touch.getDelta();
             this.x += delta.x;
             this.y += delta.y;
         }, this.CAT);
       
     },
     

    

    
});
