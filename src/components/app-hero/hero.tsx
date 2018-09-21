import { Component, Element, State, Listen } from '@stencil/core';
import { Ball, Vector2D, r } from '../../lib/ball';
import { fromEvent, interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { stagger } from '../../lib/operators';

@Component({
  tag: 'app-hero',
  shadow: true,
  styleUrl: './hero.scss',
})
export class HeroComponent {
  @Element() element: HTMLElement;
  ctx: CanvasRenderingContext2D;
  @State() WIDTH = window.innerWidth;
  @State() HEIGHT = 500;
  @State() animated = true;
  DELAY_ANIMATION = 1000;
  balls: Ball[] = [];

  componentDidLoad() {
    const canvas: HTMLCanvasElement = this.element.shadowRoot.querySelector(
      'canvas'
    );
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = '#fff';
    fromEvent(document, 'paint')
      .pipe(stagger(16))
      .subscribe(() => this.paint());

    interval(16)
      .pipe(
        delay(this.DELAY_ANIMATION),
        take(500)
      )
      .subscribe(() => {
        const ball = new Ball({ x: r(), y: r(0, this.HEIGHT) }, r(0.2, 1), {
          x: r(-0.5, 0.5),
          y: r(-0.5, 0.5),
        });
        this.balls = this.balls.concat(ball);
      });
    // setTimeout(
    //   () => document.dispatchEvent(new Event('paint')),
    //   this.DELAY_ANIMATION
    // );
  }

  render() {
    return (
      <div class="host">
        <div class="header">
          <h1>Damoon Rashidi</h1>
          <h2>sideprojects, for fun!</h2>
        </div>
        <canvas width={this.WIDTH} height={this.HEIGHT} />
      </div>
    );
  }

  paint() {
    if (!this.animated) {
      return;
    }
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    ctx.fillStyle = '#fff';
    for (let i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i];
      const neighbors = this.findClosestBalls(ball.position, 10, 40);
      this.balls[i].position.x += ball.speed.x;
      this.balls[i].position.y += ball.speed.y;
      ctx.moveTo(ball.position.x, ball.position.y);
      ctx.beginPath();
      ctx.arc(ball.position.x, ball.position.y, ball.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = ball.lineColor;
      neighbors.forEach(neighbor =>
        ctx.lineTo(neighbor.position.x, neighbor.position.y)
      );
      ctx.stroke();
      if (ball.position.x < 0 || ball.position.x > this.WIDTH) {
        this.balls[i].speed.x = -ball.speed.x;
      }
      if (ball.position.y < 0 || ball.position.y > this.HEIGHT) {
        this.balls[i].speed.y = -ball.speed.y;
      }
    }
    document.dispatchEvent(new Event('paint'));
  }

  findClosestBalls(point: Vector2D, n = 10, maxDistance = 40) {
    return this.balls
      .filter(ball => this.distance(point, ball.position) < maxDistance)
      .slice(1, n + 1);
  }

  distance(a: Vector2D, b: Vector2D) {
    return Math.sqrt(
      Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2)
    );
  }

  @Listen('window:resize')
  handleResize() {
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;
    this.ctx.fillStyle = '#fff';
  }

  // @Listen('document:scroll')
  // handleScroll() {
  //   if (window.scrollY > 400 && this.animated) {
  //     this.animated = false;
  //   } else if (window.scrollY <= 400 && !this.animated) {
  //     this.animated = true;
  //     document.dispatchEvent(new Event('paint'));
  //   }
  // }
}
