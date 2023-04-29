import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header/>
      <div className="flex bg-red-500">
        
      </div>
    </main>
  )
}

export default Home;