import React from "react";
import { Col, Row,Image } from "react-bootstrap";
import Link from "next/link";


const MissionCard = (props) => {
	return (
		<Row className={`${props.shadow?"shadow":""} m-1 border  rounded p-1`} style={{minHeight:"145px"}}>
			<Col
				xl={3}
				lg={3}
				md={3}
				sm={3}
				xs={3}
				className='justify-content-center d-flex align-items-center'>
				<Image
					className='sm-icon  w-100 '
					src={props.missioncard.icon}
					alt={props.missioncard.logodes}
				/>
			</Col>
			<Col xl={9} lg={9} md={9} sm={9} xs={9}>
				<label className='primary-title my-orange'>
					{props.missioncard.header}
				</label>
				<p className='overflow-hidden sm-font  mysecondary-text primary-font pl-0 container'>
					{props.missioncard.des}
				</p>
				{props.missioncard.url?<Link href={props.missioncard.url} passHref>
					<a className="text-decoration-none">
					<small className='cursor mysecondary-text'>Read More</small>
					</a>
					
				</Link>:""}
				
			</Col>
		</Row>
	);
};

export default MissionCard;
