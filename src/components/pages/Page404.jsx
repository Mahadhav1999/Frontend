import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <>
            <div class="flex mt-5">
                <div class="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
                    <div class="border-left-2 border-pink-500">
                        <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
                    </div>
                    <div class="mt-5 mb-1 font-bold text-xl text-900">Oops</div>
                    <div class="mb-1 font-bold text-6xl text-900">Page Not Found</div>
                    <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
                    <div>

                        <Link to='/' className='no-underline'>
                        <button aria-label="Go Back" class="p-button p-component p-button-text mr-2">
                            <span class="p-button-icon p-c p-button-icon-left pi pi-arrow-left"></span>
                            <span class="p-button-label p-c">Go Back</span>
                            <span role="presentation" class="p-ink"></span>
                        </button>
                        </Link>

                        <Link to='/dashboard' className='no-underline'>
                        <button aria-label="Go to Dashboard" class="p-button p-component">
                            <span class="p-button-icon p-c p-button-icon-left pi pi-home"></span>
                            <span class="p-button-label p-c">Go to Dashboard</span>
                            <span role="presentation" class="p-ink"></span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div class="w-6 hidden sm:block" style={{ background: 'url(images/img-6.jpg) 10% 0% / cover no-repeat' }}></div>
            </div>
        </>
    )
}

export default Page404