class Spring extends VerletSpring2D {
    constructor(a, b, length, strength) {
        super(a, b, length, strength);
        physics.addSpring(this);
    }

    show() {
        stroke(0);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}