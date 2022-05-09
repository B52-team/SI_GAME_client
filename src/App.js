import React from 'react';
import {AppRoutes} from './components/routes/Routes';
import {GlobalStyles} from './components/common/globalStyled';

const App = () => {
	return (
		<div className="App">
			<GlobalStyles/>
			<AppRoutes/>
		</div>
	);
}

export default App;
