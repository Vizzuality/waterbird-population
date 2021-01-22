import React from 'react';

const Icons = () => (
  <svg
    aria-hidden="true"
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="icon-launch" viewBox="0 0 24 24">
        <path d="M14.016 3h6.984v6.984h-2.016v-3.563l-9.797 9.797-1.406-1.406 9.797-9.797h-3.563v-2.016zM18.984 18.984v-6.984h2.016v6.984q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-13.969q0-0.844 0.586-1.43t1.43-0.586h6.984v2.016h-6.984v13.969h13.969z"></path>
      </symbol>
      <symbol id="icon-user-o" viewBox="0 0 24 28">
        <path d="M18.766 12.25c2.203 0.641 5.234 2.812 5.234 9.922 0 3.219-2.391 5.828-5.328 5.828h-13.344c-2.938 0-5.328-2.609-5.328-5.828 0-7.109 3.031-9.281 5.234-9.922-0.781-1.234-1.234-2.688-1.234-4.25 0-4.406 3.594-8 8-8s8 3.594 8 8c0 1.563-0.453 3.016-1.234 4.25zM12 2c-3.313 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zM18.672 26c1.828 0 3.328-1.703 3.328-3.828 0-4.922-1.656-8-4.75-8.156-1.406 1.234-3.234 1.984-5.25 1.984s-3.844-0.75-5.25-1.984c-3.094 0.156-4.75 3.234-4.75 8.156 0 2.125 1.5 3.828 3.328 3.828h13.344z"></path>
      </symbol>
      <symbol id="icon-feedback_icon" viewBox="0 0 34 32">
        <title>feedback_icon</title>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="4" d="M3.429 4.364v23.636l9.333-7.091h16.333c1.288 0 2.333-1.059 2.333-2.364v-14.182c0-1.305-1.045-2.364-2.333-2.364h-23.333c-1.288 0-2.333 1.059-2.333 2.364z"></path>
      </symbol>
      <symbol id="icon-flecha_01" viewBox="0 0 32 32">
        <title>flecha_01</title>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="1.6842" d="M31.158 16c0 8.371-6.786 15.158-15.158 15.158s-15.158-6.786-15.158-15.158c0-8.371 6.786-15.158 15.158-15.158s15.158 6.786 15.158 15.158z"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.6842" d="M14.868 20.184l4.474-4.474-4.474-4.474"></path>
      </symbol>
      <symbol id="icon-flecha_02" viewBox="0 0 54 32">
        <title>flecha_02</title>
        <path fill="none" stroke="#0282b0" style={{ stroke: 'var(--color2, #0282b0)' }} strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="1.6" d="M37.6 0.8c8.395 0 15.2 6.805 15.2 15.2s-6.805 15.2-15.2 15.2c-8.395 0-15.2-6.805-15.2-15.2s6.805-15.2 15.2-15.2z"></path>
        <path fill="none" stroke="#0282b0" style={{ stroke: 'var(--color2, #0282b0)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.6" d="M36.8 20l4.25-4.25-4.25-4.25"></path>
        <path fill="none" stroke="#0282b0" style={{ stroke: 'var(--color2, #0282b0)' }} strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="1.6" d="M41.050 15.75h-39.813"></path>
      </symbol>
      <symbol id="icon-close" viewBox="0 0 32 32">
        <title>close</title>
        <path fill="#fff" style={{ fill: 'var(--color1 #fff)', stroke: 'var(--color1, #fff)' }} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="4" strokeWidth="3.2" d="M30.4 16c0 7.953-6.447 14.4-14.4 14.4s-14.4-6.447-14.4-14.4c0-7.953 6.447-14.4 14.4-14.4s14.4 6.447 14.4 14.4z"></path>
        <path fill="none" stroke="#3f3c4d" style={{ stroke: 'var(--color3, #3f3c4d)' }} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="4" strokeWidth="3.2" d="M21.236 10.764l-10.473 10.473"></path>
        <path fill="none" stroke="#3f3c4d" style={{ stroke: 'var(--color3, #3f3c4d)' }} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="4" strokeWidth="3.2" d="M21.236 21.236l-10.473-10.473"></path>
      </symbol>
      <symbol id="icon-download" viewBox="0 0 32 32">
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.7826" d="M2.087 22.261v8.348h27.826v-8.348"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.7826" d="M16 1.391v20.87"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.7826" d="M7.652 13.913l8.348 8.348 8.348-8.348"></path>
      </symbol>
      <symbol id="icon-filter" viewBox="0 0 32 32">
        <title>filter</title>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M18.667 5.333h12"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M1.333 5.333h4"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M29.333 16h1.333"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M1.333 16h14.667"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M18.667 26.667h12"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M1.333 26.667h4"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M13.333 5.333c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M24 16c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
        <path fill="none" stroke="#fff" style={{ stroke: 'var(--color1, #fff)' }} strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" d="M13.333 26.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
      </symbol>
      <symbol id="icon-info" viewBox="0 0 32 32">
        <title>info</title>
        <path fill="#0282b0" style={{ fill: 'var(--color2, #0282b0)', stroke: 'var(--color2, #0282b0)' }} stroke="#0282b0" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="3.5556" d="M30.222 16c0 7.855-6.367 14.222-14.222 14.222s-14.222-6.367-14.222-14.222c0-7.855 6.367-14.222 14.222-14.222s14.222 6.367 14.222 14.222z"></path>
        <path fill="#fff" style={{ fill: 'var(--color1, #fff)' }} d="M13.926 13.926h4.148v10.37h-4.148v-10.37z"></path>
        <path fill="#fff" style={{ fill: 'var(--color1, #fff)' }} d="M18.074 9.778c0 1.145-0.929 2.074-2.074 2.074s-2.074-0.929-2.074-2.074c0-1.145 0.929-2.074 2.074-2.074s2.074 0.929 2.074 2.074z"></path>
      </symbol>
      <symbol id="icon-search" viewBox="0 0 32 32">
        <title>search</title>
        <path fill="none" stroke="#0282b0" style={{ stroke: 'var(--color2, #0282b0)' }} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="4" strokeWidth="2.7826" d="M29.217 29.217l-8.826-8.826"></path>
        <path fill="none" stroke="#0282b0" style={{ stroke: 'var(--color2, #0282b0)' }} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="4" strokeWidth="2.7826" d="M23.652 12.522c0 6.147-4.983 11.13-11.13 11.13s-11.13-4.983-11.13-11.13c0-6.147 4.983-11.13 11.13-11.13s11.13 4.983 11.13 11.13z"></path>
      </symbol>
      <symbol id="icon-share" viewBox="0 0 32 32">
        <title>share</title>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M20.060 9.823l-8.119 4.058"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M20.060 22.177l-8.119-4.058"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M29.037 7.704c0 2.618-2.122 4.741-4.741 4.741s-4.741-2.123-4.741-4.741c0-2.618 2.122-4.741 4.741-4.741s4.741 2.123 4.741 4.741z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M29.037 24.296c0 2.618-2.122 4.741-4.741 4.741s-4.741-2.122-4.741-4.741c0-2.618 2.122-4.741 4.741-4.741s4.741 2.122 4.741 4.741z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="3.5556" d="M12.444 16c0 2.618-2.123 4.741-4.741 4.741s-4.741-2.122-4.741-4.741c0-2.618 2.123-4.741 4.741-4.741s4.741 2.123 4.741 4.741z"></path>
      </symbol>
      <symbol id="icon-zoomin" viewBox="0 0 32 32">
        <title>zoomin</title>
        <path d="M13.333 0h5.333v32h-5.333v-32z"></path>
        <path d="M0 13.333h32v5.333h-32v-5.333z"></path>
      </symbol>
      <symbol id="icon-zoomout" viewBox="0 0 32 32">
        <title>zoomout</title>
        <path d="M0 13.333h32v5.333h-32v-5.333z"></path>
      </symbol>
    </defs>
  </svg>
);

export default Icons;
