import React, { useEffect, useRef, useState } from 'react'

const sections = ({data, white}) => {
    // const white = true
      const [isVisible, setIsVisible] = useState(false)
      const itemRef = useRef(null)

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        }, {threshold: 0})
        observer.observe(itemRef.current)
      }, [])

  return (
    <>

        <div ref={itemRef} className={`whiteSection w-full ${white ? "bg-white" : "bg-dark"} h-screen sm:h-[70vh] transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className={`container pb-5 flex ${white ? "flex-row-reverse" : null} flex-wrap content-center sm:flex-nowrap gap-5 mx-auto h-full px-5`}>
                <div className="image w-full h-[55%] sm:h-full sm:w-1/2 sm:px-8 py-8">
                <img src={data.imgURL} className='object-cover w-full h-full' alt="" />
                </div>
                <div className="text w-full sm:w-1/2 flex p flex-wrap content-center">
                <h1 className='text-red-hot text-4xl mb-10'>{data.title}</h1>
                <h3 className={`{ ${white ? "text-dark" : "text-gray-100"} text-2x`} dangerouslySetInnerHTML={{__html: data.text}}></h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default sections
