console.log("working");

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      console.log(card);
      return [
        {
          text: card.idShort,
        },
        {
            text: 'Aldar Alkhasa',
            color: 'green'
        }
      ];
    });
  },
});
