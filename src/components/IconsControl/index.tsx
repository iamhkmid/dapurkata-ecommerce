import styled from "styled-components";

export const IconsControl = (name: string) => {
  switch (name) {
    case "Dashboard":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="13" r="2" />
          <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
          <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
        </svg>
      );
    case "Products":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
          <line x1="12" y1="12" x2="20" y2="7.5" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <line x1="12" y1="12" x2="4" y2="7.5" />
        </svg>
      );
    case "Bills":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="2" />
          <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M12 17v1m0 -8v1" />
        </svg>
      );
    case "Slider Contents":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="15" y1="6" x2="15.01" y2="6" />
          <rect x="3" y="3" width="18" height="14" rx="3" />
          <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
          <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
          <line x1="8" y1="21" x2="8.01" y2="21" />
          <line x1="12" y1="21" x2="12.01" y2="21" />
          <line x1="16" y1="21" x2="16.01" y2="21" />
        </svg>
      );
    case "Footer":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
          <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
      );
    case "chevron-up-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M112 328l144-144 144 144"
          />
        </svg>
      );
    case "chevron-down-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M112 184l144 144 144-144"
          />
        </svg>
      );
    case "chevron-forward-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M184 112l144 144-144 144"
          />
        </svg>
      );
    case "chevron-left":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "sun":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
          <path d="M19 11h2m-1 -1v2" />
        </svg>
      );
    case "delete":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      );
    case "edit":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
          <path d="M16 5l3 3" />
          <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
        </svg>
      );
    case "detail":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <line x1="9" y1="9" x2="10" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "add":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 20 20" stroke="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "password":
      return (
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-5a4 4 0 0 1 8 0" />
        </svg>
      );
    case "username":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </svg>
      );
    case "sorter":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "search":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Users":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      );
    case "User":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Menu":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "CART":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
        </svg>
      );
    case "BAG-ADD-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          />
        </svg>
      );
    case "BAG-REMOVE-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          />
        </svg>
      );
    case "MAIL":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M 424,116.69278 H 88 a 56.06,56.06 0 0 0 -56,56 v 240 a 56.06,56.06 0 0 0 56,56 h 336 a 56.06,56.06 0 0 0 56,-56 v -240 a 56.06,56.06 0 0 0 -56,-56 z m -14.18,92.63 -144,112 a 16,16 0 0 1 -19.64,0 l -144,-112 a 16,16 0 1 1 19.64,-25.26 l 134.18,104.36 134.18,-104.36 a 16,16 0 0 1 19.64,25.26 z"
            id="path4"
          />
        </svg>
      );
    case "Services":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
          <line x1="17" y1="17" x2="17" y2="17.01" />
        </svg>
      );
    case "Signin":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Signout":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Plus":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "Minus":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "CartAdd":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      );
    case "Orders":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg>
      );
    case "dapurkata":
      return (
        <svg viewBox="0 0 100 100" version="1.1" id="svg827">
          <defs id="defs824" />
          <g
            id="g874"
            transform="matrix(0.69733466,0,0,0.69733466,14.457864,-0.178693)"
          >
            <path
              d="m 2.0079272,142.84576 c 0,-133.1207499 0,3.12721 0.00344,-134.5328185 0.469128,-6.4258705 6.1164564,-7.31896863 8.6076398,-7.3125964 4.038375,0.010306 25.445442,0.011594 40.109489,-0.0104129 9.661851,-0.0144707 21.001116,4.92643 28.967485,9.5039478 3.91907,2.306493 7.012062,4.714838 10.652549,8.29456 2.596672,2.553323 3.351222,3.490336 4.118429,5.114269 1.754824,3.714451 1.125873,7.672102 -1.674784,10.538383 -2.726233,2.790126 -6.184289,4.35697 -9.638417,4.367179 -3.941345,0.01159 -8.94864,-1.937319 -13.452175,-5.235929 -3.240792,-2.373717 -5.349484,-3.600659 -8.238362,-4.793508 -4.974403,-2.053997 -9.963997,-2.91812 -15.336077,-2.655982 -9.087734,0.44344 -17.040879,3.959615 -23.524986,10.400642 -8.550372,8.493563 -12.237362,20.824868 -9.729255,32.5399 1.462038,6.828978 4.642983,12.71258 9.532021,17.630796 6.928351,6.969702 15.6333,10.62875 25.284384,10.628084 13.609518,-8.48e-4 24.449875,-6.590865 32.790079,-19.933329 1.006973,-1.610944 2.935865,-5.293533 4.286431,-8.183538 4.117259,-8.810352 7.936687,-15.067252 11.207547,-18.359969 2.65112,-2.668842 8.663905,-6.337551 11.590825,-7.072156 l 0.78754,-0.197663 c 0.0373,10.764718 0.11985,22.011061 -0.17439,32.285611 -0.35912,11.258065 -1.04225,12.854141 -1.67698,15.924525 -2.19693,10.627325 -6.48058,20.128475 -13.051173,28.947585 -6.320344,8.48322 -13.163309,14.5155 -20.481264,18.05486 -2.979953,1.44126 -8.752534,3.9989 -12.39885,4.00234 z"
              id="path865"
            />
            <path
              d="M 41.999886,89.222147 C 36.31619,87.973273 31.654247,85.44158 27.656844,81.433045 15.886957,69.630405 16.991779,50.095901 30.011464,39.800741 c 5.633243,-4.454423 11.674477,-6.360922 19.072623,-6.018959 12.551093,0.58015 23.049917,9.486237 25.904046,21.974251 0.682025,2.984151 0.695604,8.510053 0.02866,11.645588 -0.993082,4.668499 -3.628249,9.809993 -6.854505,13.373875 -2.578358,2.84817 -6.913247,5.740107 -10.763549,7.180687 -4.298293,1.608195 -11.242929,2.179124 -15.398812,1.265964 z"
              id="path871"
            />
          </g>
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
        </svg>
      );
    default:
      return null;
      break;
  }
};

export default IconsControl;
