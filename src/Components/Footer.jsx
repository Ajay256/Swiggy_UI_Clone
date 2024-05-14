import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='grid grid-cols-2 gap-10 md:flex justify-between px-32 py-10 bg-slate-900 text-gray-300'>
            <div className='mb-4'>
                <div className='flex font-bold text-[25px] text-white'><img src="img/logo.png" className='w-12 h-auto filter grayscale' />Swiggy</div>
                <div> &copy; 2024 Bundl Technologies Pvt. Ltd</div>
            </div>
            <div className='mb-4'>
                <ul>
                    <li>
                        <div className='text-white mb-3 font-bold'>Company</div>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Swiggy One</a></li>
                    <li><a href="#">Swiggy Instamart</a></li>
                    <li><a href="#">Swiggy Genie</a></li>
                </ul>
            </div>
            <div className='mb-4'>
                <ul>
                    <li>
                        <div className='text-white mb-3 font-bold'>Contact us</div>
                    </li>
                    <li><a href="#">Help & Support</a></li>
                    <li><a href="#">Partner with us</a></li>
                    <li><a href="#">Ride with us</a></li>
                </ul>
            </div>
            <div className='mb-4'>
                <ul>
                    <li>
                        <div className='text-white mb-3 font-bold'>Legal</div>
                    </li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Investor Relations</a></li>
                </ul>
            </div>
            <div className='mb-4'>
                <ul>
                    <li>
                        <div className='text-white mb-3 font-bold'>We deliver to:</div>
                    </li>
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">Gurgaon</a></li>
                    <li><a href="#">Hyderabad</a></li>
                    <li><a href="#">Delhi</a></li>
                    <li><a href="#">Mumbai</a></li>
                    <li><a href="#">Pune</a></li>
                    <li><select name="locations" id="locations" className='bg-slate-900 w-[120px] mt-2'>
                        <option disabled value="none">582 Cities</option>
                        <option value="Sitapur">Sitapur</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Noida">Noida</option>
                        </select>
                    </li>
                </ul>
            </div>

      </div>
    </>
  )
}
