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
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super.call(this) || this;
    }
    StartScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // 播放背景音乐
        this.sound = RES.getRes('music_m4a');
        this.soundChannel = this.sound.play(0, -1);
        // GameData.musicSwitch = 1;
        this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
        this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.popRuleGroup.visible = true;
        }, this);
        this.btnGroup.touchEnabled = true;
        this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controllGroupBtns, this);
        // 监听弹窗关闭事件
        this.addEventListener('CLOSE_POP_REWARD_MY', this.closeRewardMy, this);
        this.addEventListener('CLOSE_POP_RULE', this.closeRule, this);
        this.startAnimation();
    };
    // 控制音乐播放
    StartScene.prototype.musicController = function () {
        if (this.soundChannel) {
            this.soundChannel.stop();
            this.soundChannel = null;
            this.musicRotate(false);
            return;
        }
        this.soundChannel = this.sound.play(0, -1);
        this.musicRotate(true);
    };
    // 控制 musicImg 转动
    StartScene.prototype.musicRotate = function (isPlay) {
        var tw = egret.Tween;
        isPlay === true ? tw.resumeTweens(this.musicImg) : tw.pauseTweens(this.musicImg);
    };
    // 我的奖品
    StartScene.prototype.showMyReward = function () {
        // TODO: ajax 请求数据
        var data;
        this.popRewardGroup.visible = true;
        if (!data) {
            // this.popRewardMy.visible = true;
        }
    };
    // 按钮组事件委托
    StartScene.prototype.controllGroupBtns = function (evt) {
        switch (evt.target) {
            case this.rewardMyBtn:
                this.showMyReward();
                break;
            case this.shareBtn:
                window.location.href = 'https://service.weibo.com/widget/public/login.php?source=share&backurl=https%3A%2F%2Fservice.weibo.com%2Fshare%2Fmobile.php%3Ftitle%3D5.1%25E6%2589%25BE%25E4%25BD%25A0%25E5%25A6%25B9%26url%3Dhttp%253A%252F%252Fhuodong.mobilem.360.cn%252F0422%252Findex.html%26pic%3Dhttp%253A%252F%252Fp7.qhimg.com%252Fd%252Finn%252F385c96b2%252Fwx.jpg%26frefer%3Dhttp%3A%2F%2Fhuodong.mobilem.360.cn%2F0422%2Findex.html';
                break;
            case this.toMainBtn:
                SceneManager.toMainScene();
                break;
        }
    };
    // 关闭我的奖品弹框
    StartScene.prototype.closeRewardMy = function () {
        this.popRewardGroup.visible = false;
    };
    // 关闭规则弹框
    StartScene.prototype.closeRule = function () {
        this.popRuleGroup.visible = false;
    };
    // 初始动画
    StartScene.prototype.startAnimation = function () {
        var tw = egret.Tween;
        // 音乐图片转动
        tw.get(this.musicImg, {
            loop: true
        }).to({
            rotation: 360
        }, 3000);
        // TODO: 扫帚与簸箕动画
        tw.get(this.pjImg, {
            loop: true
        }).to({
            rotation: 4.65
        }, 500)
            .to({
            rotation: 10.61
        }, 500);
        tw.get(this.sbImg, {
            loop: true
        }).to({
            rotation: 5.55
        }, 500)
            .to({
            rotation: 1.69
        }, 500);
    };
    return StartScene;
}(eui.Component));
__reflect(StartScene.prototype, "StartScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StartScene.js.map