(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/manager/Match.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c28feMML3RNtK+Ghr+josUb', 'Match', __filename);
// script/manager/Match.js

'use strict';

var Constants = require('Constants');
var STAND = Constants.STAND;

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        console.log(Constants);
        G.queueSocket = io.connect('127.0.0.1:4747/queue', { 'force new connection': true });
        G.queueSocket.on('set stand', function (stand) {
            if (stand === 'black') {
                G.stand = STAND.BLACK;
            } else if (stand === 'white') {
                G.stand = STAND.WHITE;
            }
            console.log(G.stand);
        });
        G.queueSocket.on('match success', function (roomId) {
            console.log('match success:' + roomId);
            G.roomSocket = io.connect('127.0.0.1:4747/room' + roomId, { 'force new connection': true });
            G.queueSocket.disconnect();
            cc.director.loadScene('Game');
        });
    },


    // 取消匹配
    onBtnCancel: function onBtnCancel() {
        G.queueSocket.disconnect();
        cc.director.loadScene('Menu');
    }
}

// start () {

// },

// update (dt) {},
);

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
        //# sourceMappingURL=Match.js.map
        