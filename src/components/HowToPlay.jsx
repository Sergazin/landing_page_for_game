const HowToPlay = () => {
  const steps = [
    {
      number: '1',
      title: 'Find Your Player 2',
      description: 'Grab your crush, your bf, or that cute guy from the Discord. You need two players for maximum chaos.'
    },
    {
      number: '2',
      title: 'Meet at the Park (Night Mode)',
      description: 'Choose your battlefield. Somewhere dark, somewhere romantic, somewhere you won\'t get arrested.'
    },
    {
      number: '3',
      title: 'Load Your Water Pistols',
      description: 'Each player gets one water gun. Fill it up. This is your only weapon and your greatest responsibility.'
    },
    {
      number: '4',
      title: 'Hunt or Be Hunted',
      description: 'Start at opposite ends. Sneak through the darkness. Find them before they find you. First one to land a clean shot wins.'
    },
    {
      number: '5',
      title: 'Kiss Time 💋',
      description: 'Loser gets soaked. Winner gets bragging rights. But here\'s the rule: whoever loses makes the first move. Seal it with a kiss.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
        How to Play 📖
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-6 bg-gradient-to-r from-gray-900 to-black border border-pink-900/30 rounded-2xl p-8"
          >
            <div className="text-4xl font-black text-pink-400 flex-shrink-0">{step.number}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-pink-300">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;
