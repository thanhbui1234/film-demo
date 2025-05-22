"use client";

import Link from "next/link";
import { useState } from "react";

const TabsWithCards = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Fake data
  const cards = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      category: "technology",
      description: "Smartphone cao cấp với chip A17 Pro",
      price: "Ngon",
      image: "vip5.JPG",
    },
    {
      id: 2,
      title: "Nike Air Max",
      category: "fashion",
      description: "Giày thể thao phong cách hiện đại",
      price: "Ngon",

      image: "motiongraphic.webp",
    },
    {
      id: 3,
      title: "MacBook Pro M3",
      category: "technology",
      description: "Laptop chuyên nghiệp cho designer",
      price: "Ngon",

      image: "33.jpg",
    },
    {
      id: 4,
      title: "Ramen Nhật Bản",
      category: "food",
      description: "Món mì truyền thống đậm đà",
      price: "Ngon",

      image: "44.jpg",
    },
    {
      id: 5,
      title: "Đồng hồ Rolex",
      category: "fashion",
      description: "Đồng hồ sang trọng cao cấp",
      price: "Ngon",

      image: "55.jpg",
    },
    {
      id: 6,
      title: "Gaming Setup",
      category: "technology",
      description: "Bộ máy gaming RGB đầy đủ",
      price: "Ngon",

      image: "vip3.JPG",
    },
    {
      id: 7,
      title: "Sushi Premium",
      category: "food",
      description: "Set sushi cá hồi tươi ngon",
      price: "Ngon",

      image: "vip5.JPG",
    },
    {
      id: 8,
      title: "Louis Vuitton Bag",
      category: "fashion",
      description: "Túi xách designer hàng hiệu",
      price: "Ngon",

      image: "IMG_3706.JPG",
    },
    {
      id: 9,
      title: "Tesla Model S",
      category: "technology",
      description: "Xe điện thông minh tự lái",
      price: "Ngon",

      image: "vip5.JPG",
    },
    {
      id: 10,
      title: "Pizza Italy",
      category: "food",
      description: "Pizza truyền thống từ Italy",
      price: "Ngon",

      image: "vip1.JPG",
    },
  ];

  const tabs = [
    { id: "all", label: "Tất cả", count: cards.length, icon: "🌟" },
    {
      id: "technology",
      label: "Công nghệ",
      count: cards.filter((card) => card.category === "technology").length,
      icon: "💻",
    },
    {
      id: "fashion",
      label: "Thời trang",
      count: cards.filter((card) => card.category === "fashion").length,
      icon: "👗",
    },
    {
      id: "food",
      label: "Ẩm thực",
      count: cards.filter((card) => card.category === "food").length,
      icon: "🍜",
    },
  ];

  const filteredCards =
    activeTab === "all"
      ? cards
      : cards.filter((card) => card.category === activeTab);

  // Animation styles
  const fadeInUpStyle = (delay = 0) => ({
    opacity: 0,
    transform: "translateY(50px)",
    animation: `fadeInUp 1s ease-out ${delay}s forwards`,
  });

  const cardAppearStyle = (index: number) => ({
    opacity: 0,
    transform: "translateY(50px) scale(0.9)",
    animation: `cardAppear 0.8s ease-out ${index * 0.1}s forwards`,
  });

  return (
    <div className="min-h-screen py-12 overflow-hidden">
      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes cardAppear {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes tabFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0) scale(1); }
            40%, 43% { transform: translate3d(0, -8px, 0) scale(1.1); }
            70% { transform: translate3d(0, -4px, 0) scale(1.05); }
            90% { transform: translate3d(0, -2px, 0) scale(1.02); }
          }
          
          .tab-float {
            animation: tabFloat 3s ease-in-out infinite;
          }
          
          .float-btn {
            animation: float 3s ease-in-out infinite;
          }
          
          .bounce-badge {
            animation: bounce 2s infinite;
          }
        `}
      </style>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Tabs with motion */}
        <div className="flex justify-center mb-12" style={fadeInUpStyle(0.4)}>
          <div className="relative flex bg-black/30 backdrop-blur-2xl rounded-3xl p-2 border border-white/20 shadow-2xl">
            {/* Active tab background */}
            <div
              className="absolute top-2 bottom-2 bg-gradient-to-r from-white to-gray-200 rounded-2xl transition-all duration-500 ease-out shadow-lg"
              style={{
                left: `${
                  tabs.findIndex((tab) => tab.id === activeTab) *
                  (100 / tabs.length)
                }%`,
                width: `${100 / tabs.length}%`,
                transform: "translateX(2px) translateY(0px)",
              }}
            ></div>

            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 tab-float ${
                  activeTab === tab.id
                    ? "text-black scale-105"
                    : "text-gray-300 hover:text-white hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="text-sm font-medium">{tab.label}</span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-black/20 text-black scale-110 bounce-badge"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with staggered animations */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeTab}
        >
          {filteredCards.map((card, index) => (
            <div
              key={`${activeTab}-${card.id}`}
              className="group relative"
              style={cardAppearStyle(index)}
            >
              <Link href={`/projects/detail`}>
                <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 cursor-pointer hover:border-white/40 hover:bg-black/50 group-hover:scale-105 group-hover:-translate-y-4 group-hover:rotate-1 hover:shadow-2xl hover:shadow-white/10">
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full max-h-[270px] h-[230px !important] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className="flex gap-2">
                        <button className="bg-black/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:rotate-12 float-btn">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                        <button
                          className="bg-black/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:rotate-12 float-btn"
                          style={{ animationDelay: "0.5s" }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Price tag */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      <div className="bg-gradient-to-r from-white to-gray-300 text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg animate-pulse">
                        {card.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold  text-gray-200 border border-white/30 group-hover:border-white/50 transition-all duration-300">
                        {tabs.find((tab) => tab.id === card.category)?.icon}{" "}
                        {tabs.find((tab) => tab.id === card.category)?.label}
                      </span>

                      {/* <button className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-white text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1">
                      Mua ngay
                    </button> */}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 via-gray-300/5 to-gray-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsWithCards;
