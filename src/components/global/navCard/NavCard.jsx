import React from "react";
import { Link } from "react-router";
import styles from "./NavCard.module.css";

function NavCard(props) {
  return (
    <Link
      to={props.to}
      key={props.id}
      className="nav-link overflow-hidden rounded-2xl transition-all duration-200 ease-in-out delay-50"
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      style={{
        opacity: props.isDimmed ? 0.35 : 1,
        scale: props.isActive ? 0.97 : 1,
        boxShadow: props.isActive
          ? `0 0 400px 30px rgb(var(--${props.theme}))`
          : "none",
      }}
    >
      <ul
        className="relative group flex flex-col justify-end p-6 h-full min-h-50 md:min-h-70 -up"
        style={{
          background: `linear-gradient(-180deg, rgb(var(--${props.theme})), rgb(var(--${props.theme}-20)))`,
        }}
      >
        <li className={`${styles.letter}`}>
          <span className="text-[340px] relative -right-4 -top-8">
            {props.page[0]}
          </span>
        </li>
        <li className="capitalize font-medium text-[rgb(var(--black))] text-3xl">
          {props.page}
        </li>
      </ul>
    </Link>
  );
}

export default NavCard;
