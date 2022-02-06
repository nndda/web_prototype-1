const cubism4Model =
"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";

console.log("if you see this then help me pls");

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window });

  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);
  const style = new PIXI.TextStyle({
    fontFamily: "Helvetica",
    fontSize: 32,
    fill: "#ffffff",

    // dropShadow: true,
    // dropShadowAngle: 0.8,
    // dropShadowColor: "#ffee1c",
    // dropShadowAlpha: 0.75,
    // dropShadowDistance: 5,

    // strokeThickness: 4
    // fontWeight: 600
  });
  const text = new PIXI.Text('hi uh still figuring \nout how to use \na custom model, \nhold on', style);

  app.stage.addChild(model4);
  app.stage.addChild(text);

  let wh = window.innerHeight;
  let ww = window.innerWidth;

  model4.scale.set(0.8);

  model4.x = ww-(ww*(101/100));
  model4.y = 0;

  model4.filters = [
  new PIXI.filters.BloomFilter(),
  new PIXI.filters.GlitchFilter(),
  new PIXI.filters.RGBSplitFilter(red=[9,14],green=[0,0],blue=[0,14])
  ];

  text.filters = [
  new PIXI.filters.BloomFilter(),
  // new PIXI.filters.GlitchFilter(),
  new PIXI.filters.RGBSplitFilter(red=[4,2],green=[-1,3],blue=[1,5])
  ];
  // app.stage.interactive = true
  text.x = (ww/2)+((ww/2)*(10/100));
  text.y = (wh/2)-30;

})();
