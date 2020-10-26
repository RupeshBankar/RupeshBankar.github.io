function Bird() {
	this.y = height/2;
	this.x = 64;

	this.grav = 0.6;
	this.lift = -15;
	this.vel = 0;

	this.show = function() {
		fill(252, 255, 69);
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function() {
		this.vel += this.lift;
	}

	this.update = function() {
		this.vel += this.grav;
		this.vel *= 0.9;
		this.y += this.vel;

		if (this.y > height) {
			this.y = height;
			this.vel = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.vel = 0;
		}
	}
}   