import { SVGProps } from "react";

export function YoutubeIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8.051 1.999h-.102C6.347 1.99 3.717 1.88 2.5 2.196a1.6 1.6 0 0 0-1.08 1.1A25.8 25.8 0 0 0 1 8c0 1.943.137 3.921.42 4.705a1.6 1.6 0 0 0 1.08 1.1c1.217.316 3.847.206 5.449.197h.102c1.603.009 4.233.119 5.45-.197a1.6 1.6 0 0 0 1.079-1.1A25.8 25.8 0 0 0 15 8a25.8 25.8 0 0 0-.42-4.705 1.6 1.6 0 0 0-1.079-1.1c-1.217-.316-3.847-.206-5.45-.197M6.5 10.5v-5l4 2.5z" />
    </svg>
  );
}
