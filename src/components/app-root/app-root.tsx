import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <app-hero />
        <app-intro />
        <app-wdp />
        <app-bitalarm />
        <app-aaaaa />
      </div>
    );
  }
}
