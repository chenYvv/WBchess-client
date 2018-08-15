
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        G.globalSocket = io.connect('127.0.0.1:4747');
        G.hallSocket = io.connect('127.0.0.1:4747/hall',{'force new connection': true});
    },

    onBtnStart() {
        G.hallSocket.disconnect();
        cc.director.loadScene('Match');
    },

    // start () {

    // },

    // update (dt) {},
});
