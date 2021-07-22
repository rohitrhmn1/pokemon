import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
  },

  divider: {
    height: 28,
    margin: 4,
  },

  cardGrid: {
    padding: "20px 20px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "rgba(255,255,255,0.6)",
    borderRadius: "20px",
    // transition: "all 0.3s cubic-bezier(0.26,0.8,0.25,1)",
    transition: "transform 450ms",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "scale(1.08)",
    },
  },
  pokemonTitle: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {},

  footer: {
    background:
      "linear-gradient(90deg, rgba(93,73,212,1) 0%, rgba(32,1,29,1) 100%)",
    position: "absolute",
    bottom: "0",
    width: "100%",
    margin: "auto",
    height: "6rem",
  },
  containerFadeBottom: {},
  footerFadeTop: {},
}));

export default useStyles;
