import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './sidebar'
import { Header } from './header'
export function AppLayout() {
  const { pathname } = useLocation()
  return (
    <div className="workspace-shell flex h-dvh overflow-hidden">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header />
        <main className="workspace-main flex-1 overflow-auto">
          <div key={pathname} className="page-enter mx-auto w-full max-w-7xl"><Outlet /></div>
        </main>
      </div>
    </div>
  )
}
