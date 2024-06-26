// React
import React, { useEffect } from 'react';

// Components
import Menu from './Components/Menu';
import Notification from './Components/Notification';

// Pages
import { Routes, Route } from 'react-router-dom';
import Timer from './Pages/Timer';
import Stopwatch from './Pages/Stopwatch';
import Statistics from './Pages/Statistics';
import Login from './Pages/Login';
import About from './Pages/About';
import CreateAccount from './Pages/CreateAccount';

// redux
import { useDispatch } from 'react-redux';
import { initializeUser } from './reducers/userReducer';
import { AppDispatch } from './store';

// debug
// import Print from './Print';

const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(initializeUser());
	}, [dispatch]);

	return (
		<div className="flex flex-col h-screen">
			<Menu />
			<div className="flex-grow">
				<div className="max-w-4xl mx-auto p-4">
					<Notification />
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/timer" element={<Timer />} />
						<Route path="/stopwatch" element={<Stopwatch />} />
						<Route path="/statistics" element={<Statistics />} />
						<Route path="/login" element={<Login />} />
						<Route path="/create-account" element={<CreateAccount />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
