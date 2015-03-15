Router.route('/', function () {
  this.render('main')
})
Router.route('/classic', function () {
  this.render('classic')
})
Router.route('/famous', function () {
  this.render('famous')
})
Template.registerHelper('ticks', function () {
  return Spam.find().fetch()
})
