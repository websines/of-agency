import Link from "next/link";
import React from "react";

type Dropdown = {
  href: string;
  label: string;
};
const DropdownMenu = ({ href, label }: Dropdown) => {
  return (
    <div className="p-2 text-xs hover:bg-yellow-600 duration-150 ease-in-out hover:text-white font-semibold z-50">
      <div className="px-4 py-2">
        <Link href={href}>{label}</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
