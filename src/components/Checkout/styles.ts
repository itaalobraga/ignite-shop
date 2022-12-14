import { styled } from "../../styles";

export const CheckoutContainer = styled("div", {
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  backgroundColor: "$gray800",

  width: 0,
  height: "100vh",

  position: "absolute",
  right: 0,

  visibility: "hidden",
  overflow: "hidden",

  padding: 0,

  transition: "250ms ease-in-out",

  "&.opened": {
    width: "30rem",
    padding: "1.75rem",
    visibility: "visible",

    "& button:first-child": {
      display: "block",
    },
  },

  "& button:first-child": {
    backgroundColor: "transparent",
    border: 0,
    fontSize: 0,
    cursor: "pointer",

    display: "none",

    margin: "0 0 1.75rem auto",
  },
});

export const CheckoutContent = styled("div", {
  display: "none",
  flexDirection: "column",
  gap: "2rem",
  height: "calc(100% - 3rem)",

  minWidth: "24rem",

  "& .empty-bag": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "36rem",
    width: "100%",
  },

  "&.opened": {
    display: "flex",
  },

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

  "& div.summary": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "auto",

    "& > div": {
      display: "flex",
      justifyContent: "space-between",

      "& .summary-quantity": {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "160%",

        color: "$gray100",
      },
      "& .summary-products-amount": {
        fontSize: "$md",
        fontWeight: "400",
        lineHeight: "160%",

        color: "$gray300",
      },
      "& .summary-total": {
        fontSize: "$md",
        fontWeight: "700",
        lineHeight: "160%",

        color: "$gray100",
      },
      "& .summary-price": {
        fontSize: "$xl",
        fontWeight: "700",
        lineHeight: "140%",

        color: "$gray100",
      },
    },

    "& > button": {
      backgroundColor: "$green500",
      border: 0,
      color: "white",
      borderRadius: 8,
      padding: "1.25rem",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "$md",

      "&:hover": {
        backgroundColor: "$green300",
      },
    },
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

      "&:hover": {
        color: "$green300",
      },
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
