import './App.css';
import AnimeCard from './components/AnimeCard';
import AnimeDataModel from './models/AnimeDataModel'
import Navbar from './components/Navbar';
import AnimeService from './service/AnimeService';
import Pagination from './components/Pagination'
import { useState, useEffect } from 'react';

interface CallInfo{
  animeArr: Array<AnimeDataModel>,
  urlList: urlList
}
interface urlList {
  first:'',
  prev:'',
  next:'',
  last:'',
}

function App() {

  let baseUrl : string= 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0';  

  const [animeArr, setArr] = useState<Array<AnimeDataModel>>([]);
  const [urlList, seturlList] = useState<urlList>({first:'',  prev:'',  next:'',  last:'',});  

  useEffect(()=>{          
    cardGenerator(baseUrl)
      }, [])

  const cardGenerator = (url: string) => {
    fetch(url)
              .then(response=>response.json())
              .then((data)=>{
                  setArr(data.data);
                  seturlList(data.links)
              })           
              .catch((error)=>{console.log(error)})
  }
  
  const nextPage = () =>{cardGenerator(urlList.next)}
  const prevPage = () =>{cardGenerator(urlList.prev)}

  return (
    <>
      <Navbar brand='Anime App'></Navbar> 
      <Pagination color='blue' urls={urlList} goNext={nextPage} goPrev={prevPage}></Pagination>
      <div className='container my-4'>
        <AnimeCard color={'secondary'} cardsToMake={animeArr} />
      </div>
      <Pagination color='blue' urls={urlList} goNext={nextPage} goPrev={prevPage}></Pagination>
    </>   
  );
}

export default App;
