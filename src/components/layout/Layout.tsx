import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

export interface CardItemType{
  id:number;
  category:string
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
}

interface StateType{
  cardItems:CardItemType[]
  setCardItems:React.Dispatch<React.SetStateAction<CardItemType[]>>
 }
function Layout({cardItems,setCardItems}:StateType) {
  return (
    <div>
        <Header cardItems={cardItems} setCardItems={setCardItems} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
