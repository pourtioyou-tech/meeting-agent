import { Moon, Sun } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useUIStore } from '@/stores/ui-store'
import { Button } from '@/components/ui/button'
const sections: Record<string, string> = { summaries: '会议纪要', decisions: '决策库', chat: 'AI 对话', knowledge: '知识库', 'agent-runs': 'Agent 监控', meetings: '会议管理' }
export function Header() {
  const { darkMode, toggleDarkMode } = useUIStore()
  const { pathname } = useLocation()
  return (
    <header className="workspace-header flex h-16 shrink-0 items-center justify-between px-6">
      <div className="flex items-center gap-3 text-sm"><span className="text-muted-foreground">工作空间</span><span className="text-muted-foreground/40">/</span><span className="font-medium">{sections[pathname.split('/')[1]] || '会议管理'}</span></div>
      <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label={darkMode ? '切换浅色模式' : '切换深色模式'} title={darkMode ? '切换浅色模式' : '切换深色模式'}>
        {darkMode ? <Sun className="theme-icon h-4 w-4" /> : <Moon className="theme-icon h-4 w-4" />}
      </Button>
    </header>
  )
}
