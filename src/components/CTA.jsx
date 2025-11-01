const CTA = () => {
  const handlePlayClick = () => {
    alert('Game coming soon! 🎮 Get ready for the wettest adventure of your life.');
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-3xl p-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
          Ready to Get Wet? 💦
        </h2>

        <p className="text-xl text-gray-300 mb-10">
          Stop lurking. Start playing. Your romantic stealth adventure awaits.
        </p>

        <button
          onClick={handlePlayClick}
          className="btn-primary text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl mb-6"
        >
          PLAY NOW 🎮
        </button>

        <p className="text-sm text-gray-500">
          Web-based • No Install • Pure Degen Energy
        </p>

        <div className="mt-12 pt-12 border-t border-pink-900/30">
          <p className="text-gray-400 mb-4">Built with 💖 by degens, for degens</p>
          <p className="text-sm text-gray-600">
            Warning: May cause wet clothes, accelerated heart rate, and actual romance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
