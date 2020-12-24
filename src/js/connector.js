window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      console.log(card);
      return [
        {
          text: new Date(card.dateLastActivity),
        },
        {
            text: 'Aldar Alkhasa',
            color: 'green'
        }
      ];
    });
  },
});
