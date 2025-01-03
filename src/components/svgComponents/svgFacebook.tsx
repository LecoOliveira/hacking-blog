import * as React from 'react';
const SvgFacebookComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path
      strokeMiterlimit={10}
      d="M19.254 2C15.312 2 13 4.082 13 8.826V13H8v5h5v12h5V18h4l1-5h-5V9.672C18
      7.885 18.583 7 20.26 7H23V2.205C22.526 2.141 21.145 2 19.254 2z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: 'normal',
      }}
      textAnchor="none"
      transform="scale(8)"
    />
  </svg>
);
export default SvgFacebookComponent;
