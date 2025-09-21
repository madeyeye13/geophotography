import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  const mainBlog = {
    id: 1,
    category: "PORTRAIT",
    date: "4/7/2020",
    readTime: "5 MIN",
    title: "10 Essential Camera For Portrait Shoot",
    author: "Geo Photography",
    excerpt: "Master the fundamental techniques that separate amateur photographers from professionals. From understanding light and composition to advanced shooting modes, these essential skills will transform your photography and help you capture stunning images in any situation.",
    image: asset("image/himage2.jpg")
  };

  const smallBlogs = [
    {
      id: 2,
      category: "BIRTHDAY",
      date: "4/7/2020", 
      readTime: "5 MIN",
      title: "10 Reasons Why Photoshoot Is Good",
      author: "Geo Photography",
      image: asset("image/gimage2.jpg")
    },
    {
      id: 3,
      category: "EVENT",
      date: "4/5/2020",
      readTime: "3 MIN", 
      title: "Geo Photography: Capturing Perfect Light",
      author: "Geo Photography",
      image: asset("image/himage4.jpg")
    },
    {
      id: 4,
      category: "MODEL",
      date: "4/3/2020",
      readTime: "4 MIN",
      title: "What To Do When Planning Model Shoot",
      author: "Geo Photography",
      image: asset("image/himage01.jpg")
    },
    {
      id: 5,
      category: "EVENT",
      date: "4/1/2020",
      readTime: "6 MIN",
      title: "MARY'S WEDDING",
      author: "Geo Photography",
      image: asset("image/gimage9.jpg")
    }
  ];

  const MainBlogCard = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative overflow-hidden cursor-pointer transition-all duration-300 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        
        {/* Black overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'opacity-70' : 'opacity-40'
          }`}
        />
        
        {/* Content overlay - Bottom center aligned */}
        <div className="absolute inset-x-0 bottom-0 p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-sm mb-4">
              <span className="text-white font-medium">{blog.category}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            
            <h2 className="font-medium mb-4 leading-tight text-2xl md:text-4xl lg:text-5xl">
              {blog.title}
            </h2>
            
            <p className="text-base md:text-lg italic mb-4">by {blog.author}</p>
            
            {/* Show excerpt on hover with smooth transition */}
            <div className={`transition-all duration-500 ease-in-out ${
              isHovered ? 'max-h-32 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-4'
            } overflow-hidden`}>
              <p className="text-sm md:text-base leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SmallBlogCard = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-48 md:h-52 mb-4">
          <img 
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          
          {/* Black overlay */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isHovered ? 'opacity-70' : 'opacity-40'
            }`}
          />
        </div>
        
        {/* Content below image - no container */}
        <div className="flex items-center gap-3 text-[10px] text-gray-600 mb-3">
          <span className=" font-medium">{blog.category}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        
        <h3 className="font-medium mb-2 leading-tight text-base text-gray-900">
          {blog.title}
        </h3>
        
        <p className="text-xs text-gray-600 italic">by {blog.author}</p>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:block px-8 py-12">
        <div className="flex gap-8 min-h-screen">
          {/* Main Blog - Sticky within its container */}
          <div className="w-2/3">
            <div className="sticky top-0 h-screen">
              <MainBlogCard blog={mainBlog} />
            </div>
          </div>
          
          {/* Small Blogs */}
          <div className="w-1/3 py-8">
            <div className="space-y-8">
              {smallBlogs.map((blog) => (
                <div key={blog.id}>
                  <SmallBlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden py-8 px-4 md:px-8">
        {/* Main Blog - Increased height */}
        <div className="h-[500px] md:h-[600px] mb-8">
          <MainBlogCard blog={mainBlog} />
        </div>
        
        {/* Small Blogs Grid - 2 columns with proper spacing from edges */}
        <div className="grid grid-cols-2 gap-4">
          {smallBlogs.map((blog) => (
            <div key={blog.id}>
              <SmallBlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default BlogSection;