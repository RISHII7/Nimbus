export function LogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 398 399"
      fill="none"
      {...props}
    >
      <g clipPath="url(#logomark)">
        <rect
          width="397.6"
          height="397.6"
          x="0.4"
          y="0.6"
          fill="#F0771F"
          rx="108"
        ></rect>
        <path
          fill="#FFA631"
          fillRule="evenodd"
          d="m636.5 234.2-36.4-30.6c-36.5-30.6-109.4-91.8-182.3-118-72.8-26.3-145.7-17.5-218.6 0-72.9 17.4-145.8 43.7-218.6 48-73 4.4-145.8-13-182.2-21.8l-36.5-8.8v157.5h874.6z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#01A7E1"
          fillRule="evenodd"
          d="m-303.2 157.4 41.8 25c42 25.2 125.7 75.4 209.4 65.4s167.5-80.4 251.2-90.4c83.7-10.1 167.5 40.1 251.2 55.2 83.8 15 167.5-5 209.4-15l41.8-10.1v150.7H-303.2z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#0474BA"
          fillRule="evenodd"
          d="m-86.1 289.2 26 12.5c26.2 12.5 78.3 37.6 130.5 28.2 52.1-9.4 104.3-53.2 156.4-72 52.2-18.8 104.4-12.5 156.5 9.4 52.2 21.9 104.3 59.5 130.4 78.2l26 18.8V402H-86V289.2Z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="logomark">
          <rect
            width="397.6"
            height="397.6"
            x="0.4"
            y="0.6"
            fill="#fff"
            rx="108"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}