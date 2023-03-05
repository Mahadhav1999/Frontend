import React from 'react';
import Banner from '../../Common/Banner';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const SinglePost = () => {
    var name = 'Single Post';
    const [singlePost, setSinglePost] = React.useState([])
    const params = useParams();

    let fetchPosts = async () => {
        let response = await axios.get(`http://localhost:1000/posts/${params.id}`)
        let data = await response.data
        setSinglePost(data)
    }

    React.useEffect(() => {
        fetchPosts()
    })
    return (
        <>
            <Banner name={name} />
            <div class="grid grid-nogutter">
                <div class="col-12 xl:col-6 lg:col-6 p-6">
                    <img src={singlePost.imageUrl} class="w-30rem border-round" alt={singlePost.title} />
                </div>
                <div class="col-12 xl:col-6 lg:col-6 p-4">
                    <div class="bg-cyan-50 border-round h-20rem p-6">
                        <p class="text-cyan-600 mb-4 font-bold">{singlePost.author}</p>
                        <div class="text-cyan-900 text-3xl font-medium">{singlePost.title}</div>
                        <p class="text-cyan-800 text-1xl line-height-3">{singlePost.summary}</p>
                        <Link to='/dashboard/posts' className='no-underline'>
                            <button aria-label="Read More" type="button" className="p-button p-component p-button-outlined border-round-sm px-4 py-3 bg-black-alpha-90 border-transparent transition-colors transition-duration-100 bg-blue-500 hover:bg-orange-500 text-white hover:text-gray-900 w-max">
                                <span className="p-button-label p-c text-white"
                                    sx={{ fontFamily: 'Poppins,sans-serif' }}>
                                    <span className="p-button-icon p-c p-button-icon-right pi pi-arrow-left text-white mx-2">
                                    </span>
                                    Go Back</span>
                                <span role="presentation" className="p-ink"></span>
                            </button>

                        </Link>


                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost