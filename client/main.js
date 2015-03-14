Router.route('/', function () {
  this.render('main')
})
Router.route('/classic', function () {
  this.render('classic')
})
Router.route('/singleton', function () {
  this.render('singleton')
})
