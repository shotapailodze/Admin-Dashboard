import Chartbox from '../../components/Chartbox/Chartbox'
import TopBox from '../../components/Topbox/TopBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
        <div className="box box1">
          <TopBox/>
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser} /></div>
        <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
        <div className="box box4"></div>
        <div className="box box5"><Chartbox {...chartBoxConversion}/></div>
        <div className="box box6"><Chartbox {...chartBoxRevenue} /></div>
        <div className="box box7">box7</div>
        <div className="box box8">box8</div>
        <div className="box box9">box9</div>
    </div>
  )
}

export default Home