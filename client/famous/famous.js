var context = famous.core.Engine.createContext()
var physics = new famous.physics.PhysicsEngine()
var centerPin = new famous.physics.bodies.Particle({
  position: [0,0,0]
})
physics.addBody(centerPin)

Template.surface.rendered = function () {
  var surface = new famous.core.Surface({
    size: [50,50],
    classes: ['spam']
  })
  var particle = new famous.physics.bodies.Particle({
    position: [0,0,0]
  })
  var modifier = new famous.core.Modifier({
    origin: [0.5,0.5],
    align: [0.5,0.5],
    transform: function () {
      return particle.getTransform()
    }
  })
  var force = new famous.physics.forces.Repulsion({
    strength: 2
  })
  physics.addBody(particle)
  physics.attach(force, centerPin, particle)
  particle.setVelocity([0.1,0,0])
  context.add(modifier).add(surface)
}
