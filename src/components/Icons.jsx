import React from "react";

export function LineMdHomeTwotone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillOpacity={0}
        d="M5 8.5L12 3L19 8.5V21H15V13L14 12H10L9 13V21H5V8.5Z"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.9s"
          dur="0.15s"
          values="0;0.3"
        ></animate>
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path strokeDasharray={15} strokeDashoffset={15} d="M4.5 21.5h15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="15;0"
          ></animate>
        </path>
        <path
          strokeDasharray={15}
          strokeDashoffset={15}
          d="M4.5 21.5V8M19.5 21.5V8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="15;0"
          ></animate>
        </path>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M9.5 21.5V12.5H14.5V21.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="24;0"
          ></animate>
        </path>
        <path
          strokeDasharray={30}
          strokeDashoffset={30}
          strokeWidth={2}
          d="M2 10L12 2L22 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="30;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}

export function IonCaretBack(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18"
      ></path>
    </svg>
  );
}

export function FaLanguage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 1536 1792"
      {...props}
    >
      <path
        fill="currentColor"
        d="M654 1078q-1 3-12.5-.5T610 1066l-20-9q-44-20-87-49q-7-5-41-31.5T424 948q-67 103-134 181q-81 95-105 110q-4 2-19.5 4t-18.5 0q6-4 82-92q21-24 85.5-115T393 918q17-30 51-98.5t36-77.5q-8-1-110 33q-8 2-27.5 7.5T308 792t-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15q-23 7-47 0q-18-4-28-21q-4-6-5-23q6-2 24.5-5t29.5-6q58-16 105-32q100-35 102-35q10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5t6 .5q2 12-1 33q0 2-12.5 27T527 769.5T510 803q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5M449 592q3 15-4 28q-12 23-50 38q-30 12-60 12q-26-3-49-26q-14-15-18-41l1-3q3 3 19.5 5t26.5 0t58-16q36-12 55-14q17 0 21 17m698 129l63 227l-139-42zM39 1521l694-232V257L39 490zm1241-317l102 31l-181-657l-100-31l-216 536l102 31l45-110l211 65zM777 242l573 184V46zm311 1323l158 13l-54 160l-40-66q-130 83-276 108q-58 12-91 12h-84q-79 0-199.5-39T318 1668q-8-7-8-16q0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5t20.5 11q73 37 159.5 61.5T714 1754q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19t28.5-16.5zm448-1079v1079l-774-246q-14 6-375 127.5T19 1568q-13 0-18-13q0-1-1-3V474q3-9 4-10q5-6 20-11q107-36 149-50V19l558 198q2 0 160.5-55t316-108.5T1369 0q20 0 20 21v418z"
      ></path>
    </svg>
  );
}

export function LineMdPlayTwotone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillOpacity={0}
        stroke="currentColor"
        strokeDasharray={36}
        strokeDashoffset={36}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M8 6L18 12L8 18z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="36;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.5s"
          dur="0.15s"
          values="0;0.5"
        ></animate>
      </path>
    </svg>
  );
}

export function LineMdCloseCircleTwotone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth={1}>
        <path
          fill="currentColor"
          fillOpacity={0}
          strokeDasharray={60}
          strokeDashoffset={60}
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.8s"
            dur="0.15s"
            values="0;0.5"
          ></animate>
        </path>
        <path
          fill="none"
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
