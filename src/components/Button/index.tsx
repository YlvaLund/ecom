import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

interface buttonProps {
  type: string;
  title: string;
  path: string | null;
}

export default function Button({ type, title, path }: buttonProps) {
  return (
    <Link to={path ?? ""}>
      <button className={`btn ${type}`}>
        <span>{title}</span>
      </button>
    </Link>
  );
}
