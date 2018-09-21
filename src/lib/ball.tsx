export interface Vector2D {
  x: number;
  y: number;
}

export const r = (min = 0, max = window.innerWidth, round = false) => {
  const random = ((Math.random() + min) * max) % max;
  return round ? Math.floor(random) : random;
};

export class Ball {
  lineColor: string;

  constructor(
    public position: Vector2D,
    public size: number,
    public speed: Vector2D
  ) {
    this.lineColor = `hsla(${Math.floor(Math.random() * 360)}, 100%, 40%, 0.1)`;
  }

  toPoint() {
    return this.position;
  }
}
