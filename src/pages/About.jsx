import React from 'react'
import MainTitle from '../components/mainTitle.jsx'
import Trainer from '../components/trainer.jsx'
import trainers from '../data/trainers.js'

const About = () => {
  return (
    <>
    <MainTitle context="احنا مين" />
    <div className="container mx-auto">
      <div className="context px-10 lg:px-20 text-center text-lg">
        <p>
          في FitMaker، رؤيتنا بسيطة وواضحة: نساعدك تصنع النسخة الأقوى من نفسك. إحنا مش مجرد جيم… إحنا بيئة متكاملة للّياقة، مجهزين بأحدث الأجهزة، وأفضل المدربين، ومساحات تدريب مريحة ومصممة بعناية علشان تديك أفضل تجربة ممكنة.
          <br />
          <br />
          نؤمن إن كل شخص له طريقته وأهدافه، وعشان كده بنقدم خطط تدريب متنوعة تناسب المبتدئين والمحترفين، بالإضافة لدعم مستمر علشان تفضل دايمًا على الطريق الصح.
          في FitMaker،
          <br />
          <br />
          إحنا معاك خطوة بخطوة… من أول يوم لحد لما توصل لهدفك وتحقق النتائج اللي تستحقها.
        </p>
      </div>
      <button className='px-8 py-2 bg-red-hot text-2xl text-gray-100 block mx-auto my-8 cursor-pointer hover:bg-amber-800'><a href="/contact">انضم لينا!</a></button>
    </div>

    <div className="trainers bg-dark p-2 ">
      <MainTitle context="مدربينا الافاضل" white={true} />
      <div className="trainerCards flex items-center gap-5 flex-wrap md:flex-nowrap p-5">
        {trainers.map((ele, index) => <Trainer data={ele} key={index} />)}
        {/* <div className="card text-gray-100 bg-[#1E1E1E] text-center pb-2 flex flex-col items-center w-1/3">
          <div className="image p-2 w-full">
            <img src="/captain1.png" className='w-full h-full object-cover' alt="" />
          </div>
          <h3 className='font-bold'>كابتن مروان محمد عبد الله</h3>
          <h4 className='font-light'>خبير التغذيه بتاعنا, معاه قول سلام للوزن الزائد</h4>
        </div>       */}
      </div>
    </div>
    </>
  )
}

export default About
