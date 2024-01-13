import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

interface buttonProps {
  type: string;
  title: string;
  path: string | null;
  action: Function | null;
}

export default function Button({ type, title, path, action }: buttonProps) {
  if (path === "") {
    return (
      <button
        className={`btn ${type}`}
        onClick={() => {
          if (typeof action === "function") {
            action();
          }
        }}
      >
        <span>{title}</span>
      </button>
    );
  }
  return (
    <Link to={path ?? ""}>
      <button
        className={`btn ${type}`}
        onClick={() => {
          if (typeof action === "function") {
            action();
          }
        }}
      >
        <span>{title}</span>
      </button>
    </Link>
  );
}
