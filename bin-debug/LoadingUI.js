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
        _this.percent = new eui.Label();
        // private bar:eui.ProgressBar = new eui.ProgressBar();
        _this.bar = new egret.Shape();
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.width = GameUtil.getStageWidth();
        this.height = GameUtil.getStageHeight();
        // 背景色
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x273826, 1);
        bg.graphics.drawRect(0, 0, this.width, this.height);
        bg.graphics.endFill();
        this.addChild(bg);
        // loading 图片
        var loadingPng = new eui.Image();
        loadingPng.source = 'loading_png';
        // 百分比
        this.percent.textColor = 0xF7DB91;
        this.percent.textAlign = 'center';
        this.percent.y = 580;
        // 添加组
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = 400;
        this.group.height = 300;
        this.group.x = GameUtil.getCenterW(400);
        this.group.y = GameUtil.getCenterH(300);
        this.group.addChild(loadingPng);
        this.group.addChild(this.bar);
        this.group.addChild(this.percent);
        var vLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.group.layout = vLayout;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var percent = Math.round(current / total * 100);
        this.percent.text = percent + "%";
        // 进度条
        this.bar.graphics.beginFill(0x4C947A, 1);
        this.bar.graphics.drawRect(50, 150, 3 * percent, 12);
        this.bar.graphics.endFill();
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
