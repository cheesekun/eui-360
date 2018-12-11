class RewardMy extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
	}

	// A页面监听 a.addEventListener("bcallback", (e: egret.TouchEvent)=>{console.log("b回传的data信息",e.data);}, this);
	// B界面抛出 this.parent.dispatchEventWith("bcallback",false,data);

	private close() {
		let closeEvent: egret.Event = new egret.Event('CLOSE_POP');
		this.parent.parent.dispatchEvent(closeEvent);
	}

}