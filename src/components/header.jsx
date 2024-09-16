import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Amazon Recommendations</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline text-white">
                Baby Products
              </Link>
            </li>
            <li>
              <Link
                href="/office-designs"
                className="hover:underline text-white"
              >
                Office Designs
              </Link>
            </li>
            <li>
              <Link
                href="/content-creation"
                className="hover:underline text-white"
              >
                Content Creation
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <SheetHeader>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="text-white hover:text-primary hover:underline text-lg"
                    >
                      Baby Products
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/office-designs"
                      className="text-white hover:text-primary hover:underline text-lg"
                    >
                      Office Designs
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/content-creation"
                      className="text-white hover:text-primary hover:underline text-lg"
                    >
                      Content Creation
                    </Link>
                  </SheetClose>
                </SheetHeader>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
