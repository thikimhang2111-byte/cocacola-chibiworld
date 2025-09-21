export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-100 to-red-300 text-gray-900">
      {/* Logo */}
      <h1 className="text-4xl font-extrabold mb-6 text-red-700 drop-shadow">
        Coca Cola Chibi World
      </h1>

      {/* Mô tả ngắn */}
      <p className="text-lg mb-8 max-w-lg text-center">
        Chào mừng bạn đến với thế giới Chibi đầy màu sắc!  
        Hãy bắt đầu cuộc phiêu lưu và khám phá những điều thú vị bên trong trò chơi.
      </p>

      {/* Nút Start */}
      <button
        onClick={() => alert("Game bắt đầu! (bạn có thể gắn logic thật ở đây)")}
        className="px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold text-lg shadow-lg hover:bg-red-700 transition"
      >
        Bắt đầu chơi
      </button>
    </div>
  );
}
