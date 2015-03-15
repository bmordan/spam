Template.tick.helpers({
  tocks: function (id) {
    var deg = ['rotate(-15deg)','rotate(15deg)']
    var index = Math.floor((Math.random()*10)+1)%2
    $('#'+id).css('transform',deg[index])
  }
})
