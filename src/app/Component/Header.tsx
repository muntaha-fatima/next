import Link from 'next/link'

export default function Header (){
  return (
    <div className="Header">      
       <Link className='link'  href="/">Home</Link>
        <Link className="link" href="About">About </Link>      
        <Link className="link" href="Contact">Contact</Link>
    </div>
    
  )
}


