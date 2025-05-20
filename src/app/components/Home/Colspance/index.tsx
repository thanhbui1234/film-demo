"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  content: React.ReactNode;
}

export default function CollapsibleSection({
  title,
  content,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4">
      <div
        className="bg-black text-white p-6 rounded-xl"
        style={{
          borderBottomWidth: "1px",
          borderLeftWidth: "2px",
          borderRightWidth: "1px",
          borderTopWidth: "2px",
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.3)",
          background:
            "radial-gradient(50% 50% at 0% 0%, rgba(255, 255, 255, 0.15) 2.21%, hsla(0, 0%, 100%, 0) 100%)",
          width: "100%",
          borderRadius: "30px",
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <CollapsibleTrigger asChild>
            <button className="text-white">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </button>
          </CollapsibleTrigger>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: contentHeight, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mt-4"
            >
              <div ref={contentRef}>
                <CollapsibleContent className="pl-4 text-sm space-y-1">
                  {content}
                </CollapsibleContent>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Collapsible>
  );
}

export function CollapsibleSectionPage() {
  return (
    <div className="p-6 bg-[#0D0D0D] min-h-screen">
      <CollapsibleSection
        title="Pre-Production"
        content={
          <ul className="list-disc list-inside">
            <li>Concept Development</li>
            <li>Location Scouting</li>
            <li>Casting and Talent Selection</li>
            <li>Wardrobe and Styling</li>
            <li>Budgeting and Scheduling</li>
            <li>Equipment Rental</li>
            <li>Storyboarding and Shot List</li>
          </ul>
        }
      />
      <CollapsibleSection
        title="Production"
        content={
          <ul className="list-disc list-inside">
            <li>Filming On Location</li>
            <li>Director & Crew Management</li>
            <li>Lighting and Audio Setup</li>
          </ul>
        }
      />
    </div>
  );
}
