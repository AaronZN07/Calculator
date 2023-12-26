export interface ButtonProps {
  bgColor: string;
  fontColor: string;
  onClick: function;
  fn:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "0"
    | "C"
    | "DEL"
    | "%"
    | "+"
    | "-"
    | "*"
    | "/"
    | "="
    | ".";
}
