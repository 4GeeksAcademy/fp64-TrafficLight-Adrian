import React, { useState,useEffect } from "react";
import './home.css';

const Home = () => {
	const [currentLight, setCurrentLight] = useState('red');
	const setRed = () => {
		setCurrentLight('red');
		setTimeout(() => {
			setGreen();
		},10000);
	}
	const setYellow = () => {
		setCurrentLight('yellow');
		setTimeout(() => {
			setRed();
		},2000);
	}
	const setGreen = () => {
		setCurrentLight('green');
		setTimeout(() => {
			setYellow();
		},8000);
	}
  useEffect(() => {setRed()},[])
	return (
		<div>
			<div className="traffic-top m-auto"></div>
			<div className="container">
				<div className={'red light ' + (currentLight === 'red' ? 'active' : '')}></div>
				<div className={'yellow light ' + (currentLight === 'yellow' ? 'active' : '')}></div>
				<div className={'green light ' + (currentLight === 'green' ? 'active' : '')}></div>
			</div>
		</div>
	);
};

export default Home;
