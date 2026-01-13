import ProfileMenu from './components/ProfileMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eee] p-8 relative">
      {/* Profile Menu - Fixed Position */}
      <div className="absolute top-8 right-8">
        <ProfileMenu />
      </div>

      {/* Centered Content */}
      <div className="max-w-2xl mx-auto flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-8 shadow-sm w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">실험실 메뉴</h2>
          <p className="text-gray-600 mb-4 text-center">
            오른쪽 프로필 메뉴창에서 "실험실" 클릭.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>실험실 설정 팝업창 표시</li>
            <li>문라이트 내부 연동기능은 스위치로 On/Off</li>
            <li>독립적인 페이지로 써보는 기능은 버튼으로 링크</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

