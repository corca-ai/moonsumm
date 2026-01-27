import Header from './Header';
import Features from './Features';

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />

      {/* Main Content - with padding-top for fixed header */}
      <main className="pt-[68px]">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f6fa] to-white">
          <div className="text-center">
            <h1 className="text-[48px] font-bold text-[#605070] mb-4">
              Moonlight
            </h1>
            <p className="text-[20px] text-[#696969]">
              연구자를 위한 AI 논문 분석 도구
            </p>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-[36px] font-bold text-[#605070] mb-4">
              제품 소개
            </h2>
            <p className="text-[18px] text-[#696969]">
              문라이트로 연구 효율을 높이세요
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full">
          <Features />
        </section>

        {/* Cases Section */}
        <section id="cases" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-[36px] font-bold text-[#605070] mb-4">
              도입 사례
            </h2>
            <p className="text-[18px] text-[#696969]">
              실제 사용자들의 경험을 확인하세요
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="min-h-screen flex items-center justify-center bg-[#f8f6fa]">
          <div className="text-center">
            <h2 className="text-[36px] font-bold text-[#605070] mb-4">
              사용 요금제
            </h2>
            <p className="text-[18px] text-[#696969]">
              나에게 맞는 플랜을 선택하세요
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-[36px] font-bold text-[#605070] mb-4">
              FAQ
            </h2>
            <p className="text-[18px] text-[#696969]">
              자주 묻는 질문
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

