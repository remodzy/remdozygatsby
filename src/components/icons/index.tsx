import React from 'react'

export function Circle() {
  return (
    <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity=".2">
        <circle cx="32" cy="32" r="32" fill="url(#paint0_linear)" />
        <circle r="5.714" transform="matrix(-1 0 0 1 32 32)" fill="#5A60A6" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1A7ED" />
          <stop offset="1" stopColor="#7177C2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const icons = {
  settings: () => (
    <svg width="27" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.74 10.399a.813.813 0 00-.795-.65h-1.891a10.479 10.479 0 00-.648-1.558l1.336-1.337a.812.812 0 00.103-1.023 12.992 12.992 0 00-3.676-3.676.813.813 0 00-1.023.103l-1.337 1.336a10.474 10.474 0 00-1.558-.648V1.055a.813.813 0 00-.65-.796 13.173 13.173 0 00-5.2 0 .813.813 0 00-.65.796v1.891c-.536.174-1.057.39-1.559.648L6.855 2.258a.813.813 0 00-1.023-.103A12.993 12.993 0 002.157 5.83a.813.813 0 00.102 1.023L3.596 8.19a10.476 10.476 0 00-.648 1.558H1.057a.813.813 0 00-.796.65 13.103 13.103 0 000 5.2.813.813 0 00.796.65h1.891c.174.536.39 1.057.648 1.559l-1.337 1.337a.812.812 0 00-.102 1.023 12.993 12.993 0 003.675 3.675.813.813 0 001.023-.102l1.337-1.337c.502.258 1.023.474 1.559.648v1.891a.812.812 0 00.65.796 13.1 13.1 0 005.2 0 .812.812 0 00.65-.796v-1.891c.536-.174 1.057-.39 1.558-.648l1.337 1.337a.812.812 0 001.023.102 12.992 12.992 0 003.676-3.675.812.812 0 00-.103-1.023l-1.336-1.337a10.48 10.48 0 00.648-1.559h1.891a.813.813 0 00.796-.65 13.102 13.102 0 000-5.2zm-1.48 4.225h-1.816a.813.813 0 00-.787.61 8.883 8.883 0 01-.957 2.302.812.812 0 00.125.988l1.285 1.286a11.362 11.362 0 01-2.298 2.298l-1.286-1.285a.812.812 0 00-.988-.125 8.877 8.877 0 01-2.303.957.812.812 0 00-.609.787v1.817a11.52 11.52 0 01-3.25 0v-1.817a.813.813 0 00-.61-.787 8.88 8.88 0 01-2.302-.957.812.812 0 00-.988.125L6.19 22.108a11.364 11.364 0 01-2.297-2.297l1.284-1.287a.812.812 0 00.125-.988 8.88 8.88 0 01-.957-2.303.813.813 0 00-.787-.609H1.74a11.502 11.502 0 010-3.25h1.817a.812.812 0 00.787-.61c.209-.808.531-1.583.957-2.302a.813.813 0 00-.125-.988L3.892 6.188A11.362 11.362 0 016.19 3.89l1.286 1.285a.813.813 0 00.988.125 8.881 8.881 0 012.303-.957.813.813 0 00.609-.787V1.739a11.522 11.522 0 013.25 0v1.817a.812.812 0 00.61.787c.808.209 1.584.531 2.302.957a.813.813 0 00.988-.125l1.286-1.285a11.362 11.362 0 012.298 2.298l-1.285 1.286a.813.813 0 00-.125.988c.426.719.748 1.494.957 2.303a.813.813 0 00.787.609h1.817a11.497 11.497 0 010 3.25z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M13 8.938a4.063 4.063 0 100 8.125 4.063 4.063 0 000-8.125zm0 6.5a2.438 2.438 0 110-4.876 2.438 2.438 0 010 4.876z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="13"
          y1="-0.542"
          x2="13"
          y2="26.542"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.059" stopColor="#FFDAB9" />
          <stop offset="1" stopColor="#FFB675" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="13"
          y1="-0.542"
          x2="13"
          y2="26.542"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.059" stopColor="#FFDAB9" />
          <stop offset="1" stopColor="#FFB675" />
        </linearGradient>
      </defs>
    </svg>
  ),
  calendar: () => (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.944 2.834H18.11V1.61a.611.611 0 00-1.222 0v1.223H7.111V1.61a.611.611 0 00-1.222 0v1.223H4.056A3.06 3.06 0 001 5.889v14.055A3.06 3.06 0 004.056 23h15.888A3.06 3.06 0 0023 19.944V5.888a3.06 3.06 0 00-3.056-3.054zm1.833 17.11c0 1.01-.823 1.832-1.833 1.832H4.056a1.835 1.835 0 01-1.834-1.833V8.944h19.555v11zm0-12.222H2.222V5.888c0-1.011.823-1.833 1.834-1.833H5.89v.611a.61.61 0 001.22 0v-.61h9.778v.61a.611.611 0 001.222 0v-.61h1.834c1.01 0 1.833.821 1.833 1.832v1.834z"
        fill="url(#paint0_linear)"
        stroke="url(#paint1_linear)"
        strokeWidth=".5"
      />
      <path
        d="M5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M5 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M10 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint4_linear)"
      />
      <path
        d="M10 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint5_linear)"
      />
      <path
        d="M15 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint6_linear)"
      />
      <path
        d="M15 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
        fill="url(#paint7_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12"
          y1="1"
          x2="12"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12"
          y1="1"
          x2="12"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="12"
          y1="12"
          x2="12"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82C6A0" />
          <stop offset="1" stopColor="#5B9976" />
        </linearGradient>
      </defs>
    </svg>
  ),
  communicate: () => (
    <svg width="24" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.566 15.905H2.434c-.791 0-1.435-.618-1.435-1.379v-1.214c0-.76.644-1.38 1.435-1.38h19.13c.792 0 1.435.62 1.435 1.38v1.214c0 .76-.643 1.38-1.434 1.38zM2.434 12.701c-.354 0-.642.274-.642.61v1.215c0 .337.288.611.642.611h19.13c.354 0 .642-.274.642-.611v-1.214c0-.337-.288-.611-.642-.611H2.436z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M20.212 12.7H3.802a.393.393 0 01-.392-.323A8.026 8.026 0 013.8 8.27c.32-.865.785-1.67 1.382-2.392a8.611 8.611 0 012.094-1.825 8.837 8.837 0 012.633-1.095.406.406 0 01.34.071.38.38 0 01.151.303v4.892h3.213V3.332a.38.38 0 01.152-.303.407.407 0 01.34-.07c.934.221 1.82.59 2.63 1.094a8.614 8.614 0 012.093 1.825 8.23 8.23 0 011.383 2.392c.332.896.5 1.835.5 2.793 0 .446-.036.888-.107 1.314a.393.393 0 01-.392.323zm-16.066-.768h15.72c.034-.285.052-.575.052-.869 0-3.33-2.242-6.234-5.511-7.226v4.771a.39.39 0 01-.397.385h-4.006a.39.39 0 01-.397-.385v-4.77c-3.271.99-5.514 3.895-5.514 7.225 0 .287.018.578.053.868z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M14 8.993H9.995a.39.39 0 01-.396-.385V1.691c0-.166.11-.314.274-.365a7.089 7.089 0 014.25 0 .386.386 0 01.275.365v6.917a.39.39 0 01-.396.385zm-3.609-.769h3.213V1.978a6.264 6.264 0 00-3.213 0v6.246z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M12.005 27a9.746 9.746 0 01-3.681-.713 9.458 9.458 0 01-3.008-1.944 9.035 9.035 0 01-2.029-2.886 8.706 8.706 0 01-.744-3.536c0-.853.123-1.698.366-2.51a.395.395 0 01.38-.276h17.437c.2 0 .366.143.393.33.235.8.354 1.626.354 2.456 0 1.227-.25 2.416-.744 3.536a9.032 9.032 0 01-2.03 2.886 9.467 9.467 0 01-3.009 1.944 9.763 9.763 0 01-3.684.713zM3.593 15.903a8.01 8.01 0 00-.257 2.018c0 4.583 3.89 8.31 8.67 8.31 4.782 0 8.674-3.727 8.674-8.31 0-.68-.088-1.357-.26-2.018H3.592z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M21.566 15.905H2.434c-.791 0-1.435-.618-1.435-1.379v-1.214c0-.76.644-1.38 1.435-1.38h19.13c.792 0 1.435.62 1.435 1.38v1.214c0 .76-.643 1.38-1.434 1.38zM2.434 12.701c-.354 0-.642.274-.642.61v1.215c0 .337.288.611.642.611h19.13c.354 0 .642-.274.642-.611v-1.214c0-.337-.288-.611-.642-.611H2.436z"
        stroke="url(#paint4_linear)"
      />
      <path
        d="M20.212 12.7H3.802a.393.393 0 01-.392-.323A8.026 8.026 0 013.8 8.27c.32-.865.785-1.67 1.382-2.392a8.611 8.611 0 012.094-1.825 8.837 8.837 0 012.633-1.095.406.406 0 01.34.071.38.38 0 01.151.303v4.892h3.213V3.332a.38.38 0 01.152-.303.407.407 0 01.34-.07c.934.221 1.82.59 2.63 1.094a8.614 8.614 0 012.093 1.825 8.23 8.23 0 011.383 2.392c.332.896.5 1.835.5 2.793 0 .446-.036.888-.107 1.314a.393.393 0 01-.392.323zm-16.066-.768h15.72c.034-.285.052-.575.052-.869 0-3.33-2.242-6.234-5.511-7.226v4.771a.39.39 0 01-.397.385h-4.006a.39.39 0 01-.397-.385v-4.77c-3.271.99-5.514 3.895-5.514 7.225 0 .287.018.578.053.868z"
        stroke="url(#paint5_linear)"
      />
      <path
        d="M14 8.993H9.995a.39.39 0 01-.396-.385V1.691c0-.166.11-.314.274-.365a7.089 7.089 0 014.25 0 .386.386 0 01.275.365v6.917a.39.39 0 01-.396.385zm-3.609-.769h3.213V1.978a6.264 6.264 0 00-3.213 0v6.246z"
        stroke="url(#paint6_linear)"
      />
      <path
        d="M12.005 27a9.746 9.746 0 01-3.681-.713 9.458 9.458 0 01-3.008-1.944 9.035 9.035 0 01-2.029-2.886 8.706 8.706 0 01-.744-3.536c0-.853.123-1.698.366-2.51a.395.395 0 01.38-.276h17.437c.2 0 .366.143.393.33.235.8.354 1.626.354 2.456 0 1.227-.25 2.416-.744 3.536a9.032 9.032 0 01-2.03 2.886 9.467 9.467 0 01-3.009 1.944 9.763 9.763 0 01-3.684.713zM3.593 15.903a8.01 8.01 0 00-.257 2.018c0 4.583 3.89 8.31 8.67 8.31 4.782 0 8.674-3.727 8.674-8.31 0-.68-.088-1.357-.26-2.018H3.592z"
        stroke="url(#paint7_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="12.008"
          y1="1"
          x2="12.008"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#849FFB" />
          <stop offset="1" stopColor="#486CE3" />
        </linearGradient>
      </defs>
    </svg>
  ),
  messaging: () => (
    <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.135 0h15.73C20.59 0 22 1.442 22 3.204v10.69c0 1.763-1.412 3.204-3.135 3.204h-6.881L6.167 21.81c-.562.456-1.377.035-1.377-.679l-.002-4.033H3.135C1.409 17.098 0 15.658 0 13.894V3.204C0 1.44 1.409 0 3.135 0zm2.198 9.95c.664 0 1.202.549 1.202 1.227s-.538 1.227-1.202 1.227c-.663 0-1.2-.55-1.2-1.227 0-.678.537-1.227 1.2-1.227zm9.41 0c.662 0 1.2.549 1.2 1.227s-.538 1.227-1.2 1.227c-.664 0-1.202-.55-1.202-1.227 0-.678.538-1.227 1.201-1.227zm-4.705 0c.663 0 1.201.549 1.201 1.227s-.538 1.227-1.201 1.227c-.664 0-1.201-.55-1.201-1.227 0-.678.537-1.227 1.2-1.227zm-1.05-4.386c-1.12 0-1.12-1.739 0-1.739h8.88c1.119 0 1.119 1.739 0 1.739h-8.88zm9.877-3.826H3.135c-.787 0-1.434.661-1.434 1.466v10.69c0 .805.647 1.466 1.434 1.466H5.64c.47 0 .85.39.85.869v3.106l4.633-3.754a.837.837 0 01.567-.221h7.175c.789 0 1.434-.659 1.434-1.466V3.204c0-.806-.646-1.466-1.434-1.466z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="11"
          y1="0"
          x2="11"
          y2="22.393"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC7BC" />
          <stop offset=".582" stopColor="#FE9682" />
        </linearGradient>
      </defs>
    </svg>
  ),
}

export default function Icon({ name }) {
  const Icon = icons[name]
  return <Icon />
}
