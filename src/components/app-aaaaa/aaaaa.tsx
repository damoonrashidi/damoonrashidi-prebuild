import { Component } from '@stencil/core';

@Component({
  tag: 'app-aaaaa',
  styleUrl: './aaaaa.scss',
  shadow: true,
})
export class AaaaaComponent {
  render() {
    return (
      <div class="host">
        <div>
          <h1>AAAAaaaAaaAAh!!!</h1>
          <h2>(eɪ-eɪ-eɪ-eɪ)</h2>
        </div>
        <p>
          A minigame where you control everything with the position of your head
          and the volume of your voice.
        </p>
        <p>
          <a href="http://github.com/damoonrashidi/aaaaa">Github</a> and{' '}
          <a href="https://damoonrashidi.github.io/">Live Demo</a>
        </p>
        <img src="../../assets/aaaaa.webp" alt="" />
      </div>
    );
  }
}
