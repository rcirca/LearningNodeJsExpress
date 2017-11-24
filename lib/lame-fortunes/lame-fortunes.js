var lameFortunes = [
    "conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "you will have a pleasant surprise.",
    "do not fear what you don't know.",
    "uhhh, nope"
];

exports.getLameFortune = function () {
    var index = Math.floor(Math.random() * lameFortunes.length);
    return lameFortunes[index];
}