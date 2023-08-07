import Link from "next/link";
import React from "react";

function Response(props: { name: string; url: string }) {
  return (
    <Link
      className="text-[#DEE4EE] text-l font-black uppercase tracking-[3.60px] hover:text-[#7C9CCF] hover:drop-shadow-[0_0_12px_rgba(208,214,225,1)] hover:cursor-pointer transition-all"
      href={props.url}
    >
      {props.name}
    </Link>
  );
}

export default Response;
