

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
     
    

    
});

