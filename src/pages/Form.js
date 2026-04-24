import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAllByDisplayValue } from "@testing-library/react";
import { getMoviePoster } from "api/tmdbService";
import LoadingEffect from "components/style/LoadingEffect";
import { useCreateMovie } from "hooks/useMovie";

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    year: "",
    rank: "",
    genre: "Animasi",
    country: "Nasional",
    description: "",
    image: "",
  });
  const [loadImage, setLoadImage] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const allForm = [
    {
      label: "Title",
      name: "title",
      value: form.title,
    },
    {
      label: "Year",
      name: "year",
      value: form.year,
    },
    {
      label: "Rank",
      name: "rank",
      value: form.rank,
    },
  ];
  const [poster, setPoster] = useState(""); //show image poster
  const [idMovie, setIdMovie] = useState(); //id movie from moviedb
  const [text, setText] = useState(""); //text editor for description

  const { mutateAsync, isLoading } = useCreateMovie();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if (!form.title) return alert("Judul wajib diisi");
    if (!form.year) return alert("Tahun wajib diisi");
    if (!form.rank) return alert("Rank wajib diisi");
    if (!text) return alert("Deskripsi wajib diisi");
    if (!form.image) return alert("Silakan cek poster terlebih dahulu");
    if (!apiKey) return alert("API Key wajib diisi");

    const payload = {
      ...form,
      year: Number(form.year),
      rank: Number(form.rank),
      description: text,
    };

    mutateAsync(
      { body: payload, apiKey },
      {
        onSuccess: () => {
          navigate("/film");
        },
        onError: (err) => {
          console.error(err);
          alert("Gagal menambahkan film");
        },
      },
    );
  };

  const handleImage = async () => {
    try {
      setLoadImage(true);
      const imageUrl = await getMoviePoster(Number(idMovie));

      setPoster(imageUrl);

      setForm((prev) => ({
        ...prev,
        image: imageUrl,
      }));
      setLoadImage(false);
    } catch (error) {
      console.error("Gagal ambil poster:", error);
    }
  };

  return (
    <section className="mx-auto bg-background">
      <div className="w-1/2 px-6 py-20 mx-auto text-white">
        <h1 className="mb-8 text-2xl font-semibold">Tambah Film</h1>

        <div className="flex flex-col gap-6">
          {/* FIELD BASIC */}
          {allForm.map((data, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="text-sm font-medium">{data.label}</label>

              <input
                type={data.name === "title" ? "text" : "number"}
                name={data.name}
                value={data.value}
                onChange={handleChange}
                className="px-4 py-2 text-white border rounded-lg bg-surface border-grey focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          ))}

          {/* GENRE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Tipe Film</label>
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="px-4 py-2 text-white border rounded-lg bg-surface border-grey focus:ring-2 focus:ring-primary"
            >
              <option value="animasi">Animasi</option>
              <option value="Non Animasi">Non Animasi</option>
            </select>
          </div>

          {/* REGION */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Asal Film</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="px-4 py-2 text-white border rounded-lg bg-surface border-grey focus:ring-2 focus:ring-primary"
            >
              <option value="Nasional">Nasional</option>
              <option value="Internasional">Internasional</option>
            </select>
          </div>

          {/* POSTER */}
          <div className="flex flex-col gap-3 p-4 border rounded-lg border-grey bg-surface">
            <label className="text-sm font-medium">Poster Film (via MovieDB)</label>

            <p className="text-xs text-grey">
              1. Cari film di{" "}
              <a
                href="https://www.themoviedb.org/search?query=&language=id-ID"
                target="_blank"
                rel="noreferrer"
                className="underline text-primary"
              >
                MovieDB
              </a>{" "}
              <br />
              2. Ambil ID film dari URL
              <br />
              3. Masukkan ID di bawah lalu klik <b>Cek Poster</b>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <input
                type="number"
                placeholder="Masukkan ID Film"
                value={idMovie}
                onChange={(e) => setIdMovie(e.target.value)}
                className="px-4 py-2 text-white border rounded-lg bg-background border-grey focus:ring-2 focus:ring-primary"
              />

              <button
                disabled={loadImage}
                onClick={handleImage}
                className="px-4 py-2 text-sm font-medium text-white transition rounded-lg bg-primary hover:bg-primary/90"
              >
                Cek Poster
              </button>
            </div>

            {loadImage && <LoadingEffect />}
            {poster && (
              <div className="flex items-center gap-4 mt-2">
                <img src={poster} alt="poster" className="object-cover w-20 rounded-md" />
                <span className="text-xs text-green-400">Poster berhasil ditemukan</span>
              </div>
            )}
          </div>

          {/* DESKRIPSI */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Deskripsi</label>
            <div className="overflow-hidden text-black bg-white rounded-lg">
              <ReactQuill
                theme="snow"
                value={text}
                onChange={setText}
                style={{ minHeight: "200px" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Masukkan API Key"
              className="px-4 py-2 text-white border rounded-lg bg-surface border-grey focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="
        w-full py-3 mt-4 text-sm font-medium text-white rounded-full 
        bg-primary transition-all duration-300
        hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30
        active:scale-95
      "
          >
            {isLoading ? "Menyimpan..." : "Simpan Film"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
