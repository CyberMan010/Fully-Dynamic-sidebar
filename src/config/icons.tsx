export type IconName = 
  | 'add'
  | 'arrange-square'
  | 'book'
  | 'briefcase'
  | 'cmd-icon'
  | 'cmd-icon2'
  | 'hierarchy-square-3'
  | 'home-2'
  | 'key-square'
  | 'Logo Icon'
  | 'message-question'
  | 'money-send'
  | 'personalcard'
  | 'profile-2user'
  | 'receipt-search'
  | 'setting-3'
  | 'sidebar-left'
  | 'sidebar-right'
  | 'trade'
  | 'user-octagon'
 


interface IconProps {
    name: IconName;
    className?: string;
    size?: number;
  }
  
  export const Icon: React.FC<IconProps> = ({ name, className = '', size = 24 }) => (
    <img 
      src={`/icons/${name}.svg`} 
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
    />
  );