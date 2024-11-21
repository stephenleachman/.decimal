import { About, Hero, Stats, TheTeam } from "./(landing)/_sections";

export default function Home() {
  return (
   <main >
    <section className="flex justify-center bg-background2 overflow-hidden border-b-2 border-border">
      <Hero />
    </section>
    <section className="bg-background overflow-hidden border-b-2 border-border">
      <Stats />
    </section>
    <section className="flex justify-center bg-background2 h-[700px] border-b-2 border-border">
      <About />
    </section>
    <section className="flex justify-center bg-gradient-to-t from-background to-background2">
      <TheTeam />
    </section>
   </main>
  );
}
