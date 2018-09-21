import { Component } from '@stencil/core';

@Component({
  tag: 'app-bitalarm',
  styleUrl: './bitalarm.scss',
  shadow: true,
})
export class BitAlarm {
  render() {
    return (
      <div class="host">
        <div class="idiotic-phone-thing-that-everyone-has">
          <img src="../../assets/bitalarm.webp" />
        </div>
        <div class="content">
          <h2>BitAlarm</h2>
          <p>
            Mobile app written in <a href="https://dartlang.org">Dart</a> +{' '}
            <a href="https://flutter.io">Flutter</a> that helps you keep track
            of your crypto-portfolio as well as market movements.
          </p>
          <p class="projects-links">
            <a href="https://github.com/damoonrashidi/bitalarm">Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.yourcompany.bitalarm">
              Play store
            </a>
          </p>
        </div>
      </div>
    );
  }
}
