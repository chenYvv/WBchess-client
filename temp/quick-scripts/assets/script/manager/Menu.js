(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/manager/Menu.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '80aeeHC4zFDXLPJQWD/xaBg', 'Menu', __filename);
// script/manager/Menu.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        G.globalSocket = io.connect('127.0.0.1:4747');
        G.hallSocket = io.connect('127.0.0.1:4747/hall', { 'force new connection': true });
    },
    onBtnStart: function onBtnStart() {
        G.hallSocket.disconnect();
        cc.director.loadScene('Match');
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
        //# sourceMappingURL=Menu.js.map
        