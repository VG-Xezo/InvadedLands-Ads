import React, { useState, useEffect } from 'react'
import Select from "./components/Select"
import Ad from "./components/Ad"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {

	const [options, setOptions] = useState([])
	const [currentAd, setCurrentAd] = useState("")

	let ads = [
		{
			name: "Kit Daily",
			ad: "(!) Selling kit daily for {your price} (!)"
		},
		{
			name: "Kit Vip",
			ad: "(!) Selling kit Vip for {your price} (!)"
		},
		{
			name: "Kit MVP",
			ad: "(!) Selling kit MVP for {your price} (!)"
		},
		{
			name: "Kit Lord",
			ad: "(!) Selling kit Lord for {your price} (!)"
		},
		{
			name: "Kit God",
			ad: "(!) Selling kit God for {your price} (!)"
		},
		{
			name: "Kit Overlord",
			ad: "(!) Selling kit Overlord for {your price} (!)"
		},
	]

	useEffect(() => {
		let savedAds = [];
		for (let i in localStorage) {
			if (localStorage.hasOwnProperty(i)) {
				savedAds.push(JSON.parse(localStorage[i]));
			}
		}
		for (let i in savedAds) {
			ads.push(savedAds[i])
		}
		setOptions(ads)
	}, [])

	function setAd(e) {
		setCurrentAd(e.target.value)
	}

	const appStyles = {
		margin: "3rem", 
	}

	return (
		<div style={appStyles}>
			<Header />
			<Select options={options} onchange={setAd}></Select>
			<Ad ad={currentAd}></Ad>
			<Form />
		</div>
	)
}

export default App
