import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",

  position: "relative",
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

export const CheckoutContainer = styled("div", {
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  backgroundColor: "$gray800",

  maxWidth: "30rem",
  width: "100%",
  height: "100vh",

  position: "absolute",
  right: 0,

  padding: "1.75rem",

  "& button:first-child": {
    backgroundColor: "transparent",
    border: 0,
    fontSize: 0,
    cursor: "pointer",

    display: "block",

    margin: "0 0 1.75rem auto",
  },
});

export const CheckoutContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  h1: {
    fontSize: "$lg",
    fontWeight: "700",
    lineHeight: "160%",

    color: "$gray100",
  },

  "& div.product-wrapper": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",

  "& div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    span: {
      fontSize: "$lg",
      lineHeight: "160%",

      color: "$gray300",
    },

    strong: {
      fontSize: "$lg",
      fontWeight: "700",
      lineHeight: "160%",

      color: "$gray100",
    },

    "& button": {
      border: 0,
      fontSize: "$md",
      fontWeight: "700",

      color: "$green500",

      backgroundColor: "transparent",
      cursor: "pointer",

      lineHeight: "160%",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
  height: 94,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
