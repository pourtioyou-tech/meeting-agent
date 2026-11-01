import { NavLink } from 'react-router-dom'
import {
  CalendarDays,
  FileText,
  MessageSquare,
  BookOpen,
  Activity,
  GitBranch,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/stores/ui-store'
import { APP_TITLE } from '@/lib/constants'

const navItems = [
  { to: '/', label: '会议管理', icon: CalendarDays },
  { to: '/summaries', label: '会议纪要', icon: FileText },
  { to: '/decisions', label: '决策库', icon: GitBranch },
  { to: '/chat', label: 'AI 对话', icon: MessageSquare },
  { to: '/knowledge', label: '知识库', icon: BookOpen },
  { to: '/agent-runs', label: 'Agent 监控', icon: Activity },
]

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useUIStore()

  return (
    <aside
      className={cn(
        'workspace-sidebar flex shrink-0 flex-col border-r',
        sidebarCollapsed ? 'w-[72px]' : 'w-[228px]',
      )}
    >
      {/* Logo 区域 */}
      <div className="sidebar-brand flex h-24 items-center gap-3 px-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-foreground text-background text-xs font-semibold">
          AI
        </div>
        {!sidebarCollapsed && <div className="brand-label"><span className="block text-sm font-semibold tracking-wide">{APP_TITLE}</span><span className="mt-1 block text-[11px] text-muted-foreground">会议工作台</span></div>}
      </div>

      {/* 导航菜单 */}
      <nav aria-label="主导航" className="flex-1 space-y-1.5 px-3 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              aria-label={item.label}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'sidebar-link flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium',
                  isActive
                    ? 'nav-selected'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )
              }
            >
              <Icon strokeWidth={1.7} className="h-[18px] w-[18px] shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          )
        })}
      </nav>

      {/* 折叠按钮 */}
      <div className="border-t p-2">
        <button
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? "展开侧栏" : "收起侧栏"}
          aria-expanded={!sidebarCollapsed}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          {sidebarCollapsed ? (
            <PanelLeft className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
          {!sidebarCollapsed && <span>收起侧栏</span>}
        </button>
      </div>
    </aside>
  )
}
