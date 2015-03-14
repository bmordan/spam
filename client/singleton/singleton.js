Template.single.rendered = function () {

  var index = false
  var i = 0
  
  Meteor.setInterval(function () {
    animate()
  }, 1000)


  function animate () {
    index? i=1 : i=0
    var deg = ['rotate(-15deg)','rotate(15deg)']
    $('#single').css('transform', deg[i])
    index = !index
  }
}
