'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LabSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LabSettingsModal({ isOpen, onClose }: LabSettingsModalProps) {
  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting4, setSetting4] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white w-[600px] h-[450px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-[#d4d4d8] flex items-start justify-between pl-[20px] pr-[10px] py-[10px]">
            <div className="flex flex-col py-[10px] leading-[1.3]">
              <p className="font-semibold text-[22px] text-[#303030]">
                문라이트 실험실
              </p>
              <p className="font-normal text-[14px] text-[#696969]">
                제품 개선을 위해서 시험중인 새 기능들을 미리 써 볼 수 있습니다.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-[32px] h-[32px] hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <Image src="/assets/icon-x.svg" alt="Close" width={16} height={16} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
          {/* Settings Item 1 */}
          <div className={`p-[20px] flex gap-[90px] items-center ${setting1 ? 'bg-[#f4eff8]' : ''}`}>
            <div className="flex-1 flex flex-col gap-[8px]">
              <p className="font-semibold text-[18px] text-[#292929]">
                사용자 설정 프롬프트 Advanced
              </p>
              <p className="font-normal text-[14px] text-[#292929]">
                Discuss 기록을 기반으로 사용자에게 더 최적화 된 프롬프트를 자동으로 생성, 제안해드리는 기능입니다.
              </p>
            </div>
            <div className="relative group">
              <button
                type="button"
                onClick={() => setSetting1(!setting1)}
                className="flex items-center justify-center cursor-pointer"
                aria-label="Toggle setting"
              >
                <div className={`w-[40px] h-[25px] rounded-[37.5px] p-[2.5px] flex items-center relative transition-colors ${
                  setting1 ? 'bg-[#8f5bb7] justify-end' : 'bg-[#d4d4d8] justify-start'
                }`}>
                  <div className="bg-white w-[20px] h-[20px] rounded-full shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)]" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)] rounded-[37.5px]" />
                </div>
              </button>
              <div className="absolute top-1/2 right-[50px] -translate-y-1/2 bg-[#292929] text-white text-[13px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {setting1 ? '사용중' : '사용하기'}
                <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-[#292929]" />
              </div>
            </div>
          </div>

          {/* Settings Item 2 - Active */}
          <div className={`p-[20px] flex gap-[90px] items-center ${setting2 ? 'bg-[#f4eff8]' : ''}`}>
            <div className="flex-1 flex flex-col gap-[8px]">
              <p className="font-semibold text-[18px] text-[#292929]">
                나의 대시보드
              </p>
              <p className="font-normal text-[14px] text-[#292929]">
                내가 문라이트에서 읽었던 논문들 관련된 모든 액션데이터들을 시각화해서 차트와 그래프 등으로 보여주는 기능입니다. 스위치를 켜면 프로필 메뉴에 '대시보드' 가 추가됩니다.
              </p>
            </div>
            <div className="relative group">
              <button
                type="button"
                onClick={() => setSetting2(!setting2)}
                className="flex items-center justify-center cursor-pointer"
                aria-label="Toggle dashboard"
              >
                <div className={`w-[40px] h-[25px] rounded-[37.5px] p-[2.5px] flex items-center relative transition-colors ${
                  setting2 ? 'bg-[#8f5bb7] justify-end' : 'bg-[#d4d4d8] justify-start'
                }`}>
                  <div className="bg-white w-[20px] h-[20px] rounded-full shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)]" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)] rounded-[37.5px]" />
                </div>
              </button>
              <div className="absolute top-1/2 right-[50px] -translate-y-1/2 bg-[#292929] text-white text-[13px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {setting2 ? '사용중' : '사용하기'}
                <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-[#292929]" />
              </div>
            </div>
          </div>

          {/* Settings Item 3 - Button */}
          <div className="p-[20px] flex gap-[90px] items-center">
            <div className="flex-1 flex flex-col gap-[8px]">
              <p className="font-semibold text-[18px] text-[#292929]">
                AI-Scientist
              </p>
              <p className="font-normal text-[14px] text-[#292929]">
                연구와 관련된 질문을 입력하면 다양한 연관 논문들과 연결된관계도맵을 통해서 네비게이션할 수 있으며 자세한 부가 정보들을 확인해 볼 수 있습니다.
              </p>
            </div>
            <div className="relative group">
              <button
                type="button"
                onClick={() => window.open('https://corca-episteme.vercel.app/explorer', '_blank')}
                className="border-2 border-[#a1a1aa] w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all hover:border-[#8f5bb7] group cursor-pointer"
                aria-label="AI-Scientist 바로가기"
              >
                <Image
                  src="/assets/icon-next.svg"
                  alt="Next"
                  width={24}
                  height={24}
                  className="transition-all group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:invert(36%)_sepia(35%)_saturate(1635%)_hue-rotate(251deg)_brightness(88%)_contrast(90%)]"
                />
              </button>
              <div className="absolute top-1/2 right-[50px] -translate-y-1/2 bg-[#292929] text-white text-[13px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                바로가기
                <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-[#292929]" />
              </div>
            </div>
          </div>

          {/* Settings Item 4 */}
          <div className={`p-[20px] flex gap-[90px] items-center ${setting4 ? 'bg-[#f4eff8]' : ''}`}>
            <div className="flex-1 flex flex-col gap-[8px]">
              <p className="font-semibold text-[18px] text-[#292929]">
                오토 하이라이트 Advanced
              </p>
              <p className="font-normal text-[14px] text-[#292929]">
                오토하이라이트에 새로운 키워드를 추가.편집하고 컬러를 바꾸거나 체크 빈도수를 상세 조정할 수 있습니다.
              </p>
            </div>
            <div className="relative group">
              <button
                type="button"
                onClick={() => setSetting4(!setting4)}
                className="flex items-center justify-center cursor-pointer"
                aria-label="Toggle auto highlight"
              >
                <div className={`w-[40px] h-[25px] rounded-[37.5px] p-[2.5px] flex items-center relative transition-colors ${
                  setting4 ? 'bg-[#8f5bb7] justify-end' : 'bg-[#d4d4d8] justify-start'
                }`}>
                  <div className="bg-white w-[20px] h-[20px] rounded-full shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)]" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1.25px_2.5px_0px_rgba(0,0,0,0.15)] rounded-[37.5px]" />
                </div>
              </button>
              <div className="absolute top-1/2 right-[50px] -translate-y-1/2 bg-[#292929] text-white text-[13px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {setting4 ? '사용중' : '사용하기'}
                <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-[#292929]" />
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="p-[20px] flex items-center justify-end">
            <p className="font-normal text-[13px] text-[#696969] leading-[1.4]">
              *여기에 소개된 기능들은 실험 결과에 따라 본 제품에 포함되거나 언제든 없어질 수 있습니다.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="h-px bg-[#d4d4d8] w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
