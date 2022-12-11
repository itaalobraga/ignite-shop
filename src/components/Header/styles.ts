import { styled } from "../../styles";

export const Container = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto 2rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CheckoutButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "0.75rem",

  width: "3rem",
  height: "3rem",

  border: 0,
  borderRadius: "6px",

  cursor: "pointer",

  backgroundColor: "$gray800",

  position: "relative",

  "&:hover": {
    filter: "brightness(0.8)",
  },

  "& span.totalProducts": {
    position: "absolute",
    right: "-7px",
    top: "-7px",

    width: "1.5rem",
    height: "1.5rem",

    backgroundColor: "$green500",

    color: "$white",

    border: "3px solid $gray900",
    borderRadius: "50%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
