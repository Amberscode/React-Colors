import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // background by SVGBackgrounds.com.
    backgroundColor: "#1E0577",
    backgroundImage: `url(${bg})`,
    overflow: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heading: { fontSize: "2rem" },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("xs")]: {
      width: "50%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
      marginRight: "30px",
      [sizes.down("lg")]: { marginRight: "10px" },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
};
