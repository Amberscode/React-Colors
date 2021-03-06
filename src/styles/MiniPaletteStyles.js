export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": { opacity: 1 },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "120px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.1rem",
    paddingBottom: "0.1rem",
    fontSize: "0.8rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.3rem",
    fontSize: "1.2rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3px",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "15px",
    height: "15px",
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "4px",
    zIndex: 10,
    opacity: 0,
  },
};
