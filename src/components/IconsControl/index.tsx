import styled from "styled-components";

const Icon = styled.svg.attrs({ className: "nav-icon" })`
  display: flex;
  align-items: center;
  background: none;
  color: inherit;
  border-radius: inherit;
  aspect-ratio: 1/1;
  stroke-width: 1.5px;
`;
export const IconsControl = (name: string) => {
  switch (name) {
    case "Dashboard":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="13" r="2" />
          <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
          <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
        </Icon>
      );
    case "Products":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
          <line x1="12" y1="12" x2="20" y2="7.5" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <line x1="12" y1="12" x2="4" y2="7.5" />
        </Icon>
      );
    case "Bills":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="2" />
          <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M12 17v1m0 -8v1" />
        </Icon>
      );
    case "Slider Contents":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="15" y1="6" x2="15.01" y2="6" />
          <rect x="3" y="3" width="18" height="14" rx="3" />
          <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
          <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
          <line x1="8" y1="21" x2="8.01" y2="21" />
          <line x1="12" y1="21" x2="12.01" y2="21" />
          <line x1="16" y1="21" x2="16.01" y2="21" />
        </Icon>
      );
    case "Footer":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
          <polyline points="11 12 12 12 12 16 13 16" />
        </Icon>
      );
    case "chevron-up":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 15 12 9 18 15" />
        </Icon>
      );
    case "chevron-down":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </Icon>
      );
    case "chevron-left":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "sun":
      return (
        <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </Icon>
      );
    case "moon":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
          <path d="M19 11h2m-1 -1v2" />
        </Icon>
      );
    case "delete":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </Icon>
      );
    case "edit":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
          <path d="M16 5l3 3" />
          <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
        </Icon>
      );
    case "detail":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <line x1="9" y1="9" x2="10" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </Icon>
      );
    case "add":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "check":
      return (
        <Icon viewBox="0 0 20 20" stroke="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "password":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-5a4 4 0 0 1 8 0" />
        </Icon>
      );
    case "username":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </Icon>
      );
    case "sorter":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "search":
      return (
        <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </Icon>
      );
    case "x":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "Users":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </Icon>
      );
    case "User":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "Menu":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "CART":
      return (
        <Icon fill="currentColor" viewBox="0 0 24 24" height="24" width="24">
          <path d="M4.1421 4.00002L6.00913 16.1357C6.02271 16.2359 6.05113 16.3313 6.0921 16.4198C6.21543 16.6861 6.45246 16.889 6.74088 16.9661C6.82899 16.9898 6.92133 17.0016 7.01578 17H18C18.4416 17 18.8309 16.7103 18.9578 16.2874L21.9578 6.28736C22.0487 5.98459 21.991 5.65669 21.8023 5.40308C21.6136 5.14948 21.3161 5.00002 21 5.00002H6.31948L5.99058 2.86221C5.97826 2.77282 5.95413 2.68721 5.91981 2.607C5.85751 2.46092 5.76213 2.33439 5.64429 2.23521C5.53497 2.14302 5.40561 2.07384 5.26367 2.03514C5.17434 2.01068 5.0806 1.99842 4.9847 2.00002H3C2.44772 2.00002 2 2.44773 2 3.00002C2 3.5523 2.44772 4.00002 3 4.00002H4.1421ZM7.85794 15L6.62717 7.00002H19.656L17.256 15H7.85794Z"></path>
          <path d="M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z"></path>
          <path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"></path>
        </Icon>
      );
    case "MAIL":
      return (
        <Icon fill="currentColor" viewBox="0 0 24 24" height="24" width="24">
          <path d="M10.1461 3.24812C10.4433 2.51616 11.1614 2 12 2C12.8386 2 13.5567 2.51616 13.8539 3.24812C16.8202 4.06072 19 6.77579 19 10V14.6972L20.8321 17.4453C21.0366 17.7522 21.0557 18.1467 20.8817 18.4719C20.7077 18.797 20.3688 19 20 19H15.4646C15.2219 20.6961 13.7632 22 12 22C10.2368 22 8.77806 20.6961 8.53545 19H4C3.63121 19 3.29235 18.797 3.11833 18.4719C2.94431 18.1467 2.96338 17.7522 3.16795 17.4453L5 14.6972V10C5 6.77579 7.17983 4.06072 10.1461 3.24812ZM10.5854 19C10.7913 19.5826 11.3469 20 12 20C12.6531 20 13.2087 19.5826 13.4146 19H10.5854ZM12 5C9.23858 5 7 7.23858 7 10V15C7 15.1974 6.94156 15.3904 6.83205 15.5547L5.86852 17H18.1315L17.168 15.5547C17.0584 15.3904 17 15.1974 17 15V10C17 7.23858 14.7614 5 12 5Z"></path>
        </Icon>
      );
    case "Services":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
          <line x1="17" y1="17" x2="17" y2="17.01" />
        </Icon>
      );
    case "Signin":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "Signout":
      return (
        <Icon viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </Icon>
      );
    case "Plus":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </Icon>
      );
    case "Minus":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </Icon>
      );
    case "CartAdd":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </Icon>
      );
    case "Orders":
      return (
        <Icon
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </Icon>
      );
    case "DAPURKATA_WHITE":
      return (
        <Icon viewBox="0 0 100 100" version="1.1" id="svg827">
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
        </Icon>
      );
    default:
      return null;
      break;
  }
};

export default IconsControl;
