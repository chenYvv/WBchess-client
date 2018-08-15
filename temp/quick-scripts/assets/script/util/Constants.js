(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/util/Constants.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7adc0yp7NVHd5qEe4vWCSNs', 'Constants', __filename);
// script/util/Constants.js

"use strict";

var STAND = cc.Enum({
    BLACK: 47,
    WHITE: -47
});

var CHESS_TYPE = cc.Enum({
    NONE: -1,
    BLACK: 47,
    WHITE: -47
});

var GAME_STATE = cc.Enum({
    PREPARE: -1,
    PLAYING: -1,
    OVER: -1
});

var DIR = cc.Enum({
    LEFT: -1,
    LEFT_UP: -1,
    UP: -1,
    RIGHT_UP: -1,
    RIGHT: -1,
    RIGHT_DOWN: -1,
    DOWN: -1,
    LEFT_DOWN: -1
});

module.exports = {
    STAND: STAND,
    CHESS_TYPE: CHESS_TYPE,
    GAME_STATE: GAME_STATE,
    DIR: DIR
};

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
        //# sourceMappingURL=Constants.js.map
        