const cubism4Model =
"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";

console.log("if you see this then help me pls");

let shdGlitch = new PIXI.filters.GlitchFilter();
let shdColorSplit = new PIXI.filters.RGBSplitFilter();

const style = new PIXI.TextStyle({
    fontFamily: "Helvetica",
    fontSize: 32,
    fill: "#ffffff",
    });

let text = new PIXI.Text(
    'hi uh still figuring \nout how to use \na custom model, \nhold on', style
    );

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window });

  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);

  app.stage.addChild(model4);
  app.stage.addChild(text);

  let wh = window.innerHeight;
  let ww = window.innerWidth;

  model4.scale.set(0.8);

  model4.x = ww-(ww*(101/100));
  model4.y = 0;
  text.x = (ww/2)+((ww/2)*(10/100));
  text.y = (wh/2)-30;
  // text.rotation = rotatet;


  // let cvShader = vertShader.innerHTML;
  // let cfShader = fragShader.innerHTML;
  // let cUniforms = {};
  // const cshdGlitch = new PIXI.Filter(cvShader, cfShader, cUniforms);

  shdGlitch.average = true;
  shdGlitch.direction = 20;
  shdGlitch.offset = 24;
  model4.filters = [
    // cshdGlitch
    new PIXI.filters.BloomFilter(),
    shdGlitch,
    new PIXI.filters.RGBSplitFilter(red=[9,14],green=[0,0],blue=[0,14])
    ];


  text.filters = [
    // cshdGlitch
    new PIXI.filters.BloomFilter(),
    shdColorSplit,
    // new PIXI.filters.RGBSplitFilter(red=[4,2],green=[-1,3],blue=[1,5])
    ];

  app.ticker.add(animate);


})();

let tdelta = 0;
let rotatet = 0;
// let xd_R = 0;
// let xd_G = 0;
// let xd_B = 0;
function animate() {
  tdelta = getRandomInt(1,4);
  shdGlitch.offset = getRandomInt(12,16);
  // if (tdelta==2) {
    shdGlitch.refresh();
    shdGlitch.shuffle();
  if (getRandomInt(1,4)==1){
    text.text = 'hi uh still figuring \nout how to use \na custom model, \nhold on. OwO';
  }else{
    text.text = 'hi uh still figuring \nout how to use \na custom model, \nhold on. UwU';
  };
  //   };
  // rotatet = getRandomInt(4,90);
  shdColorSplit.red=[getRandomInt(3,10),getRandomInt(3,10)];
  shdColorSplit.green=[getRandomInt(3,10),getRandomInt(3,10)];
  shdColorSplit.blue=[getRandomInt(3,10),getRandomInt(3,10)];
  // text.rotation += xdelta;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
