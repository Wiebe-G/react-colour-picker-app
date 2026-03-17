import {useState} from "react";

function ColourPicker() {

	const [colour, setColour] = useState("#FFFFFF");

	function handleColourChange(_e: React.ChangeEvent<HTMLInputElement>) {
		setColour(_e.target.value);
	}

	function resetColour(): void {
		setColour("#FFFFFF");
	}

	return (
		<>
			<div className="flex justify-center h-screen m-2">
				<div className="flex flex-col items-center gap-1 border-2 border-gray-800 w-1/2 h-1/2">
					<h1 className="font-bold">Colour picker</h1>
					<div className="flex justify-center items-center border-2 border-black h-1/2 w-2xl" style={{backgroundColor: colour}}>
						<p>Selected colour: {colour}</p>
					</div>
					<label>Select a colour</label>
					<input type="color" value={colour} onChange={handleColourChange}/>
					<button onClick={resetColour}
					        className="btn btn-primary rounded-xl bg-blue-500 text-white my-2 py-2 border-2 border-solid border-black">
						Reset colour
					</button>
				</div>
			</div>
		</>
	);
}

export default ColourPicker