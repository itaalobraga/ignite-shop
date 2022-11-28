import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
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

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
