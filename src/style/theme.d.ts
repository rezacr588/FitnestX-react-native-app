// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        darkBlue: string;
        lightBlue: string;
      };
      secondary: {
        pink: string;
        purple: string;
      };
      black: string;
      white: string;
      gray: {
        dense: string;
        medium: string;
        bright: string;
      };
      borderColor: string;
    };
  }
}
