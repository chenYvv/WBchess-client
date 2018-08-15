(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/manager/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3ef4aEXO/JAubXiht2tYRN2', 'Game', __filename);
// script/manager/Game.js

'use strict';

var Constants = require('Constants');
var GAME_STATE = Constants.GAME_STATE;
var STAND = Constants.STAND;
var CHESS_TYPE = Constants.CHESS_TYPE;
cc.Class({
    extends: cc.Component,

    properties: {
        gameState: {
            default: GAME_STATE.PREPARE,
            type: GAME_STATE
        },
        turn: {
            default: STAND.BLACK,
            type: STAND
        },
        blackScoreLabel: cc.Label,
        whiteScoreLabel: cc.Label,
        infoPanel: cc.Node,
        infoLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        G.gameManager = this;
        this.infoAnimation = this.infoPanel.getComponent(cc.Animation);
    },


    // start () {

    // },

    // 开始游戏
    startGame: function startGame() {
        this.gameState = GAME_STATE.PLAYING;
        this.turn = STAND.BLACK;
        this.showInfo('start');
    },


    // 更换对手
    changeTurn: function changeTurn() {
        this.turn = -this.turn;
    },


    // 消息提示
    showInfo: function showInfo(type) {
        switch (type) {
            case 'start':
                if (G.stand === STAND.BLACK) {
                    this.infoLabel.string = '你是蓝色方\n执黑棋先手';
                } else if (G.stand === STAND.WHITE) {
                    this.infoLabel.string = '你是红色方\n执白棋后手';
                }
                break;

            default:
                break;
        }
        this.infoAnimation.play();
    }

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
        //# sourceMappingURL=Game.js.map
        