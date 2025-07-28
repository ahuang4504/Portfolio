import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import ConnectionsGame from '@/components/ConnectionsGame';
import SpotifyWidget from '@/components/SpotifyWidget';
import CurrentlyReading from '@/components/CurrentlyReading';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="condensed-section px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <CurrentlyReading />
            <SpotifyWidget />
          </div>
        </div>
      </section>
      
      <ConnectionsGame />
      <Timeline />
    </div>
  );
}
