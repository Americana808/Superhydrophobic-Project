const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior} = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particles = [];
let springs = [];

function setup() {
    createCanvas(640, 360);

    physics = new toxi.physics2d.VerletPhysics2D();
    let v = new Vec2D(0, 1);
    let gravity = new GravityBehavior(v);
    physics.addBehavior(gravity)

    let bounds = new Rect(0,0,width,height)
    physics.setWorldBounds(bounds);

    particles.push(new Particle(320, 100));
    particles.push(new Particle(320, 200));
    particles.push(new Particle(420, 150));

    springs.push(new Spring(particles[0], particles[1], 100, 0.5));
    springs.push(new Spring(particles[1], particles[2], 100, 0.5));
    springs.push(new Spring(particles[0], particles[2], 100, 0.5));
}


function draw() {
    background(255);

    physics.update();

    for (let particle of particles) {
        particle.show();
    }
    for (let spring of springs) {
        spring.show();
    }
    if (mouseIsPressed) {
        particles[0].lock();
        particles[0].x = mouseX;
        particles[0].y = mouseY;
        particles[0].unlock();
    }
}
  