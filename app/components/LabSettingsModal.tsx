'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LabSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

export default function LabSettingsModal({ isOpen, onClose, onCountChange }: LabSettingsModalProps) {
  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting4, setSetting4] = useState(false);
  const [setting5, setSetting5] = useState(false);
  // Calculate and update active count whenever settings change
  useEffect(() => {
    const count = [setting1, setting2, setting4, setting5].filter(Boolean).length;
    onCountChange?.(count);
  }, [setting1, setting2, setting4, setting5, onCountChange]);


  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white w-[390px] h-[600px] rounded-[14px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-[#d4d4d8] flex items-start justify-between px-[20px] py-[16px]">
            <div className="flex flex-col gap-[8px]">
              <p className="font-bold text-[15px] text-[#303030] leading-[1.3]">
                문라이트 실험실
              </p>
              <p className="font-normal text-[12px] text-[#696969] leading-[1.4]">
                제품 개선을 위해 실험중인 기능들을 미리 써 보세요.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="group flex items-center justify-center w-[24px] h-[24px] transition-opacity cursor-pointer relative top-[-10px] right-[-10px]"
              aria-label="Close"
            >
              <Image
                src="/assets/icon-close-off.svg"
                alt="Close"
                width={24}
                height={24}
                className="block group-hover:hidden"
              />
              <Image
                src="/assets/icon-close-on.svg"
                alt="Close"
                width={24}
                height={24}
                className="hidden group-hover:block"
              />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Settings Item 1 */}
            <div className={`p-[15px] flex gap-[20px] items-center justify-between ${setting1 ? 'bg-[#f5f5f5]' : ''}`}>
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-bold text-[16px] text-[#292929]">
                  사용자 설정 프롬프트 2.0
                </p>
                <p className="font-normal text-[12px] text-[#292929] leading-[1.4] break-keep">
                  Discuss 기록을 기반으로 사용자에게 더 최적화 된 프롬프트를 자동으로 생성, 제안해드리는 기능입니다.
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSetting1(!setting1)}
                  className="cursor-pointer"
                  aria-label="Toggle setting"
                >
                  <Image
                    src={setting1 ? "/assets/icon-on.svg" : "/assets/icon-off.svg"}
                    alt={setting1 ? "On" : "Off"}
                    width={40}
                    height={24}
                  />
                </button>
                <div className="absolute bottom-[38px] left-1/2 -translate-x-1/2 bg-[#292929] text-white text-[12px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {setting1 ? '사용중' : '사용하기'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#292929]" />
                </div>
              </div>
            </div>

            {/* Settings Item 2 */}
            <div className={`p-[15px] flex gap-[20px] items-center justify-between ${setting2 ? 'bg-[#f5f5f5]' : ''}`}>
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-bold text-[16px] text-[#292929]">
                  나의 대시보드
                </p>
                <p className="font-normal text-[12px] text-[#292929] leading-[1.4] break-keep">
                  내가 문라이트에서 읽었던 논문들과 관련된 모든 액션 데이터들을 시각화 해서 차트와 그래프 등으로 보여주는 기능입니다. 스위치를 켜면 프로필 메뉴에 '대시보드' 가 추가됩니다.
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSetting2(!setting2)}
                  className="cursor-pointer"
                  aria-label="Toggle dashboard"
                >
                  <Image
                    src={setting2 ? "/assets/icon-on.svg" : "/assets/icon-off.svg"}
                    alt={setting2 ? "On" : "Off"}
                    width={40}
                    height={24}
                  />
                </button>
                <div className="absolute bottom-[38px] left-1/2 -translate-x-1/2 bg-[#292929] text-white text-[12px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {setting2 ? '사용중' : '사용하기'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#292929]" />
                </div>
              </div>
            </div>

            {/* Settings Item 3 - Button */}
            <div className="p-[15px] flex gap-[20px] items-center justify-between">
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-bold text-[15px] text-[#292929]">
                  AI-Scientist
                </p>
                <p className="font-normal text-[12px] text-[#292929] leading-[1.4] break-keep">
                  연구와 관련된 질문을 입력하면 다양한 연관 논문들과 연결된 관계도 맵을 통해서 이동할 수 있으며 자세한 내용들을 확인해 볼 수 있습니다.
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  type="button"
                  onClick={() => window.open('https://corca-episteme.vercel.app/explorer', '_blank')}
                  className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
                  aria-label="AI-Scientist 바로가기"
                >
                  <Image
                    src="/assets/icon-next-off.svg"
                    alt="Next"
                    width={40}
                    height={40}
                    className="block group-hover:hidden"
                  />
                  <Image
                    src="/assets/icon-next-on.svg"
                    alt="Next"
                    width={40}
                    height={40}
                    className="hidden group-hover:block"
                  />
                </button>
                <div className="absolute bottom-[48px] left-1/2 -translate-x-1/2 bg-[#292929] text-white text-[12px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  바로가기
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#292929]" />
                </div>
              </div>
            </div>

            {/* Settings Item 4 */}
            <div className={`p-[15px] flex gap-[20px] items-center justify-between ${setting4 ? 'bg-[#f5f5f5]' : ''}`}>
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-bold text-[16px] text-[#292929]">
                  오토 하이라이트 2.0
                </p>
                <p className="font-normal text-[12px] text-[#292929] leading-[1.4] break-keep">
                  오토 하이라이트에 새로운 키워드를 추가,편집하고 컬러를 바꾸거나 체크 빈도수를 상세 조정할 수 있습니다.
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSetting4(!setting4)}
                  className="cursor-pointer"
                  aria-label="Toggle auto highlight"
                >
                  <Image
                    src={setting4 ? "/assets/icon-on.svg" : "/assets/icon-off.svg"}
                    alt={setting4 ? "On" : "Off"}
                    width={40}
                    height={24}
                  />
                </button>
                <div className="absolute bottom-[38px] left-1/2 -translate-x-1/2 bg-[#292929] text-white text-[12px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {setting4 ? '사용중' : '사용하기'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#292929]" />
                </div>
              </div>
            </div>

            {/* Settings Item 5 */}
            <div className={`p-[15px] flex gap-[20px] items-center justify-between ${setting5 ? 'bg-[#f5f5f5]' : ''}`}>
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-bold text-[16px] text-[#292929]">
                  라이브러리 2.0
                </p>
                <p className="font-normal text-[12px] text-[#292929] leading-[1.4] break-keep">
                  기존의 읽은 논문들의 관리 이외에 저장된 논문들을 분석해서 꼭 봐야할 다른 논문들을 추천하거나
                  연관성 정보들을 볼 수 있는 등 새롭게 추가된 다양한 기능이 포함되어 있습니다.
                </p>
              </div>
              <div className="relative group flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSetting5(!setting5)}
                  className="cursor-pointer"
                  aria-label="Toggle auto highlight"
                >
                  <Image
                    src={setting5 ? "/assets/icon-on.svg" : "/assets/icon-off.svg"}
                    alt={setting5 ? "On" : "Off"}
                    width={40}
                    height={24}
                  />
                </button>
                <div className="absolute bottom-[38px] left-1/2 -translate-x-1/2 bg-[#292929] text-white text-[12px] px-[10px] py-[6px] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {setting5 ? '사용중' : '사용하기'}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#292929]" />
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="p-[15px] flex items-center justify-start border-t border-[#d4d4d8]">
              <p className="font-normal text-[12px] text-[#696969] leading-[1.4] text-left">
                * 여기에 소개된 기능들은 실험 결과에 따라서 <br />&nbsp;&nbsp;제품 업데이트에 포함되거나 다시 없어질 수 있습니다.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
