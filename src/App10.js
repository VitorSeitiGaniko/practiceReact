import React from "react";
import ContextGlobal from "./components/ContextGlobal";
import ContextGlobalReplace from "./components/ContextGlobalReplace";
import ContextGlobalRequest from "./components/ContextGlobalRequest";
import { GlobalContextRequest, GlobalStorage } from "./contexts/GlobalContext";

const App10 = () => {
	return (
		<div>
			<GlobalStorage>
				<ContextGlobal />
				<ContextGlobalReplace />
			</GlobalStorage>
			
			<GlobalContextRequest>
				<ContextGlobalRequest />
			</GlobalContextRequest>
		</div>
	);
};

export default App10;
