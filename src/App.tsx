import { Sidebar } from './components/Sidebar/left-sidebar'
import { sidebarConfig } from './config/config'
import './styles/main_style.scss'


function App() {
const userRole = 'admin';
const handleSearch = (query: string) => {
  console.log('Search query:', query);
}

  const items = sidebarConfig[userRole];
  return (
    <>
  <Sidebar 
      items={sidebarConfig.admin} 
      userPermissions={['admin']}
      defaultExpanded={true}
      onSearch={handleSearch}
    />  
      </>
  )
}

export default App
