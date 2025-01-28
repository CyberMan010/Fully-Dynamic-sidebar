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