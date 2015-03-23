var context = famous.core.Engine.createContext()
var physics = new famous.physics.PhysicsEngine()
var centerPin = new famous.physics.bodies.Particle({
  position: [0,0,0]
})
var collision = new famous.physics.constraints.Collision()
var Walls = famous.physics.constraints.Walls

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
    align: [0,0.5],
    transform: function () {
      return particle.getTransform()
    }
  })
  var force = new famous.physics.forces.Repulsion({
    strength: 0.05
  })

  var widthHeight = context.getSize()
  var walls = new Walls({
    restitution: 2,
    origin: [0.5,0.5],
    align: [0.5,0.5],
    size: [widthHeight[0],widthHeight[1]],
    sides: famous.physics.constraints.Walls.SIDES.TWO_DIMENSIONAL
  })

  physics.addBody(particle)
  physics.attach(force, particle, centerPin)
  // physics.attach(
  //   collision,
  //   particle,
  //   walls.components[0],
  //   walls.components[1],
  //   walls.components[2],
  //   walls.components[3]
  // )

  particle.setVelocity(0.01,0.01,0.01)
  context.add(modifier).add(surface)
}
