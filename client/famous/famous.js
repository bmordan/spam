Template.surface.rendered = function () {
  var context = famous.core.Engine.createContext()
  var surface = new famous.core.Surface({
    size: [50,50],
    classes: ['spam']
  })
  var modifier = new famous.core.Modifier({
    origin: [0.5,0.5],
    align: [0.5,0.5]
  })
  context.add(modifier).add(surface)
}
