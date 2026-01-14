import ProfileMenu from '../components/ProfileMenu';

export default function MoonLab() {
  return (
    <div className="min-h-screen bg-[#eee] p-8 relative">
      {/* Profile Menu - Fixed Position */}
      <div className="absolute top-8 right-8">
        <ProfileMenu />
      </div>

      {/* Centered Content */}
      <div className="max-w-2xl mx-auto flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-8 shadow-sm w-full">
          <h2 className="text-xl font-semibold mb-4 text-left">실험실 메뉴</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>오른쪽 프로필 메뉴창에서 "실험실" 클릭</li>
            <li>실험실 설정 팝업 출력</li>
            <li>문라이트 내부연동 기능은 스위치로 On/Off</li>
            <li>외부페이지로 독립된 실험은 바로가기 버튼</li>

          </ul>
        </div>
      </div>
    </div>
  );
}
