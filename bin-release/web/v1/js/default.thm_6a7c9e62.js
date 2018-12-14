window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartScene":"resource/skins/StartScene.exml","MainScene":"resource/skins/MainScene.exml","RewardMy":"resource/skins/RewardMy.exml","Rule":"resource/skins/Rule.exml","prize":"resource/skins/prize.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MainScene.exml'] = window.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	var MainSceneSkin$Skin1 = 	(function (_super) {
		__extends(MainSceneSkin$Skin1, _super);
		function MainSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._MyImage1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin1.prototype;

		_proto._MyImage1_i = function () {
			var t = new MyImage();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin1;
	})(eui.Skin);

	var MainSceneSkin$Skin2 = 	(function (_super) {
		__extends(MainSceneSkin$Skin2, _super);
		function MainSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._MyImage1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin2.prototype;

		_proto._MyImage1_i = function () {
			var t = new MyImage();
			t.percentHeight = 100;
			t.source = "btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin2;
	})(eui.Skin);

	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["mCalf","mThigh","mHand","smokeGroup","man","gLeg","gHand","girl","app1","app2","app3","app4","app5","app7","app9","app10","app12","app11","app13","app14","app15","app16","c1","c2","c3","c4","c5","c6","c7_1","c7_2","shoeGroup","c8_1","c8_2","sockGroup","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","tip","viewportGroup","scroller","rr","lr","restRect","total","prizeShowGroup","directionGroup","closeBtn","msg","icon","img","appName","urlBtn","downloadGroup","popPrizeGroup","prizeComponent"];
		
		this.height = 1280;
		this.width = 2200;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.scroller_i(),this.directionGroup_i(),this.popPrizeGroup_i(),this.prizeComponent_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfff0c7;
		t.height = 700;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.top = 0;
		t.width = 2200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.enabled = false;
		t.fillAlpha = 1;
		t.fillColor = 0xd1776c;
		t.height = 580;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.width = 2200;
		t.x = 0;
		t.y = 700;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 1280;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this.viewportGroup_i();
		return t;
	};
	_proto.viewportGroup_i = function () {
		var t = new eui.Group();
		this.viewportGroup = t;
		t.scrollEnabled = true;
		t.width = 2200;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._MyImage1_i(),this._MyImage2_i(),this._MyImage3_i(),this._MyImage4_i(),this._MyImage5_i(),this._MyImage6_i(),this._MyImage7_i(),this._MyImage8_i(),this._MyImage9_i(),this._MyImage10_i(),this._MyImage11_i(),this._MyImage12_i(),this.man_i(),this.girl_i(),this.app1_i(),this._MyImage22_i(),this.app2_i(),this.app3_i(),this.app4_i(),this.app5_i(),this.app7_i(),this.app9_i(),this.app10_i(),this.app12_i(),this.app11_i(),this.app13_i(),this.app14_i(),this.app15_i(),this.app16_i(),this.c1_i(),this.c2_i(),this.c3_i(),this.c4_i(),this.c5_i(),this.c6_i(),this.shoeGroup_i(),this.sockGroup_i(),this.c9_i(),this.c10_i(),this.c11_i(),this.c12_i(),this.c13_i(),this.c14_i(),this.c15_i(),this.c16_i(),this.c17_i(),this.c18_i(),this.tip_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._MyImage1_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 508.93;
		t.scaleY = 0.96;
		t.source = "d7_png";
		t.width = 840.35;
		t.x = 171.91;
		t.y = 718.25;
		return t;
	};
	_proto._MyImage2_i = function () {
		var t = new MyImage();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1.03;
		t.source = "d1_png";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._MyImage3_i = function () {
		var t = new MyImage();
		t.scaleX = 1.02;
		t.scaleY = 1.16;
		t.source = "d3_png";
		t.top = 0;
		t.x = 444;
		return t;
	};
	_proto._MyImage4_i = function () {
		var t = new MyImage();
		t.source = "d5_png";
		t.x = 339.18;
		t.y = 692.04;
		return t;
	};
	_proto._MyImage5_i = function () {
		var t = new MyImage();
		t.source = "sofa_png";
		t.x = 653.9;
		t.y = 603.43;
		return t;
	};
	_proto._MyImage6_i = function () {
		var t = new MyImage();
		t.scaleY = 1.04;
		t.source = "d2_png";
		t.x = 1027.41;
		t.y = 1.98;
		return t;
	};
	_proto._MyImage7_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 241.4;
		t.source = "d8_png";
		t.top = 0;
		t.width = 795.45;
		t.x = 473.98;
		return t;
	};
	_proto._MyImage8_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.scaleX = 1.13;
		t.source = "d12_png";
		t.width = 228.77;
		t.x = 1572.4;
		t.y = 768.29;
		return t;
	};
	_proto._MyImage9_i = function () {
		var t = new MyImage();
		t.source = "d9_png";
		t.x = 1487.91;
		t.y = 433.8;
		return t;
	};
	_proto._MyImage10_i = function () {
		var t = new MyImage();
		t.source = "d10_png";
		t.x = 1878.71;
		t.y = 127.14;
		return t;
	};
	_proto._MyImage11_i = function () {
		var t = new MyImage();
		t.source = "d11_png";
		t.x = 1932.21;
		t.y = 151.64;
		return t;
	};
	_proto._MyImage12_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.source = "d4_png";
		t.width = 567.98;
		t.x = 1632.02;
		t.y = 432;
		return t;
	};
	_proto.man_i = function () {
		var t = new eui.Group();
		this.man = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 246;
		t.scaleX = 1.73;
		t.scaleY = 2.44;
		t.width = 322;
		t.x = 616;
		t.y = 470;
		t.elementsContent = [this._MyImage13_i(),this._MyImage14_i(),this.mCalf_i(),this.mThigh_i(),this.mHand_i(),this.smokeGroup_i(),this._Rect3_i(),this._MyImage18_i()];
		return t;
	};
	_proto._MyImage13_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 188;
		t.scaleX = 0.74;
		t.source = "head_png";
		t.width = 258;
		t.x = 148.15;
		t.y = 0;
		return t;
	};
	_proto._MyImage14_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88.64;
		t.source = "nleg_png";
		t.width = 233.31;
		t.x = -49.13;
		t.y = 173.22;
		return t;
	};
	_proto.mCalf_i = function () {
		var t = new MyImage();
		this.mCalf = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = -0.52;
		t.height = 60.79;
		t.rotation = 346.55;
		t.source = "xleg_png";
		t.width = 104.86;
		t.x = 60.31;
		t.y = 170.16;
		return t;
	};
	_proto.mThigh_i = function () {
		var t = new MyImage();
		this.mThigh = t;
		t.anchorOffsetX = 144.63;
		t.anchorOffsetY = 20.39;
		t.height = 39.64;
		t.rotation = 5.08;
		t.scaleX = 1.21;
		t.source = "bleg_png";
		t.width = 143.7;
		t.x = 207.55;
		t.y = 187.13;
		return t;
	};
	_proto.mHand_i = function () {
		var t = new MyImage();
		this.mHand = t;
		t.anchorOffsetX = 134.1;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.rotation = 0;
		t.source = "hand_png";
		t.width = 134;
		t.x = 268;
		t.y = 135;
		return t;
	};
	_proto.smokeGroup_i = function () {
		var t = new eui.Group();
		this.smokeGroup = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.78;
		t.width = 70.52;
		t.x = 64.33;
		t.y = 8.98;
		t.elementsContent = [this._MyImage15_i(),this._MyImage16_i(),this._MyImage17_i()];
		return t;
	};
	_proto._MyImage15_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.63;
		t.scaleX = 1.15;
		t.scaleY = 1;
		t.source = "q1_png";
		t.width = 25.63;
		t.x = 44.18000000000001;
		t.y = 56.59;
		return t;
	};
	_proto._MyImage16_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "q2_png";
		t.width = 20.57;
		t.x = 30.689999999999998;
		t.y = 37.140000000000015;
		return t;
	};
	_proto._MyImage17_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "q3_png";
		t.width = 15.41;
		t.x = 14.350000000000023;
		t.y = 18.02;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.height = 20;
		t.width = 20;
		t.x = 197;
		t.y = 11;
		return t;
	};
	_proto._MyImage18_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.37;
		t.width = 90.06;
		t.x = 187;
		t.y = 107;
		return t;
	};
	_proto.girl_i = function () {
		var t = new eui.Group();
		this.girl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 532;
		t.width = 478;
		t.x = 1134;
		t.y = 662;
		t.elementsContent = [this.gLeg_i(),this._MyImage19_i(),this._MyImage20_i(),this.gHand_i(),this._MyImage21_i()];
		return t;
	};
	_proto.gLeg_i = function () {
		var t = new MyImage();
		this.gLeg = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 4;
		t.height = 138;
		t.rotation = 0;
		t.source = "g_leg";
		t.width = 138;
		t.x = 141.56;
		t.y = 330;
		return t;
	};
	_proto._MyImage19_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.scaleX = 1.12;
		t.source = "box";
		t.width = 154;
		t.x = 258.82;
		t.y = 349.32;
		return t;
	};
	_proto._MyImage20_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.scaleX = 1.11;
		t.source = "g_body";
		t.width = 250.79;
		t.x = 79.41;
		t.y = 198.17;
		return t;
	};
	_proto.gHand_i = function () {
		var t = new MyImage();
		this.gHand = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.rotation = 5.21;
		t.source = "g_hand";
		t.width = 180;
		t.x = 346.4;
		t.y = 197.56;
		return t;
	};
	_proto._MyImage21_i = function () {
		var t = new MyImage();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266.68;
		t.scaleX = 1.13;
		t.source = "g_head";
		t.width = 314;
		t.x = 75.41;
		t.y = -21.05;
		return t;
	};
	_proto.app1_i = function () {
		var t = new MyImage();
		this.app1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 598.55;
		t.left = 0;
		t.scaleY = 1.1;
		t.source = "app1";
		t.width = 216;
		t.y = 562;
		return t;
	};
	_proto._MyImage22_i = function () {
		var t = new MyImage();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "d6_png";
		t.x = 0;
		t.y = 1052;
		return t;
	};
	_proto.app2_i = function () {
		var t = new MyImage();
		this.app2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "app2";
		t.width = 120;
		t.x = 24.5;
		t.y = 1126;
		return t;
	};
	_proto.app3_i = function () {
		var t = new MyImage();
		this.app3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.98;
		t.scaleX = 0.55;
		t.source = "app3";
		t.width = 116.98;
		t.x = 265.91;
		t.y = 881.68;
		return t;
	};
	_proto.app4_i = function () {
		var t = new MyImage();
		this.app4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 159.4;
		t.source = "app4";
		t.width = 159.4;
		t.x = 332.55;
		t.y = 1024.17;
		return t;
	};
	_proto.app5_i = function () {
		var t = new MyImage();
		this.app5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129.09;
		t.source = "app5";
		t.width = 129.09;
		t.x = 825.46;
		t.y = 1082.94;
		return t;
	};
	_proto.app7_i = function () {
		var t = new MyImage();
		this.app7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.06;
		t.source = "app7";
		t.width = 126.06;
		t.x = 1773.86;
		t.y = 768.29;
		return t;
	};
	_proto.app9_i = function () {
		var t = new MyImage();
		this.app9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138.18;
		t.source = "app9";
		t.width = 138.18;
		t.x = 1349.73;
		t.y = 281.81;
		return t;
	};
	_proto.app10_i = function () {
		var t = new MyImage();
		this.app10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101.82;
		t.source = "app10";
		t.width = 101.82;
		t.x = 1051.09;
		t.y = 324.17;
		return t;
	};
	_proto.app12_i = function () {
		var t = new MyImage();
		this.app12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.scaleX = 1.04;
		t.scaleY = 0.91;
		t.source = "app12";
		t.width = 154;
		t.x = 551.18;
		t.y = 467.43;
		return t;
	};
	_proto.app11_i = function () {
		var t = new MyImage();
		this.app11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "app11";
		t.width = 94;
		t.x = 907.55;
		t.y = 467.43;
		return t;
	};
	_proto.app13_i = function () {
		var t = new MyImage();
		this.app13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 168;
		t.scaleX = 0.71;
		t.source = "app13";
		t.width = 168;
		t.x = 2083.71;
		t.y = 267.99;
		return t;
	};
	_proto.app14_i = function () {
		var t = new MyImage();
		this.app14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.source = "app14";
		t.width = 82;
		t.x = 402.9;
		t.y = 815.68;
		return t;
	};
	_proto.app15_i = function () {
		var t = new MyImage();
		this.app15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.source = "app15";
		t.width = 104;
		t.x = 265.91;
		t.y = 768.29;
		return t;
	};
	_proto.app16_i = function () {
		var t = new MyImage();
		this.app16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.04;
		t.scaleX = 0.73;
		t.source = "app16";
		t.width = 99.04;
		t.x = 1957.71;
		t.y = 634.8;
		return t;
	};
	_proto.c1_i = function () {
		var t = new MyImage();
		this.c1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 204;
		t.scaleX = 1;
		t.scaleY = 0.87;
		t.source = "c1";
		t.width = 204;
		t.x = 66;
		t.y = 970;
		return t;
	};
	_proto.c2_i = function () {
		var t = new MyImage();
		this.c2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.13;
		t.scaleY = 0.63;
		t.source = "c2";
		t.width = 82.13;
		t.x = 1250.66;
		t.y = 242.09;
		return t;
	};
	_proto.c3_i = function () {
		var t = new MyImage();
		this.c3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.67;
		t.source = "c3";
		t.width = 86.67;
		t.x = 1245.27;
		t.y = 343.91;
		return t;
	};
	_proto.c4_i = function () {
		var t = new MyImage();
		this.c4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.39;
		t.source = "c4";
		t.width = 59.39;
		t.x = 1170.16;
		t.y = 233.85;
		return t;
	};
	_proto.c5_i = function () {
		var t = new MyImage();
		this.c5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.61;
		t.scaleX = 0.75;
		t.source = "c5";
		t.width = 91.22;
		t.x = 1159.62;
		t.y = 343.86;
		return t;
	};
	_proto.c6_i = function () {
		var t = new MyImage();
		this.c6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 257.88;
		t.source = "c6";
		t.width = 257.88;
		t.x = 1580.07;
		t.y = 79.39;
		return t;
	};
	_proto.shoeGroup_i = function () {
		var t = new eui.Group();
		this.shoeGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 233.33;
		t.width = 260;
		t.x = 1824.77;
		t.y = 1027.2;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.c7_1_i(),this.c7_2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "contentJustify";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.c7_1_i = function () {
		var t = new MyImage();
		this.c7_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.scaleX = 0.74;
		t.scaleY = 1.13;
		t.source = "c7_1";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.c7_2_i = function () {
		var t = new MyImage();
		this.c7_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.scaleX = 0.63;
		t.scaleY = 1.11;
		t.source = "c7_2";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sockGroup_i = function () {
		var t = new eui.Group();
		this.sockGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 240;
		t.x = 1584.77;
		t.y = 1023.25;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.c8_1_i(),this.c8_2_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.c8_1_i = function () {
		var t = new MyImage();
		this.c8_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "c8_1";
		t.width = 107.82;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.c8_2_i = function () {
		var t = new MyImage();
		this.c8_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123.5;
		t.rotation = 360;
		t.scaleX = 1.09;
		t.scaleY = 1;
		t.source = "c8_2";
		t.width = 123.5;
		t.x = 91.85;
		t.y = 64.5;
		return t;
	};
	_proto.c9_i = function () {
		var t = new MyImage();
		this.c9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.97;
		t.source = "c9";
		t.width = 116.97;
		t.x = 1027.41;
		t.y = 1153.55;
		return t;
	};
	_proto.c10_i = function () {
		var t = new MyImage();
		this.c10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138.18;
		t.source = "c10";
		t.width = 138.18;
		t.x = 495.66;
		t.y = 733.84;
		return t;
	};
	_proto.c11_i = function () {
		var t = new MyImage();
		this.c11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 183.64;
		t.source = "c11";
		t.width = 107.12;
		t.x = 616.11;
		t.y = 559.43;
		return t;
	};
	_proto.c12_i = function () {
		var t = new MyImage();
		this.c12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.61;
		t.rotation = 360;
		t.source = "c12";
		t.width = 80.61;
		t.x = 1089.55;
		t.y = 1042.64;
		return t;
	};
	_proto.c13_i = function () {
		var t = new MyImage();
		this.c13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.91;
		t.source = "c13";
		t.width = 78.91;
		t.x = 811.8;
		t.y = 521.7;
		return t;
	};
	_proto.c14_i = function () {
		var t = new MyImage();
		this.c14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127.88;
		t.scaleX = 1.25;
		t.source = "c14";
		t.width = 127.88;
		t.x = 1905.87;
		t.y = 296.64;
		return t;
	};
	_proto.c15_i = function () {
		var t = new MyImage();
		this.c15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.69;
		t.source = "c15";
		t.width = 101.03;
		t.x = 1949.54;
		t.y = 773.63;
		return t;
	};
	_proto.c16_i = function () {
		var t = new MyImage();
		this.c16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.scaleX = 0.77;
		t.source = "c16";
		t.width = 106;
		t.x = 521.95;
		t.y = 1113.83;
		return t;
	};
	_proto.c17_i = function () {
		var t = new MyImage();
		this.c17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.97;
		t.rotation = 360;
		t.source = "c17";
		t.width = 116.97;
		t.x = 763.92;
		t.y = 721.53;
		return t;
	};
	_proto.c18_i = function () {
		var t = new MyImage();
		this.c18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 289.7;
		t.source = "c18";
		t.width = 289.7;
		t.x = 1505.7;
		t.y = 505.86;
		return t;
	};
	_proto.tip_i = function () {
		var t = new MyImage();
		this.tip = t;
		t.source = "tip_png";
		t.x = 797;
		t.y = 404;
		return t;
	};
	_proto.directionGroup_i = function () {
		var t = new eui.Group();
		this.directionGroup = t;
		t.height = 1280;
		t.left = 0;
		t.touchThrough = true;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this.rr_i(),this.lr_i(),this.prizeShowGroup_i()];
		return t;
	};
	_proto.rr_i = function () {
		var t = new MyImage();
		this.rr = t;
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rr";
		t.verticalCenter = 0;
		t.width = 124;
		t.x = 596;
		t.y = 50;
		return t;
	};
	_proto.lr_i = function () {
		var t = new MyImage();
		this.lr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lr";
		t.verticalCenter = 0;
		t.width = 124;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto.prizeShowGroup_i = function () {
		var t = new eui.Group();
		this.prizeShowGroup = t;
		t.height = 50;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 26;
		t.width = 300;
		t.elementsContent = [this._Rect4_i(),this._Rect5_i(),this._Label1_i(),this.restRect_i(),this.total_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf7dca0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 120;
		t.y = 6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "剩余值";
		t.verticalAlign = "middle";
		t.x = 4;
		t.y = 10;
		return t;
	};
	_proto.restRect_i = function () {
		var t = new eui.Rect();
		this.restRect = t;
		t.fillColor = 0xa81a1a;
		t.height = 40;
		t.width = 120;
		t.x = 120;
		t.y = 6;
		return t;
	};
	_proto.total_i = function () {
		var t = new eui.Label();
		this.total = t;
		t.size = 32;
		t.text = "14";
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto.popPrizeGroup_i = function () {
		var t = new eui.Group();
		this.popPrizeGroup = t;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 720;
		t.elementsContent = [this._Rect6_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.alpha = .6;
		t.fillAlpha = 1;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.width = 640;
		t.x = 40;
		t.y = 222;
		t.elementsContent = [this._Rect7_i(),this._MyImage23_i(),this.closeBtn_i(),this.msg_i(),this._Group1_i(),this.downloadGroup_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 50;
		t.fillColor = 0x4c947a;
		t.height = 600;
		t.strokeAlpha = 1;
		t.strokeColor = 0x1f4159;
		t.strokeWeight = 5;
		t.width = 577;
		t.x = 32;
		t.y = 271.03;
		return t;
	};
	_proto._MyImage23_i = function () {
		var t = new MyImage();
		t.height = 261.57;
		t.source = "pop-title_png";
		t.width = 577;
		t.x = 32;
		t.y = 26;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.skinName = MainSceneSkin$Skin1;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.height = 166;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf2b124;
		t.width = 510;
		t.x = 65;
		t.y = 335.37;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 420;
		t.y = 503;
		t.elementsContent = [this.icon_i(),this.img_i(),this.appName_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new MyImage();
		this.icon = t;
		t.height = 118;
		t.width = 124.94;
		t.x = 26;
		t.y = 8;
		return t;
	};
	_proto.img_i = function () {
		var t = new MyImage();
		this.img = t;
		t.height = 146;
		t.width = 146;
		t.x = 226;
		t.y = 12;
		return t;
	};
	_proto.appName_i = function () {
		var t = new eui.Label();
		this.appName = t;
		t.height = 40;
		t.size = 30;
		t.text = "";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 10;
		t.y = 140;
		return t;
	};
	_proto.downloadGroup_i = function () {
		var t = new eui.Group();
		this.downloadGroup = t;
		t.height = 80;
		t.width = 200;
		t.x = 220;
		t.y = 739.24;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this.urlBtn_i(),this._Label2_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.urlBtn_i = function () {
		var t = new eui.Button();
		this.urlBtn = t;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.skinName = MainSceneSkin$Skin2;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "下载抽奖";
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.prizeComponent_i = function () {
		var t = new prize();
		this.prizeComponent = t;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 720;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/prize.exml'] = window.prizeSkin = (function (_super) {
	__extends(prizeSkin, _super);
	var prizeSkin$Skin3 = 	(function (_super) {
		__extends(prizeSkin$Skin3, _super);
		function prizeSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = prizeSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return prizeSkin$Skin3;
	})(eui.Skin);

	function prizeSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","msg","icon","img","appName","url","prizeGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.prizeGroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this.icon,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this.img,"source");
	}
	var _proto = prizeSkin.prototype;

	_proto.prizeGroup_i = function () {
		var t = new eui.Group();
		this.prizeGroup = t;
		t.height = 1280;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = .6;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.width = 720;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 880;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 222;
		t.elementsContent = [this._Rect2_i(),this._Image1_i(),this.closeBtn_i(),this.msg_i(),this._Group1_i(),this.url_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x4c947a;
		t.height = 600;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x1f4159;
		t.strokeWeight = 5;
		t.width = 577;
		t.x = 32;
		t.y = 268;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 261.57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pop-title_png";
		t.width = 577;
		t.x = 32;
		t.y = 26;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 444;
		t.y = -222;
		t.skinName = prizeSkin$Skin3;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf2b124;
		t.verticalCenter = -18;
		t.width = 510;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 202;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 164;
		t.width = 420;
		t.x = -42;
		t.elementsContent = [this.icon_i(),this.img_i(),this.appName_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.width = 124.94;
		t.x = 26;
		t.y = 8;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146;
		t.width = 146;
		t.x = 226;
		t.y = 12;
		return t;
	};
	_proto.appName_i = function () {
		var t = new eui.Label();
		this.appName = t;
		t.text = "";
		t.textAlign = "center";
		t.x = 10;
		t.y = 140;
		return t;
	};
	_proto.url_i = function () {
		var t = new eui.Image();
		this.url = t;
		t.bottom = 76;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_png";
		t.width = 200;
		t.x = 220;
		t.y = 902;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 102;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "下载抽奖";
		t.textColor = 0x231809;
		return t;
	};
	return prizeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RewardMy.exml'] = window.RewardMySkin = (function (_super) {
	__extends(RewardMySkin, _super);
	var RewardMySkin$Skin4 = 	(function (_super) {
		__extends(RewardMySkin$Skin4, _super);
		function RewardMySkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RewardMySkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RewardMySkin$Skin4;
	})(eui.Skin);

	function RewardMySkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 660;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.closeBtn_i(),this._Group1_i()];
	}
	var _proto = RewardMySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x4c947a;
		t.height = 350;
		t.strokeColor = 0x1f4159;
		t.strokeWeight = 5;
		t.width = 577;
		t.x = 32;
		t.y = 268;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 262.51;
		t.horizontalCenter = 0;
		t.source = "t_png";
		t.width = 577;
		t.y = 26;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.skinName = RewardMySkin$Skin4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 280;
		t.horizontalCenter = 0;
		t.width = 520;
		t.y = 287.88;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x0e4f10;
		t.height = 280;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 520;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.horizontalCenter = 0;
		t.source = "h_png";
		t.verticalCenter = -44;
		t.width = 500;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.text = "快动动手指参加活动有劳才有有所得呦~";
		t.textAlign = "center";
		t.textColor = 0xf4ba50;
		t.verticalAlign = "middle";
		t.width = 274.24;
		t.y = 205;
		return t;
	};
	return RewardMySkin;
})(eui.Skin);generateEUI.paths['resource/skins/Rule.exml'] = window.RuleSkin = (function (_super) {
	__extends(RuleSkin, _super);
	var RuleSkin$Skin5 = 	(function (_super) {
		__extends(RuleSkin$Skin5, _super);
		function RuleSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RuleSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RuleSkin$Skin5;
	})(eui.Skin);

	function RuleSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 880;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Scroller1_i(),this.closeBtn_i()];
	}
	var _proto = RuleSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x4c947a;
		t.height = 600;
		t.horizontalCenter = 0.5;
		t.strokeColor = 0x1f4159;
		t.strokeWeight = 5;
		t.width = 577;
		t.y = 268;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 261.57;
		t.horizontalCenter = 0;
		t.source = "t_png";
		t.width = 577;
		t.y = 26;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 560;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 520;
		t.y = 294;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.width = 520;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = -24;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 146;
		t.width = 520;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 1;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 828;
		t.width = 520;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 1;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 718;
		t.width = 520;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 0;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 646;
		t.width = 520;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 0;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 574;
		t.width = 520;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 0;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 490;
		t.width = 520;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = -24;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 418;
		t.width = 520;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = -24;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 346;
		t.width = 520;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 0;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 74;
		t.width = 520;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = -24;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 274;
		t.width = 520;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 1;
		t.text = "2016年4月30日 11点 — 2016年5月4日 11点";
		t.top = 218;
		t.width = 520;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.skinName = RuleSkin$Skin5;
		return t;
	};
	return RuleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartScene.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	var StartSceneSkin$Skin6 = 	(function (_super) {
		__extends(StartSceneSkin$Skin6, _super);
		function StartSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "b1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin6;
	})(eui.Skin);

	var StartSceneSkin$Skin7 = 	(function (_super) {
		__extends(StartSceneSkin$Skin7, _super);
		function StartSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "b2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin7;
	})(eui.Skin);

	var StartSceneSkin$Skin8 = 	(function (_super) {
		__extends(StartSceneSkin$Skin8, _super);
		function StartSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "b3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin8;
	})(eui.Skin);

	var StartSceneSkin$Skin9 = 	(function (_super) {
		__extends(StartSceneSkin$Skin9, _super);
		function StartSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "fd_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin9;
	})(eui.Skin);

	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["musicImg","pjImg","sbImg","rewardMyBtn","shareBtn","toMainBtn","btnGroup","rewardBtn","popRewardMy","popRewardGroup","popRuleGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.musicImg_i(),this.pjImg_i(),this._Image3_i(),this.sbImg_i(),this._Image4_i(),this._Image5_i(),this.btnGroup_i(),this._Image6_i(),this.rewardBtn_i(),this.popRewardGroup_i(),this.popRuleGroup_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4c947a;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.width = 720;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "p1_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo1_png";
		t.verticalCenter = -376;
		return t;
	};
	_proto.musicImg_i = function () {
		var t = new eui.Image();
		this.musicImg = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 37;
		t.height = 74;
		t.source = "music_png";
		t.width = 74;
		t.x = 646;
		t.y = 73;
		return t;
	};
	_proto.pjImg_i = function () {
		var t = new eui.Image();
		this.pjImg = t;
		t.anchorOffsetX = 18;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.rotation = 10.61;
		t.source = "pj_png";
		t.width = 88;
		t.x = 160;
		t.y = 272;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 2;
		t.left = 0;
		t.source = "topline_png";
		t.width = 720;
		t.y = 14;
		return t;
	};
	_proto.sbImg_i = function () {
		var t = new eui.Image();
		this.sbImg = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.rotation = 1.69;
		t.scaleY = 1.98;
		t.source = "sb_png";
		t.width = 88;
		t.x = 594;
		t.y = 196;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo2_png";
		t.y = 406;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tips_png";
		t.y = 553;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.width = 340;
		t.y = 812;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.rewardMyBtn_i(),this.shareBtn_i(),this.toMainBtn_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.rewardMyBtn_i = function () {
		var t = new eui.Button();
		this.rewardMyBtn = t;
		t.enabled = true;
		t.label = "";
		t.x = 110;
		t.y = 64;
		t.skinName = StartSceneSkin$Skin6;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.enabled = true;
		t.label = "";
		t.x = 44;
		t.y = 280;
		t.skinName = StartSceneSkin$Skin7;
		return t;
	};
	_proto.toMainBtn_i = function () {
		var t = new eui.Button();
		this.toMainBtn = t;
		t.enabled = true;
		t.label = "";
		t.x = 90;
		t.y = 342;
		t.skinName = StartSceneSkin$Skin8;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 20;
		t.horizontalCenter = 0.5;
		t.source = "bottomline_png";
		return t;
	};
	_proto.rewardBtn_i = function () {
		var t = new eui.Button();
		this.rewardBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 672;
		t.skinName = StartSceneSkin$Skin9;
		return t;
	};
	_proto.popRewardGroup_i = function () {
		var t = new eui.Group();
		this.popRewardGroup = t;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 720;
		t.elementsContent = [this._Rect2_i(),this.popRewardMy_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.height = 1280;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 720;
		return t;
	};
	_proto.popRewardMy_i = function () {
		var t = new RewardMy();
		this.popRewardMy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 640;
		t.x = -168;
		t.y = -170;
		return t;
	};
	_proto.popRuleGroup_i = function () {
		var t = new eui.Group();
		this.popRuleGroup = t;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 720;
		t.elementsContent = [this._Rect3_i(),this._Rule1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = .6;
		t.height = 1280;
		t.left = 0;
		t.top = 0;
		t.width = 720;
		return t;
	};
	_proto._Rule1_i = function () {
		var t = new Rule();
		t.height = 880;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);