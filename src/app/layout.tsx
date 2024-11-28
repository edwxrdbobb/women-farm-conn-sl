import '@/assets/styles/globals.css';
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Market Access', href: '/market' },
  { name: 'Financial Support', href: '/finance' },
  { name: 'About Us', href: '/about' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          {/* <meta charset="UTF-8" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Women Farm </title>
        </head>
        <body>
          <div className="min-h-screen flex flex-col">
            <Header navigation={navigation} />
              <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  )
}

