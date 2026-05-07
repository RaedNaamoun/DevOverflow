import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { auth, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

const MobileNavigation = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            aria-label="Open navigation"
            className="bg-transparent p-0 shadow-none hover:bg-transparent sm:hidden"
          >
            <Image src="/icons/hamburger.svg" width={36} height={36} alt="" className="invert-colors" />
          </Button>
        }
      />
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" width={23} height={23} alt="Logo" />

          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <section className="flex h-full flex-col gap-6 pt-16">
            <NavLinks isMobileNav userId={userId} />
          </section>

          <div className="flex flex-col gap-3">
            {userId ? (
              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
              >
                <SheetClose
                  render={
                    <Button type="submit" className="base-medium w-fit bg-transparent! px-4 py-3">
                      <LogOut className="size-5 text-black dark:text-white" />
                      <span className="text-dark300_light900">Logout</span>
                    </Button>
                  }
                />
              </form>
            ) : (
              <>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href={ROUTES.SIGN_IN}
                      role="link"
                      className={buttonVariants({
                        className: "small-medium btn-secondary min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none",
                      })}
                    >
                      <span className="primary-text-gradient">Log In</span>
                    </Link>
                  }
                />

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href={ROUTES.SIGN_UP}
                      role="link"
                      className={buttonVariants({
                        className:
                          "small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg border px-4 py-3 shadow-none",
                      })}
                    >
                      Sign Up
                    </Link>
                  }
                />
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
