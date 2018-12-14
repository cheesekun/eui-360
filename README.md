# 基于eui的白鹭引擎H5小游戏入门总结

## 前言

由于实习公司要人做 H5游戏，使用白鹭引擎开发，语言是`typescript`。本着想学习ts的心态，就开始学习一波H5小游戏开发。几天时间看了下egret, eui, typescript的文档，花了3天半的时间，导师让仿一个360的小游戏。没啥游戏逻辑，入门小项目，现在写个小总结。

模仿项目：[360 51小游戏](https://segmentfault.com/a/1190000005052167#articleHeader6)

预览地址：[eui 仿360小游戏](http://cheesekun.top/egret-demo/eui-360/)

源码地址：[eui-360](https://github.com/cheesekun/eui-360)



## 预览
![](https://github.com/cheesekun/eui-360/raw/master/gitImg/eui-360.gif)



## 入门资料

[TypeScript 入门教程](https://ts.xcatliu.com/)

[【新手教程2】EUI卡牌游戏的制作全过程](https://bbs.egret.com/forum.php?mod=viewthread&tid=50009&fromuid=197359)

[Egret白鹭H5开发-围住神经猫](http://codebear.cn/article?id=4dmt9igrsWkzqiOcwuVvM)



## 目录结构

```shell
// src 目录
│  AssetAdapter.ts
│  LoadingUI.ts // 转场加载类
│  Main.ts // 入口文件
│  Platform.ts
│  ThemeAdapter.ts
│  
├─common
│      GameUtil.ts // 工具类
│      
└─game
    │  GameData.ts // 数据中心类
    │  SceneManager.ts // 场景管理类
    │  
    ├─components // 抽离的组件
    │      MyImage.ts // 自定义的图片组件
    │      prize.ts
    │      RewardMy.ts
    │      Rule.ts
    │      
    └─scene
            MainScene.ts // 游戏场景类
            StartScene.ts // 首页场景类
```



## 场景控制

类比于web，小游戏没有链接跳转，也没有路由跳转，因为是给予`canvas`开发的。

所以场景控制这块，通过在 根场景 上，添加上各种子场景，如开始场景，游戏场景，结束场景等。

new 一个 单例 的场景控制器，对整个页面场景切换进行调度。

```typescript
// SceneManager.ts 场景控制器
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

// main.ts
protected createGameScene(): void {
  // 将main创建的容器 作为 根容器场景
  SceneManager.instance.setScene(this);
	// 跳转至开始场景
	SceneManager.toStartScene();
}
```



## 组件继承

我想给`eui.Image`控件添加一个`isClick`属性，用来判断该图片是否被点击过。

可是`canvas`不像`dom`，有自定义属性`data-*`，因此通过组件继承的方式，自定义一个控件，继承自`eui.Image`。之后便不使用`eui.Image`，而是用`MyImage`自定义控件

```typescript
// 自定义图片类
class MyImage extends eui.Image {
	public isClick: boolean;
  
	public constructor() {
		super();
		this.isClick = false;
	}
}
```



## 动画

使用`egret.Tween`这个动画库，实现起来还是很方便的，具体看文档

```typescript
// 3秒360度旋转图片
tw.get(this.musicImg, {
  loop: true
}).to({
  rotation: 360
}, 3000);
```



## 子容器调用父容器方法

和`vue`的子组件向父组件传值差不多个意思

```typescript
// 子容器
protected childrenCreated(): void {
  super.childrenCreated();
	this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
}
private close() {
  // 创建一个 CLOSE_POP_REWARD_MY 事件
  let closeEvent: egret.Event = new egret.Event('CLOSE_POP_REWARD_MY');
  // 向该容器的父容器派发该事件
  this.parent.parent.dispatchEvent(closeEvent);
}

// 父容器
// 监听该派发事件 CLOSE_POP_REWARD_MY
this.addEventListener('CLOSE_POP_REWARD_MY', this.closeRewardMy, this);
```



## tips

还有一些诸如音乐播放，http请求，事件这些，看看文档就ok了。

而像微信接口的接入这些，等我有需求学到了再写= =。



## 结语

由于使用了`eui`，界面这一块基本上靠可视化的拖拽就可以完成，其余只要关注游戏逻辑和一些动画效果就行。

刚入门学习，总体体验还是挺好的。比起做页面（渐渐地觉得前端很无聊），还是有点意思的。

