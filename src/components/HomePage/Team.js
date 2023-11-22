import { team } from 'data';
import Card from './Card';
const Team = () => {
  return (
    <div id="team" className="min-h-screen px-12 pt-20 text-white bg-background">
      <div className="flex flex-col items-center justify-center h-full pb-6 mx-auto max-w-7xl">
        <h1 className="py-8 text-4xl font-bold text-center md:text-5xl ">Kontak</h1>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {team.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
