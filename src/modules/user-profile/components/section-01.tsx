// components/ReadingTestCollection.tsx
"use client";

import React from "react";

const ProfileSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState("personalInfo");
  return (
    <div className="min-h-full p-0 px-4 lg:px-0">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <button
                className={`w-full text-left px-4 py-3 border border-gray-200 rounded-lg ${
                  selectedOption === "personalInfo"
                    ? "bg-orange-50 text-[#FA812F] border-[#f27d2e]"
                    : "bg-white text-black hover:bg-orange-100"
                } transition-colors`}
                onClick={() => setSelectedOption("personalInfo")}
              >
                Thông tin cá nhân
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm mt-5">
              <button
                className={`w-full text-left px-4 py-3 border border-gray-200 rounded-lg ${
                  selectedOption === "changePassword"
                    ? "bg-orange-50 text-[#FA812F] border-[#f27d2e]"
                    : "bg-white text-black hover:bg-orange-100"
                } transition-colors`}
                onClick={() => setSelectedOption("changePassword")}
              >
                Mật khẩu
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Thông tin cơ bản
                </h2>
                <p className="text-gray-600 text-sm">
                  Một số thông tin cá nhân được bảo mật của bạn
                </p>
              </div>

              {/* Personal Information */}
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-gray-700 font-medium">Tên</div>
                  <div className="md:col-span-2 text-gray-900">
                    Hieu Nguyen Cong
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-gray-700 font-medium">Email</div>
                  <div className="md:col-span-2 text-gray-900">
                    *******ieunc@farmcode.io.vn
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-gray-700 font-medium">Số điện thoại</div>
                  <div className="md:col-span-2 text-gray-400">-</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-5">
              <div className="pt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vai trò đăng nhập
                </h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">Học viên</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center bounce delay-0">
                          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center bounce delay-1"></div>
                        </div>
                        <span className="text-sm text-gray-700">
                          hieunc@farmcode.io.vn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
