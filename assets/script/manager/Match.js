
const Constants = require('Constants');
const STAND = Constants.STAND;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(Constants)
        G.queueSocket = io.connect('127.0.0.1:4747/queue', { 'force new connection': true });
        G.queueSocket.on('set stand', function (stand) {
            if (stand === 'black') {
                G.stand = STAND.BLACK;
            } else if (stand === 'white') {
                G.stand = STAND.WHITE;
            }
            console.log(G.stand)
        });
        G.queueSocket.on('match success', function (roomId) {
            console.log('match success:' + roomId);
            G.roomSocket = io.connect('127.0.0.1:4747/room' + roomId,  { 'force new connection': true });
            G.queueSocket.disconnect();
            cc.director.loadScene('Game');
        });
    },

    // 取消匹配
    onBtnCancel() {
        G.queueSocket.disconnect();
        cc.director.loadScene('Menu');
    },

    // start () {

    // },

    // update (dt) {},
});
