const Constants  = require('Constants');
const CHESS_TYPE = Constants.CHESS_TYPE;
cc.Class({
    extends: cc.Component,

    properties: {
        pics: {
            default:[],
            type:[cc.SpriteFrame]
        },
        _type: CHESS_TYPE.NONE,
        type: {
            get(){
                return this._type;
            },
            set(val){
                this._type = val;
                if( val === CHESS_TYPE.BLACK ){
                    this.getComponent(cc.Sprite).spriteFrame = this.pics[0];
                }else if( val === CHESS_TYPE.WHITE ){
                    this.getComponent(cc.Sprite).spriteFrame = this.pics[1];
                }else{
                    this.getComponent(cc.Sprite).spriteFrame = null;
                }
            }
        },
        coor: cc.v2(0,0), // 坐标
        chance: 0 // 周围可反转棋子的可能性
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.type = CHESS_TYPE.NONE;
    },

    // start () {

    // },

    // update (dt) {},
});
