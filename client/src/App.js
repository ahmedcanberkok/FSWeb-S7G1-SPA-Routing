import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import FilmListesi from './Filmler/FilmListesi';
import Film from './Filmler/Film';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          // Bu kısmı log statementlarıyla çalışın
          console.log('API yaniti: ',response);
          // ve burdan gelen response'u 'movieList' e aktarın
          const movieList = response.data ;
          setMovieList (movieList); // Burada movieList state'ine veriyi aktarıyoruz
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <Router>
    <div>
      <KaydedilenlerListesi list={[ {saved}]} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies= {movieList} />
        </Route>
        <Route path = "/filmler/:id">
          <Film movies={movieList}/> 
        </Route>
      {/* <div>Bu Div'i kendi Routelarınızla değiştirin</div> */}
      </Switch>
    </div>
    </Router> 
     );
}
