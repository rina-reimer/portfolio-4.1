import Link from "next/link.js";
import { Animation } from "./Animation.jsx";

export default function Nav() {
  return (
    <Link href="/">
      {/* profile image or 3d model */}
      <div className="fixed w-1/6 aspect-square place-self-start left-8 top-8 z-[10000000]">
        <Animation />
      </div>
    </Link>);
}