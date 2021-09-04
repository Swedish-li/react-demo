import { SVGProps } from "react";

export const International = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20z"></path>
        <path
          d="M6 30.986c2.632 1.055 4.527 1.055 5.684 0c1.736-1.584.238-6.388 2.67-7.713c2.43-1.325 6.135 4.548 9.597 2.616c3.462-1.933-.326-7.087 2.076-9.176c2.403-2.09 5.527.267 6.073-3.227c.546-3.493-2.548-1.978-3.142-5.28c-.395-2.2-.395-3.357 0-3.47"
          strokeLinecap="round"
        ></path>
        <path
          d="M29.021 43.35c-1.874-1.918-2.549-3.7-2.024-5.348c.787-2.472 2.086-2.326 2.652-3.854c.566-1.528-1.033-3.705 2.515-5.565c2.366-1.24 5.62.196 9.759 4.311"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
};
