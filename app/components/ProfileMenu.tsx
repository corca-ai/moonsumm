


'use client';

import { useState } from 'react';
import Image from 'next/image';
import LabSettingsModal from './LabSettingsModal';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);
  const [labActiveCount, setLabActiveCount] = useState(0);

  return (
    <>
      <div className="relative">
        {/* Profile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#a69db1] flex items-center justify-center rounded-full w-[40px] h-[40px] hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image
            src="/assets/profile-icon.svg"
            alt="Profile"
            width={16}
            height={18}
          />
        </button>

        {/* Popup Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <div className="absolute right-0 top-[30px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] w-[240px] z-50">
              {/* Profile Section */}
              <div className="flex gap-[10px] items-center px-[15px] py-[20px]">
                <div className="bg-[#a69db1] flex items-center justify-center rounded-full w-[40px] h-[40px]">
                  <Image
                    src="/assets/profile-icon.svg"
                    alt="Profile"
                    width={16}
                    height={18}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-[13px] text-[#292929]">
                    Username
                  </p>
                  <p className="font-normal text-[12px] text-[#696969]">
                    username@corca.ai
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#d4d4d8] w-full" />

              {/* Menu Items Group 1 */}
              <div className="flex flex-col py-[10px]">
                <MenuItem icon="/assets/icon-account.svg" label="내 계정" />
                <MenuItem icon="/assets/icon-display.svg" label="화면 설정" />
                <MenuItem icon="/assets/icon-settings.svg" label="설정" />
                <MenuItem
                  icon="/assets/icon-lab.svg"
                  label="실험실"
                  badge={labActiveCount > 0 ? String(labActiveCount) : undefined}
                  onClick={() => setIsLabModalOpen(true)}
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-[#d4d4d8] w-full" />

              {/* Menu Items Group 2 */}
              <div className="flex flex-col py-[10px]">
                <MenuItem icon="/assets/icon-guide.svg" label="사용자 가이드" />
                <MenuItem icon="/assets/icon-feedback.svg" label="피드백 보내기" />
                <MenuItem icon="/assets/icon-community.svg" label="사용자 커뮤니티" />
                <MenuItem icon="/assets/icon-changelog.svg" label="변경 로그" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Lab Settings Modal */}
      <LabSettingsModal
        isOpen={isLabModalOpen}
        onClose={() => setIsLabModalOpen(false)}
        onCountChange={setLabActiveCount}
      />
    </>
  );
}

interface MenuItemProps {
  icon: string;
  label: string;
  badge?: string;
  onClick?: () => void;
}

function MenuItem({ icon, label, badge, onClick }: MenuItemProps) {
  return (
    <div
      className={`flex gap-[8px] h-[40px] items-center px-[10px] ${onClick ? 'hover:bg-[#f5f5f5] cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="w-[30px] h-[30px] flex items-center justify-center relative">
        <Image
          src={icon}
          alt={label}
          width={0}
          height={0}
          className="w-auto h-auto max-w-[30px] max-h-[30px]"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <div className="flex-1 flex items-center h-[14px]">
        <p className="font-semibold text-[13px] text-[#292929]">{label}</p>
      </div>
      {badge && (
        <div className="bg-[#8F5BB7] rounded-full w-[20px] h-[20px] flex items-center justify-center mr-[5px]">
          <p className="font-normal text-[12px] text-white text-center">
            {badge}
          </p>
        </div>
      )}
    </div>
  );
}
