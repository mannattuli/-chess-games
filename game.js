let totalGames = 50;
let random = Math.floor(Math.random() * totalGames)

if (random == 0){
  random += 1
}

$(document).ready(function() {
  $.getJSON(`http://chess-games-api.herokuapp.com/games/${random}.json`, function (json) {
    $("#result").append("<ct-pgn-viewer>" + json.pgn + "<ct-pgn-viewer>");
    $("#elo").append(
      `<a href="${json.url}">` +
        "<span>" +
        json.white_elo +
        "</span>" +
        "</a>" +
        "&nbsp;" +
        "&nbsp;" +
        `<a href="${json.url}">` +
        "<span>" +
        json.black_elo +
        "</span>" +
        "</a>"
    );
  });
});