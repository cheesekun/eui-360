class MainScene extends eui.Component implements eui.UIComponent {
	public scroller: eui.Scroller;
	public viewportGroup: eui.Group;

	public mThigh: eui.Image;
	public mCalf: eui.Image;
	public mHand: eui.Image;
	public smokeGroup: eui.Group;

	public gHand: eui.Image;
	public gLeg: eui.Image;

	public tip: eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.scroller.viewport = this.viewportGroup;
		this.scroller.bounces = false;
		this.scroller.horizontalScrollBar.autoVisibility = false;
		this.scroller.viewport.scrollH = 740;

		setTimeout(() => {
			this.viewportGroup.removeChild(this.tip);
		}, 3000)

		this.startAnimation();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controlSceneEvent, this);
	}

	// 对整个页面进行事件委托
	private controlSceneEvent(evt: egret.TouchEvent) {
		console.log(evt.target.source)
		console.log(evt.target.y)
		if (!evt.target.source) return;
		let firstLetter: string = evt.target.source[0]
		switch (firstLetter) {
			case 'c':
				this.cAnimation(evt.target)
		}
	}

	// c 动画
	private cAnimation(target) {
		let tw = egret.Tween;
		tw.get(target, {
			loop: false
		}).to({
			y: target.y - 50
		}, 500, egret.Ease.backInOut)
			.to({
				y: target.y
			}, 250, egret.Ease.backInOut);
	}

	// a 动画
	private aAnimation(target) {

	}

	// 初始动画
	private startAnimation() {
		let tw = egret.Tween;
		// man 手臂动画
		tw.get(this.mHand, {
			loop: true
		}).to({
			rotation: 16
		}, 800)
		.to({
			rotation: 15
		}, 200)
		.wait(1000)
		.to({
			rotation: 0
		}, 1000)
		.wait(500);

		// man 大腿动画
		tw.get(this.mThigh, {
			loop: true
		}).to({
			rotation: 8.16
		}, 800)
		.to({
			rotation: 7.16
		}, 200)
		.wait(1000)
		.to({
			rotation: 2.81
		}, 1000)
		.wait(500);

		// man 小腿动画
		tw.get(this.mCalf, {
			loop: true
		}).to({
			x: 60.31,
			y: 170.16,
			rotation: 18
		}, 800)
		.to({
			rotation: 16
		}, 200)
		.wait(1000)
		.to({
			x: 56.83,
			y: 180.73,
			rotation: 2
		}, 1000)
		.wait(500);

		// man 烟雾 动画
		tw.get(this.smokeGroup, {
			loop: true
		}).to({
			x: 56,
			y: 0,
			alpha: 1
		}, 1000)
		.wait(300)
		.to({
			alpha: 0
		}, 1000)
		.to({
			x: 54.33,
			y: 8.98
		})

		// girl 手臂动画
		tw.get(this.gHand, {
			loop: true
		}).to({
			rotation: -3
		}, 800)
		.to({
			rotation: 5.21
		}, 800)

		// girl 腿部动画
		tw.get(this.gLeg, {
			loop: true
		}).to({
			rotation: -10
		}, 800)
		.to({
			rotation: 0
		}, 800)
	}
}