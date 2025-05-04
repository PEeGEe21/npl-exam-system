"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { checkIsDesktopMedia, handleRedirect } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowRight2, ArrowRight3 } from "iconsax-react";

const MainComponent = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track when component is mounted

  const showMenu = null;
  const { push } = useRouter();

  useEffect(() => {
    setIsMounted(true); // Set to true once component mounts

    const handleResize = (e) => setIsDesktop(e.matches);
    setIsDesktop(checkIsDesktopMedia.matches); // Set initial value

    // Correct usage of addEventListener
    checkIsDesktopMedia?.addEventListener("change", handleResize);

    return () =>
      checkIsDesktopMedia?.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      // Start loading
      try {
        if (localStorage.getItem("exam-system-user")) {
          const data = await JSON.parse(
            localStorage.getItem("exam-system-user")
          );
          setUser(data);
        }
      } catch (err) {}
    };
    getUser();
  }, []);

  const start = (role) => {
    // const role = user?.user_role;
    setTimeout(() => {
      handleRedirect(role, push);
    }, 300);
  };
  if (!isMounted) return null; // Prevent render until mounted to avoid mismatch

  return (
    <>
      <div className="bg-purple-200 relative flex justify-center">
        <div className="w-[95%]">
          <Navbar user={user} start={start} />

          <div className="h-dvh flex items-center max-w-[1400px] mx-auto w-full">
            <section className="px-4 relative flex items-center text-center h-full  max-w-full mx-auto pb-20 w-full">
              <div className="w-[70%] md:w-[60%] z-50 text-left">
                <h1 className="text-5xl font-bold text-gray-900 md:text-6xl md:leading-tight max-w-lg md:max-w-full mx-auto">
                  We prepare the best testing experience for you...
                  <br className="hidden sm:inline" />
                </h1>
                <div className="mt-6 flex flex-col items-start gap-2">
                  <div className="text-base">
                    {!user ? (
                      <Link
                        className="bg-[#008080] border border-[#008080] text-[#fff] px-6 py-2 rounded-lg flex items-center gap-2 min-h-[48px]"
                        href="/auth/signup"
                      >
                        Get Started{" "}
                        <span>
                          <ArrowRight size={15} />
                        </span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => start(user?.user_role)}
                        className="bg-[#008080] border border-[#008080] text-[#fff] px-6 py-2 text-base rounded-lg flex items-center gap-2 min-h-[48px]"
                      >
                        Continue{" "}
                        <span>
                          <ArrowRight size={15} />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src={"/images/homepage/exam-home.png"}
                  alt="create-test"
                  priority
                  fill
                  className="object-contain object-end w-full h-full rounded-lg"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
