import React from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import AddHogForm from "./AddHogForm";

import defaultHogs from "../porkers_data";

function App() {

	const [hogs, setHogs] = React.useState(defaultHogs)

	const addHog = (hog) => {
		setHogs([
			...hogs,
			hog
		])
	}

	return (
		<div className="App">
			<Nav />
			<AddHogForm submitHog={addHog}/>
			<HogsContainer hogs={hogs}/>
		</div>
	);
}

export default App;
