class StartScene extends eui.Component implements eui.UIComponent {
	public musicImg: eui.Image;
	public pjImg: eui.Image;
	public sbImg: eui.Image;

	public rewardBtn: eui.Button;
	public btnGroup: eui.Group;
	public rewardMyBtn: eui.Button;
	public shareBtn: eui.Button;
	public toMainBtn: eui.Button;

	public popRewardGroup: eui.Group;
	public popRuleGroup: eui.Group;

	private sound: egret.Sound;
	private soundChannel: egret.SoundChannel;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// 播放背景音乐
		this.sound = RES.getRes('music_m4a');
		this.soundChannel = this.sound.play(0, -1);
		// GameData.musicSwitch = 1;
		this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
		this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.popRuleGroup.visible = true;
		}, this);

		this.btnGroup.touchEnabled = true
		this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controllGroupBtns, this);

		// 监听弹窗关闭事件
		this.addEventListener('CLOSE_POP_REWARD_MY', this.closeRewardMy, this);
		this.addEventListener('CLOSE_POP_RULE', this.closeRule, this);
		this.startAnimation();
	}

	// 控制音乐播放
	private musicController(): void {
		if (this.soundChannel) {
			this.soundChannel.stop();
			this.soundChannel = null;
			this.musicRotate(false)
			return;
		}
		this.soundChannel = this.sound.play(0, -1);
		this.musicRotate(true);
	}

	// 控制 musicImg 转动
	private musicRotate(isPlay: boolean): void {
		let tw = egret.Tween;
		isPlay === true ? tw.resumeTweens(this.musicImg) : tw.pauseTweens(this.musicImg);
	}

	// 我的奖品
	private showMyReward(): void {
		// TODO: ajax 请求数据
		let data: Array<Object>;

		this.popRewardGroup.visible = true;

		if (!data) {
			// this.popRewardMy.visible = true;
		}

	}

	// 按钮组事件委托
	private controllGroupBtns(evt: egret.TouchEvent): void {
		switch (evt.target) {
			case this.rewardMyBtn:
				this.showMyReward();
				break;
			case this.shareBtn:
				window.location.href = 'https://service.weibo.com/widget/public/login.php?source=share&backurl=https%3A%2F%2Fservice.weibo.com%2Fshare%2Fmobile.php%3Ftitle%3D5.1%25E6%2589%25BE%25E4%25BD%25A0%25E5%25A6%25B9%26url%3Dhttp%253A%252F%252Fhuodong.mobilem.360.cn%252F0422%252Findex.html%26pic%3Dhttp%253A%252F%252Fp7.qhimg.com%252Fd%252Finn%252F385c96b2%252Fwx.jpg%26frefer%3Dhttp%3A%2F%2Fhuodong.mobilem.360.cn%2F0422%2Findex.html'
				break;
			case this.toMainBtn:
				SceneManager.toMainScene();
				break;
		}
	}

	// 关闭我的奖品弹框
	public closeRewardMy() {
		this.popRewardGroup.visible = false
	}

	// 关闭规则弹框
	public closeRule() {
		this.popRuleGroup.visible = false
	}


	// 初始动画
	private startAnimation(): void {
		let tw = egret.Tween;

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
			rotation:　4.65
		}, 500)
		.to({
			rotation:10.61
		}, 500);

		tw.get(this.sbImg, {
			loop: true
		}).to({
			rotation: 5.55
		}, 500)
		.to({
			rotation: 1.69
		}, 500);
	}
}