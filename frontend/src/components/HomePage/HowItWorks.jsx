import React from 'react'

const HowItWorks = () => {
  return (
    
      <section className="bg-white dark:bg-gray-900" id='howitworks' >
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-3 lg:flex">
            <img src="https://ai-derm.com/assets/ai-img-d903ddf2.webp" alt="mockup"/>
        </div>                
        <div className=" place-self-center lg:col-span-9">
            <h1 className="max-w-3xl text-4xl  leading-none lg:mb-2 md:text-3xl xl:text-4xl dark:text-white font-serif font-sans font-bold">How does Artificial Intelligence analyze images?</h1>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">AI Dermatologist uses a deep machine learning algorithm (AI-algorithm). The human ability to learn from examples and experiences has been transferred to a computer. For this purpose, the neural network has been trained using a dermoscopic imaging database containing tens of thousands of examples that have confirmed diagnosis and assessment by dermatologists.</p>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">The AI is able to distinguish between benign and malignant tumors, similar to the ABCDE rule (5 main signs of oncology: asymmetry, boundary, color, diameter, and change over time). The difference between them is that the algorithm can analyze thousands of features, but not only 5 of them. Of course, only a machine can detect that amount of evidence.</p>
            <p className="max-w-3xl font-light text-white lg:mb-2 md:text-1xl  lg:text-2lg dark:text-white text-xl">Due to the productive cooperation with doctors, the quality of the algorithm performance is constantly being improved. Based on growing experience and its own autonomous rules, the AI is able to distinguish between benign and malignant tumors, find risks of human papillomavirus, and classify different types of acne…</p>
            
        </div>
    </div>
</section>
    
  )
}

export default HowItWorks
