import axios from "axios";
import { useState } from "react";

const App = () => {

  const movieSchema = {
    movieName: "",
    ProducerName: "",
    DirectorName: "",
    accterName: "",
    acctressName: "",
    MovieType: "",
    movieLanguage: "",
    RealingDate: "",
    createdBy: "",
    updatedBy: ""
  };

  const [data, setData] = useState(movieSchema);
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( "http://localhost:5000/api/movie/create", data );

      alert(res.data.msg);
      setData(movieSchema); 
      fetchMovies(); 
    } catch (error) {
      console.log(error);
    }
  };

  // Get 
  const fetchMovies = async () => {
    const res = await axios.get("http://localhost:5000/api/movie/get");
    setMovies(res.data.data);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Movie Form</h1>

      <form onSubmit={handleSubmit} style={{textAlign: "center"}} >

        <input type="text" name="movieName" placeholder="Movie Name"  value={data.movieName} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="ProducerName" placeholder="Producer Name" value={data.ProducerName} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="DirectorName" placeholder="Director Name"   value={data.DirectorName} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="accterName" placeholder="Actor Name" value={data.accterName} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="acctressName" placeholder="Actress Name" value={data.acctressName} onChange={handleChange} required />
        <br /><br />

        <input type="text" name="MovieType" placeholder="Movie Type (Action, Comedy...)"  value={data.MovieType} onChange={handleChange} />
        <br /><br />

        <input type="text" name="movieLanguage" placeholder="Movie Language"  value={data.movieLanguage} onChange={handleChange} />
        <br /><br />

        <input type="date" name="RealingDate"  value={data.RealingDate} onChange={handleChange} />
        <br /><br />

        <input type="text" name="createdBy" placeholder="Created By" value={data.createdBy} onChange={handleChange} />
        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <hr />

      <div style={{ padding: "20px" }}>
        <button onClick={fetchMovies}>Fetch Movies</button>

        {movies.map((movie) => (
          <div key={movie._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{movie.movieName}</h3>
            <p>Director: {movie.DirectorName}</p>
            <p>Actor: {movie.accterName}</p>
            <p>Status: {movie.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;