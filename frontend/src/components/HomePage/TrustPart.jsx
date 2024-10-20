import React from 'react'

const TrustPart = () => {
  return (
    <div className="bg-white dark:bg-gray-900 " >
    <div className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className="mr-auto place-self-center">
            <h3 className="max-w-4xl mb-4 mt-6 text-4xl tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white font-serif font-sans font-bold">You are joining more than 5000 people that use AI Dermatologist to keep their skin healthy.</h3>
         </div>
         <div className='flex gap-6 justify-around '>
          <div>
            <p href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">5000</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">AI SkinScan users</p>
            </p>
          </div>
          <div>
            <p href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4500</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Online checks done</p>
            </p>
          </div>
          <div>
            <p href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4300</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Skin desease detected</p>
            </p>
          </div>
         </div>
                       
    </div>
</div>
  )
}

export default TrustPart
