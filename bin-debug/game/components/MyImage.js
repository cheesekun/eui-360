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
// 自定义图片类
var MyImage = (function (_super) {
    __extends(MyImage, _super);
    function MyImage() {
        var _this = _super.call(this) || this;
        _this.isClick = false;
        return _this;
    }
    return MyImage;
}(eui.Image));
__reflect(MyImage.prototype, "MyImage");
