

export default function Footer(){

    return(
        <>
            
      <footer className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Address</h3>
              <p className="mt-4 text-sm">123 Green Road, Freetown, Sierra Leone</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <p className="mt-4 text-sm">Email: info@womenfarmconnect.org</p>
              <p className="mt-2 text-sm">Phone: +232 123 4567</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Social Media</h3>
              <ul className="mt-4 space-y-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-green-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Useful Links</h3>
              <ul className="mt-4 space-y-2">
                {['Home', 'About Us', 'Market Access', 'Financial Support', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-green-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}