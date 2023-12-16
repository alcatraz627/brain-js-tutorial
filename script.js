const net = new brain.NeuralNetwork({
  //   hiddenLayers: [4, 5, 6],
});

/**
 * @type {{input: {r: number,g: number, b:number}, output: [number]}[]}
 */

// After some training, just "print" the model data and paste it here to make the model more accurate
const updatedTrainingData = [
  { input: { r: 0, g: 0, b: 0 }, output: [0] },
  { input: { r: 1, g: 1, b: 1 }, output: [1] },
  {
    input: {
      r: 0.1723716273848117,
      g: 0.526292297679452,
      b: 0.10254999290095768,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7141211229232649,
      g: 0.9286912983206137,
      b: 0.34417379063593034,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7118535058564408,
      g: 0.5511386856393725,
      b: 0.4012450415694373,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3134178796840441,
      g: 0.2080138939411753,
      b: 0.6909777920802214,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7502152052144726,
      g: 0.3829058496846134,
      b: 0.5666766404645913,
    },
    output: [1],
  },
  {
    input: {
      r: 0.25413378425803423,
      g: 0.8646197380885567,
      b: 0.781063480147806,
    },
    output: [0],
  },
  {
    input: {
      r: 0.23566629315760323,
      g: 0.5043457125936457,
      b: 0.8638058157709094,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4847228676813866,
      g: 0.5343699650702853,
      b: 0.7688272223077932,
    },
    output: [1],
  },
  {
    input: {
      r: 0.23109322376955443,
      g: 0.3846045274044503,
      b: 0.8091864094520125,
    },
    output: [1],
  },
  {
    input: {
      r: 0.15232950992664196,
      g: 0.6420879725016153,
      b: 0.7397500573441855,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9498112099708855,
      g: 0.15818111888114905,
      b: 0.35992116084522996,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7316128979864827,
      g: 0.3923397674682436,
      b: 0.9799246964515569,
    },
    output: [1],
  },
  {
    input: {
      r: 0.04440278836691669,
      g: 0.9852778975527465,
      b: 0.6660516699283789,
    },
    output: [0],
  },
  {
    input: {
      r: 0.4970761733006377,
      g: 0.8850071687729757,
      b: 0.07200641167761979,
    },
    output: [0],
  },
  {
    input: {
      r: 0.1401322871663142,
      g: 0.7654478486016212,
      b: 0.5058653809460525,
    },
    output: [0],
  },
  {
    input: {
      r: 0.19520061628381913,
      g: 0.6420636270902251,
      b: 0.8595809087489004,
    },
    output: [0],
  },
  {
    input: {
      r: 0.011669549872867613,
      g: 0.7308280274393892,
      b: 0.5610325590037459,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6493650165876694,
      g: 0.8482621836096507,
      b: 0.02647942018684213,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5283197578382208,
      g: 0.7410599274134517,
      b: 0.25194710258514386,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5170869201359702,
      g: 0.15448914639398437,
      b: 0.4144019828040175,
    },
    output: [1],
  },
  {
    input: {
      r: 0.79858690589516,
      g: 0.06434961693488339,
      b: 0.793389211908833,
    },
    output: [1],
  },
  {
    input: {
      r: 0.1921936172608203,
      g: 0.8905874611043658,
      b: 0.8393216152102432,
    },
    output: [0],
  },
  {
    input: {
      r: 0.03329971323191838,
      g: 0.5430536667670647,
      b: 0.7797787506643894,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7618287278402764,
      g: 0.6841617430283884,
      b: 0.42337107670066443,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9790040524227848,
      g: 0.7827061855299147,
      b: 0.9570392109452543,
    },
    output: [0],
  },
  {
    input: {
      r: 0.4564718350386783,
      g: 0.0008440622709919854,
      b: 0.6313447754145207,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5301028667529131,
      g: 0.09208764960931637,
      b: 0.07078021868292139,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7931159504297385,
      g: 0.07627007857264578,
      b: 0.6328043311092466,
    },
    output: [1],
  },
  {
    input: {
      r: 0.004816257982178218,
      g: 0.46347425430345157,
      b: 0.5039215044186629,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8558184116560732,
      g: 0.019486352297847898,
      b: 0.3534513141789979,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7955797413268739,
      g: 0.6736749697691558,
      b: 0.2585771260433265,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9929151611434941,
      g: 0.1350628875926061,
      b: 0.5611150651704542,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7909268621810945,
      g: 0.27533328702530957,
      b: 0.7630781304892498,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9761396035339853,
      g: 0.5380159258023296,
      b: 0.2009482696562448,
    },
    output: [0],
  },
  {
    input: {
      r: 0.98349085498991,
      g: 0.7278905449788518,
      b: 0.9502448676250443,
    },
    output: [0],
  },
  {
    input: {
      r: 0.265531187378266,
      g: 0.3415504581451283,
      b: 0.2167967725144404,
    },
    output: [1],
  },
];

/**
 * @type {{input: {r: number,g: number, b:number}, output: [number]}[]}
 */

const trainingData = [
  { input: { r: 0, g: 0, b: 0 }, output: [0] },
  { input: { r: 1, g: 1, b: 1 }, output: [1] },
];

// net.train(trainingData);
net.train(updatedTrainingData);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const refreshButton = document.getElementById("refresh-button");
const printButton = document.getElementById("print-button");

/**
 * @type {{ r: number, g: number, b: number }}
 */
let color;

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];

  guessEl.style.color = guess > 0.5 ? "#fff" : "#000";

  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}

setRandomColor();

/**@param value {number} */
function chooseColor(value) {
  updatedTrainingData.push({
    input: color,
    output: [value],
  });

  setRandomColor();
}

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

function print() {
  console.log(updatedTrainingData.length);
  console.log(JSON.stringify(updatedTrainingData));
}

printButton.addEventListener("click", () => {
  print();
});

refreshButton.addEventListener("click", () => {
  setRandomColor();
});

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);
