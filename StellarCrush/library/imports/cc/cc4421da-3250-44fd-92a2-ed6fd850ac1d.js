"use strict";
cc._RF.push(module, 'cc442HaMlBE/ZKi7W/YUKwd', 'GameModel');
// Script/Model/GameModel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GameModel;

var _CellModel = require("./CellModel");

var _CellModel2 = _interopRequireDefault(_CellModel);

var _ConstValue = require("./ConstValue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameModel() {
    this.cells = null;
    this.cellBgs = null;
    this.lastPos = cc.v2(-1, -1);
    this.cellTypeNum = 5;
    this.cellCreateType = [];
    this.score = 0;
    this.death_sign = false;
    this.data = [];
}

GameModel.prototype.init = function (cellTypeNum) {
    this.cells = [];
    this.setCellTypeNum(cellTypeNum || this.cellTypeNum);
    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
        this.cells[i] = [];
        for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
            this.cells[i][j] = new _CellModel2.default();
        }
    }

    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
        for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
            var flag = true;
            while (flag) {
                flag = false;
                this.cells[i][j].init(this.getRandomCellType());

                var result = this.checkPoint(j, i)[0];
                if (result.length > 2) {
                    flag = true;
                }
                this.cells[i][j].setXY(j, i);
                this.cells[i][j].setStartXY(j, i);
            }
        }
    }
};

GameModel.prototype.reInitWithData = function () {
    // this.printInfo();
    var indexArr = [];
    for (var k = 0; k < _ConstValue.GRID_HEIGHT * _ConstValue.GRID_WIDTH; k++) {
        indexArr[k] = false;
    }
    console.log(indexArr);
    for (var i = 5; i <= _ConstValue.GRID_WIDTH; i++) {
        for (var j = 5; j <= _ConstValue.GRID_HEIGHT; j++) {
            var pos1 = cc.v2(i, j);
            var index1 = Math.floor(Math.random() * (1 + _ConstValue.GRID_WIDTH - 1) + 1);
            var index2 = Math.floor(Math.random() * (1 + _ConstValue.GRID_HEIGHT - 1) + 1);
            var pos2 = cc.v2(index1, index2);
            // console.log(indexArr[i*GRID_WIDTH+ j] +" okokokokoko"+indexArr[index1*GRID_WIDTH + index2]);
            if (!indexArr[i * _ConstValue.GRID_WIDTH + j - 1] && !indexArr[index1 * _ConstValue.GRID_WIDTH + index2 - 1] && i != index1 && j != index2) {
                this.exchangeCell(pos1, pos2);
                var tmp = this.cells[i][j].type;
                this.cells[index1][index2].type = tmp;
                this.cells[i][j].type = this.cells[index1][index2].type;
                indexArr[i * _ConstValue.GRID_WIDTH + j - 1] = true;
                indexArr[index1 * _ConstValue.GRID_WIDTH + index2 - 1] = true;
            } else {
                break;
            }
        }
    }
    return this.cells;
};

//gainScore
GameModel.prototype.gainScore = function () {
    var sum = 0;
    this.score += 0;
    sum += this.score;
    // console.log("SCORE:::" + this.score + "sum:" + sum);
    return sum;
};

GameModel.prototype.checkPoint = function (x, y) {

    var checkWithDirection = function checkWithDirection(x, y, direction) {
        var queue = [];
        var vis = [];
        vis[x + y * _ConstValue.GRID_HEIGHT] = true;
        queue.push(cc.v2(x, y));
        var front = 0;
        while (front < queue.length) {
            var point = queue[front];
            var cellModel = this.cells[point.y][point.x];
            front++;
            if (!cellModel) {
                continue;
            }

            for (var i = 0; i < direction.length; i++) {
                var tmpX = point.x + direction[i].x;
                var tmpY = point.y + direction[i].y;

                if (tmpX < 1 || tmpX > _ConstValue.GRID_WIDTH || tmpY < 1 || tmpY > _ConstValue.GRID_HEIGHT || vis[tmpX + tmpY * _ConstValue.GRID_HEIGHT] || !this.cells[tmpY][tmpX]) {
                    continue;
                }
                if (cellModel.type == this.cells[tmpY][tmpX].type) {
                    vis[tmpX + tmpY * _ConstValue.GRID_HEIGHT] = true;
                    queue.push(cc.v2(tmpX, tmpY));
                }
            }
        }
        return queue;
    };
    var rowResult = checkWithDirection.call(this, x, y, [cc.v2(1, 0), cc.v2(-1, 0)]);
    var colResult = checkWithDirection.call(this, x, y, [cc.v2(0, -1), cc.v2(0, 1)]);
    var result = [];
    var newCellStatus = "";
    //เงื่อนไข
    if (rowResult.length >= 5 || colResult.length >= 5) {
        //newCellStatus = CELL_STATUS.BIRD;
    } else if (rowResult.length >= 3 && colResult.length >= 3) {
        newCellStatus = _ConstValue.CELL_STATUS.WRAP;
    } else if (rowResult.length >= 4) {
        //newCellStatus = CELL_STATUS.LINE;

    } else if (colResult.length >= 4) {
        //newCellStatus = CELL_STATUS.COLUMN;
    }
    if (rowResult.length >= 3) {
        result = rowResult;
    }

    if (colResult.length >= 3) {
        var tmp = result.concat();
        colResult.forEach(function (newEle) {
            var flag = false;
            tmp.forEach(function (oldEle) {
                if (newEle.x == oldEle.x && newEle.y == oldEle.y) {
                    flag = true;
                }
            }, this);
            if (!flag) {
                result.push(newEle);
            }
        }, this);
    }
    return [result, newCellStatus, this.cells[y][x].type];
};

//Create cell
GameModel.prototype.printInfo = function () {
    for (var i = 1; i <= 8; i++) {
        var printStr = "";
        for (var j = 1; j <= 8; j++) {
            printStr += this.cells[i][j].type + " ";
        }
        console.log(printStr + "this is celles info");
    }
};

GameModel.prototype.getCells = function () {
    return this.cells;
};

//------------>>>>>>>>START controller>>>>>>>>>>>>>>>>>>------------
//01คลิกที่ตาราง
GameModel.prototype.selectCell = function (pos) {
    this.changeModels = []; //change model retrun view
    this.effectsQueue = [];

    var lastPos = this.lastPos;
    console.log("current cell position " + pos + " Last cell position " + lastPos);
    var delta = Math.abs(pos.x - lastPos.x) + Math.abs(pos.y - lastPos.y);
    if (delta != 1) {
        this.lastPos = pos;
        return [[], []];
    }

    var curClickCell = this.cells[pos.y][pos.x];
    var lastClickCell = this.cells[lastPos.y][lastPos.x];
    this.exchangeCell(lastPos, pos);
    var result1 = this.checkPoint(pos.x, pos.y)[0];
    var result2 = this.checkPoint(lastPos.x, lastPos.y)[0];
    this.curTime = 0;
    this.pushToChangeModels(curClickCell);
    this.pushToChangeModels(lastClickCell);
    var isCanBomb = curClickCell.status != _ConstValue.CELL_STATUS.COMMON && lastClickCell.status != _ConstValue.CELL_STATUS.COMMON || curClickCell.status == _ConstValue.CELL_STATUS.BIRD || lastClickCell.status == _ConstValue.CELL_STATUS.BIRD;
    if (result1.length < 3 && result2.length < 3 && !isCanBomb) {
        this.exchangeCell(lastPos, pos);
        curClickCell.moveToAndBack(lastPos);
        lastClickCell.moveToAndBack(pos);
        this.lastPos = cc.v2(-1, -1);
        return [this.changeModels];
    } else {
        this.lastPos = cc.v2(-1, -1);
        curClickCell.moveTo(lastPos, this.curTime);
        lastClickCell.moveTo(pos, this.curTime);
        var checkPoint = [pos, lastPos];
        this.curTime += _ConstValue.ANITIME.TOUCH_MOVE;
        this.processCrush(checkPoint);
        this.score += 30;
        return [this.changeModels, this.effectsQueue];
    }
};

GameModel.prototype.processCrush = function (checkPoint) {
    var cycleCount = 0;
    while (checkPoint.length > 0) {
        var bombModels = [];
        if (cycleCount == 0 && checkPoint.length == 2) {
            var pos1 = checkPoint[0];
            var pos2 = checkPoint[1];
            var model1 = this.cells[pos1.y][pos1.x];
            var model2 = this.cells[pos2.y][pos2.x];

            if (model1.status == _ConstValue.CELL_STATUS.BIRD && model2.status == _ConstValue.CELL_STATUS.BIRD) {
                for (var _i = 1; _i <= _ConstValue.GRID_WIDTH; _i++) {
                    for (var _j = 1; _j <= _ConstValue.GRID_HEIGHT; _j++) {
                        if (this.cells[_i][_j] && this.cells[_i][_j].status != _ConstValue.CELL_STATUS.COMMON) {
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[_i][_j]);
                        }
                    }
                }

                for (var _i2 = 1; _i2 <= _ConstValue.GRID_HEIGHT; _i2++) {
                    for (var _j2 = 1; _j2 <= _ConstValue.GRID_WIDTH; _j2++) {
                        this.crushCell(_j2, _i2, false, cycleCount);
                    }
                }
            }

            //Boom
            if (model1.status == _ConstValue.CELL_STATUS.BIRD && model2.status == _ConstValue.CELL_STATUS.LINE || model1.status == _ConstValue.CELL_STATUS.BIRD && model2.status == _ConstValue.CELL_STATUS.COLUMN || model1.status == _ConstValue.CELL_STATUS.BIRD && model2.status == _ConstValue.CELL_STATUS.WRAP) {
                var curType = model2.type;
                console.log("LINE COLUMN WRAP，" + curType);
                for (var _i3 = 1; _i3 <= _ConstValue.GRID_HEIGHT; _i3++) {
                    for (var _j3 = 1; _j3 <= _ConstValue.GRID_WIDTH; _j3++) {
                        if (this.cells[_i3][_j3] && this.cells[_i3][_j3].type == curType) {
                            this.cells[_i3][_j3].status = model2.status;
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[_i3][_j3]);
                            this.changeModels.push(this.cells[_i3][_j3]);
                        }
                    }
                }
            }
            if (model1.status == _ConstValue.CELL_STATUS.LINE && model2.status == _ConstValue.CELL_STATUS.BIRD || model1.status == _ConstValue.CELL_STATUS.COLUMN && model2.status == _ConstValue.CELL_STATUS.BIRD || model1.status == _ConstValue.CELL_STATUS.WRAP && model2.status == _ConstValue.CELL_STATUS.BIRD) {
                var _curType = model1.type;
                console.log("LINE COLUMN WRAP，" + _curType);
                for (var _i4 = 1; _i4 <= _ConstValue.GRID_HEIGHT; _i4++) {
                    for (var _j4 = 1; _j4 <= _ConstValue.GRID_WIDTH; _j4++) {
                        if (this.cells[_i4][_j4] && this.cells[_i4][_j4].type == _curType) {
                            this.cells[_i4][_j4].status = model1.status;
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[_i4][_j4]);
                            this.changeModels.push(this.cells[_i4][_j4]);
                        }
                    }
                }
            }

            if (model1.status == _ConstValue.CELL_STATUS.BIRD && model2.status == _ConstValue.CELL_STATUS.COMMON) {
                model1.type = model2.type;
                bombModels.push(model1);
            }
            if (model1.status == _ConstValue.CELL_STATUS.COMMON && model2.status == _ConstValue.CELL_STATUS.BIRD) {
                model2.type = model1.type;
                bombModels.push(model2);
            }

            //LINE COLUMN WRAP
            if (model1.status == _ConstValue.CELL_STATUS.LINE && model2.status == _ConstValue.CELL_STATUS.LINE || model1.status == _ConstValue.CELL_STATUS.COLUMN && model2.status == _ConstValue.CELL_STATUS.COLUMN || model1.status == _ConstValue.CELL_STATUS.LINE && model2.status == _ConstValue.CELL_STATUS.COLUMN || model1.status == _ConstValue.CELL_STATUS.COLUMN && model2.status == _ConstValue.CELL_STATUS.LINE
            // || (model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.WRAP )

            ) {
                    bombModels.push(model1);
                    bombModels.push(model2);
                }

            // 5 WRAP  WRAP 
            if (model1.status == _ConstValue.CELL_STATUS.WRAP && model2.status == _ConstValue.CELL_STATUS.WRAP) {
                // if(model1.x == model2.x){
                //     let flag = pos1.x < pos2.x ? 1 : -1;
                //     let plus = (-1) * flag;
                //     let model1 = (this.cells[pos1.y][pos1.x + plus]) ? this.cells[pos1.y][pos1.x + plus]: model1;
                //     let model2 = (this.cells[pos2.y][pos2.x - plus]) ? this.cells[pos2.y][pos2.x - plus]: model2;
                //     console.log(model1.x +" (1111) " + model1.y  + "$$$$$$$$" + model2.x + " (22222) " + model2.y);
                //     bombModels.push(model1);
                //     bombModels.push(model2);
                // }else{
                //     let flag = pos1.y < pos2.y ? 1 : -1;
                //     let plus = (-1) * flag;
                //     let model1 = (this.cells[pos1.y + plus][pos1.x]) ? this.cells[pos1.y + plus][pos1.x]: model1;
                //     let model2 = (this.cells[pos2.y - plus][pos2.x]) ? this.cells[pos2.y - plus][pos2.x]: model2;
                //     console.log(model1.x +" (1111) " + model1.y  + "$$$$$$$$" + model2.x + " (22222) " + model2.y);
                //     bombModels.push(model1);
                //     bombModels.push(model2);
                // }
                bombModels.push(model1);
                bombModels.push(model2);
            }
            // 6 LINE WRAP 
            if (model1.status == _ConstValue.CELL_STATUS.LINE && model2.status == _ConstValue.CELL_STATUS.WRAP || model1.status == _ConstValue.CELL_STATUS.WRAP && model2.status == _ConstValue.CELL_STATUS.LINE) {
                if (model1.status == _ConstValue.CELL_STATUS.LINE) {

                    var posY1 = model1.y;
                    for (var _i5 = 1; _i5 <= _ConstValue.GRID_WIDTH; _i5++) {
                        for (var _j5 = 1; _j5 <= _ConstValue.GRID_HEIGHT; _j5++) {
                            if (_i5 >= posY1 - 1 && _i5 <= posY1 + 1 && this.cells[_i5][_j5]) {
                                this.crushCell(_j5, _i5, false, cycleCount);
                            }
                        }
                    }
                } else {
                    var _posY = model2.y;
                    for (var _i6 = 1; _i6 <= _ConstValue.GRID_WIDTH; _i6++) {
                        for (var _j6 = 1; _j6 <= _ConstValue.GRID_HEIGHT; _j6++) {
                            if (_i6 >= _posY - 1 && _i6 <= _posY + 1 && this.cells[_i6][_j6]) {
                                this.crushCell(_j6, _i6, false, cycleCount);
                            }
                        }
                    }
                }
            }

            // 7 WRAP  COLUMN 
            if (model1.status == _ConstValue.CELL_STATUS.WRAP && model2.status == _ConstValue.CELL_STATUS.COLUMN || model1.status == _ConstValue.CELL_STATUS.COLUMN && model2.status == _ConstValue.CELL_STATUS.WRAP) {
                if (model1.status == _ConstValue.CELL_STATUS.COLUMN) {
                    var _posY2 = model1.x;
                    for (var _i7 = 1; _i7 <= _ConstValue.GRID_WIDTH; _i7++) {
                        for (var _j7 = 1; _j7 <= _ConstValue.GRID_HEIGHT; _j7++) {
                            if (_j7 >= _posY2 - 1 && _j7 <= _posY2 + 1 && this.cells[_i7][_j7]) {
                                this.crushCell(_j7, _i7, false, cycleCount);
                            }
                        }
                    }
                } else {
                    var _posY3 = model2.x;
                    for (var _i8 = 1; _i8 <= _ConstValue.GRID_WIDTH; _i8++) {
                        for (var _j8 = 1; _j8 <= _ConstValue.GRID_HEIGHT; _j8++) {
                            if (_j8 >= _posY3 - 1 && _j8 <= _posY3 + 1 && this.cells[_i8][_j8]) {
                                this.crushCell(_j8, _i8, false, cycleCount);
                            }
                        }
                    }
                }
            }
        }
        for (var i in checkPoint) {
            var pos = checkPoint[i];
            if (!this.cells[pos.y][pos.x]) {
                continue;
            }
            // tmp checkpoint [result,newCellStatus, this.cells[y][x].type];
            var tmp = this.checkPoint(pos.x, pos.y);
            var result = tmp[0];
            var newCellStatus = tmp[1];
            var newCellType = tmp[2];

            if (result.length < 3) {
                continue;
            }
            for (var j in result) {
                var model = this.cells[result[j].y][result[j].x];
                this.crushCell(result[j].x, result[j].y, false, cycleCount); //cell  cycleCount ,cell
                if (model.status != _ConstValue.CELL_STATUS.COMMON) {
                    bombModels.push(model);
                }
            }

            this.createNewCell(pos, newCellStatus, newCellType);
        }
        this.processBomb(bombModels, cycleCount);
        this.curTime += _ConstValue.ANITIME.DIE;
        checkPoint = this.down();
        cycleCount++;
    }
};

GameModel.prototype.createNewCell = function (pos, status, type) {
    if (status == "") {
        return;
    }
    if (status == _ConstValue.CELL_STATUS.BIRD) {
        type = _ConstValue.CELL_TYPE.BIRD;
    }
    var model = new _CellModel2.default();
    this.cells[pos.y][pos.x] = model;
    model.init(type);
    model.setStartXY(pos.x, pos.y);
    model.setXY(pos.x, pos.y);
    model.setStatus(status);
    model.setVisible(0, false);
    model.setVisible(this.curTime, true);
    this.changeModels.push(model);
};

GameModel.prototype.down = function () {
    var newCheckPoint = [];
    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
        for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
            if (this.cells[i][j] == null) {
                var curRow = i;
                for (var k = curRow; k <= _ConstValue.GRID_HEIGHT; k++) {
                    if (this.cells[k][j]) {
                        this.pushToChangeModels(this.cells[k][j]);
                        newCheckPoint.push(this.cells[k][j]);
                        this.cells[curRow][j] = this.cells[k][j];
                        this.cells[k][j] = null;
                        this.cells[curRow][j].setXY(j, curRow);
                        this.cells[curRow][j].moveTo(cc.v2(j, curRow), this.curTime);
                        curRow++;
                    }
                }
                var count = 1;
                for (var k = curRow; k <= _ConstValue.GRID_HEIGHT; k++) {
                    this.cells[k][j] = new _CellModel2.default();
                    this.cells[k][j].init(this.getRandomCellType());
                    this.cells[k][j].setStartXY(j, count + _ConstValue.GRID_HEIGHT);
                    this.cells[k][j].setXY(j, count + _ConstValue.GRID_HEIGHT);
                    this.cells[k][j].moveTo(cc.v2(j, k), this.curTime);
                    count++;
                    this.changeModels.push(this.cells[k][j]);
                    newCheckPoint.push(this.cells[k][j]);
                }
            }
        }
    }
    this.curTime += _ConstValue.ANITIME.TOUCH_MOVE + 0.3;
    return newCheckPoint;
};

GameModel.prototype.pushToChangeModels = function (model) {
    if (this.changeModels.indexOf(model) != -1) {
        return;
    }
    this.changeModels.push(model);
};

GameModel.prototype.cleanCmd = function () {
    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
        for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
            if (this.cells[i][j]) {
                this.cells[i][j].cmd = [];
            }
        }
    }
};

GameModel.prototype.exchangeCell = function (pos1, pos2) {
    var tmpModel = this.cells[pos1.y][pos1.x];
    this.cells[pos1.y][pos1.x] = this.cells[pos2.y][pos2.x];
    this.cells[pos1.y][pos1.x].x = pos1.x;
    this.cells[pos1.y][pos1.x].y = pos1.y;
    this.cells[pos2.y][pos2.x] = tmpModel;
    this.cells[pos2.y][pos2.x].x = pos2.x;
    this.cells[pos2.y][pos2.x].y = pos2.y;
};
// 
// Todo 
GameModel.prototype.setCellTypeNum = function (num) {
    this.cellTypeNum = num;
    this.cellCreateType = [];
    for (var i = 1; i <= num; i++) {
        while (true) {
            var randomNum = Math.floor(Math.random() * _ConstValue.CELL_BASENUM) + 1;
            if (this.cellCreateType.indexOf(randomNum) == -1) {
                this.cellCreateType.push(randomNum);
                break;
            }
        }
    }
};

GameModel.prototype.getRandomCellType = function () {
    var index = Math.floor(Math.random() * this.cellTypeNum);
    console.log(this.cellCreateType[index] + " this.cellCreateType[index]");
    return this.cellCreateType[index];
};

// 04 bombModels
GameModel.prototype.processBomb = function (bombModels, cycleCount) {
    var _this = this;

    var _loop = function _loop() {
        var newBombModel = [];
        var bombTime = _ConstValue.ANITIME.BOMB_DELAY;

        bombModels.forEach(function (model) {
            if (model.status == _ConstValue.CELL_STATUS.LINE) {
                for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
                    if (this.cells[model.y][i]) {
                        if (this.cells[model.y][i].status != _ConstValue.CELL_STATUS.COMMON) {
                            newBombModel.push(this.cells[model.y][i]); //newBombModel
                        }
                        this.crushCell(i, model.y, false, cycleCount); // crushcell
                    }
                }
                this.score += 200;
                this.addRowBomb(this.curTime, cc.v2(model.x, model.y));
            } else if (model.status == _ConstValue.CELL_STATUS.COLUMN) {
                for (var _i9 = 1; _i9 <= _ConstValue.GRID_HEIGHT; _i9++) {
                    if (this.cells[_i9][model.x]) {
                        if (this.cells[_i9][model.x].status != _ConstValue.CELL_STATUS.COMMON) {
                            newBombModel.push(this.cells[_i9][model.x]);
                        }
                        this.crushCell(model.x, _i9, false, cycleCount);
                    }
                }
                this.score += 200;
                this.addColBomb(this.curTime, cc.v2(model.x, model.y));
            } else if (model.status == _ConstValue.CELL_STATUS.WRAP) {
                var x = model.x;
                var y = model.y;
                this.score += 500;
                for (var _i10 = 1; _i10 <= _ConstValue.GRID_WIDTH; _i10++) {
                    for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
                        var delta = Math.abs(x - j) + Math.abs(y - _i10);
                        if (this.cells[_i10][j] && delta <= 2) {
                            if (this.cells[_i10][j].status != _ConstValue.CELL_STATUS.COMMON) {
                                newBombModel.push(this.cells[_i10][j]);
                            }
                            this.crushCell(j, _i10, false, cycleCount);
                        }
                    }
                }
            } else if (model.status == _ConstValue.CELL_STATUS.BIRD) {
                var crushType = model.type;
                if (bombTime < _ConstValue.ANITIME.BOMB_BIRD_DELAY) {
                    bombTime = _ConstValue.ANITIME.BOMB_BIRD_DELAY;
                }
                if (crushType == _ConstValue.CELL_TYPE.BIRD) {
                    crushType = this.getRandomCellType();
                }
                for (var _i11 = 1; _i11 <= _ConstValue.GRID_WIDTH; _i11++) {
                    for (var _j9 = 1; _j9 <= _ConstValue.GRID_HEIGHT; _j9++) {
                        if (this.cells[_i11][_j9] && this.cells[_i11][_j9].type == crushType) {
                            if (this.cells[_i11][_j9].status != _ConstValue.CELL_STATUS.COMMON) {
                                newBombModel.push(this.cells[_i11][_j9]);
                            }
                            this.crushCell(_j9, _i11, true, cycleCount);
                        }
                    }
                }
                this.score += 1000;
                //this.crushCell(model.x, model.y);
            }
        }, _this);
        if (bombModels.length > 0) {
            _this.curTime += bombTime;
        }
        bombModels = newBombModel;
    };

    while (bombModels.length > 0) {
        _loop();
    }
};
/**
 * 
 * @param {开始播放的时间} playTime 
 * @param {*ll} 位置pos 
 * @param {*第几次消除，用于播放音效} step 
 */
GameModel.prototype.addCrushEffect = function (playTime, pos, step) {
    this.effectsQueue.push({
        playTime: playTime,
        pos: pos,
        action: "crush",
        step: step
    });
};

GameModel.prototype.addRowBomb = function (playTime, pos) {
    this.effectsQueue.push({
        playTime: playTime,
        pos: pos,
        action: "rowBomb"
    });
};

GameModel.prototype.addColBomb = function (playTime, pos) {
    this.effectsQueue.push({
        playTime: playTime,
        pos: pos,
        action: "colBomb"
    });
};

GameModel.prototype.addWrapBomb = function (playTime, pos) {}
// TODO


// 030 cell
;GameModel.prototype.crushCell = function (x, y, needShake, step) {
    var model = this.cells[y][x];
    this.pushToChangeModels(model);
    if (needShake) {
        model.toShake(this.curTime);
        model.toDie(this.curTime + _ConstValue.ANITIME.DIE_SHAKE);
        this.score += step * 30;
    } else {
        model.toDie(this.curTime);
        this.score += step * 30;
    }
    this.addCrushEffect(this.curTime, cc.v2(model.x, model.y), step);
    this.cells[y][x] = null;
};

GameModel.prototype.findSelectCell = function () {
    var res = [];
    for (var ii = 0; ii < 3; ii++) {
        res[ii] = [];
    }

    for (var i = 2; i <= _ConstValue.GRID_WIDTH - 2; i++) {
        for (var j = 2; j <= _ConstValue.GRID_HEIGHT - 2; j++) {
            if (this.cells[i][j]) {
                //sou1
                // a     b
                //   a a
                // c     d
                if (this.cells[i][j].type == this.cells[i + 1][j].type && this.cells[i - 1][j - 1] && this.cells[i + 1][j - 1] && this.cells[i - 1][j + 2] && this.cells[i + 1][j + 2] && this.cells[i][j + 1]) {
                    // if( ((this.cells[i][j].type == this.cells[i-1][j-1].type ||this.cells[i][j].type == this.cells[i+1][j-1].type)
                    // && this.cells[i][j-1]) 
                    // || ((this.cells[i][j].type == this.cells[i-1][j+2].type ||this.cells[i][j].type == this.cells[i+1][j+2].type)
                    // && this.cells[i][j+2])
                    //  )
                    //  this.death_sign = false;

                    if (this.cells[i][j].type == this.cells[i - 1][j - 1].type && this.cells[i][j - 1]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i + 1, j];
                        res[2] = [i - 1, j - 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@111 " + this.cells[i - 1][j - 1].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i - 1][j + 1].type && this.cells[i][j - 1]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i + 1, j];
                        res[2] = [i - 1, j + 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@222 " + this.cells[i - 1][j + 1].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i + 2][j + 1].type && this.cells[i][j + 2]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i + 1, j];
                        res[2] = [i + 2, j + 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@333 " + this.cells[i + 2][j + 1].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i + 2][j - 1].type && this.cells[i][j + 2]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i + 1, j];
                        res[2] = [i + 2, j - 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@444 " + this.cells[i + 2][j - 1].type);
                        return res;
                        break;
                    }
                }
                //sou2
                // a   b
                //   a
                //   a 
                // c   d
                if (this.cells[i][j].type == this.cells[i][j + 1].type && this.cells[i - 1][j - 1] && this.cells[i - 1][j + 1] && this.cells[i + 2][j - 1] && this.cells[i + 2][j + 1] && this.cells[i + 1][j]) {
                    if (this.cells[i][j].type == this.cells[i - 1][j - 1].type && this.cells[i - 1][j]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i, j + 1];
                        res[2] = [i - 1, j - 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@555 " + this.cells[i - 1][j - 1].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i - 1][j + 2].type && this.cells[i - 1][j]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i, j + 1];
                        res[2] = [i - 1, j + 2];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@666 " + this.cells[i - 1][j + 2].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i + 1][j - 1].type && this.cells[i + 2][j]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i, j + 1];
                        res[2] = [i + 1, j - 1];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@777 " + this.cells[i + 1][j - 1].type);
                        return res;
                        break;
                    }
                    if (this.cells[i][j].type == this.cells[i + 1][j + 2].type && this.cells[i + 2][j]) {
                        this.death_sign = false;
                        res[0] = [i, j];
                        res[1] = [i, j + 1];
                        res[2] = [i + 1, j + 2];
                        console.log(this.cells[i][j].type + "@@@@@@@@@@@888 " + this.cells[i + 1][j + 2].type);
                        return res;
                        break;
                    }
                } else {
                    //sou3
                    // a   a      a   b
                    //   a          a
                    // c          a    
                    if (this.cells[i][j].type == this.cells[i - 1][j - 1].type && this.cells[i - 1][j + 1] && this.cells[i - 1][j] && this.cells[i + 1][j - 1] && this.cells[i][j - 1] && this.cells[i - 1][j - 1]) {
                        if (this.cells[i][j].type == this.cells[i - 1][j + 1].type && this.cells[i - 1][j]) {
                            this.death_sign = false;
                            res[0] = [i, j];
                            res[1] = [i - 1, j - 1];
                            res[2] = [i - 1, j + 1];
                            console.log(this.cells[i][j].type + "@@@@@@@@@@@999 " + this.cells[i - 1][j + 1].type);
                            return res;
                            break;
                        }
                        if (this.cells[i][j].type == this.cells[i + 1][j - 1].type && this.cells[i][j - 1]) {
                            this.death_sign = false;
                            res[0] = [i, j];
                            res[1] = [i - 1, j - 1];
                            res[2] = [i + 1, j - 1];
                            console.log(this.cells[i][j].type + "@@@@@@@@@@@xxx " + this.cells[i + 1][j - 1].type);
                            return res;
                            break;
                        }
                    }
                    //sou4
                    //     a          b
                    //   a          a
                    // b   a      a   a
                    if (this.cells[i][j].type == this.cells[i + 1][j + 1].type && this.cells[i - 1][j + 1] && this.cells[i][j + 1] && this.cells[i + 1][j - 1] && this.cells[i + 1][j] && this.cells[i + 1][j + 1]) {
                        if (this.cells[i][j].type == this.cells[i - 1][j + 1].type && this.cells[i][j + 1]) {
                            this.death_sign = false;
                            res[0] = [i, j];
                            res[1] = [i + 1, j + 1];
                            res[2] = [i - 1, j + 1];
                            console.log(this.cells[i][j].type + "@@@@@@@@@@@aaa " + this.cells[i - 1][j + 1].type);
                            return res;
                            break;
                        }
                        if (this.cells[i][j].type == this.cells[i + 1][j - 1].type && this.cells[i + 1][j]) {
                            this.death_sign = false;
                            res[0] = [i, j];
                            res[1] = [i + 1, j + 1];
                            res[2] = [i + 1, j - 1];
                            console.log(this.cells[i][j].type + "@@@@@@@@@@@bbb " + this.cells[i + 1][j - 1].type);
                            return res;
                            break;
                        }
                    }
                }
            }
        }
    }
};
module.exports = exports["default"];

cc._RF.pop();