const Features = () => {
  const features = [
    {
      emoji: '🌙',
      title: 'Stealth Mode',
      description: 'Navigate the shadows. Use trees, benches, and bushes as cover. One wrong move and you\'re getting drenched.'
    },
    {
      emoji: '🔫',
      title: 'Water Warfare',
      description: 'Limited ammo. Make every shot count. Miss and you reveal your position. Land a hit and claim victory... and a kiss.'
    },
    {
      emoji: '💋',
      title: 'The Kiss',
      description: 'Winner gets the glory. Loser makes the first move. Either way, you both win. That\'s the degen way.'
    },
    {
      emoji: '🎮',
      title: '2-Player PvP',
      description: 'This is personal. One opponent. One park. Infinite chemistry. No bots, no NPCs, just raw human connection.'
    },
    {
      emoji: '🌈',
      title: 'Gay Party Vibes',
      description: 'Designed by degens, for degens. Celebrate love, chaos, and getting absolutely soaked in the name of romance.'
    },
    {
      emoji: '⚡',
      title: 'Instant Play',
      description: 'No downloads. No wallet connect. No bullshit. Just click play and start hunting your future bae.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
        Game Features 🎯
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-hover bg-gradient-to-br from-gray-900 to-black border border-pink-900/30 rounded-2xl p-8"
          >
            <div className="text-5xl mb-4">{feature.emoji}</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
