(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ac64Iq16lBqrHZ0246FRcZ', 'GameController', __filename);
// Script/Controller/GameController.js

"use strict";

var _GameModel = require("../Model/GameModel");

var _GameModel2 = _interopRequireDefault(_GameModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        grid: {
            default: null,
            type: cc.Node
        },
        gameover: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        scoreDisplayEnd: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        this.gameover.active = false;
        this.gameModel = new _GameModel2.default();
        this.gameModel.init(6);
        var gridScript = this.grid.getComponent("GridView");
        gridScript.setController(this);
        gridScript.initWithCellModels(this.gameModel.getCells());
        this.gameModel.printInfo();
        this.startTime = 0;
        this.curTime = 0;
        this.isClick = false;
    },

    displayScore: function displayScore() {
        this.scoreDisplay.string = 'Score :' + this.gameModel.gainScore();
        // if (this.gameModel.gainScore()> 200){
        //     this.gameOver();
        // }
    },
    selectCell: function selectCell(pos) {
        this.isClick = true;
        return this.gameModel.selectCell(pos);
    },
    cleanCmd: function cleanCmd() {
        this.displayScore();
        this.gameModel.cleanCmd();
        this.curTime = 0;
        this.isClick = false;
    },
    gameOver: function gameOver() {

        this.scoreDisplayEnd.string = 'Score :' + this.gameModel.gainScore();
        this.grid.stopAllActions();
        this.gameover.active = true;
        //cc.director.loadScene('Game');
    },

    update: function update(dt) {
        try {
            this.curTime += dt;
            if (this.curTime - this.startTime > 2 && this.isClick == false) {
                var result = [];
                result = this.gameModel.findSelectCell();
                // try{
                if (result != null) {
                    //console.log(result[0].count+ " " +result[0]);
                    console.log(result);
                    console.log("click cell " + result[0].reverse() + " Reverse " + result[1].reverse() + " To " + result[2].reverse());
                    var ss = result[0].reverse();
                    var cellpos = cc.v2(-1, -1);
                    cellpos.x = ss[1];
                    cellpos.y = ss[0];
                    // let ss1 = result[1].reverse();
                    // let cellpos1 = cc.v2(-1,-1);
                    // cellpos1.x = ss1[1];
                    // cellpos1.y = ss1[0];
                    // let ss2 = result[2].reverse();
                    // let cellpos2 = cc.v2(-1,-1);
                    // cellpos2.x = ss2[1];
                    // cellpos2.y = ss2[0];
                    var gridScript = this.grid.getComponent("GridView");
                    gridScript.selectCell(cellpos);
                } else if (result == null) {
                    console.log(result);
                    console.log("---gameover---");
                    // let newCells = [];
                    // newCells = this.gameModel.reInitWithData();
                    // var gridScript = this.grid.getComponent("GridView");
                    // gridScript.setController(this);
                    // gridScript.resetGrid();
                    // // gridScript.initWithCellModels(newCells);
                    // console.log("---New Seting OK---");
                    this.gameOver();

                    //this.scoreDisplay.string = 'Gameover'
                    // sss +=1;
                }
                // catch(error) {
                //     this.gameOver();
                // }
                //if(!result[0] && this.gameModel.death_sign){
                //console.log("---Refresh---");
                // let newCells = [];
                // newCells = this.gameModel.reInitWithData();
                // var gridScript = this.grid.getComponent("GridView");
                // gridScript.setController(this);
                // gridScript.resetGrid();
                // // gridScript.initWithCellModels(newCells);
                // console.log("---New Seting OK---");
                //this.gameOver();
                // sss +=1;
                //}


                // gridScript.selectCell(cellpos1);
                // gridScript.selectCell(cellpos2);
            }
        } catch (error) {
            console.log(error);
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameController.js.map
        