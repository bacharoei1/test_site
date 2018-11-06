app.factory('lottoService', function() {
  return {
    getGeneratedNumber: function () {
      return Math.round((Math.random() * 39) + 1);
    }
  };
});

