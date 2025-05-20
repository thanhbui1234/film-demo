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
      <CollapsibleTrigger asChild>
        <div
          className="bg-black text-white p-6 rounded-xl cursor-pointer"
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
            <button className="text-white">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </button>
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
      </CollapsibleTrigger>
    </Collapsible>
  );
}

export function CollapsibleSectionPage() {
  return (
    <div className="p-6 bg-[#0D0D0D] min-h-screen space-y-4">
      <CollapsibleSection
        title="Tiền Sản Xuất"
        content={
          <ul className="list-disc list-inside">
            <li>Phát triển ý tưởng và kịch bản</li>
            <li>Khảo sát và chọn địa điểm quay</li>
            <li>Tuyển chọn diễn viên và nhân sự</li>
            <li>Chuẩn bị trang phục, makeup, đạo cụ</li>
            <li>Lập ngân sách và thời gian sản xuất</li>
            <li>Thuê thiết bị quay phim, chụp ảnh</li>
            <li>Vẽ storyboard và chuẩn bị shot list</li>
          </ul>
        }
      />

      <CollapsibleSection
        title="Quay Phim - Chụp Ảnh"
        content={
          <ul className="list-disc list-inside">
            <li>Ghi hình tại hiện trường theo kế hoạch</li>
            <li>Quản lý đạo diễn và ê-kíp làm việc</li>
            <li>Bố trí ánh sáng, âm thanh chuyên nghiệp</li>
            <li>Đảm bảo tiến độ và chất lượng từng cảnh quay</li>
          </ul>
        }
      />

      <CollapsibleSection
        title="Hậu Kỳ"
        content={
          <ul className="list-disc list-inside">
            <li>Dựng phim, chỉnh sửa video chuyên sâu</li>
            <li>Chỉnh màu, hiệu ứng, âm thanh</li>
            <li>Thêm nhạc nền, phụ đề, đồ họa động</li>
            <li>Xuất file chất lượng cao, chuẩn đa nền tảng</li>
            <li>Chỉnh sửa theo yêu cầu khách hàng</li>
          </ul>
        }
      />

      <CollapsibleSection
        title="Bàn Giao & Hỗ Trợ"
        content={
          <ul className="list-disc list-inside">
            <li>Bàn giao sản phẩm đúng hạn, đúng chất lượng</li>
            <li>Hỗ trợ các định dạng khác nhau (MP4, MOV, HD, 4K...)</li>
            <li>Tư vấn tối ưu hóa video cho mạng xã hội</li>
            <li>Hậu mãi, chỉnh sửa bổ sung nếu cần</li>
            <li>Hợp tác dài hạn cho các dự án tiếp theo</li>
          </ul>
        }
      />
    </div>
  );
}
