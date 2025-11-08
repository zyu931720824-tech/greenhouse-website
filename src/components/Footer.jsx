import React from 'react';
import logo from "../assets/logo1.png"
import { resourcesLinks, platformLinks} from "../constants"
function Footer() {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-200'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-md font-semibold mb-4'>索引</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-700 hover:text-black' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>平台</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-700 hover:text-black' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>智水云棚实践团</h3>
                <img className="h-15 w-20 mr-2" src={logo} alt="logo" />
                
            </div>
            
        </div>
    </footer>
  )
}

export default Footer