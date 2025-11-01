const Hero = () => {
  const handlePlayClick = () => {
    alert('Game coming soon! 🎮 Get ready for the wettest adventure of your life.');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10">
        {/* Water Pistol Emoji */}
        <div className="text-8xl mb-8 water-drop">💦</div>

        <h1 className="text-7xl md:text-9xl font-black mb-6 neon-glow gradient-text">
          KISS
        </h1>

        <p className="text-2xl md:text-4xl font-light mb-4 text-pink-300">
          Shoot First. Kiss Later.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          The most degen stealth game where two players hunt each other in a dark park with water pistols.
          <span className="text-pink-400"> Only the wettest survive.</span>
        </p>

        <button
          onClick={handlePlayClick}
          className="btn-primary text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl"
        >
          PLAY NOW 🎮
        </button>

        <p className="text-sm text-gray-500 mt-4">No wallet needed. Just vibes.</p>
      </div>
    </div>
  );
};

export default Hero;
