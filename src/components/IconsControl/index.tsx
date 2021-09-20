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
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M184 112l144 144-144 144"
          />
        </svg>
      );
    case "chevron-back-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M328 112L184 256l144 144"
          />
        </svg>
      );
    case "sunny":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
        </svg>
      );
    case "moon-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
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
        <svg viewBox="0 0 512 512">
          <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z" />
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
          <path d="M 405.72704,152.91281 H 104.3007 a 50.291548,50.291548 0 0 0 -50.237719,50.23773 v 215.30452 a 50.291548,50.291548 0 0 0 50.237719,50.23772 h 301.42634 a 50.291548,50.291548 0 0 0 50.23771,-50.23772 V 203.15054 a 50.291548,50.291548 0 0 0 -50.23771,-50.23773 z m -12.7209,83.09857 -129.18274,100.47544 a 14.353635,14.353635 0 0 1 -17.61907,0 L 117.02162,236.01138 a 14.353635,14.353635 0 1 1 17.61908,-22.66079 l 120.37317,93.62158 120.37317,-93.62158 a 14.353635,14.353635 0 0 1 17.6191,22.66079 z" />
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
        <svg viewBox="0 0 200 200">
          <path
            d="m 62.073072,149.66975 c 0,-98.512512 0,2.31421 0.0025,-99.557476 0.347166,-4.755297 4.526323,-5.41621 6.369858,-5.411495 2.988494,0.0076 18.830232,0.0086 29.681975,-0.0077 7.150005,-0.01071 15.541325,3.645676 21.436635,7.033147 2.9002,1.70686 5.18909,3.489093 7.88314,6.138172 1.92159,1.889519 2.47998,2.582931 3.04773,3.78468 1.29861,2.748782 0.83316,5.677538 -1.23939,7.798654 -2.01747,2.06476 -4.57651,3.224261 -7.13265,3.231816 -2.91669,0.0086 -6.62221,-1.433662 -9.95493,-3.874712 -2.39826,-1.756607 -3.95875,-2.664573 -6.09659,-3.547309 -3.68117,-1.520007 -7.373588,-2.159478 -11.349055,-1.96549 -6.725139,0.328156 -12.610655,2.930209 -17.409048,7.696722 -6.327479,6.285438 -9.055939,15.410897 -7.19988,24.080299 1.081943,5.053612 3.435918,9.407612 7.053922,13.047212 5.127144,5.15774 11.569013,7.86553 18.711045,7.86503 10.071376,-6.2e-4 18.093496,-4.87739 24.265446,-14.75113 0.74518,-1.19214 2.17261,-3.917347 3.17206,-6.056019 3.04687,-6.51987 5.87332,-11.150125 8.29385,-13.586813 1.96189,-1.975007 6.41148,-4.689939 8.57748,-5.233564 l 0.5828,-0.146275 c 0.0276,7.966147 0.0887,16.288708 -0.12906,23.892121 -0.26576,8.33124 -0.77128,9.51237 -1.241,11.78453 -1.62578,7.86447 -4.79579,14.89555 -9.65818,21.4219 -4.6772,6.27778 -9.74116,10.74181 -15.15662,13.36102 -2.20524,1.06657 -6.47709,2.95929 -9.17544,2.96183 z"
            id="path865"
          />
          <path
            d="m 91.668071,109.98701 c -4.20607,-0.9242 -7.656018,-2.79771 -10.614192,-5.76412 -8.709996,-8.734237 -7.892401,-23.190233 1.742475,-30.808896 4.168734,-3.296379 8.63939,-4.707234 14.114194,-4.454173 9.288112,0.429325 17.057482,7.020041 19.169612,16.261468 0.50471,2.208342 0.51476,6.297641 0.0212,8.618011 -0.73491,3.4548 -2.68499,7.25963 -5.0725,9.89699 -1.90805,2.10771 -5.11597,4.24781 -7.96528,5.31387 -3.180841,1.19011 -8.320036,1.61261 -11.395489,0.93685 z"
            id="path871"
          />
        </svg>
      );
    case "person":
      return (
        <svg viewBox="0 0 512 512">
          <path d="m 304.44911,115.00645 c -13.73927,-14.83362 -32.92905,-23.002329 -54.10982,-23.002329 -21.29374,0 -40.54705,8.119299 -54.22278,22.861119 -13.82399,14.90421 -20.55947,35.16008 -18.97797,57.03277 3.13475,43.15229 35.97201,78.2559 73.20075,78.2559 37.22874,0 70.00952,-35.09654 73.19369,-78.24179 1.60268,-21.67499 -5.17517,-41.88851 -19.08387,-56.90567 z m 70.15072,293.29723 H 126.07876 a 21.886799,21.886799 0 0 1 -17.08583,-7.85807 c -4.58917,-5.48582 -6.43896,-12.97675 -5.06927,-20.5524 5.95886,-33.05614 24.55558,-60.82413 53.78505,-80.3175 25.96762,-17.30469 58.86136,-26.82898 92.63058,-26.82898 33.76922,0 66.66295,9.53134 92.63058,26.82898 29.22947,19.48631 47.82619,47.2543 53.78505,80.31043 1.36969,7.57565 -0.48009,15.0666 -5.06926,20.55241 a 21.886799,21.886799 0 0 1 -17.08583,7.86513 z" />
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
