import { Outlet } from 'react-router-dom'
import Dock from './Dock'

export default function Layout() {
	return (
		<>
			<Outlet />
			<Dock />
		</>
	)
}
