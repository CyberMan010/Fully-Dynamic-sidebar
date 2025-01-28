import { Sidebar } from './components/Sidebar/left-sidebar'
import { sidebarConfig } from './config/config'
import './styles/main_style.scss'


function App() {
const userRole = 'admin';

  const items = sidebarConfig[userRole];
  return (
    <>
  <Sidebar 
      items={items} 
      userPermissions={['admin']}
      defaultExpanded={true}
    />  
      </>
  )
}

export default App
