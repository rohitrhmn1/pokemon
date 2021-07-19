import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: "20px 20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "rgba(255,255,255,0.6)",

    // transition: "all 0.3s cubic-bezier(0.26,0.8,0.25,1)",
    transition: "transform 450ms",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "scale(1.08)",
    },
    borderRadius: "20px",
  },
  pokemonTitle: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {},
}));

export default useStyles;
