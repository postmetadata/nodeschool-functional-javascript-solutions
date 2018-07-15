function getShortMessages (messages) {
  var filtered = messages.filter( function(obj) {
    if (obj.message.length < 50) {
      return true;
    };
  });
  return filtered.map( function(msg) {
    return msg.message;
  });
};

module.exports = getShortMessages