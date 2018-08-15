(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/manager/Chessboard.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f6fa4a0aM9LvLJMWarapLJl', 'Chessboard', __filename);
// script/manager/Chessboard.js

'use strict';

var Constants = require('Constants');
var CHESS_TYPE = Constants.CHESS_TYPE;
var STAND = Constants.STAND;
var GAME_STATE = Constants.GAME_STATE;
cc.Class({
    extends: cc.Component,

    properties: {
        COL: 0,
        ROW: 0,
        chessPrefab: cc.Prefab,
        chesses: []
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        G.chessManager = this;
        var chessWidth = this.node.width / this.COL;
        for (var x = 0; x < this.COL; x++) {
            this.chesses[x] = [];
            for (var y = 0; y < this.ROW; y++) {
                var chessNode = cc.instantiate(this.chessPrefab);
                chessNode.parent = this.node;
                chessNode.width = chessWidth - 15;
                chessNode.height = chessWidth - 15;
                chessNode.position = cc.v2(chessWidth / 2 + x * chessWidth, chessWidth / 2 + y * chessWidth);

                var chess = chessNode.getComponent('Chess');
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
    addTouchEvent: function addTouchEvent(chess) {
        var self = this;
        chess.node.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (G.gameManager.gameState === GAME_STATE.PLAYING && G.gameManager.turn === G.stand) {
                if (chess.type === CHESS_TYPE.NONE) {
                    if (self.judgePass(G.stand, chess)) {
                        self.fallChess(chess);
                        G.gameManager.changeTurn();
                    }
                }
            }
        });
    },


    // 判断该点能否下
    judgePass: function judgePass(turn, chess) {
        var tempChess = chess;
        for (var dir = 1; dir <= 8; dir++) {
            var _tempChess = this.nearChess(chess, dir);
            while (_tempChess !== null && _tempChess.type === -turn) {
                _tempChess = this.nearChess(_tempChess, dir);
                if (_tempChess.type === turn) {
                    return true;
                }
            }
        }
        return false;
    },


    // 获该点8个方向，某个方向的棋子
    nearChess: function nearChess(chess, dir) {
        switch (dir) {
            case 1:
                //left
                if (chess.coor.x !== 0) {
                    return this.chesses[chess.coor.x - 1][chess.coor.y];
                }
                break;
            case 2:
                //left up
                if (chess.coor.x !== 0 && chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x - 1][chess.coor.y + 1];
                }
                break;
            case 3:
                //up
                if (chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x][chess.coor.y + 1];
                }
                break;
            case 4:
                //right up
                if (chess.coor.x !== this.COL - 1 && chess.coor.y !== this.ROW - 1) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y + 1];
                }
                break;
            case 5:
                //right
                if (chess.coor.x !== this.COL - 1) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y];
                }
                break;
            case 6:
                //right down
                if (chess.coor.x !== this.COL - 1 && chess.coor.y !== 0) {
                    return this.chesses[chess.coor.x + 1][chess.coor.y - 1];
                }
                break;
            case 7:
                //down
                if (chess.coor.y !== 0) {
                    return this.chesses[chess.coor.x][chess.coor.y - 1];
                }
                break;
            case 8:
                //left down
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
    fallChess: function fallChess(chess) {
        chess.type = G.gameManager.turn;
    }

    // start () {

    // },

    // update (dt) {},

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
        //# sourceMappingURL=Chessboard.js.map
        