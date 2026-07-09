import Heading from './components/heading';

const pillars = [
  {
    title: 'Bridging Business & Engineering',
    description:
      'I translate technical products into business terms and back again, so teams build the right thing the first time around.',
  },
  {
    title: 'Ship Production Code',
    description:
      'I\'ve spent most my career as a full-stack software engineer, which has kept me close to the product from start to finish.',
  },
  {
    title: 'Technial Leadership',
    description:
      'As a software engineering manager, I\'ve developed the skills necessary to lead engineering teams, as well as working cross functionaly.',
  },
];

export default function Home() {
  return (
    <main>
      <div className="mb-8">
        <Heading>Colten Van Tussenbrook</Heading>
      </div>
      <div className="mb-10">
        <p>Technical Product Owner | Product Strategy | Software Engineering</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="border-l-2 border-copper/40 pl-4 py-1">
            <h3 className="mb-2 text-lg font-semibold text-copper">{pillar.title}</h3>
            <p className="text-sm text-bone-muted leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
