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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.textField = new egret.TextField();
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = 200;
        this.group.height = 300;
        this.group.addChild(this.textField);
        // let loadingPng = new eui.Image();
        // loadingPng.source = 'image/LoadingUI.ts.png'
        // this.group.addChild(loadingPng)
        var vLayout = new eui.VerticalLayout();
        this.group.layout = vLayout;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var percent = Math.round(current / total * 100);
        this.textField.text = "" + percent;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
