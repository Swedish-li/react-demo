/// <reference types="react-scripts" />

import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      color: string;
      backgroundColor: string;
    };
  }
}
