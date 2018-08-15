
const Constants = require('Constants');
const GAME_STATE = Constants.GAME_STATE;
const STAND = Constants.STAND;
const CHESS_TYPE = Constants.CHESS_TYPE;
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

    onLoad () {
        G.gameManager = this;
        this.infoAnimation = this.infoPanel.getComponent(cc.Animation);
    },

    // start () {

    // },

    // 开始游戏
    startGame() {
        this.gameState = GAME_STATE.PLAYING;
        this.turn = STAND.BLACK;
        this.showInfo('start');
    },

    // 更换对手
    changeTurn() {
        this.turn = -this.turn;
    },

    // 消息提示
    showInfo(type) {
        switch (type) {
            case 'start':
                if ( G.stand === STAND.BLACK ) {
                    this.infoLabel.string = '你是蓝色方\n执黑棋先手';
                } else if( G.stand === STAND.WHITE ){
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
