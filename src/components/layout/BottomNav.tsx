import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => (
  <nav className="fixed bottom-0 flex items-center justify-around w-full h-24 p-4 bg-white">
    <Link to="/main" className="flex flex-col items-center text-center group">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-400 group-hover:text-primary-500">
        <path
          d="M8.99805 20.9981H6.09669C5.82054 20.9981 5.59669 20.7742 5.59669 20.4981V12.0002H2.39943C1.92954 12.0002 1.71914 11.4108 2.08281 11.1132L11.6821 3.25926C11.8663 3.10857 12.1312 3.10857 12.3153 3.25926L21.9146 11.1132C22.2783 11.4108 22.0679 12.0002 21.598 12.0002H18.4017V20.4981C18.4017 20.7742 18.1778 20.9981 17.9017 20.9981H14.998V21H8.99805V20.9981ZM7.09669 10.5002V19.4981H8.99805V15C8.99805 13.8954 10.3412 13 11.998 13C13.6549 13 14.998 13.8954 14.998 15V19.4981H16.9017V10.5002H18.7966L11.9987 4.9383L5.20084 10.5002H7.09669ZM13.498 19.4981V15.0293C13.4821 14.9996 13.4311 14.9297 13.2873 14.8339C13.0231 14.6577 12.5716 14.5 11.998 14.5C11.4245 14.5 10.973 14.6577 10.7088 14.8339C10.565 14.9297 10.514 14.9996 10.498 15.0293V19.4981H13.498ZM13.5044 15.0452C13.5044 15.0452 13.5026 15.0422 13.5012 15.0356C13.5041 15.0418 13.5044 15.0452 13.5044 15.0452ZM10.4917 15.0452C10.4917 15.0452 10.492 15.0418 10.4949 15.0356C10.4935 15.0422 10.4917 15.0452 10.4917 15.0452Z"
          fill="currentColor"
        />
      </svg>
      <p>홈</p>
    </Link>

    <Link to="/main" className="flex flex-col items-center text-center group">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-400 group-hover:text-primary-500">
        <path
          d="M6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20C20.5523 4 21 4.44772 21 5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V5C3 4.44772 3.44772 4 4 4H6V3ZM4.5 5.5V8H19.5V5.5H4.5ZM4.5 19.5H19.5V9.5H4.5V19.5ZM16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z"
          fill="currentColor"
        />
      </svg>
      <p>일정관리</p>
    </Link>

    <Link to="/members" className="flex flex-col items-center text-center group">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-400 group-hover:text-primary-500">
        <path
          d="M11 6C11 7.65685 9.65686 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65686 3 11 4.34315 11 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17158 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17158 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z"
          fill="currentColor"
        />
        <path
          d="M18 8C18 9.65685 16.6569 11 15 11C13.3432 11 12 9.65685 12 8C12 6.34315 13.3432 5 15 5C16.6569 5 18 6.34315 18 8ZM16.5 8C16.5 7.17157 15.8284 6.5 15 6.5C14.1716 6.5 13.5 7.17157 13.5 8C13.5 8.82843 14.1716 9.5 15 9.5C15.8284 9.5 16.5 8.82843 16.5 8Z"
          fill="currentColor"
        />
        <path
          d="M7.47808 16.5C7.16938 17.2933 7 18.1563 7 19.0588C7 19.5786 7.42138 20 7.94118 20H21.0588C21.5786 20 22 19.5786 22 19.0588C22 15.1603 18.8397 12 14.9412 12H14.0588C13.5152 12 12.9859 12.0615 12.4776 12.1778C12.4365 11.9429 12.3395 11.718 12.1904 11.5235C11.2792 10.3351 9.89475 9.5 8.27382 9.5H7.68583C4.76329 9.5 2.73637 12.0951 2.50516 14.8757C2.47041 15.2937 2.61225 15.7071 2.89627 16.0158C3.1803 16.3244 3.58057 16.5 4 16.5H7.47808ZM14.9412 13.5C17.8226 13.5 20.192 15.6924 20.4723 18.5H8.52774C8.62196 17.5561 8.95227 16.6818 9.45877 15.937C9.49661 15.8896 9.53178 15.8398 9.56397 15.7876C10.5748 14.401 12.2116 13.5 14.0588 13.5H14.9412ZM8.29732 14.9796C8.2925 14.9864 8.2877 14.9932 8.2829 15H4C4.04436 14.4666 4.16721 13.961 4.35451 13.5C4.95591 12.0198 6.22167 11 7.68583 11H8.27382C8.79331 11 9.28783 11.1284 9.73656 11.3602C10.2194 11.6095 10.6491 11.9786 11 12.4362C10.5251 12.6068 10.0817 12.865 9.68289 13.1953C9.12009 13.6613 8.64603 14.2707 8.29732 14.9796Z"
          fill="currentColor"
        />
      </svg>
      <p>회원관리</p>
    </Link>

    <Link to="/main" className="flex flex-col items-center text-center group">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-400 group-hover:text-primary-500">
        <path
          d="M2.39943 11.0002C1.92954 11.0002 1.71914 10.4108 2.08281 10.1132L11.6821 2.25926C11.8663 2.10857 12.1312 2.10857 12.3153 2.25926L21.9146 10.1132C22.2783 10.4108 22.0679 11.0002 21.598 11.0002H2.39943ZM18.7966 9.50021L11.9987 3.9383L5.20084 9.50021H18.7966Z"
          fill="currentColor"
        />
        <path
          d="M1.99873 20.75C1.99873 20.3358 2.33451 20 2.74873 20H21.2487C21.6629 20 21.9987 20.3358 21.9987 20.75C21.9987 21.1642 21.6629 21.5 21.2487 21.5H2.74873C2.33451 21.5 1.99873 21.1642 1.99873 20.75Z"
          fill="currentColor"
        />
        <path
          d="M5.99873 13C5.44644 13 4.99873 13.4477 4.99873 14V17C4.99873 17.5522 5.44644 18 5.99873 18C6.55101 18 6.99873 17.5522 6.99873 17V14C6.99873 13.4477 6.55101 13 5.99873 13Z"
          fill="currentColor"
        />
        <path
          d="M10.9987 14C10.9987 13.4477 11.4464 13 11.9987 13C12.551 13 12.9987 13.4477 12.9987 14V17C12.9987 17.5522 12.551 18 11.9987 18C11.4464 18 10.9987 17.5522 10.9987 17V14Z"
          fill="currentColor"
        />
        <path
          d="M17.9987 13C17.4464 13 16.9987 13.4477 16.9987 14V17C16.9987 17.5522 17.4464 18 17.9987 18C18.551 18 18.9987 17.5522 18.9987 17V14C18.9987 13.4477 18.551 13 17.9987 13Z"
          fill="currentColor"
        />
      </svg>
      <p>센터관리</p>
    </Link>

    <Link to="/main" className="flex flex-col items-center text-center group">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-text-400 group-hover:text-primary-500">
        <path
          d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM14.5 6C14.5 4.61929 13.3807 3.5 12 3.5C10.6193 3.5 9.5 4.61929 9.5 6C9.5 7.38071 10.6193 8.5 12 8.5C13.3807 8.5 14.5 7.38071 14.5 6Z"
          fill="currentColor"
        />
        <path
          d="M2 20.7059C2 15.3455 6.34547 11 11.7059 11H12.2941C17.6545 11 22 15.3455 22 20.7059C22 21.4206 21.4206 22 20.7059 22H3.29412C2.5794 22 2 21.4206 2 20.7059ZM3.50253 20.5H20.4975C20.3882 16.0632 16.7573 12.5 12.2941 12.5H11.7059C7.24273 12.5 3.61179 16.0632 3.50253 20.5Z"
          fill="currentColor"
        />
      </svg>
      <p>마이페이지</p>
    </Link>
  </nav>
);

export default BottomNav;
