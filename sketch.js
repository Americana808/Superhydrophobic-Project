const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior} = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particleA, particleB, particleC;
let spring;

function setup() {
    createCanvas(640, 360);

    physics = new toxi.physics2d.VerletPhysics2D();
    let v = new Vec2D(0, 1);
    let gravity = new GravityBehavior(v);
    physics.addBehavior(gravity)

    let bounds = new Rect(0,0,width,height)
    physics.setWorldBounds(bounds);

    particleA = new VerletParticle2D(320, 100);
    physics.addParticle(particleA);

    particleB = new VerletParticle2D(320, 200);
    physics.addParticle(particleB);

    particleC = new VerletParticle2D(420, 150);
    physics.addParticle(particleC);

    spring1 = new VerletSpring2D(particleA, particleB, 100, 0.5);
    physics.addSpring(spring1);

    spring2 = new VerletSpring2D(particleB, particleC, 100, 0.5);
    physics.addSpring(spring2);

    spring3 = new VerletSpring2D(particleA, particleC, 100, 0.5);
    physics.addSpring(spring3);
}


function draw() {
    background(255);

    physics.update();

    fill(0);
    circle(particleA.x, particleA.y, 16);

    fill(0);
    circle(particleB.x, particleB.y, 16);

    fill(0);
    circle(particleC.x, particleC.y, 16);

    line(particleA.x, particleA.y, particleB.x, particleB.y);
    line(particleA.x, particleA.y, particleC.x, particleC.y);
    line(particleC.x, particleC.y, particleB.x, particleB.y);
}
  