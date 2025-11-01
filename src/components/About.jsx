const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-center gradient-text">
          WTF is this? 🤔
        </h2>

        <div className="text-xl text-gray-300 space-y-6 leading-relaxed">
          <p>
            Picture this: It's 2am. You're in a dark park. Your crush is somewhere out there with a loaded water pistol.
            The mission? Find them before they find you. The twist? <span className="text-pink-400 font-semibold">Whoever gets soaked first has to make the first move.</span>
          </p>

          <p>
            This isn't your normie dating app. This is a full-degen, heart-pounding, water-dripping stealth experience
            designed for crypto bros who are tired of touching grass and ready to touch... each other. 💅
          </p>

          <p className="text-pink-300 font-semibold text-2xl text-center py-8">
            "The most romantic game of tag you'll ever play."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
