"use strict";
cc._RF.push(module, 'd0d1fDj9rlDx5QUtP+2toQV', 'GridView');
// Script/View/GridView.js

'use strict';

var _ConstValue = require('../Model/ConstValue');

var _AudioUtils = require('../Utils/AudioUtils');

var _AudioUtils2 = _interopRequireDefault(_AudioUtils);

var _CellModel = require('../Model/CellModel');

var _CellModel2 = _interopRequireDefault(_CellModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        aniPre: {
            default: [],
            type: [cc.Prefab]
        },
        effectLayer: {
            default: null,
            type: cc.Node
        },
        audioUtils: {
            type: _AudioUtils2.default,
            default: null
        }
    },

    onLoad: function onLoad() {
        this.setListener();
        this.lastTouchPos = cc.Vec2(-1, -1);
        this.isCanMove = true;
        this.isInPlayAni = false;
    },
    // 01gamecontroller
    setController: function setController(controller) {
        this.controller = controller;
    },
    // 02grid cellModels
    initWithCellModels: function initWithCellModels(cellsModels) {
        this.cellViews = [];
        for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
            this.cellViews[i] = [];
            for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
                var type = cellsModels[i][j].type;

                var aniView = cc.instantiate(this.aniPre[type]);
                aniView.parent = this.node;
                var cellViewScript = aniView.getComponent("CellView");
                cellViewScript.initWithModel(cellsModels[i][j]);
                this.cellViews[i][j] = aniView;
            }
        }
    },
    //Grid 
    setListener: function setListener() {

        this.node.on(cc.Node.EventType.TOUCH_START, function (eventTouch) {
            if (this.isInPlayAni) {
                return true;
            }
            var touchPos = eventTouch.getLocation();
            var cellPos = this.convertTouchPosToCell(touchPos);
            if (cellPos) {
                var changeModels = this.selectCell(cellPos);
                this.isCanMove = changeModels.length < 3;
            } else {
                this.isCanMove = false;
            }
            return true;
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, function (eventTouch) {}, this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (eventTouch) {
            if (this.isCanMove) {
                var startTouchPos = eventTouch.getStartLocation();
                var startCellPos = this.convertTouchPosToCell(startTouchPos);
                var touchPos = eventTouch.getLocation();
                var cellPos = this.convertTouchPosToCell(touchPos);
                if (startCellPos.x != cellPos.x || startCellPos.y != cellPos.y) {
                    this.isCanMove = false;
                    var changeModels = this.selectCell(cellPos);
                }
            }
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (eventTouch) {}, this);
    },

    convertTouchPosToCell: function convertTouchPosToCell(pos) {
        pos = this.node.convertToNodeSpace(pos);
        if (pos.x < 0 || pos.x >= _ConstValue.GRID_PIXEL_WIDTH || pos.y < 0 || pos.y >= _ConstValue.GRID_PIXEL_HEIGHT) {
            return false;
        }
        var x = Math.floor(pos.x / _ConstValue.CELL_WIDTH) + 1;
        var y = Math.floor(pos.y / _ConstValue.CELL_HEIGHT) + 1;
        return cc.v2(x, y);
    },

    selectCell: function selectCell(cellPos) {
        var result = this.controller.selectCell(cellPos);
        var changeModels = result[0];
        var effectsQueue = result[1];
        this.playEffect(effectsQueue);
        this.disableTouch(this.getPlayAniTime(changeModels), this.getStep(effectsQueue));
        this.updateView(changeModels);
        this.controller.cleanCmd();
        if (changeModels.length >= 2) {
            this.updateSelect(cc.v2(-1, -1));
            this.audioUtils.playSwap();
        } else {
            this.updateSelect(cellPos);
            this.audioUtils.playClick();
        }
        return changeModels;
    },

    updateView: function updateView(changeModels) {
        var newCellViewInfo = [];
        for (var i in changeModels) {
            var model = changeModels[i];
            var viewInfo = this.findViewByModel(model);
            var view = null;

            if (!viewInfo) {
                var type = model.type;
                var aniView = cc.instantiate(this.aniPre[type]);
                aniView.parent = this.node;
                var cellViewScript = aniView.getComponent("CellView");
                cellViewScript.initWithModel(model);
                view = aniView;
            } else {
                view = viewInfo.view;
                this.cellViews[viewInfo.y][viewInfo.x] = null;
            }
            var cellScript = view.getComponent("CellView");
            cellScript.updateView();
            if (!model.isDeath) {
                newCellViewInfo.push({
                    model: model,
                    view: view
                });
            }
        }

        newCellViewInfo.forEach(function (ele) {
            var model = ele.model;
            this.cellViews[model.y][model.x] = ele.view;
        }, this);
    },

    updateSelect: function updateSelect(pos) {
        for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
            for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
                if (this.cellViews[i][j]) {
                    var cellScript = this.cellViews[i][j].getComponent("CellView");
                    if (pos.x == j && pos.y == i) {
                        cellScript.setSelect(true);
                    } else {
                        cellScript.setSelect(false);
                    }
                }
            }
        }
    },

    findViewByModel: function findViewByModel(model) {
        for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
            for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
                if (this.cellViews[i][j] && this.cellViews[i][j].getComponent("CellView").model == model) {
                    return { view: this.cellViews[i][j], x: j, y: i };
                }
            }
        }
        return null;
    },

    getPlayAniTime: function getPlayAniTime(changeModels) {
        if (!changeModels) {
            return 0;
        }
        var maxTime = 0;
        changeModels.forEach(function (ele) {
            ele.cmd.forEach(function (cmd) {
                if (maxTime < cmd.playTime + cmd.keepTime) {
                    maxTime = cmd.playTime + cmd.keepTime;
                }
            }, this);
        }, this);
        return maxTime;
    },

    getStep: function getStep(effectsQueue) {
        if (!effectsQueue) {
            return 0;
        }
        return effectsQueue.reduce(function (maxValue, efffectCmd) {
            return Math.max(maxValue, efffectCmd.step || 0);
        }, 0);
    },

    disableTouch: function disableTouch(time, step) {
        if (time <= 0) {
            return;
        }
        this.isInPlayAni = true;
        this.node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(function () {
            this.isInPlayAni = false;
            this.audioUtils.playContinuousMatch(step);
        }, this)));
    },

    playEffect: function playEffect(effectsQueue) {
        this.effectLayer.getComponent("EffectLayer").playEffects(effectsQueue);
    },

    // update: function (dt) {

    // }

    resetGrid: function resetGrid() {
        cc.director.loadScene('Game');
    }
});

cc._RF.pop();