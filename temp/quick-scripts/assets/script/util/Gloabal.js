(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/util/Gloabal.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '53cd6Ijcl1BVIQLtiM/CiX9', 'Gloabal', __filename);
// script/util/Gloabal.js

"use strict";

window.G = {
    globalSocket: null, //全局
    hallSocket: null, //大厅
    queueSocket: null, //队列
    roomSocket: null, //房间
    gameManager: null,
    chessManager: null,
    stand: null
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
        //# sourceMappingURL=Gloabal.js.map
        