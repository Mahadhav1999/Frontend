import React from 'react';
import Banner from '../../Common/Banner';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const SinglePost = () => {
    var name = 'Single Post';
    const [singlePost, setSinglePost] = React.useState([])
    const params = useParams();

    let fetchPosts = async () => {
        let response = await axios.get(
          `https://dull-shoe-duck.cyclic.app/posts/${params.id}`
        );
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
                    <div class="bg-cyan-50 border-round h-auto p-6">
                        <p class="text-cyan-600 mb-4 font-bold">{singlePost.author}</p>
                        <div class="text-cyan-900 text-3xl font-medium">{singlePost.title}</div>
                        <p class="text-cyan-800 text-1xl line-height-3">{singlePost.summary}</p>
                        {/* <iframe title="{singlePost}" src={singlePost.location} width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost