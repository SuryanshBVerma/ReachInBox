'use client'

import { useEffect, useState } from "react";
import {Mail} from "./components/mail.jsx";
import { accounts, mails } from "./data.js"; // Update the path according to your project structure
// import mailDarkImage from "/examples/mail-dark.png";
// import mailLightImage from "/examples/mail-light.png";

export default function MailPage() {
  const [defaultLayout, setDefaultLayout] = useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined);

  useEffect(() => {
    const layout = localStorage.getItem("react-resizable-panels:layout:mail");
    const collapsed = localStorage.getItem("react-resizable-panels:collapsed");

    if (layout) {
      setDefaultLayout(JSON.parse(layout));
    }
    if (collapsed) {
      setDefaultCollapsed(JSON.parse(collapsed));
    }
  }, []);

  return (
    <>
      <div className="md:hidden">
        {/* <img
          src={mailDarkImage}
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src={mailLightImage}
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        /> */}
      </div>
      <div className="hidden flex-col md:flex h-[90vh]">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
