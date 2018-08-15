const Constants = require('Constants');
const CHESS_TYPE = Constants.CHESS_TYPE;
const STAND = Constants.STAND;
const GAME_STATE = Constants.GAME_STATE;
cc.Class({
    extends: cc.Component,

    properties: {
        COL: 0,
        ROW: 0,
        chessPrefab: cc.Prefab,
        chesses: []
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        G.chessManager = this;
        let chessWidth = this.node.width / this.COL;
        for (let x = 0; x < this.COL; x++) {
            this.chesses[x] = [];
            for (let y = 0; y < this.ROW; y++) {
                let chessNode = cc.instantiate( this.chessPrefab );
                chessNode.parent = this.node;
                chessNode.width = chessWidth - 15;
                chessNode.height = chessWidth - 15;
                chessNode.position = cc.v2( chessWidth/2 + x*chessWidth, chessWidth/2 + y*chessWidth );
                
                let chess = chessNode.getComponent('Chess');
                chess.coor = cc.v2(x, y);
                
                this.chesses[x][y] = chess;

                // 添加点击事件
                this.addTouchEvent(chess);
            }
        }

        // 默认四颗棋子
        this.chesses[3][3].type = CHESS_TYPE.BLACK;
        this.chesses[3][4].type = CHESS_TYPE.WHITE;
        this.chesses[4][3].type = CHESS_TYPE.WHITE;
        this.chesses[4][4].type = CHESS_TYPE.BLACK;

        // 开始游戏
        G.gameManager.startGame();

    },

    // 下棋点击事件
    addTouchEvent(chess) {
        let self = this;
        chess.node.on( cc.Node.EventType.TOUCH_END, function(e) {
            if ( G.gameManager.gameState === GAME_STATE.PLAYING && G.gameManager.turn === G.stand ) {
                if( chess.type === CHESS_TYPE.NONE ) {
                    if( self.judgePass(G.stand, chess) ) {
                        self.fallChess(chess);
                        G.gameManager.changeTurn();
                    }
                }
            }
        })
    },

    // 判断该点能否下
    judgePass(turn, chess) {
        let tempChess = chess;
        for (let dir = 1; dir <= 8; dir++) {
            let tempChess = this.nearChess(chess, dir);
            while( tempChess !== null && tempChess.type === -turn ) {
                tempChess = this.nearChess(tempChess, dir);
                if( tempChess.type === turn ){
                    return true;
                }
            } 
        }
        return false;
    },

    // 获该点8个方向，某个方向的棋子
    nearChess(chess, dir) {
        switch (dir) {
            case 1://left
                if (chess.coor.x !== 0) {
                    return this.chesses[chess.coor.x - 1][chess.coor.y];
                }
                break;
            case 2://left up
                if (chess.coor.x !== 0 && chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x - 1][chess.coor.y + 1];
                }
                break;
            case 3://up
                if (chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x][chess.coor.y + 1];
                }
                break;
            case 4://right up
                if (chess.coor.x !== this.COL - 1 && chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y + 1];
                }
                break;
            case 5://right
                if (chess.coor.x !== this.COL - 1) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y];
                }
                break;
            case 6://right down
                if (chess.coor.x !== this.COL - 1 && chess.coor.y !== 0) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y - 1];
                }
                break;
            case 7://down
                if (chess.coor.y !== 0) {
                    return this.chesses[chess.coor.x][chess.coor.y - 1];
                }
                break;
            case 8://left down
                if (chess.coor.x !== 0 && chess.coor.y !== 0) {
                    return this.chesses[chess.coor.x - 1][chess.coor.y - 1];
                }
                break;
            default:
                break;
        }
        return null;
    },

    // 下棋子
    fallChess(chess) {
        chess.type = G.gameManager.turn;
    },

    // 棋子变色
    changeChess(chess) {
    }
    

    // start () {

    // },

    // update (dt) {},
});
