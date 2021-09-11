import axios from "axios";
import React,{useState} from "react";
import { Card, Row, Col, Form, Button, Image, Modal } from "react-bootstrap";
import {ErrorHandler} from "../global/index"


function FeedHunger() {


const [input,setInput]=useState({first_name:"",last_name:"",occasion:"",phone_number:""});
const [statusCode,setStatusCode]=useState();


const inputHandler=(event)=>{
	event.preventDefault();
	setInput((input)=>({
		...input,
		[event.target.name]:event.target.value,
	}))
}

const submitHandler=async(event)=>{
	event.preventDefault()
	try{
		const req=await axios.post("http://localhost:1337/fooddonations",input);
		setStatusCode(req.status)
		console.log(req)
		setInput({first_name:"",last_name:"",occasion:"",phone_number:""})
	}catch(err){
		console.log(err)
	}
	
}




	return (
		<div>
				<ErrorHandler status={statusCode}/>
			<section className='overflow-hidden'>
				<Card>
					<Card.Img src='images/voklaivojanCover.png' />
					<Card.ImgOverlay className='banner-overlay d-flex justify-content-center align-items-center'>
						<p className='text-white '>Working for the Unseen side of socity</p>
					</Card.ImgOverlay>
				</Card>
			</section>
			<section className='container section-mgap section-mgap section-pbgap'>
				<p className='text-center h2 m-0 my-orange'>
					Care for one who don't have anyone
				</p>
				<p className='text-center h4 myprimary-text'>
					Be the reason for someone smiles
				</p>
				<p className='font-sm  text-center  mysecondary-text p1'>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</p>
				<Row>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100" src='images/oldman.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100 w-100" src='images/voklaivojanCover.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} sm={12} md={4}>
						<Card className="eventimgbg">
							<Card.Img className="h-100" src='images/vlvcover.png' />
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
			</section>

			<section className='my-primary section-mgap section-pgap section-pbgap'>
				<div className='container'>
					<p className='myprimary-text h2 text-left mb-4'>
						Contat us to Donate
					</p>

					<Row>
						<Col xs={6} sm={6}>
							<Form onSubmit={submitHandler}>
								<Form.Row>
									<Form.Group as={Col} controlId='firstname'>
										<Form.Label>First Name</Form.Label>
										<Form.Control type='text' name="first_name" value={input.first_name} onChange={inputHandler} placeholder='First Name'  required/>
									</Form.Group>
									<Form.Group as={Col} controlId='lastname'>
										<Form.Label>Last Name</Form.Label>
										<Form.Control type='text' name="last_name" value={input.last_name} onChange={inputHandler} placeholder='Last Name' />
									</Form.Group>
								</Form.Row>

								<Form.Group controlId='firstname'>
									<Form.Label>Ocassion</Form.Label>
									<Form.Control type='text' name="occasion" value={input.ocassion} onChange={inputHandler}  placeholder='Ocassion' />
								</Form.Group>

								<Form.Group controlId='phonenumber'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type='number' name="phone_number" placeholder='Phone Number' value={input.phone_number} onChange={inputHandler}  required />
								</Form.Group>

								<Button variant='primary' type='submit'>
									Contact Us
								</Button>
							</Form>
						</Col>
						<Col className='d-flex justify-content-center align-items-center'>
							<Image src='images/icon/fooddonation.png' />
						</Col>
					</Row>
			
				</div>
			</section>

			<section></section>
		</div>
	);
}

export default FeedHunger;