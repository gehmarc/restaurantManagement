import React, { useState } from 'react'
import './Manager.css'
import { AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai'
import { LuEdit2 } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import FoodOrderModal from './modals/FoodOrderModal'

const ManageOrder = () => {
    const [foodModal, setFoodModal] = useState(false)
    const navigate = useNavigate()

    const removeModal = () => {
        setFoodModal(!foodModal)
    }

  return (
    <div className='foodManage'>
        {
            foodModal && <FoodOrderModal handleRemoveModal = {removeModal} />
        }
        <div className='container'>
            <div className='dashboard_title'>All Available Orders</div>
            <div className='add_food_btn_wrapper'>
                <div className='add_food_btn' onClick={() =>navigate('/foods/create-order')}>Add Order Directly</div>
            </div>
            <div className='dashboard_table_wrapper'>
                <table className='dashboard_table'>
                        <tr>
                            <th>Bill No</th>
                            <th>Client</th>
                            <th>Date Time</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Paid Status</th>
                            <th>Action</th>
                        </tr>
                        <tr data-tooltip="Tooltip help here!" data-flow="right" draggable onDoubleClick={()=> setFoodModal(true)}>
                            <td >34</td>
                            <td >GEH Mark</td>
                            <td >23-04-2023:04:30PM</td>
                            <td >XAF 1200</td>
                            {/* <td >5</td> */}
                            <td className='center_tableData'><span  className='table_item_available'>5</span></td>
                            <td><span  className='table_item_available table_item_close'>paid</span></td>
                            <td>
                                <div className='action_btn_wrapper'>
                                    <span className='action_btn delete_action_btn'><AiOutlineDelete /></span>
                                    <span className='action_btn'><LuEdit2 /></span>
                                </div>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ManageOrder
