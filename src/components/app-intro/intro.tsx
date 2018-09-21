import { Component, Element } from '@stencil/core';
import { interval, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  tag: 'app-intro',
  styleUrl: './intro.scss',
  shadow: true,
})
export class IntroComponent {
  @Element() element: HTMLElement;
  message = 'My name is Damoon, I write'
    .split('')
    .map(letter => <span>{letter}</span>);

  componentDidLoad() {
    interval(100)
      .pipe(concatMap(x => of(x).pipe(delay(Math.random() * 300))))
      .subscribe(() => {
        const elements = this.element.shadowRoot.querySelectorAll('span');
        const index = Math.ceil(Math.random() * this.message.length);
        for (let i = 0; i <= this.message.length; i++) {
          elements[i].style.opacity = '1';
        }
        elements[index].style.opacity = '0';
      });
  }

  render() {
    return (
      <div class="host">
        <div class="container">
          <p>
            {this.message}
            <span style={{ letterSpacing: '-3px', color: `#00f` }}>
              JAVASCRIPT
            </span>
          </p>
          <hr />
          <hr />
        </div>
      </div>
    );
  }
}
