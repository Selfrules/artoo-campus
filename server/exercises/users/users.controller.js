module.exports = function() {
  function query(req, res) {
    res.send([{
      name: 'Mattia',
      email: 'mattia@deluca.org'
    }]);
  }

  // public API
  return {
    query: query,
  };
};