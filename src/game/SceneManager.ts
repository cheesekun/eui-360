class SceneManager {
    public _stage: egret.DisplayObjectContainer; // 根场景
    public startScene: StartScene;
    public mainScene: MainScene;

    constructor() {
        this.startScene = new StartScene();
        this.mainScene = new MainScene();
    }

    // 获取单例
    static sceneManager: SceneManager;
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManager();
        }
        return this.sceneManager;
    }

    // 删除其他场景
    private removeOtherScene(scene) {
        let arr = [this.startScene, this.mainScene];
        arr.forEach(item => {
            if (scene === item) {
                return
            }
            if (item.parent) {
                this._stage.removeChild(item)
            }
        })
    }

    // 设置根场景
    public setScene(s: egret.DisplayObjectContainer) {
        this._stage = s;
    }

    // 开始场景
    static toStartScene() {
        this.instance.removeOtherScene(this.instance.startScene)
        this.instance._stage.addChild(this.instance.startScene)
    }

    // 游戏场景
    static toMainScene() {
        this.instance.removeOtherScene(this.instance.mainScene)
        this.instance._stage.addChild(this.instance.mainScene)
    }
}