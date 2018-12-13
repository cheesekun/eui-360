class prize extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Button;
	public msg: eui.Label;
	public appName: eui.Label;
	public icon: eui.Image;
	public img: eui.Image;
	

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.msg.text = `恭喜你。。。${this.appName.text}`;
		console.log(GameData.prizeObj)
		this.appName.text = GameData.prizeObj.appName;
		this.icon.source = GameData.prizeObj.icon;
		this.img.source = GameData.prizeObj.img;
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
	}

	private close() {
		let closeEvent: egret.Event = new egret.Event('CLOSE_POP_PRIZE');
		this.parent.dispatchEvent(closeEvent);
	}

}