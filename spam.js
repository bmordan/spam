Spam = new Mongo.Collection('spam')

if (Meteor.isClient) {
  Template.spam.helpers({
    ticks: function () {
      return Spam.find().fetch()
    }
  })

  Template.tick.helpers({
    tocks: function (id) {
      var deg = ['rotate(-15deg)','rotate(15deg)']
      var index = Math.floor((Math.random()*10)+1)%2
      $('#'+id).css('transform',deg[index])
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Spam.remove({})
    Meteor.setInterval(function add () {
      Spam.insert({ts: moment().format('s.SS')})
    },600)
  });
}
