'use client';

import Image from 'next/image';

const imgImage24094512 = "/assets/product/features/summary-feature.png";
const imgGroup1272629116 = "/assets/product/features/summary-icon.svg";

export default function FeaturesHero() {
  return (
    <>
      <section
        className="w-full min-h-[49vh] flex flex-col gap-8 md:gap-12 items-center justify-center px-4 md:px-8 py-16 md:py-24 relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center bottom, #8F5BB7 0%, #774C99 25%, #603E7C 50%, #482F5E 75%, #302040 100%)'
        }}
      >
        {/* Title */}
        <div className="text-center px-4 mt-24 md:mt-32">
          <h2
            className="text-[48px] font-light text-center leading-tight"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            <span className="text-white/70">논문연구에 필요한 </span>
            <span className="text-white">모든 기능들이 준비</span>
            <span className="text-white/70">되어 있습니다</span>
            <span className="text-white">.</span>
          </h2>
        </div>

        {/* Features Image */}
        <div className="w-full max-w-[1496px] px-4 md:px-8">
          <Image
            src="/assets/product/hero/hero-feature.png"
            alt="Moonlight Features"
            width={1496}
            height={595}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Features Content Section */}
      <div className="bg-gray-100 w-full flex items-center justify-center px-4 md:px-8 lg:px-[60px] py-16 md:py-24">
        {/* Web Version - Hidden on mobile */}
        <div className="hidden lg:flex w-full h-[480px] bg-white" style={{ boxShadow: '0 15px 37.5px 0 rgba(0, 0, 0, 0.05)' }}>
          {/* Left Content */}
          <div className="flex flex-1 flex-col h-full items-start bg-white">
            <div className="flex flex-1 flex-col items-start w-full">
              <div className="flex items-start h-full">
                {/* Icon */}
                <div className="bg-[#605070] flex items-center justify-center size-[120px] flex-shrink-0">
                  <img alt="" className="w-12 h-12" src={imgGroup1272629116} />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col h-full items-start pt-[78px] pl-5">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-extrabold text-[50px] text-[#605070] uppercase leading-none">SUMMARY</h3>
                    <p className="font-semibold text-[24px] text-[#605070] leading-[1.4] uppercase">
                      문서의 핵심 내용을 키워드, 3줄 요약,<br/>더 자세한 요약으로 정리해서 보여줍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-[480px] h-full bg-white overflow-hidden flex-shrink-0" style={{ boxShadow: '0 15px 37.5px 0 rgba(0, 0, 0, 0.05)' }}>
            <img alt="" className="w-full h-full object-cover" src={imgImage24094512} />
          </div>
        </div>

        {/* Mobile Version - Hidden on desktop */}
        <div className="lg:hidden w-full max-w-[840px] bg-white rounded-bl-3xl border-t-8 border-[#605070] overflow-hidden flex flex-col" style={{ boxShadow: '0 15px 37.5px 0 rgba(0, 0, 0, 0.05)' }}>
          {/* Mobile Content */}
          <div className="flex flex-col items-start bg-white">
            <div className="flex flex-col items-start w-full h-[500px]">
              <div className="flex items-start h-full">
                {/* Icon */}
                <div className="bg-[#605070] flex items-center justify-center size-[120px] flex-shrink-0">
                  <img alt="" className="w-12 h-12" src={imgGroup1272629116} />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col h-full items-start pt-[70px] pl-10 pr-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-extrabold text-[36px] md:text-[48px] text-[#605070] uppercase leading-none">SUMMARY</h3>
                    <p className="font-semibold text-xl md:text-2xl text-[#605070] leading-[1.4] uppercase">
                      문서의 핵심 내용을<br/>키워드, 3줄 요약으로<br/>정리해서 보여줍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Image */}
          <div className="w-full h-[840px] bg-white overflow-hidden">
            <img alt="" className="w-full h-full object-cover" src={imgImage24094512} />
          </div>
        </div>
      </div>
    </>
  );
}
