import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        background: 'black',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '24px',
        paddingLeft: '15px'
      }}>
      Shop Header
      <nav>
        <div style={{
          borderRadius: '8px',
          backgroundColor: '#D1D1D1',
          padding: '1rem 2rem',
        }}>
        <Link href='/about'>About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;