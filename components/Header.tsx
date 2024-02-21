import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[80px] mx-auto max-w-[1440px] px-5 bg-slate-400">
      <Link href="/">
        <h1 className="font-bold text-xl">
          file<span className="text-blue-900 text-2xl">Z</span>
        </h1>
      </Link>

      <div className="px-5 flex items-center space-x-2">
        <UserButton afterSignOutUrl="/"/>

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
