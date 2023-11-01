import BarchartBox from '../../components/BarchartBox/BarchartBox'
import Chartbox from '../../components/Chartbox/Chartbox'
import PieChartBox from '../../components/PieChartBox/PieChartBox'
import TopBox from '../../components/Topbox/TopBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
        <div className="box box1">
          <TopBox/>
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser} /></div>
        <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
        <div className="box box4"><PieChartBox /></div>
        <div className="box box5"><Chartbox {...chartBoxConversion}/></div>
        <div className="box box6"><Chartbox {...chartBoxRevenue} /></div>
        <div className="box box7">box7</div>
        <div className="box box8"><BarchartBox {...barChartBoxVisit} /></div>
        <div className="box box9"><BarchartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home