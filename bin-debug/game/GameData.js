var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 数据中心
var MusicStatus;
(function (MusicStatus) {
    MusicStatus[MusicStatus["off"] = 0] = "off";
    MusicStatus[MusicStatus["no"] = 1] = "no"; // 开
})(MusicStatus || (MusicStatus = {}));
var GameData = (function () {
    function GameData() {
    }
    GameData.musicStatus = 1;
    GameData.prizeTotal = 14;
    GameData.prizeObj = {
        appName: '',
        icon: '',
        img: '',
        url: ''
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
