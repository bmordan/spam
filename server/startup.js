Meteor.startup(function () {
  Spam.remove({})
  Meteor.setInterval(function add () {
    Spam.insert({ts: moment().format('s.SS')})
  },600)
});
