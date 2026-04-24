import { team } from "data";
import Card from "./Card";
const Team = () => {
  return (
    <div id="team" className="text-white bg-background">
      <div className="flex flex-col py-20 w-[80%] items-center justify-center gap-8 md:gap-16 h-full mx-auto ">
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
