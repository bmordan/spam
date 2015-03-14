Spam = new Mongo.Collection('spam')

if (Meteor.isClient) {
  Template.spam.helpers({
    ticks: function () {
      return Spam.find().fetch()
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Spam.remove({})
    Meteor.setInterval(function add () {
      Spam.insert({ts: moment().format('ss')})
    },1000)
  });
}
