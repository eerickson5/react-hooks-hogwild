import React from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import AddHogForm from "./AddHogForm";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<AddHogForm/>
			<HogsContainer hogs={hogs}/>
		</div>
	);
}

export default App;
