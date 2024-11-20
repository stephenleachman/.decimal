import { Hero, Stats } from "./(landing)/_sections";

export default function Home() {
  return (
   <main >
    <section className="flex justify-center bg-background2 overflow-hidden">
      <Hero />
    </section>
    <section className="bg-background2 overflow-hidden">
      <Stats />
    </section>
   </main>
  );
}
