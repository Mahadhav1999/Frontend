import React from 'react'
import Banner from '../../Common/Banner';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Posts = () => {
    var name = 'All Posts';

    const [posts, setPosts] = React.useState([])
    const navigate = useNavigate()


    let fetchPosts = async () => {
        let res = await axios.get('http://localhost:1000/posts')
        let data = await res.data
        console.log(data);
        setPosts(data)
    }

    React.useEffect(() => {
        fetchPosts()
    })

    //to read the posts 
    

    return (
        <>
            <Banner name={name} />
            <div class="surface-ground p-4">
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }} className="">
                    <span className="mx-4 text-4xl text-black-alpha-90">All Food Posts
                        <span className='text-3xl mb-2 text-yellow-500'>.</span>
                    </span>
                </h1>
                <div class="grid">
                    {
                        posts.map(post => (
                            <div class="md:col-4 lg:col-4 xl:col-3 p-3">
                                <div class="w-auto border-round p-3" style={{ borderRadius: '6px' }}>
                                    <img alt="" src={post.imageUrl} class="mb-3 w-full h-10rem" />
                                    <div class="flex justify-content-between align-items-start">
                                        <div>
                                            <div class="text-xl font-medium text-900 mb-2">{post.title}</div>
                                            <p class="mt-0 mb-3 text-600">{post.summary}</p>
                                        </div>
                                        <button class="p-button p-component p-button-rounded p-button-text p-button-icon-only">
                                            <span class="p-button-label p-c">&nbsp;</span>
                                            <span role="presentation" class="p-ink"></span></button>
                                    </div>
                                    <div class="flex justify-content-center pt-4">
                                        <Link to={`/dashboard/posts/${post._id}`} className='no-underline w-full'>
                                        <button
                                        aria-label="View" class="text-white p-button p-component p-button-outlined border-round-sm bg-black-alpha-90 border-transparent transition-colors transition-duration-100 bg-blue-500 hover:bg-orange-500 text-white hover:text-white">
                                            <span class="p-button-icon p-c p-button-icon-left pi pi-search"></span>
                                            <span class="p-button-label p-c">View Post</span>
                                            <span role="presentation" class="p-ink"></span>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Posts