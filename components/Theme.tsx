import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Myriad Pro Servia", "Myriad Pro"].join(","),
  },
  overrides: {
    MuiInput: {
      root: {
        backgroundColor: "#fff",
        // border: "1px solid white",
        lineHeight: "unset",
        padding: "8px 12px",
        // width: "364px",
        height: "48px",
        alignItems: "unset",
        "@media (max-width: 320px)": {
          width: "17.3rem",
        },
        // "@media (min-width: 370px) and (max-width: 400px )": {
        //   width: "21rem",
        // },
        "&+small": {
          width: "190px",
        },

        "&$focused": {
          //"border": "1px solid pink"
        },
        "&$error": {
          backgroundColor: "#FFAB8A",
          border: "1px solid #FFAB8A",
        },

        "&.MuiSmall": {
          width: "192px",
          display: "inline-block",
        },
      },

      input: {
        fontWeight: 400,
        fontSize: "22px",
      },
      formControl: {
        "label + &": {
          marginTop: "38px",
        },
      },
    },
    MuiInputBase: {
      input: {
        textAlign: "left",
        color: "black",
        //padding: '8px 0 7px',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "18px",
        fontWeight: 700,
        color: "#FF4100",
        letterSpacing: "0.06em",
      },
      filled: {
        transform: "translate(17px,56px)",
        color: "#FF4100",

        "&$shrink": {
          color: "white",
          fontSize: "16px",
          transform: "translate(12px, 18px)",
          letterSpacing: "0.06em",
          //fontWeight: 300,
        },
      },
    },
    MuiPaper: {
      root: {
        left: 0,
      },
      rounded: {
        borderRadius: 0,
      },
      elevation8: {
        boxShadow: "0px 2px 20px #FF4100",
      },
    },
    MuiList: {
      root: {
        width: "100%",
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        color: "black",
      },
    },
    MuiSelect: {
      root: {
        width: "100%",
      },

      icon: {
        margin: "auto",
        position: "unset",
      },
      iconOpen: {
        transform: "none",
      },
      select: {
        width: "100%",
        "&:focus": {
          backgroundColor: "none",
        },
      },
    },
    MuiSvgIcon: {
      root: {
        // width: '42px',
        height: "20px",
      },
    },
    MuiMenu: {
      paper: {
        marginLeft: "-14px",
        marginTop: "-8px",
        width: "360px",
        "@media (max-width: 320px)": {
          width: "17.3rem",
        },
        "@media (min-width: 370px) and (max-width: 400px )": {
          width: "21rem",
        },
        "&MuiSmall": {
          maxWidth: "110px",
        },
      },
    },

    MuiMenuItem: {
      root: {
        fontWeight: 400,
        border: "1px solid white",
        fontSize: "20px",
        minHeight: "42px",
        "&$selected": {
          backgroundColor: "#FF4100",
          color: "white",
        },
        "&$selected:hover": {
          backgroundColor: "#FF4100",
          color: "white",
        },
        "&:hover": {
          backgroundColor: "pink",
          color: "white",
        },
      },
    },
  },
});
