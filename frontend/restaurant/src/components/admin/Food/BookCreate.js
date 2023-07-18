import React, { useEffect, useState } from 'react'
// import LanguageSelect from '../../Addons/LanguageSelect'
import { VscChromeClose } from 'react-icons/vsc'

// import { getRequest, patchRequest, postFetchRequest, postRequest } from '../../../Resquest'
// import CategorySelect from '../../Addons/CategorySelect'
import { useLocation, useNavigate } from 'react-router-dom'
import { CiImageOn } from 'react-icons/ci'
import { BsCardImage, BsFileEarmarkMedicalFill } from 'react-icons/bs'

const BookCreate = ({ user }) => {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [promoCode, setPromoCode] = useState('');
	const [description, setDescription] = useState('');
	const [language, setLanguage] = useState('');
	const [coverPhoto, setCoverPhoto] = useState();
	const [bookFile, setBookFile] = useState('');
	const [serverCategories, setServerCategories] = useState([]);
	const [clientTags, setClientTags] = useState([]);
	const [tags, setTags] = useState([]);
	const [tagString, setTagString] = useState('');
	const [allGood, setAllGood] = useState(false)

	const [bookManager, setBookManager] = useState('');

	const location = useLocation()

	const navigate = useNavigate()

	useEffect(() => {
		if (location.state) {
			setTitle(location.state.name)
			setCategory(location.state.categories)
			setPrice(location.state.price)
			setDescription(location.state.description)
			// setTags(location.state.tags)
			setPrice(location.state.price)
			// setDiscount(location.state.discount)
			// setPromoCode(location.state.promoCode)
		}

		return () => {
			requestCategories();
		};
	}, []);

	const requestCategories = async () => {
		// const response = await getRequest('/public/list-category/')
		// response?.data
		// 	&& setServerCategories(response?.data?.results)
			
	}



	const submitForm = async (e) => {
		e.preventDefault()
		// const formData = new FormData()
		// formData.append("categories", category)
		// formData.append("name", title)
		// formData.append("language", language)
		// formData.append("author", user?.user?.first_name,)
		// formData.append("description", description)
		// formData.append("audio_video", "")
		// formData.append("price", price)
		// formData.append("visibility", "V")
		// formData.append("tags_list", tags.slice(0,5))
		// coverPhoto && formData.append("cover", coverPhoto, coverPhoto.name)
		// // bookFile && formData.append("doc", bookFile, bookFile.name)
		// const res = location.state?.name 
		// ? await patchRequest()
		// : await postFetchRequest('https://hooyia.herokuapp.com/api/v1/seller/ebook/owner-ebook/', formData)
		
		// res.in_review_mode ? navigate('/') :
		// console.log(res)
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

	const handleFileInput = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setCoverPhoto(file)
			// setSelectedImage(URL.createObjectURL(file));
		}
	};

	return (
		<div className='seller_create_book'>
			<div className='container flex_create_book'>
				<div className='create_book_form'>
					<div className='book_title container'>{location.state? `Edit ${location.state.name}` : 'Create A New Book'}</div>
					<div className='create_bookWrapper'>
						<form onSubmit={submitForm}>
							<div className='seller_profile_wrapper'>
								<div className='profile'>
									<h4 className='seller_title'>Title</h4>
									<input disabled={title.length >= 50 ? true : false} onBlur={validateTitle} onFocus={() => setBookManager('name')} className='input_seller_text' autoFocus placeholder='Name Of Book*' value={title} onChange={(e) => setTitle(e.target.value)} />
									<div className='validate_input'>
										<div className='validateStrings'>
											<span className={`invalid`}>{title.length}/50 Characters</span>
											<span className=''>Maximum 50</span>
										</div>
									</div>
								</div>
							</div>
							<div className='seller_profile_wrapper'>
								<div className='profile'>
									<h4 className='seller_title'>Language</h4>
									{/* <LanguageSelect handleLanguageSelect={languageSelect} /> */}
								</div>
							</div>
							<div className='seller_profile_wrapper'>
								<div className='profile'>
									<h4 className='seller_title'>Category</h4>
									{/* { serverCategories.length> 1 && <CategorySelect handleCategorySelect={selectCategory} categoryList={serverCategories} /> } */}
								</div>
							</div>
							<div className='seller_profile_wrapper profile_picture'>
								<div className='profile'>
									<h4 className='seller_title'>Book Cover</h4>
									<div className='image_picker'>
										<input
											className='input_seller_text'
											type='file' accept='image/jpeg, image/png, image/gif'
											onChange={e => handleFileInput(e)}
										/>
										<div className='imagePicker_decoy'>
										{
											coverPhoto
											? <img src={URL.createObjectURL(coverPhoto)}/>
											: <BsCardImage />
										}
											
										</div>
									</div>
								</div>
							</div>
							<div className='seller_profile_wrapper profile_picture'>
								<div className='profile'>
									<h4 className='seller_title'>Book File (pdf, odf)*</h4>
									<div className='image_picker'>
										<input
											className='input_seller_text'
											type='file' accept='image/jpeg, image/png, image/gif'
											onChange={e => setBookFile(e.target.value)}
										/>
										<div className='imagePicker_decoy'>
											<BsFileEarmarkMedicalFill />
										</div>
									</div>
								</div>
							</div>
							<div className='seller_profile_wrapper'>
								<div className='profile'>
									<h4 className='seller_title'>Tags</h4>
									<input disabled={tags.length >= 5 ? true : false } className='input_seller_text' onFocus={() => setBookManager('tag')} onKeyPress={(e) => e.key === 'Enter' && controlTagList(e)} placeholder='Tags*' value={tagString} onChange={e => setTagString(e.target.value)} />
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
							<div className='seller_profile_wrapper'>
								<div className='profile'>
									<h4 className='seller_title'>Price</h4>
									<input className='input_seller_text' onFocus={() => setBookManager('price')} value={price} onChange={e => setPrice(e.target.value)} />
									<span className='float_input'>XAF</span>
									<div className='validate_input'>
										<div className='validateStrings'>
											{/* <span className={`invalid`}>Minimun 500</span> */}
											<span className=''>Maximum 1,000,000</span>
										</div>
									</div>
								</div>
							</div>
						
							<div className='seller_profile_wrapper book_forminput_textarea'>
								<div className='profile'>
									<h4 className='seller_title'>Book Description</h4>
									<textarea className='book_text_area' placeholder='Description of the book' value={description} onChange={e => setDescription(e.target.value)}>Culpa in ad anim consequat enim dolore occaecat veniam nostrud. Id et mollit nisi magna dolore aute exercitation nulla magna. Et consequat irure et excepteur et nisi do culpa deserunt mollit non excepteur id anim. Qui elit anim enim non nisi consectetur minim nulla duis tempor aute. Minim amet est est cillum ut in sit excepteur cupidatat esse ea ex.</textarea>
									<span className='book_description_count mobile'>**250 - 50000 characters</span>
									<span className='book_description_count desktop'>**should be at least 250 characters {description.length}/250</span>
								</div>
							</div>
							<div className='button_payment_request'>
								<button className='profile_control_btn create_book_button'>
									<span>{location.state?.name? "Submit" : "Create"}</span>
								</button>
							</div>
						</form>
					</div>

				</div>
				<div className='create_book_tooltip create_book_form'>
					<div>
						<div className='book_title container'>Book Create Manager</div>
						<h3 className='title book_manager_title'>Status</h3>
						<div className={`book_create_status ${!allGood ? 'publish_status_not_active' : ''}`}>Publish</div>
						<div className='status_live'>
							<p>Current Status</p>
							<span className='top_selling_tag'>Draft</span>
						</div>
						<h3 className='title book_manager_title'>Preiew</h3>
						<div className='book_create_status preview_status'>Preview</div>
						<div className='tooltip_aside'>
							{
								bookManager === 'name'
								?
								<ToolTipBookCreate />
								: bookManager === 'tag'
								?
								<ToolTipBookCreateTag />
								: bookManager === 'price'
								?
								<ToolTipBookCreatePrice />
								:
								<></>
							}
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default BookCreate


const ToolTipBookCreate = () => {
	return (
		<>
			<div className='input_detail_for_input'>
				<div className='aside_tooltip_wrapper'>
					<div className='detail_head'>Title of Book</div>
					<div className='tooltip_content'>
						This is the what users will see when browsing for the book. It should be the title of the book or a good short name of paper
					</div>
				</div>
			</div>
		</>
	)
}
const ToolTipBookCreateTag = () => {
	return (
		<>
			<div className='input_detail_for_input'>
				<div className='aside_tooltip_wrapper'>
					<div className='detail_head'>Book Tags</div>
					<div className='tooltip_content'>
						This list the posible tag that a book may have. Tags include comic, drama, trailer etc... <br />
						Tags should not have space, that is a tag is a single word
					</div>
				</div>
			</div>
		</>
	)
}
const ToolTipBookCreatePrice = () => {
	return (
		<>
			<div className='input_detail_for_input'>
				<div className='aside_tooltip_wrapper'>
					<div className='detail_head'>Price of the book</div>
					<div className='tooltip_content'>
						price of book may be set in USD OR in FCFA
					</div>
				</div>
			</div>
		</>
	)
}
