import React from 'react'


const Team = () => {
  return (
    <div>
        <div className="bg-pink3 container text-center">
      <h1 className="text-4xl font-bold mb-8 pt-5">Meet Our Team</h1>
      <div className="flex justify-center gap-16 pb-10">
        {/* Rishi Ranjan Kumar */}
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyYPE-EuYCKkmAIcnHHQP5clEGWDBetgbIOJ3fruNiA&s" // Replace with the actual path to the photo
            alt="Rishi Ranjan Kumar"
            className="rounded-lg border-4 border-gray-300 w-60 h-60 object-cover mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Rishi Ranjan Kumar</h2>
          <p className="text-lg mb-4">Founder and CEO</p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/rishi-ranjan-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              <i className="ri-linkedin-fill text-3xl"></i>
            </a>
            <a
              href="https://twitter.com/rishi_ranjan_k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="ri-twitter-fill text-3xl"></i>
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
    </div>
  )
}

export default Team