import landingImg from '../assets/Group 3.png'
import { Link } from 'react-router'
import sectionData from '../data/aboutSections'
import AboutSection from '../components/sections'
import MainTitle from '../components/mainTitle'

const Home = () => {


  return (
    <main>
        <div className="container mt-5 mx-auto min-h-[70vh] flex flex-row-reverse items-center justify-center px-10 relative before:w-[70vh] before:h-full before:bg-white before:absolute before:rounded-full before:blur-[100px] before:-right-[20%] before:-translate-x-1/2 before:hidden before:pointer-events-none lg:before:block">
          <div className="image w-5/12 hidden lg:block">
            <img src={landingImg} alt="" />
          </div>
          <div className="banner h-72 py-5 flex flex-col justify-between text-center">
            <div className="mainText font-bold">
              <h1 className='text-4xl mb-3 text-red-hot'>كل هدف لازم ليه بدايه</h1>
              <h2 className='text-3xl'>خد الفرصه و ابدا معانا لصحه أفضل!</h2>
            </div>
            <Link to="/contact"><button className='text-3xl bg-red-hot rounded-full hover:bg-red-700 transition text-white w-10/12 py-2 lg:py-4 text-center mx-auto cursor-pointer relative before:absolute before:w-3 before:h-3 before:bg-red-hot before:rounded-full before:content-["!"] before:text-[8px] before:left-0 before:top-0 before:animate-ping before:flex before:justify-center before:items-center'>أتصل بينا!</button></Link>
          </div>
        </div>

        <div className={`aboutInfo transition-all duration-500`} >
          <MainTitle context="شويه عننا" />
          {sectionData.map((ele, index) => {
            const remaining = index % 2;
            const white = remaining === 1 ? true : false;
            return <AboutSection data={ele} key={index} white={white}/>
          })}
        </div>
    </main>
  )
}

export default Home
