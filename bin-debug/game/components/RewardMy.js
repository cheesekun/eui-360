var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var RewardMy = (function (_super) {
    __extends(RewardMy, _super);
    function RewardMy() {
        return _super.call(this) || this;
    }
    RewardMy.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RewardMy.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    // A页面监听 a.addEventListener("bcallback", (e: egret.TouchEvent)=>{console.log("b回传的data信息",e.data);}, this);
    // B界面抛出 this.parent.dispatchEventWith("bcallback",false,data);
    RewardMy.prototype.close = function () {
        var closeEvent = new egret.Event('CLOSE_POP_REWARD_MY');
        this.parent.parent.dispatchEvent(closeEvent);
    };
    return RewardMy;
}(eui.Component));
__reflect(RewardMy.prototype, "RewardMy", ["eui.UIComponent", "egret.DisplayObject"]);
