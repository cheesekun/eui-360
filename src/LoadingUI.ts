class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    private group: eui.Group;

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField = new egret.TextField();

    private createView(): void {
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = 200;
        this.group.height = 300;
        this.group.addChild(this.textField);

        // let loadingPng = new eui.Image();
        // loadingPng.source = 'image/LoadingUI.ts.png'
        // this.group.addChild(loadingPng)

        let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
        this.group.layout = vLayout;

    }

    public onProgress(current: number, total: number): void {
        let percent: number = Math.round(current / total * 100);
        this.textField.text = `${percent}`;
    }
}