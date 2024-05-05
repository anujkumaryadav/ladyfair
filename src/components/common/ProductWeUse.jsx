import React from 'react'
import Lakme from '../../assets/lakme.png'

const ProductWeUse = () => {
  return (
    <div>
        <div className="bg-pink3 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          The products we use
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Lakme}
            alt="Lakme"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1200px-L%27Or%C3%A9al_logo.svg.png"
            alt="Loreal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://cdn.freebiesupply.com/logos/large/2x/chanel-2-logo-black-and-white.png"
            alt="Chanel"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/d0269f87-7582-4323-a214-3ad71587c4bf.png"
            alt="Sugar"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSMYL4CjLQ8fpqO40XRFx0ozBjIfuGWnNVo6weZ_L&s"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductWeUse