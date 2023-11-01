export default function Profile({ params }) {
  return (
    <>
  {/* component */}
  <div className="profile">
    <nav className="bg-white shadow px-4 lg:py-5 border-b  border-gray-400">
            <div className="flex-shrink-0 flex items-center ">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Workflow logo"
              />
            </div>
    </nav>
    {/*body start*/}
    {/*profile data*/}
    <div className="bg-gray-100 h-auto px-48">
      <div className="flex md:flex-row-reverse flex-wrap">
        <div className="w-full md:w-3/4 p-4 text-center">
          <div className="text-left justify-between pl-4 pt-3">
            <span className="font-bold text-gray-700 text-2xl mr-2">
              Pallav Rai
            </span>
            <span className="text-base font-semibold text-gray-700 mr-2">
              <button className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">
                Edit Profile
              </button>
            </span>
            
          </div>
          <div className="text-left pl-4 pt-3">
            <span className="text-base font-semibold text-gray-700 mr-2">
              <b>220</b> posts
            </span>
            <span className="text-base font-semibold text-gray-700 mr-2">
              <b>114</b> followers
            </span>
            <span className="text-base font-semibold text-gray-700">
              <b>200</b> following
            </span>
          </div>
          <div className="text-left pl-4 pt-3">
            <span className="text-lg text-gray-700 mr-2">
              @pallavrai
            </span>
          </div>
          <div className="text-left pl-4 pt-3">
            <p className="text-base font-medium text-blue-700 mr-2">
              #cool #html #react
            </p>
            <p className="text-base font-medium text-gray-700 mr-2">
              Hello i am testing
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4 text-center">
          <div className="w-full relative md:w-3/4 text-center mt-8">
            <button
              className="flex rounded-full"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                className="h-40 w-40 rounded-full"
                src="https://scontent-muc2-1.cdninstagram.com/v/t51.2885-19/s150x150/58468664_291773768419326_7460980271920185344_n.jpg?_nc_ht=scontent-muc2-1.cdninstagram.com&_nc_ohc=16Or2MWYINEAX9vLBW0&oh=ada3818c35cb64180cf431d820d9dabe&oe=5EF26035"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      {/*status show icon*/}
      <div className="inline-flex ml-36 mt-16">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1502164980785-f8aa41d53611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <h1 className="pt-16 text-base font-semibold text-gray-900">Fun</h1>
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <h1 className="pt-16 text-base font-semibold text-gray-900">
            Travel
          </h1>
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
            />
          </div>
          <h1 className="pt-16 text-base font-semibold text-gray-900">Food</h1>
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            />
          </div>
          <h1 className="pt-16 text-base font-semibold text-gray-900">
            Sketch
          </h1>
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <h1 className="pt-16 text-base font-semibold text-gray-900">
            My Work
          </h1>
        </div>
      </div>
      <hr className="border-gray-500 mt-6" />

      {/*post icon and title*/}
      <div className="flex flex-row mt-4 justify-center mr-16">
        <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div className="flex inline-flex">
            <button
              className="border-transparent text-gray-800 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <div className="flex inline-flex ml-2 mt-1">
            <h3 className="text-sm font-bold text-gray-800 mr-2">PROJECTS</h3>
          </div>
        </div>
        <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div className="flex inline-flex">
            <button
              className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <div className="flex inline-flex ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">INTERESTS</h3>
          </div>
        </div>
        <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div className="flex inline-flex">
            <button
              className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
          <div className="flex inline-flex ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">CONTRIBUTIONS</h3>
          </div>
        </div>
        <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div className="flex inline-flex">
            <button
              className="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </button>
          </div>
          <div className="flex inline-flex ml-2 mt-1">
            <h3 className="text-sm font-medium text-gray-700 mr-2">UPDATES</h3>
          </div>
        </div>
      </div>
      {/*post images*/}
      <div className="flex pt-4">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
      <div className="flex pt-4">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
      <div className="flex pt-4">
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
  </div>
</>

  );
}
