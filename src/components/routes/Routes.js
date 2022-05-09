import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ROUTES} from './index';
import {Login} from '../login/Login';
import {SignUp} from '../signUp/SignUp';
import {Home} from '../home/Home';

export function AppRoutes () {
	return (
		<HashRouter hashType='hashbang'>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home/>}/>
				<Route path={ROUTES.LOGIN} element={<Login/>}/>
				<Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
			</Routes>
		</HashRouter>
	)
}