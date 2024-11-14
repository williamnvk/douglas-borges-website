import * as React from "react";
import { SVGProps } from "react";

const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" {...props}>
    <path
      fill="currentColor"
      d="M17.55 0C3.832.491 0 8.232 0 18.922V36h17.55V18.553H7.54v-1.597c0-7.004 4.078-9.953 10.01-10.321V0ZM44 0C30.28.491 26.45 8.232 26.45 18.922V36H44V18.553H33.989v-1.597c0-7.004 4.078-9.953 10.011-10.321V0Z"
    />
  </svg>
);

export default QuoteIcon;
