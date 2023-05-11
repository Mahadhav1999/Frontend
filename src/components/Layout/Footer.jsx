import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div class='surface-900 p-8'>
            <div class="grid grid-nogutter">
                <div class="col-12 lg:col-3  text-white">
                    <h2 class='text-1xl'>
                        Foodies
          <span className='text-3xl mb-2 text-yellow-500'>.</span>

                        </h2>
                    
                    <span class="text-500 block mt-4 mr-3 line-height-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</span>
                </div>

                <div class="flex align-items-center lg:flex-order-1">
                    <a href='#a' class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5 no-underline
                    transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 hover:text-white 
                    " 
                    style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i class="pi pi-twitter text-1xl"  ></i>
                    </a>
                    <a href='#a' class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5 no-underline transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 hover:text-white" 
                    style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i class="pi pi-facebook"></i>
                    </a>
                    <a href='#a' class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center no-underline transition-colors transition-duration-200 bg-blue-500 hover:bg-orange-500 hover:text-white" 
                    style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i class="pi pi-github"></i>
                    </a>
                </div>

                <div class="col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column">
                    <span class="text-900 text-xl font-medium block text-white">Information</span>
                    <ul class="list-none p-0">
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Terms of Uses</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">About Stories</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Accessibility Help</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Advertise with us</a>
                        </li>
                    </ul>
                </div>

                <div class="col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column">
                    <span class="text-900 text-xl font-medium block text-white">Categories</span>
                    <ul class="list-none p-0">
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Food</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Restaurant</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Dessert</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Lifestyle</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">Recipes</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 lg:col-3 md:col-3 flex mt-4 lg:mt-0 lg:pl-4 flex-column">
                    <span class="text-900 text-xl font-medium block text-white">Have a Questions?</span>
                    <ul class="list-none p-0">
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">
                                <span class="p-button-icon p-c p-button-icon-left pi pi-map-marker mx-3">
                                </span>
                                203 Fake St. Mountain View, San Francisco, California, USA</a>
                        </li>
                        <li>

                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">
                                <span class="p-button-icon p-c p-button-icon-left pi pi-phone mx-3">
                                </span>
                                +2 392 3929 210</a>
                        </li>
                        <li>
                            <a href="#a" tabindex="0" class="text-600 hover:text-500 transition-duration-150 cursor-pointer mt-3 block no-underline">
                                <i class="p-button-icon p-c p-button-icon-left pi pi-envelope mx-3">
                                </i>

                                info@yourdomain.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-center align-items-center">
                <span class="text-500 block mt-4">Copyright © 2022-23 Foodies | Stories, Inc. All rights are reserved. Made with
                    <span className="text-red-500 mx-1">&#10084;</span> by Mahadev.</span>
            </div>
        </div>
    )
}

export default Footer