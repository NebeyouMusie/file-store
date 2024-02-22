import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[80px] mx-auto max-w-[1440px] px-5 border-b lg:px-10">
      <Link href="/">
        <h1 className="font-bold text-3xl">
          file<span className="text-blue-900">Z</span>
        </h1>
      </Link>

      <div className="px-5 flex items-center space-x-5">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/"/>

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
