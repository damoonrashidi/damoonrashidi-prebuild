import { Component, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-wdp',
  styleUrl: './wdp.scss',
  shadow: true,
})
export class WdpComponent {
  @Element() el: HTMLElement;
  @State() clipPath: string;
  @State() img: SVGSVGElement;

  componentDidLoad() {
    this.img = this.el.shadowRoot.querySelector('svg');
    this.calculateLongshadow();
  }

  render() {
    return (
      <div class="host">
        <div class="container">
          <h2>~/wdp</h2>
          <p>
            wdp <span class="lowlight">(wɒt ʌp)</span> is a command line tool
            for getting a developer news feed in the terminal.
          </p>
          <p>
            install via yarn{' '}
            <span class="lowlight">(yarn add --global wdp)</span> and then run{' '}
            <span class="lowlight">wdp</span> in your terminal
          </p>
          <p>
            <a href="https://github.com/damoonrashidi/wdp">Github</a> and{' '}
            <a href="http://npmjs.org/package/wdp">NPM</a>
          </p>
        </div>

        <div class="project-image">
          <svg xmlns="http://www.w3.org/2000/svg" width="659" height="328">
            <g fill="none" fill-rule="evenodd">
              <rect
                width="625"
                height="316.478"
                y="11.522"
                fill="#1E1E1E"
                rx="4"
              />
              <path
                fill="#505050"
                d="M3 0h619a3 3 0 0 1 3 3v12.363H0V3a3 3 0 0 1 3-3z"
              />
              <text
                fill="#75CB31"
                font-family="FiraCode-Retina, Fira Code, Open Sans"
                font-size="14"
                font-weight="500"
                transform="translate(23 23)"
              >
                <tspan x="39" y="18">
                  wdp
                </tspan>
              </text>
              <text
                fill="#7B7B7B"
                font-family="FiraCode-Retina, Fira Code, Open Sans"
                font-size="14"
                font-weight="500"
                transform="translate(23 23)"
              >
                <tspan x="15" y="18">
                  ~/
                </tspan>
              </text>
              <text
                fill="#FFF"
                font-family="FiraCode-Bold, Fira Code, Open Sans"
                font-size="15"
                font-weight="bold"
                transform="translate(23 23)"
              >
                <tspan x="0" y="18">
                  λ
                </tspan>
              </text>
              <path stroke="#636363" d="M20.5 64.357h294.711V167.5H20.5z" />
              <path fill="#56AD28" d="M34.593 88.543h290.334v16.2H34.593z" />
              <path fill="#70E035" d="M36.897 83.914h290.334v16.2H36.897z" />
              <path
                fill="#56AD28"
                d="M324.923 104.754l2.327-4.668h-2.327zM34.591 88.55l2.308-4.653v4.653z"
              />
              <path fill="#373737" d="M27.68 61.543h290.335v16.2H27.68z" />
              <path fill="#616161" d="M29.217 60H319.55v16.2H29.217z" />
              <path
                fill="#373737"
                d="M27.688 61.557l1.537-1.556v1.556zM318.006 77.75l1.549-1.546h-1.565zM27.68 115.543h290.335v16.2H27.68z"
              />
              <path fill="#616161" d="M29.217 114H319.55v16.2H29.217z" />
              <path
                fill="#373737"
                d="M27.688 115.557l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565zM27.68 140.229h290.335v16.2H27.68z"
              />
              <path fill="#616161" d="M29.217 138.686H319.55v16.2H29.217z" />
              <path
                fill="#373737"
                d="M27.688 140.243l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565z"
              />
              <path stroke="#474747" d="M351.5 63.873h294.711V166.5H351.5z" />
              <path fill="#2C5A13" d="M365.593 63.373h290.334v16.12H365.593z" />
              <path fill="#47951E" d="M367.897 58.768h290.334v16.12H367.897z" />
              <path
                fill="#2C5A13"
                d="M655.923 79.504l2.327-4.644h-2.327zM365.591 63.38l2.308-4.63v4.63z"
              />
              <path fill="#2E2E2E" d="M358.68 89.472h290.335v16.12H358.68z" />
              <path fill="#4E4E4E" d="M360.217 87.937H650.55v16.12H360.217z" />
              <path
                fill="#2E2E2E"
                d="M358.688 89.486l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"
              />
              <path fill="#4E4E4E" d="M360.217 112.5H650.55v16.12H360.217z" />
              <path
                fill="#2E2E2E"
                d="M358.688 114.049l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"
              />
              <path fill="#4E4E4E" d="M360.217 137.063H650.55v16.12H360.217z" />
              <path
                fill="#2E2E2E"
                d="M358.688 138.612l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565z"
              />
              <path
                stroke="#47951E"
                stroke-width="4"
                d="M41.338 286.022l63.212-62.883L131.552 250l15.258-15.178 40.836 40.624 72.381-72.004 48.884 48.629 19.209-19.108 39.322 39.117 22.812-22.692 21.148 21.038 36.198-36.01 18.541 18.444 33.19-33.017 49.399 49.141 25.574-25.442 16.271 16.186"
              />
              <path
                stroke="#47951E"
                stroke-width="4"
                d="M29.039 289.845l63.212-62.882 27.002 26.861 15.257-15.178 40.837 40.623 72.381-72.003 48.884 48.629 19.208-19.109 39.323 39.118 22.811-22.693 21.148 21.038 36.199-36.009 18.54 18.443 33.191-33.017 49.398 49.141 25.575-25.441 16.27 16.185"
                opacity=".17"
              />
              <path stroke="#414141" d="M22.375 195.626v103.271h574.138" />
            </g>
          </svg>
          <div class="long-shadow" style={{ clipPath: this.clipPath }} />
        </div>
      </div>
    );
  }

  @Listen('window:resize')
  calculateLongshadow() {
    const width = window.innerWidth;
    const { left, right } = this.img.getBoundingClientRect();
    this.clipPath = `polygon(
      ${(left / width) * 100}% 1%, ${(right / width) * 100 -
      2}% .3%, 125% 87%, ${(left / width) * 100 + 10}% 60%, ${(left / width) *
      100}% 44%
    )`;
  }
}
