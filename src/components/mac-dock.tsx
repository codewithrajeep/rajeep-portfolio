"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Link as LinkIcon,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { useTheme } from "next-themes";
import { FaLinkedin } from "react-icons/fa";
import { ThemeToggleCircle } from "./theme-toggle-circle";

const mainNavItems = [
  { title: "Home", icon: Home, href: "#hero" },
  { title: "About", icon: User, href: "#about" },
  { title: "Experience", icon: Briefcase, href: "#experience" },
  { title: "Projects", icon: FolderGit2, href: "#projects" },
];

const socialLinks = [
  { title: "Email", icon: Mail, href: "mailto:rajeepgadal@gmail.com" },
  {
    title: "GitHub",
    icon: SiGithub,
    href: "https://github.com/codewithrajeep",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/codewithrajeep",
  },
  {
    title: "Instagram",
    icon: SiInstagram,
    href: "https://instagram.com/codewithrajeep",
  },
];

export function MacDock() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownX, setDropdownX] = useState(0);
  const connectRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const toggleConnect = () => {
    if (!isConnectOpen && connectRef.current) {
      const rect = connectRef.current.getBoundingClientRect();
      // We only need the X coordinate now. Y will be static.
      setDropdownX(rect.left + rect.width / 2);
    }
    setIsConnectOpen(!isConnectOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      const target = event.target as Element;
      if (
        connectRef.current &&
        !connectRef.current.contains(target) &&
        !target.closest("#connect-dropdown")
      ) {
        setIsConnectOpen(false);
      }
    };
    if (isConnectOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [isConnectOpen]);

  return (
    <>
      {/* Vintage Shadow */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-40 bg-linear-to-t from-background via-background/80 to-transparent" />
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <Dock className="items-end pb-3 border border-border bg-background/95 shadow-2xl dark:bg-neutral-900">
          {mainNavItems.map((item) => (
            <DockItem
              key={item.title}
              className="cursor-pointer aspect-square rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <a
                  href={item.href}
                  className="flex h-full w-full items-center justify-center"
                >
                  <item.icon className="h-5 w-5 text-foreground/70" />
                </a>
              </DockIcon>
            </DockItem>
          ))}
          <div className="relative" ref={connectRef}>
            <DockItem
              className="aspect-square rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
              onClick={toggleConnect}
            >
              <DockLabel>Connect</DockLabel>
              <DockIcon>
                <LinkIcon className="h-5 w-5 text-foreground/70" />
              </DockIcon>
            </DockItem>
          </div>
          {/* Theme Toggle */}
          <DockItem className="aspect-square rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
            <DockLabel>Theme</DockLabel>
            <DockIcon className="flex items-center justify-center w-full h-full">
              <ThemeToggleCircle />
            </DockIcon>
          </DockItem>
        </Dock>
      </div>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isConnectOpen && (
              <motion.div
                id="connect-dropdown"
                // Tilt changed to positive (clockwise/right)
                initial={{ opacity: 0, scale: 0.9, rotate: 0, y: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 6, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 0, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  position: "fixed",
                  left: dropdownX,
                  // Fixed bottom value. 105px clears the dock beautifully in its normal state
                  bottom: 105,
                  transform: "translateX(-50%)",
                  transformOrigin: "bottom center",
                }}
                className="z-100 flex flex-col gap-2 rounded-2xl border border-border bg-popover p-2 shadow-xl min-w-37.5"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
