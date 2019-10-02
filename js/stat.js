'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('', 140, 50);
  ctx.fillText('Список результатов:', 140, 60);
  players = ['Вы', 'Кекс', 'Игорь', 'Катя'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i+20);
    ctx.fillRect(, CLOUD_HEIGHT-Math.floor(times[i]/100), 150, Math.floor(times[i]/100));
  }
};
