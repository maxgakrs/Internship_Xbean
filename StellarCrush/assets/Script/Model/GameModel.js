import CellModel from "./CellModel";
import { CELL_TYPE, CELL_BASENUM, CELL_STATUS, GRID_WIDTH, GRID_HEIGHT, ANITIME } from "./ConstValue";

export default function GameModel(){
    this.cells = null;
    this.cellBgs = null;
    this.lastPos = cc.v2(-1, -1);
    this.cellTypeNum = 5;
    this.cellCreateType = []; 
    this.score = 0;  
    this.death_sign = false; 
    this.data = [] 
}

GameModel.prototype.init = function(cellTypeNum){
    this.cells = [];
    this.setCellTypeNum(cellTypeNum || this.cellTypeNum);
    for(var i = 1;i<=GRID_WIDTH;i++){
        this.cells[i] = [];                
        for(var j = 1;j <= GRID_HEIGHT;j++){
            this.cells[i][j] = new CellModel();
        }
    }
  
    for(var i = 1;i<=GRID_WIDTH;i++){
        for(var j = 1;j <= GRID_HEIGHT;j++){
            let flag = true;
            while(flag){
                flag = false;
                this.cells[i][j].init(this.getRandomCellType());
               
                let result = this.checkPoint(j, i)[0];
                if(result.length > 2){
                    flag = true;
                }
                this.cells[i][j].setXY(j, i);
                this.cells[i][j].setStartXY(j, i);
            }
        }
    }
}


GameModel.prototype.reInitWithData = function(){
    // this.printInfo();
    let indexArr = [];
    for (let k = 0;k< GRID_HEIGHT* GRID_WIDTH;k++){
        indexArr[k] = false;
    }
    console.log(indexArr);
    for(var i = 5;i<=GRID_WIDTH;i++){             
        for(var j = 5;j <= GRID_HEIGHT;j++){
            let pos1 = cc.v2(i,j);
            let index1 = Math.floor(Math.random() * (1 + GRID_WIDTH - 1) + 1);
            let index2 = Math.floor(Math.random() * (1 + GRID_HEIGHT - 1) + 1);
            let pos2 = cc.v2(index1,index2);
            // console.log(indexArr[i*GRID_WIDTH+ j] +" okokokokoko"+indexArr[index1*GRID_WIDTH + index2]);
            if(!indexArr[i*GRID_WIDTH+ j-1] && !indexArr[index1*GRID_WIDTH + index2-1] &&(i!=index1) && (j!=index2)){
                this.exchangeCell(pos1,pos2);
                let tmp =  this.cells[i][j].type;
                this.cells[index1][index2].type = tmp;
                this.cells[i][j].type = this.cells[index1][index2].type;
                indexArr[i*GRID_WIDTH+ j-1] = true;
            indexArr[index1*GRID_WIDTH + index2-1] = true;
            }else{
                break;
            }
            
        }
    }
    return this.cells;
} 

//gainScore
GameModel.prototype.gainScore = function(){
    var sum = 0;
    this.score += 0;
    sum += this.score;
    // console.log("SCORE:::" + this.score + "sum:" + sum);
    return sum;
}

GameModel.prototype.checkPoint = function (x, y) {

    let checkWithDirection = function (x, y, direction) {
        let queue = [];
        let vis = [];
        vis[x + y * GRID_HEIGHT] = true;
        queue.push(cc.v2(x, y));
        let front = 0;
        while (front < queue.length) {
            let point = queue[front];
            let cellModel = this.cells[point.y][point.x];
            front++;
            if (!cellModel) {
                continue;
            }

            for (let i = 0; i < direction.length; i++) {
                let tmpX = point.x + direction[i].x;
                let tmpY = point.y + direction[i].y;

                if (tmpX < 1 || tmpX > GRID_WIDTH
                    || tmpY < 1 || tmpY > GRID_HEIGHT
                    || vis[tmpX + tmpY * GRID_HEIGHT]
                    || !this.cells[tmpY][tmpX]) {
                    continue;
                }
                if (cellModel.type == this.cells[tmpY][tmpX].type) {
                    vis[tmpX + tmpY * GRID_HEIGHT] = true;
                    queue.push(cc.v2(tmpX, tmpY));
                }
            }
        }
        return queue;
    }
    let rowResult = checkWithDirection.call(this,x,y,[cc.v2(1, 0), cc.v2(-1, 0)]);
    let colResult = checkWithDirection.call(this,x,y,[cc.v2(0, -1), cc.v2(0, 1)]);
    let result = [];
    let newCellStatus = "";
    //เงื่อนไข
    if(rowResult.length >= 5 || colResult.length >= 5){
        //newCellStatus = CELL_STATUS.BIRD;
    }
    else if(rowResult.length >= 3 && colResult.length >= 3){
        newCellStatus = CELL_STATUS.WRAP;
    }
    else if(rowResult.length >= 4){
        //newCellStatus = CELL_STATUS.LINE;
        
    }
    else if(colResult.length >= 4){
        //newCellStatus = CELL_STATUS.COLUMN;
    }
   if(rowResult.length >= 3){
        result = rowResult;
    }
    
    if(colResult.length >= 3){
        let tmp = result.concat();
        colResult.forEach(function(newEle){
            let flag = false;
            tmp.forEach(function (oldEle) {
                if(newEle.x == oldEle.x && newEle.y == oldEle.y){
                    flag = true;
                }
            }, this);
            if(!flag){
                result.push(newEle);
            }
        }, this);
    }
    return [result,newCellStatus, this.cells[y][x].type];
}

//Create cell
GameModel.prototype.printInfo = function(){
    for(var i = 1; i<=8 ;i++){
        var printStr = "";
        for(var j = 1; j<=8;j++){
            printStr += this.cells[i][j].type + " ";
        }
        console.log(printStr+ "this is celles info");
    }
}

GameModel.prototype.getCells = function(){
    return this.cells;
}

//------------>>>>>>>>START controller>>>>>>>>>>>>>>>>>>------------
//01คลิกที่ตาราง
GameModel.prototype.selectCell =function(pos){
    this.changeModels = [];//change model retrun view
    this.effectsQueue = []; 
   
    var lastPos = this.lastPos;
    console.log("current cell position "+ pos + " Last cell position "+ lastPos);
    var delta = Math.abs(pos.x - lastPos.x) + Math.abs(pos.y - lastPos.y);
    if(delta != 1){ 
        this.lastPos = pos;
        return [[], []];
    }
 
    let curClickCell = this.cells[pos.y][pos.x]; 
    let lastClickCell = this.cells[lastPos.y][lastPos.x]; 
    this.exchangeCell(lastPos, pos); 
    var result1 = this.checkPoint(pos.x, pos.y)[0];
    var result2 = this.checkPoint(lastPos.x, lastPos.y)[0];
    this.curTime = 0; 
    this.pushToChangeModels(curClickCell);
    this.pushToChangeModels(lastClickCell);
    let isCanBomb = (curClickCell.status != CELL_STATUS.COMMON && lastClickCell.status != CELL_STATUS.COMMON)
           || curClickCell.status == CELL_STATUS.BIRD ||
             lastClickCell.status == CELL_STATUS.BIRD; 
    if(result1.length < 3 && result2.length < 3 && !isCanBomb){
        this.exchangeCell(lastPos, pos);
        curClickCell.moveToAndBack(lastPos);
        lastClickCell.moveToAndBack(pos);
        this.lastPos = cc.v2(-1, -1);
        return [this.changeModels];
    }
    else{
        this.lastPos = cc.v2(-1,-1);
        curClickCell.moveTo(lastPos, this.curTime);
        lastClickCell.moveTo(pos, this.curTime);
        var checkPoint = [pos, lastPos];
        this.curTime += ANITIME.TOUCH_MOVE;
        this.processCrush(checkPoint);
        this.score += 30;
        return [this.changeModels, this.effectsQueue];
    }
}

GameModel.prototype.processCrush = function(checkPoint){
    let cycleCount = 0;
     while(checkPoint.length > 0){
        let bombModels = [];
        if(cycleCount == 0 && checkPoint.length == 2){ 
            let pos1= checkPoint[0];
            let pos2 = checkPoint[1];
            let model1 = this.cells[pos1.y][pos1.x];
            let model2 = this.cells[pos2.y][pos2.x];

            if(model1.status == CELL_STATUS.BIRD && model2.status ==  CELL_STATUS.BIRD){
                for(let i = 1;i <= GRID_WIDTH; i++){
                    for(let j = 1;j <= GRID_HEIGHT; j++){
                        if(this.cells[i][j] && this.cells[i][j].status != CELL_STATUS.COMMON){
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[i][j]);
                        }
                    }
                }

                for(let i = 1;i <= GRID_HEIGHT; i++){
                    for(let j = 1;j <= GRID_WIDTH; j++){
                        this.crushCell(j, i, false, cycleCount);
                        }
                }
            }
            

            //Boom
            if((model1.status == CELL_STATUS.BIRD && model2.status == CELL_STATUS.LINE)  
            || (model1.status == CELL_STATUS.BIRD && model2.status == CELL_STATUS.COLUMN )            
            || (model1.status == CELL_STATUS.BIRD && model2.status == CELL_STATUS.WRAP )    
            ){
                let curType = model2.type;
                console.log("LINE COLUMN WRAP，" + curType);
                for(let i = 1;i <= GRID_HEIGHT; i++){
                    for(let j = 1;j <= GRID_WIDTH; j++){
                        if(this.cells[i][j] && this.cells[i][j].type == curType){
                            this.cells[i][j].status = model2.status;
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[i][j]);
                            this.changeModels.push(this.cells[i][j]);
                        }
                    }
                }
            }
            if ((model1.status == CELL_STATUS.LINE && model2.status == CELL_STATUS.BIRD )
            || (model1.status == CELL_STATUS.COLUMN && model2.status == CELL_STATUS.BIRD )
            || (model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.BIRD )
            ){
                let curType = model1.type;
                console.log("LINE COLUMN WRAP，" + curType);
                for(let i = 1;i <= GRID_HEIGHT; i++){
                    for(let j = 1;j <= GRID_WIDTH; j++){
                        if(this.cells[i][j] && this.cells[i][j].type == curType){
                            this.cells[i][j].status = model1.status;
                            console.log("Here you need to change the special effect of each animal after a delay of 0.3s before eliminating it.");
                            // this.pushToChangeModels(this.cells[i][j]);
                            bombModels.push(this.cells[i][j]);
                            this.changeModels.push(this.cells[i][j]);
                        }
                    }
                }
            }
             

            if ((model1.status == CELL_STATUS.BIRD && model2.status == CELL_STATUS.COMMON) 
            ){
                model1.type = model2.type;
                bombModels.push(model1);
            }
            if ((model1.status == CELL_STATUS.COMMON && model2.status == CELL_STATUS.BIRD )
            ){
                model2.type = model1.type;
                bombModels.push(model2);
            }

            //LINE COLUMN WRAP
            if((model1.status == CELL_STATUS.LINE && model2.status == CELL_STATUS.LINE) 
            || (model1.status == CELL_STATUS.COLUMN && model2.status == CELL_STATUS.COLUMN )
            || (model1.status == CELL_STATUS.LINE && model2.status == CELL_STATUS.COLUMN )
            || (model1.status == CELL_STATUS.COLUMN && model2.status == CELL_STATUS.LINE )
            // || (model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.WRAP )
            
            ){
                bombModels.push(model1);
                bombModels.push(model2);
            }
            
            // 5 WRAP  WRAP 
            if((model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.WRAP )){
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
            if((model1.status == CELL_STATUS.LINE && model2.status == CELL_STATUS.WRAP )
            || (model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.LINE )
            ){
                if(model1.status == CELL_STATUS.LINE){
                   
                    let posY1 = model1.y;
                    for(let i = 1;i <= GRID_WIDTH; i++){
                        for(let j = 1;j <= GRID_HEIGHT; j++){
                            if( (i >= posY1 -1) && (i <= posY1+1) && this.cells[i][j]){
                                this.crushCell(j, i, false, cycleCount);
                            }    
                        }
                    }

                }else{
                    let posY1 = model2.y;
                    for(let i = 1;i <= GRID_WIDTH; i++){
                        for(let j = 1;j <= GRID_HEIGHT; j++){
                            if( (i >= posY1-1) && (i <= posY1+1) && this.cells[i][j]){
                                this.crushCell(j, i, false, cycleCount);
                            }  
                        }
                    }  
                }
            }
            
            // 7 WRAP  COLUMN 
            if((model1.status == CELL_STATUS.WRAP && model2.status == CELL_STATUS.COLUMN )
            || (model1.status == CELL_STATUS.COLUMN && model2.status == CELL_STATUS.WRAP )
            ){
                if(model1.status == CELL_STATUS.COLUMN){
                    let posY1 = model1.x;
                    for(let i = 1;i <= GRID_WIDTH; i++){
                        for(let j = 1;j <= GRID_HEIGHT; j++){
                            if( (j >= posY1-1) && (j <= posY1+1) && this.cells[i][j]){
                                this.crushCell(j, i, false, cycleCount);
                            }    
                        }
                    }

                }else{
                    let posY1 = model2.x;
                    for(let i = 1;i <= GRID_WIDTH; i++){
                        for(let j = 1;j <= GRID_HEIGHT; j++){
                            if( (j >= posY1-1) && (j <= posY1+1) && this.cells[i][j]){
                                this.crushCell(j, i, false, cycleCount);
                            }    
                        }
                    }
                }
                
            }
        

        }
        for(var i in checkPoint){
            var pos = checkPoint[i];
            if(!this.cells[pos.y][pos.x]){
                continue;
            }
            // tmp checkpoint [result,newCellStatus, this.cells[y][x].type];
            var tmp = this.checkPoint(pos.x, pos.y);
            var result = tmp[0];
            var newCellStatus = tmp[1];
            var newCellType = tmp[2];
            
            if(result.length < 3){
                continue;
            }
            for(var j in result){
                var model = this.cells[result[j].y][result[j].x];
                this.crushCell(result[j].x, result[j].y, false, cycleCount); //cell  cycleCount ,cell
                if(model.status != CELL_STATUS.COMMON){
                    bombModels.push(model);
                }
            }

            this.createNewCell(pos, newCellStatus, newCellType);   

        }
        this.processBomb(bombModels, cycleCount);
        this.curTime += ANITIME.DIE;
        checkPoint = this.down();
        cycleCount++;
    }
    
}


GameModel.prototype.createNewCell = function(pos,status,type){
    if(status == ""){
        return ;
    }
    if(status == CELL_STATUS.BIRD){
        type = CELL_TYPE.BIRD
    }
    let model = new CellModel();
    this.cells[pos.y][pos.x] = model
    model.init(type);
    model.setStartXY(pos.x, pos.y);
    model.setXY(pos.x, pos.y);
    model.setStatus(status);
    model.setVisible(0, false);
    model.setVisible(this.curTime, true);
    this.changeModels.push(model);
}

GameModel.prototype.down = function(){
    let newCheckPoint = [];
     for(var i = 1;i<=GRID_WIDTH;i++){
        for(var j = 1;j <= GRID_HEIGHT;j++){
            if(this.cells[i][j] == null){
                var curRow = i;
                for(var k = curRow; k<=GRID_HEIGHT;k++){
                    if(this.cells[k][j]){
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
                for(var k = curRow; k<=GRID_HEIGHT; k++){
                    this.cells[k][j] = new CellModel();
                    this.cells[k][j].init(this.getRandomCellType());
                    this.cells[k][j].setStartXY(j, count + GRID_HEIGHT);
                    this.cells[k][j].setXY(j, count + GRID_HEIGHT);
                    this.cells[k][j].moveTo(cc.v2(j, k), this.curTime);
                    count++;
                    this.changeModels.push(this.cells[k][j]);
                    newCheckPoint.push(this.cells[k][j]);
                }

            }
        }
    }
    this.curTime += ANITIME.TOUCH_MOVE + 0.3
    return newCheckPoint;
}

GameModel.prototype.pushToChangeModels = function(model){
    if(this.changeModels.indexOf(model) != -1){
        return ;
    }
    this.changeModels.push(model);
}

GameModel.prototype.cleanCmd = function(){
    for(var i = 1;i<=GRID_WIDTH;i++){
        for(var j = 1;j <= GRID_HEIGHT;j++){
            if(this.cells[i][j]){
                this.cells[i][j].cmd = [];
            }
        }
    }
}


GameModel.prototype.exchangeCell = function(pos1, pos2){
    var tmpModel = this.cells[pos1.y][pos1.x];
    this.cells[pos1.y][pos1.x] = this.cells[pos2.y][pos2.x];
    this.cells[pos1.y][pos1.x].x = pos1.x;
    this.cells[pos1.y][pos1.x].y = pos1.y;
    this.cells[pos2.y][pos2.x] = tmpModel;
    this.cells[pos2.y][pos2.x].x = pos2.x;
    this.cells[pos2.y][pos2.x].y = pos2.y;
}
// 
// Todo 
GameModel.prototype.setCellTypeNum = function(num){
    this.cellTypeNum = num;
    this.cellCreateType = [];
    for(var i = 1; i<= num;i++){
        while(true){
            var randomNum = Math.floor(Math.random() * CELL_BASENUM) + 1;
            if(this.cellCreateType.indexOf(randomNum) == -1){
                this.cellCreateType.push(randomNum);
                break;
            }
        }
    }
}

GameModel.prototype.getRandomCellType = function(){
    var index = Math.floor(Math.random() * this.cellTypeNum);
    console.log(this.cellCreateType[index]+ " this.cellCreateType[index]");
    return this.cellCreateType[index];
}

// 04 bombModels
GameModel.prototype.processBomb = function(bombModels, cycleCount){
    while(bombModels.length > 0){
        let newBombModel = [];
        let bombTime = ANITIME.BOMB_DELAY;
        
        bombModels.forEach(function(model){
            if(model.status == CELL_STATUS.LINE){
                for(let i = 1; i<= GRID_WIDTH; i++){
                    if(this.cells[model.y][i]){
                        if(this.cells[model.y][i].status != CELL_STATUS.COMMON){
                            newBombModel.push(this.cells[model.y][i]); //newBombModel
                        }
                        this.crushCell(i, model.y, false, cycleCount); // crushcell
                    }
                }
                this.score += 200;
                this.addRowBomb(this.curTime, cc.v2(model.x, model.y));
            }
            else if(model.status == CELL_STATUS.COLUMN){
                for (let i = 1; i <= GRID_HEIGHT; i++) {
                    if (this.cells[i][model.x]) {
                        if (this.cells[i][model.x].status != CELL_STATUS.COMMON) {
                            newBombModel.push(this.cells[i][model.x]);
                        }
                        this.crushCell(model.x, i, false, cycleCount);
                    }
                }
                this.score += 200;
                this.addColBomb(this.curTime, cc.v2(model.x, model.y));
            }
            else if(model.status == CELL_STATUS.WRAP){
                let x = model.x;
                let y = model.y;
                this.score += 500;
                for(let i = 1;i <= GRID_WIDTH; i++){
                    for(let j = 1;j <= GRID_HEIGHT; j++){
                        let delta = Math.abs(x - j) + Math.abs(y - i);
                        if(this.cells[i][j] && delta <= 2){
                            if (this.cells[i][j].status != CELL_STATUS.COMMON) {
                                newBombModel.push(this.cells[i][j]);
                            }
                            this.crushCell(j, i, false, cycleCount);
                        }
                    }
                }
            }
            else if(model.status == CELL_STATUS.BIRD){
                let crushType = model.type
                if(bombTime < ANITIME.BOMB_BIRD_DELAY){
                    bombTime = ANITIME.BOMB_BIRD_DELAY;
                }
                if(crushType == CELL_TYPE.BIRD){
                    crushType = this.getRandomCellType(); 
                }
                for(let i = 1;i <= GRID_WIDTH; i++){
                    for(let j = 1;j <= GRID_HEIGHT; j++){
                        if(this.cells[i][j] && this.cells[i][j].type == crushType){
                            if (this.cells[i][j].status != CELL_STATUS.COMMON) {
                                newBombModel.push(this.cells[i][j]);
                            }
                            this.crushCell(j, i, true, cycleCount);
                        }
                    }
                }
                this.score += 1000;
                //this.crushCell(model.x, model.y);
            }
        },this);
        if(bombModels.length > 0){
            this.curTime += bombTime;
        }
        bombModels = newBombModel;
    }
}
/**
 * 
 * @param {开始播放的时间} playTime 
 * @param {*ll} 位置pos 
 * @param {*第几次消除，用于播放音效} step 
 */
GameModel.prototype.addCrushEffect = function(playTime, pos, step){
    this.effectsQueue.push({
        playTime,
        pos,
        action: "crush",
        step
    });
}

GameModel.prototype.addRowBomb = function(playTime, pos){
    this.effectsQueue.push({
        playTime,
        pos,
        action: "rowBomb"
    });
}

GameModel.prototype.addColBomb = function(playTime, pos){
    this.effectsQueue.push({
        playTime,
        pos,
        action: "colBomb"
    });
}

GameModel.prototype.addWrapBomb = function(playTime, pos){
    // TODO
}

// 030 cell
GameModel.prototype.crushCell = function(x, y, needShake, step){
    let model = this.cells[y][x];
    this.pushToChangeModels(model);
    if(needShake){
        model.toShake(this.curTime)
        model.toDie(this.curTime + ANITIME.DIE_SHAKE);
        this.score += step *30;
    }
    else{
        model.toDie(this.curTime);
        this.score += step *30;
    }
    this.addCrushEffect(this.curTime, cc.v2(model.x, model.y), step);
    this.cells[y][x] = null; 
}


GameModel.prototype.findSelectCell = function(){
    let res = [];  
    for(let ii = 0; ii < 3;ii++){
        res[ii] = [];
    }

    for (let i = 2; i<= GRID_WIDTH -2;i++ ){
        for(let j = 2;j <= GRID_HEIGHT -2; j++){
            if(this.cells[i][j]){
                //sou1
                // a     b
                //   a a
                // c     d
                if (this.cells[i][j].type == this.cells[i+1][j].type && this.cells[i-1][j-1] && this.cells[i+1][j-1]
                    && this.cells[i-1][j+2] && this.cells[i+1][j+2] && this.cells[i][j+1]
                    ){
                    // if( ((this.cells[i][j].type == this.cells[i-1][j-1].type ||this.cells[i][j].type == this.cells[i+1][j-1].type)
                    // && this.cells[i][j-1]) 
                    // || ((this.cells[i][j].type == this.cells[i-1][j+2].type ||this.cells[i][j].type == this.cells[i+1][j+2].type)
                    // && this.cells[i][j+2])
                    //  )
                    //  this.death_sign = false;

                     if(((this.cells[i][j].type == this.cells[i-1][j-1].type)
                     && this.cells[i][j-1])){
                         this.death_sign = false;
                        res[0] = [i,j];
                        res[1] = [i+1,j];
                        res[2] = [i-1,j-1];
                        console.log(this.cells[i][j].type+ "@@@@@@@@@@@111 " +this.cells[i-1][j-1].type);
                        return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i-1][j+1].type)
                     && this.cells[i][j-1])){
                         this.death_sign = false;
                        res[0] = [i,j];
                        res[1] = [i+1,j];
                        res[2] = [i-1,j+1];
                        console.log(this.cells[i][j].type+ "@@@@@@@@@@@222 "+this.cells[i-1][j+1].type);
                        return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i+2][j+1].type)
                     && this.cells[i][j+2])){
                         this.death_sign = false;
                        res[0] = [i,j];
                        res[1] = [i+1,j];
                        res[2] = [i+2,j+1];
                        console.log(this.cells[i][j].type+ "@@@@@@@@@@@333 " + this.cells[i+2][j+1].type);
                         return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i+2][j-1].type)
                     && this.cells[i][j+2])){
                         this.death_sign = false;
                        res[0] = [i,j];
                        res[1] = [i+1,j];
                        res[2] = [i+2,j-1];
                        console.log(this.cells[i][j].type+ "@@@@@@@@@@@444 " + this.cells[i+2][j-1].type);
                         return res;
                         break;
                     }
                }
                //sou2
                // a   b
                //   a
                //   a 
                // c   d
                if (this.cells[i][j].type == this.cells[i][j+1].type && this.cells[i-1][j-1] && this.cells[i-1][j+1]
                    && this.cells[i+2][j-1] && this.cells[i+2][j+1] && this.cells[i+1][j]
                    ){
                    if(((this.cells[i][j].type == this.cells[i-1][j-1].type )
                     && this.cells[i-1][j])){
                         this.death_sign = false;
                         res[0] = [i,j];
                         res[1] = [i,j+1];
                         res[2] = [i-1,j-1];
                         console.log(this.cells[i][j].type+ "@@@@@@@@@@@555 " +this.cells[i-1][j-1].type);
                         return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i-1][j+2].type)
                     && this.cells[i-1][j])){
                         this.death_sign = false;
                         res[0] = [i,j];
                         res[1] = [i,j+1];
                         res[2] = [i-1,j+2];
                         console.log(this.cells[i][j].type+ "@@@@@@@@@@@666 " +this.cells[i-1][j+2].type);
                         return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i+1][j-1].type )
                     && this.cells[i+2][j])){
                         this.death_sign = false;
                         res[0] = [i,j];
                         res[1] = [i,j+1];
                         res[2] = [i+1,j-1];
                         console.log(this.cells[i][j].type+ "@@@@@@@@@@@777 " +this.cells[i+1][j-1].type);
                         return res;
                         break;
                     }
                     if(((this.cells[i][j].type == this.cells[i+1][j+2].type)
                     && this.cells[i+2][j])){
                         this.death_sign = false;
                         res[0] = [i,j];
                         res[1] = [i,j+1];
                         res[2] = [i+1,j+2];
                         console.log(this.cells[i][j].type+ "@@@@@@@@@@@888 " +this.cells[i+1][j+2].type);
                         return res;
                         break;
                     }
                }else{
                    //sou3
                    // a   a      a   b
                    //   a          a
                    // c          a    
                    if(this.cells[i][j].type == this.cells[i-1][j-1].type && this.cells[i-1][j+1] && this.cells[i-1][j]
                        && this.cells[i+1][j-1] && this.cells[i][j-1] && this.cells[i-1][j-1]
                        ){
                        if(this.cells[i][j].type == this.cells[i-1][j+1].type && this.cells[i-1][j]){
                            this.death_sign = false;
                            res[0] = [i,j];
                            res[1] = [i-1,j-1];
                            res[2] = [i-1,j+1];
                            console.log(this.cells[i][j].type+ "@@@@@@@@@@@999 "+this.cells[i-1][j+1].type);
                            return res;
                            break;
                        }
                        if(this.cells[i][j].type == this.cells[i+1][j-1].type && this.cells[i][j-1]){
                            this.death_sign = false;
                            res[0] = [i,j];
                            res[1] = [i-1,j-1];
                            res[2] = [i+1,j-1];
                            console.log(this.cells[i][j].type+ "@@@@@@@@@@@xxx "+this.cells[i+1][j-1].type);
                            return res;
                            break;
                        }
                    }
                    //sou4
                    //     a          b
                    //   a          a
                    // b   a      a   a
                    if(this.cells[i][j].type == this.cells[i+1][j+1].type && this.cells[i-1][j+1] && this.cells[i][j+1]
                        && this.cells[i+1][j-1] && this.cells[i+1][j] && this.cells[i+1][j+1]
                        ){
                        if(this.cells[i][j].type == this.cells[i-1][j+1].type && this.cells[i][j+1]){
                            this.death_sign = false;
                            res[0] = [i,j];
                            res[1] = [i+1,j+1];
                            res[2] = [i-1,j+1];
                            console.log(this.cells[i][j].type+ "@@@@@@@@@@@aaa "+this.cells[i-1][j+1].type);
                            return res;
                            break;
                        }
                        if(this.cells[i][j].type == this.cells[i+1][j-1].type && this.cells[i+1][j]){
                            this.death_sign = false;
                            res[0] = [i,j];
                            res[1] = [i+1,j+1];
                            res[2] = [i+1,j-1];
                            console.log(this.cells[i][j].type+ "@@@@@@@@@@@bbb "+this.cells[i+1][j-1].type);
                            return res;
                            break;
                        }
                    }


                }

            }
        } 
    }
    



}
