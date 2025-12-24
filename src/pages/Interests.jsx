import React from 'react';
import { Link } from 'react-router-dom';

const Interests = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero text-center py-5 border-bottom">
          <div className="container">
              <h1>Interests & Inspirations</h1>
              <p className="lead">What fuels my curiosity, passion, and creativity.</p>
          </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container py-5">
          <section className="mb-4">
              <p>Here’s where the suit comes off and curiosity takes over. I’m into books that shift perspectives, languages that stretch the brain, and sports that keep the mind sharp and body moving.</p>
          </section>

          <section className="mb-4">
              <h2>Interests</h2>
              <p>I’m driven by the future of fintech—from blockchain and DeFi to ML in investment strategy. Whether analyzing crypto markets or exploring the next big wave, this world keeps me inspired and learning.</p>
          </section>

          <section className="mb-4">
              <h2>Sports</h2>
              <p>I practice calisthenics and gym workouts to stay strong and focused. On weekends, I recharge with mountain biking and hiking to balance mind and body.</p>
          </section>

          <section className="mb-4">
              <h2>Books</h2>
              <ul>
                  <li>"Understand the Technology, From the Fall of Megaupload to the Secrets of Artificial Intelligence" - Nate Gentile</li>
                  <li>“Thinking Fast and Slow” — Daniel Kahneman</li>
                  <li>“Efficiently Inefficient” — Lasse Heje Pedersen</li>
                  <li>“1984” — George Orwell</li>
              </ul>
          </section>

          <section className="mb-4">
              <h2>Hobbies</h2>
              <p>I maintain a year-long streak on Brilliant, sharpen logical skills with NeuroNation, and experiment with my Flipper Zero. I also love gaming (Fortnite, Marvel Rivals) and watching films like <em>Gattaca</em>, <em>Meet Joe Black</em>, and <em>No Country for Old Men</em>. I enjoy quality time with my girlfriend and friends too.</p>
          </section>

          <section className="mb-4">
              <h2>Inspirations</h2>
              <p>Charles Hoskinson’s blockchain vision, Kanye West’s peak-era creativity, and Elon Musk’s relentless pursuit of innovation challenge me to think bigger and move forward.</p>
          </section>

          <section className="mb-4">
              <h2>Languages & Quotes</h2>
              <p>Spanish (native), English (C1), French (basic). Some quotes that resonate:</p>
              <ul>
                  <li>
                      “Happy am I, that in the midst of what happens to me, I feel no sorrow, nor am I broken by the present, nor frightened by what is to come, since such misfortune could happen to anyone, but not everyone could bear it without pain.”<br/>
                      — Marcus Aurelius
                  </li>
                  <li>“It is our decisions that make us who we are, and we can always choose to do what is right.”<br/>
                      — Spiderman
                  </li>
                  <li>“For those who exalt themselves will be humbled, and those who humble themselves will be exalted.”<br/>
                      — Matthew 23:12
                  </li>
                  <li>
                      “Believe nothing that you hear and only half of what you see, because the other half is an illusion.”
                  </li>
                  <li>
                      “Right will remain right even if no one practices it, and wrong will remain wrong even if everyone practices it.”
                  </li>
              </ul>
          </section>

          {/* BACK BUTTON */}
          <div className="text-center mt-5">
              <Link to="/" className="btn btn-dark">← Back to Home</Link>
          </div>
      </main>
    </>
  );
};

export default Interests;
