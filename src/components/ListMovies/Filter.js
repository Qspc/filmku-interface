export default function FilterMovies({ setPage, page, setGenre, genre, setCountry, country }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-4">
        <select
          value={genre}
          onChange={(e) => {
            setPage(1);
            setGenre(e.target.value);
          }}
          className="py-2 pl-4 pr-8 border rounded-lg "
        >
          <option className="" value="">
            Semua Tipe
          </option>
          <option value="Animasi">Animasi</option>
          <option value="Non Animasi">Non Animasi</option>
        </select>

        <select
          value={country}
          onChange={(e) => {
            setPage(1);
            setCountry(e.target.value);
          }}
          className="py-2 pl-4 pr-8 border rounded-lg "
        >
          <option value="">Semua Negara</option>
          <option value="Nasional">Nasional</option>
          <option value="Internasional">Internasional</option>
        </select>
      </div>
    </div>
  );
}
