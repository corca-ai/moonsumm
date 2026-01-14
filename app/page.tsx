export default function Home() {
  return (
    <div className="min-h-screen bg-[#eee] flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-6 text-center">MoonSumm</h1>
          <p className="text-gray-600 text-center mb-8">
            환영합니다.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="/moonlab"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
            >
              MoonLab 실험실 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

