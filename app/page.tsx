import ProfileMenu from './components/ProfileMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eee] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Moonlight Test Page</h1>
          <ProfileMenu />
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">실험실 메뉴 테스트</h2>
          <p className="text-gray-600 mb-4">
            오른쪽 상단의 프로필 아이콘을 클릭하면 팝업 메뉴가 나타납니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>프로필 정보 표시</li>
            <li>새 아이템 추가시 알림배지 표시</li>
            <li>클릭시 설정창 팝업</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

