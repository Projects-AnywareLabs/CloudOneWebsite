import React from 'react'
import BlogCard from './PostCard';

const blogData = [
    {
      id: 1,
      title: "Japan & Malaysia’s Mobility Puzzle: Could the Answer Be in the Air?",
      blogimage: "/blog1Img.png",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "February 14, 2025",
      category: "Technology",
      isVideo: false,
      link: "https://www.linkedin.com/pulse/japan-malaysias-mobility-puzzle-could-answer-2ncpc/"
    },
    {
      id: 2,
      title: "Shaping the Future of Aerospace & Defense with Innovation",
      blogimage: "/blog2Img.jpeg",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "1 month ago",
      category: "Technology",
      isVideo: false,
      link: "https://www.linkedin.com/posts/cloudone-ai-robotics-lab_cloudoneai-aerospaceanddefense-dronetechnology-activity-7293501239781203968-0vM3/?utm_source=share&utm_medium=member_ios&rcm=ACoAAC17HCQBY_BjK3b_1FFS8bkS6NCcXpm4Tng"
    },
    {
      id: 3,
      title: "Revolutionizing Connectivity with Aerial Innovation",
      blogimage: "/blog3Img.jpeg",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "1 month ago",
      category: "Technology",
      isVideo: false,
      link: "https://www.linkedin.com/posts/cloudone-ai-robotics-lab_cloudoneai-iist-sspace-activity-7292776474590294017-KRkK/?utm_source=share&utm_medium=member_ios&rcm=ACoAAC17HCQBY_BjK3b_1FFS8bkS6NCcXpm4Tng"
    },
    {
      id: 4,
      title: "Elevating Connectivity: Testing 5G/6G Innovations with IIST",
      blogimage: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7287427401267982336?compact=1&autoplay=1&loop=1",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "1 month ago",
      category: "Technology",
      isVideo: true,
      link: "https://www.linkedin.com/posts/cloudone-ai-robotics-lab_collaborative-test-with-iists-5g6g-lab-activity-7287703038851432450-W8rC/?utm_medium=ios_app&rcm=ACoAAC17HCQBY_BjK3b_1FFS8bkS6NCcXpm4Tng&utm_source=social_share_video_v2&utm_campaign=share_via"
    },
    {
      id: 5,
      title: "Soaring Higher: Advancing 5G/6G Connectivity with IIST",
      blogimage: "/blog5Img.jpeg",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "2 months ago",
      category: "Technology",
      isVideo: false,
      link: "https://www.linkedin.com/posts/cloudone-ai-robotics-lab_cloudoneai-innovationinaction-dronetechnology-activity-7285528713646014464-j_av/?utm_source=share&utm_medium=member_ios&rcm=ACoAAC17HCQBY_BjK3b_1FFS8bkS6NCcXpm4Tng"
    },
    {
      id: 6,
      title: "Transforming India’s Urban Landscape: The Urgent Need for Advanced Urban and Cargo Mobility Solutions",
      blogimage: "/blog6Img.png",
      author: "Cloudone",
      authorImage: "/authorIcon.svg",
      date: "January 8, 2025",
      category: "Technology",
      isVideo: false,
      link: "https://www.linkedin.com/pulse/transforming-indias-urban-landscape-urgent-need-lueuc/"
    },
  ];

const Posts = () => {
  return (
    <div className='lg:mt-20 mt-10'>
        <p className='font-[700] text-[32px] text-[#181A2A] font-sans lg:px-20 px-10'>Latest Post</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 lg:px-20 px-10">
      {blogData.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
    </div>
  )
}

export default Posts