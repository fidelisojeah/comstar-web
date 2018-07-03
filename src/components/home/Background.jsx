import React from "react"

const SvgComponent = props => (
  <svg {...props}>
    <linearGradient id="a" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#00000C">
        <animate
          attributeName="stop-color"
          dur="24s"
          repeatCount="indefinite"
          values="rgba(0,0,12,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(32,32,44,0.5);rgba(64,64,92,.8);rgb(74,73,105);rgb(117,122,191);rgb(130,173,219);rgb(148,197,248);rgb(183,234,255);rgb(144,223,254);rgb(87,193,235);rgb(45,145,194);rgb(36,115,171);rgb(30,82,142);rgb(30,82,142);rgb(21,66,119);rgba(22,60,82,0.8);rgba(7,27,38,.5);rgba(1,10,16,.3);rgba(9,4,1,0);rgba(0,0,12,0);rgba(0,0,12,0)"
        />
        <animate
          attributeName="offset"
          dur="24s"
          repeatCount="indefinite"
          values="0;.85;.6;.1;0;0;0;0;0;.01;0;0;0;0;0;0;0;0;0;0;.3,.5,.8,0"
        />
      </stop>
      <stop offset="100%" stopColor="#00000C">
        <animate
          attributeName="stop-color"
          dur="24s"
          repeatCount="indefinite"
          values="rgba(0,0,12,0);rgba(25,22,33,.3);rgba(32,32,44,.8);rgb(58,58,82);rgb(81,81,117);rgb(138,118,171);rgb(205,130,160);rgb(234,176,209);rgb(235,178,177);rgb(177,181,234);rgb(148,223,255);rgb(103,209,251);rgb(56,163,209);rgb(36,111,168);rgb(30,82,142);rgb(91,121,131);rgb(157,166,113);rgb(233,206,93);rgb(178,99,57);rgb(47,17,7);rgb(36,14,3);rgb(47,17,7);rgba(75,29,6,.4);rgba(21,8,0,0);rgba(0,0,12,0)"
        />
      </stop>
    </linearGradient>
    <rect width="100%" height="100%" fill="url(#a)" />
  </svg>
)

export default SvgComponent
