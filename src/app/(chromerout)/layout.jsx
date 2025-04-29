'use client'

import ManiNav from "../../nav/main_nav";

export default function ChromeLayout({ children }) {
    return (
        <div>
          <ManiNav/>
          <main>{children}</main>
        </div>
    );
  }
  