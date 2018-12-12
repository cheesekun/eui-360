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
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super.call(this) || this;
    }
    Rule.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Rule.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    Rule.prototype.close = function () {
        var closeEvent = new egret.Event('CLOSE_POP_RULE');
        this.parent.parent.dispatchEvent(closeEvent);
    };
    return Rule;
}(eui.Component));
__reflect(Rule.prototype, "Rule", ["eui.UIComponent", "egret.DisplayObject"]);
