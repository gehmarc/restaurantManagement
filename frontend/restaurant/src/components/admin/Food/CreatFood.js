import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsCardImage, BsFileEarmarkMedicalFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import './FoodForm.css'
import { useNavigate } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import { postRequest } from '../../../Request';
import axios from 'axios';

const CreatFood = () => {
	const [clientTags, setClientTags] = useState([]);
	const [value, onChange] = useState('10:00');
	const [img, setImg] = useState(null)
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [foodImage, setFoodImage] = useState();
	const [isAvailable, setIsAvailable] = useState(false)
	const [time, setTime] = useState('')
	
	const [serverCategories, setServerCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const [tagString, setTagString] = useState('');
    const [foodManager, setFoodManager] = useState('');
	const [allGood, setAllGood] = useState(true)

	const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
		sendData()
    }

	const sendData = async() => {
		try{
			const formData = new FormData()
			formData.append("name", title)
			formData.append("price", parseInt(price))
			formData.append("description", description)
			formData.append("category", category)
			formData.append("available", isAvailable)
			formData.append("image", img)
			
			console.log(img);
			const res = await axios.post('http://localhost:8000/api/v1/restaurant/foods/', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
			console.log(res);
			if (res.status === 201) {
				window.location.reload()
			}
			else {
				alert("something went wrong, try again")
			}
			
		}
		catch (err){
			console.warn(err)
		}
	}

    const validateTitle = (e) => {
		// title.length > 5
	}
	const controlTagList = (e) => {
		e.preventDefault()
		setTags(tags => [...tags, tagString])
		setTagString('')
	}

	const removeTag = (tag) => {
		let filteredTag = tags.filter(tagItem => tag !== tagItem)
		setTags(filteredTag)
	}
	const importImage = (e) => {
        const file = e.target.files[0];
		setImg(file)
        const reader = new FileReader();
        reader.onload = () => {
            setFoodImage(reader.result)
        }
        reader.readAsDataURL(file);
    }
	const requestGoBack = () => {
		alert("Going back will discard all changes, Are you sure you want to leave?")
		navigate('/foods/manage-food')
	}

  return (
    <div className='foodManage'>
        <div className='container'>
            <div className='dashboard_title'>Add New Food To your Restaurant</div>

            <div className='add_food_btn_wrapper'>
                <div className='add_food_btn' onClick={requestGoBack}>
					<span><BsArrowLeft /></span>
					<span>Back to Foods</span>
				</div>
            </div>
            <div className='dashboard_table_wrapper flex_create_food'>
                <div className='food_form_wrapper create_food_form'>
                	<form onSubmit={submitForm}>
						<div className='food_create_input_wrapper'>
							<div className='profile'>
								<h4 className='restaurant_title'>Name</h4>
								<input disabled={title.length >= 50 ? true : false} onBlur={validateTitle} className='input_restaurant_text' autoFocus placeholder='Name Of food*' value={title} onChange={(e) => setTitle(e.target.value)} />
								<div className='validate_input'>
									<div className='validateStrings'>
										<span className={`invalid`}>{title.length}/50 Characters</span>
										<span className=''>Maximum 50</span>
									</div>
								</div>
							</div>
						</div>

						<div className='food_create_input_wrapper'>
							<div className='profile'>
								<h4 className='restaurant_title'>Price</h4>
								<input className='input_restaurant_text' value={price} onChange={e => setPrice(e.target.value)} />
								<span className='float_input'>XAF</span>
								<div className='validate_input'>
									<div className='validateStrings'>
										<span className=''>Maximum 1,000,000</span>
									</div>
								</div>
							</div>
						</div>

						<div className='food_create_input_wrapper profile_picture'>
							<div className='profile'>
								<h4 className='restaurant_title'>Food Cover</h4>
								<div className='image_picker'>
									<input
										className='input_restaurant_text'
										type='file' accept='image/jpeg, image/png, image/gif'
										onChange={importImage}
										alt='food'
									/>
									<div className='imagePicker_decoy'>
									{
										foodImage
										? <img src={foodImage} alt='food' />
										: <BsCardImage />
									}
										
									</div>
								</div>
							</div>
						</div>

						<div className='food_create_flex_double'>
							<div className='food_create_input_wrapper'>
								<div className='profile'>
									<h4 className='restaurant_title'>Available</h4>
									<input type='select' className='input_restaurant_text' value={isAvailable} onChange={e => setIsAvailable(e.target.value)} />
									<div className='validate_input'>
										<div className='validateStrings'>
											{/* <span className={`invalid`}>Minimun 500</span> */}
											<span className=''>Maximum 1,000,000</span>
										</div>
									</div>
								</div>
							</div>

							<div className='food_create_input_wrapper'>
								<div className='profile'>
									<h4 className='restaurant_title'>Close</h4>
										<input type='time' className='input_restaurant_text' value={time} onChange={e => setTime(e.target.value)} />
									<div className='validate_input'>
										<div className='validateStrings'>
											<span className=''>Above now</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						

						<div className='food_create_input_wrapper'>
							<div className='profile'>
								<h4 className='restaurant_title'>Category</h4>
								<input className='input_restaurant_text' value={category} onChange={e => setCategory(e.target.value)} />
								<div className='validate_input'>
									<div className='validateStrings'>
										<span className=''>Maximum 1,000,000</span>
									</div>
								</div>
							</div>
						</div>

						<div className='food_create_input_wrapper'>
							<div className='profile'>
								<h4 className='restaurant_title'>Tags</h4>
								<input disabled={tags.length >= 5 ? true : false } className='input_restaurant_text' onKeyPress={(e) => e.key === 'Enter' && controlTagList(e)} placeholder='Tags*' value={tagString} onChange={e => setTagString(e.target.value)} />
								<div className='validate_input'>
									<div className='validateStrings'>
										<span className={`invalid`}>{tags.length} / 5</span>
										<span className=''>Maximum 5</span>
									</div>
								</div>
							</div>

							<div className='profile_tags'>
								{
									tags.map( tag => (
										<div className='tag'>
											<span className='tag_name'>{tag}</span>
											<span onClick={() => removeTag(tag)} className='tag_remove_btn'><VscChromeClose /></span>
										</div>
									))
								}
							</div>
						</div>
						<div className='food_create_input_wrapper food_forminput_textarea'>
							<div className='profile'>
								<h4 className='restaurant_title'>Food Description</h4>
								<textarea className='food_text_area' placeholder='Description of the food' value={description} onChange={e => setDescription(e.target.value)}>Culpa in ad anim consequat enim dolore occaecat veniam nostrud. Id et mollit nisi magna dolore aute exercitation nulla magna. Et consequat irure et excepteur et nisi do culpa deserunt mollit non excepteur id anim. Qui elit anim enim non nisi consectetur minim nulla duis tempor aute. Minim amet est est cillum ut in sit excepteur cupidatat esse ea ex.</textarea>
								<span className='food_description_count mobile'>**250 - 50000 characters</span>
								<span className='food_description_count desktop'>**should be at least 250 characters {description.length}/250</span>
							</div>
						</div>
						<div className='button_payment_request'>
							<button className='profile_control_btn create_food_button'>
								<span>Create</span>
							</button>
						</div>
					</form>
                </div>

				
				<div className='create_food_tooltip create_food_form'>
					<div>
						<h3 className='title food_manager_title'>Food Create Manager</h3>
						<div className='food_title container'>Status</div>
						<div className={`food_create_status ${!allGood ? 'publish_status_not_active' : ''}`}>Publish</div>
						<div className='status_live'>
							<p>Current Status</p>
							<span className='top_selling_tag'>Draft</span>
						</div>
						<h3 className='title food_manager_title'>Preiew</h3>
						<div className='food_create_status preview_status'>Preview</div>
					</div>
				</div>
            </div>
        </div>
    </div>
  )
}

export default CreatFood
