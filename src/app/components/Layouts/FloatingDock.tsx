"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import {
  FaBars,
  FaHome,
  FaInfo,
  FaProjectDiagram,
  FaUserFriends,
} from "react-icons/fa";

const defaultItems = [
  {
    title: "Trang chủ",
    icon: <FaHome className="text-inherit" />,
    href: "/",
  },
  {
    title: "Dự án",
    icon: <FaProjectDiagram className="text-inherit" />,
    href: "/projects",
  },
  {
    title: "Dịch vụ",
    icon: <FaUserFriends className="text-inherit" />,
    href: "/services",
  },
  {
    title: "Về chúng tôi",
    icon: <FaInfo className="text-inherit" />,
    href: "/about",
  },
];

export const FloatingDock = ({
  items = defaultItems,
  desktopClassName,
  mobileClassName,
}: {
  items?: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const pathname = usePathname();

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        pathname={pathname}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        pathname={pathname}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  pathname,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  pathname: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    pathname === item.href
                      ? "bg-blue-500 text-white dark:bg-blue-600"
                      : "bg-gray-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400"
                  )}
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <FaBars className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  pathname,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  pathname: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-20 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-4 md:flex dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          {...item}
          isActive={pathname === item.href}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [60, 90, 60]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [60, 90, 60]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [24, 44, 24]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [24, 44, 24]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          isActive
            ? "bg-blue-500 text-white dark:bg-blue-600"
            : "bg-gray-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
