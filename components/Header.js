import { useRouter } from "next/router";
import Link from "next/link";
import { css, jsx } from "@emotion/react";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header
      css={css`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}
    >
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Home</a>
      </Link>
      <Link href="/my-list">
        <a className={pathname === "/my-list" ? "is-active" : ""}>My-List</a>
      </Link>
    </header>
  );
}
