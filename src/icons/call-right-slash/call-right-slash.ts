import { html } from 'lit';
import { TapIcon } from '../../icon';

export class CallRightSlashIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.7174 4.69648L2.21739 21.6965L0.782227 20.3035L17.2822 3.30352L18.7174 4.69648Z"
          fill="currentColor"
        />
        <path
          d="M16.4798 14.82C17.5898 15.18 18.7798 15.38 20.0098 15.38C20.5498 15.38 20.9998 15.83 20.9998 16.37V19.82C20.9998 20.37 20.7198 21 20.0098 21C16.0015 21 12.2824 19.5598 9.35047 17.1748L11.1673 15.3089C12.0319 15.9959 12.9558 16.5797 13.8998 17.03L15.4698 15.06C15.7398 14.79 16.1298 14.7 16.4798 14.82Z"
          fill="currentColor"
        />
        <path
          d="M9.68267 13.9668C8.59384 12.8491 7.66709 11.5659 7.00981 10.2L8.95981 8.54C9.22981 8.26 9.30981 7.87 9.19981 7.52C8.82981 6.41 8.63981 5.22 8.63981 3.99C8.63981 3.45 8.18981 3 7.64981 3H4.18981C3.64981 3 2.99981 3.24 2.99981 3.99C2.99981 8.55857 4.86924 12.7475 7.87311 15.8252L9.68267 13.9668Z"
          fill="currentColor"
        />
      </svg>
    `);
  }
}
