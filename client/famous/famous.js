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
    position: [0.1,0.001,0]
  })
  var modifier = new famous.core.Modifier({
    origin: [0.5,0.5],
    align: [0,0],
    transform: function () {
      return particle.getTransform()
    }
  })
  var force = new famous.physics.forces.Repulsion({
    strength: 0.05
  })
  var rightWall = new famous.physics.constraints.Wall({
    normal: [-1,0,0],
    distance: context.getSize()[0],
    restituition: 0.2
  })
  var leftWall = new famous.physics.constraints.Wall({
    normal: [1,0,0],
    distance: 0,
    restituition: 0.2
  })

  physics.addBody(particle)
  physics.attach(force, particle, centerPin)
  physics.attach([rightWall,leftWall], particle)

  particle.setVelocity(0.01,0.01,0)
  context.add(modifier).add(surface)
}
