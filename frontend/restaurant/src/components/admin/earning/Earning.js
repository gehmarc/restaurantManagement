import React, { useLayoutEffect, useState } from 'react'
import './Earning.css'
import { AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai'
import { LuEdit2 } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import { PieChart } from 'react-minimal-pie-chart';

const Earning = () => {
    const [foodModal, setFoodModal] = useState(false)
    const [foods, setFoods] = useState([])
    const [deleteModal, setDeleteModal] = useState(false)
    const [currentDeleteFood, setCurrentDeleteFood] = useState(null)
    const [modalFood, setModalFood] = useState({})

    const navigate = useNavigate()

    useLayoutEffect(() => {
      fetchFoods()
    }, [])

    const fetchFoods = async() => {

    }
    const toggleDeleteModal = (food) => {
        setDeleteModal(!deleteModal)
        setCurrentDeleteFood(food);
    }

    const toggleFoodModal = (food) => {
        setFoodModal(true)
        setModalFood(food)
    }
  return (
    <div className='foodManage'>
        <div className='container'>
            <div className='dashboard_title'>Statistics and Analytics/Inventory</div>
            <div className='add_food_btn_wrapper'>
            </div>
            <Today />
            <YesterDay />
            <PastWeek />
            <LastMonth />
        </div>
    </div>
  )
}

export default Earning

const Today = () => {
    const [showContent, setShowContent] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='earning_sale'>
            <div onClick={() => setShowContent(!showContent)} className='earning_timeline'>
                <div>Today's Sales</div>
                <div><BsChevronDown /></div>
            </div>
            <div className={`earning_stats ${showContent ? 'display_earning_DropDown': ''}`}>
                <div className='earning_stat_content'>
                    <div className='figures'>
                        <h3>Total Sales: <span>500</span></h3>
                        <div><span>Orders: </span><span>58</span></div>
                        <div><span>Reservations: </span><span>29</span></div>
                        <div><span>online users: </span><span>90</span></div>
                    </div>
                    <div className='chart'>
                        <PieChart
                            data={[
                                { title: 'orders', value: 58, color: '#E38627' },
                                { title: 'reservation', value: 29, color: '#C13C37' },
                                { title: 'others', value: 20, color: '#6A2135' },
                            ]}
                        />
                    </div>
                </div>
                <div className='earning_total_amount'>Total: 780.000</div>
            </div>
        </div>
    )
}
const YesterDay = () => {
    const [showContent, setShowContent] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='earning_sale'>
            <div onClick={() => setShowContent(!showContent)} className='earning_timeline'>
                <div>yersterdays's Sales</div>
                <div><BsChevronDown /></div>
            </div>
            <div className={`earning_stats ${showContent ? 'display_earning_DropDown': ''}`}>
                Today you sold for 750,000
            </div>
        </div>
    )
}
const PastWeek = () => {
    const [showContent, setShowContent] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='earning_sale'>
            <div onClick={() => setShowContent(!showContent)} className='earning_timeline'>
                <div>Past week's Sales</div>
                <div><BsChevronDown /></div>
            </div>
            <div className={`earning_stats ${showContent ? 'display_earning_DropDown': ''}`}>
                Today you sold for 750,000
            </div>
        </div>
    )
}
const LastMonth = () => {
    const [showContent, setShowContent] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='earning_sale'>
            <div onClick={() => setShowContent(!showContent)} className='earning_timeline'>
                <div>Past Month's Sales</div>
                <div><BsChevronDown /></div>
            </div>
            <div className={`earning_stats ${showContent ? 'display_earning_DropDown': ''}`}>
                Today you sold for 750,000
            </div>
        </div>
    )
}