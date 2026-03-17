import {useState} from "react";

function ColourPicker(){

	const [colour, setColour] = useState("#FFFFFF");

	function handleColourChange(_e: React.ChangeEvent<HTMLInputElement>){
		setColour(_e.target.value);
	}

	return(
		<>
			<div className="flex flex-col items-center">
				<h1>Colour picker</h1>
				<div className="border-2 border-black" style={{backgroundColor: colour}}>
					<p>Selected colour: {colour}</p>
				</div>
				<label>Select a colour</label>
				<input type="color" value={colour} onChange={handleColourChange}/>
				<button></button>
			</div>
		</>
	);
}

export default ColourPicker