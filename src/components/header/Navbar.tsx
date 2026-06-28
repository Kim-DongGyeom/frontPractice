interface NavItem {
  label: string;
  href: string;
}

interface NavData {
  main: NavItem[];
  event: NavItem[];
}

interface NavbarProps {
  navData: NavData;
}

export default function Navbar({ navData }: NavbarProps) {
  console.log(navData);
  return (
    <div className='flex mx-2'>
      <div className='flex font-bold'>
        {navData.main
          ? navData.main.map((item, idx) => {
              return (
                <div className='mx-2 cursor-pointer' key={idx}>
                  {item.label}
                </div>
              );
            })
          : ''}
      </div>
      <div className='mx-2 border border-gray-300'></div>
      <div className='flex text-gray-300'>
        {navData.event
          ? navData.event.map((item, idx) => {
              return (
                <div className='mx-2 cursor-pointer' key={idx}>
                  {item.label}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}
