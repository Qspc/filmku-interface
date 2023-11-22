import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAllByDisplayValue } from '@testing-library/react';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    year: 0,
    rank: 0,
    genre: 'Animasi',
    country: 'Nasional',
    description: '',
    image: '',
  });
  const allForm = [
    {
      label: 'Title',
      name: 'title',
      value: form.title,
    },
    {
      label: 'Year',
      name: 'year',
      value: form.year,
    },
    {
      label: 'Rank',
      name: 'rank',
      value: form.rank,
    },
  ];
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE5NDI0YWI2NDUyMWIyYjM1ZTg4Zjg5ZTFhMDI1NCIsInN1YiI6IjYxMWZjZDIyMzg1MjAyMDA1ZDY5NGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MSXf0jW7qL3rHHqgztGG6RXD56CS6SB5dK-Ild91ftw';
  const [poster, setPoster] = useState(''); //show image poster
  const [idMovie, setIdMovie] = useState(0); //id movie from moviedb
  const [text, setText] = useState(''); //text editor for description

  useEffect(() => {
    setForm({
      ...form,
      description: text,
    });
  }, [text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    await axios
      .post('https://filmku-api.vercel.app/api/v1/movies', form, {
        Headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('sukses bos', res);
        navigate('/film');
      })
      .catch((e) => console.log(e));
  };

  const handleImage = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${idMovie}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setPoster(`https://image.tmdb.org/t/p/w500${response.data.poster_path}`);
        setForm({
          ...form,
          image: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
        });
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  };

  return (
    <>
      <ul>
        {allForm.map((data, index) => (
          <li key={index}>
            <label>
              {data.label}:
              <input type={data.name === 'title' ? 'text' : 'number'} name={data.name} value={data.value} onChange={handleChange} />
            </label>
          </li>
        ))}
        <li>
          <label>
            Type movie:
            <select name="genre" value={form.genre} onChange={handleChange}>
              <option value="animasi">Animasi</option>
              <option value="Non Animasi">Non Animasi</option>
            </select>
          </label>
        </li>
        <li>
          <label>
            Region movie:
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="Nasional">Nasional</option>
              <option value="Internasional">Internasional</option>
            </select>
          </label>
        </li>
        <li>
          <label>
            Search poster Image&nbsp;
            <a style={{ color: 'blue' }} target="_blank" rel="noreferrer" href="https://www.themoviedb.org/search?query=&language=id-ID">
              using ID
            </a>
            :
            <input type="number" onChange={(e) => setIdMovie(e.target.value)} value={idMovie} />
            <button style={{ backgroundColor: 'blue', padding: '5px 10px', color: 'white', margin: '0px 5px', fontWeight: 'bold' }} onClick={handleImage}>
              cek poster
            </button>
            <img width={50} src={poster} alt="foto" />
          </label>
        </li>
        <li>
          <label>
            deskripsi:
            <ReactQuill theme="snow" name="description" value={text} onChange={setText} style={{ minHeight: '300px' }} />
          </label>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={handleSubmit}>submit</button>
        </li>
      </ul>
      {/* <div className="text-black">{text}</div>
      <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
    </>
  );
};

export default Form;
