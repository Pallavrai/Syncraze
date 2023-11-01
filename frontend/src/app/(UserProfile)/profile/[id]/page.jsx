import GifComponent from "../../../(UserProfile)/x.gif"
export default function Profile({ params }) {
  return (
    <>
      {/* Header */}
      <div className="bg-slate-950 h-full">
        {/* Nav Bar Start */}
        <nav className="sticky top-0 bg-slate-850 w-full h-14 flex items-center justify-between px-4 z-10">
          <div className="text-2xl font-bold text-cyan-400">Syncraze</div>
          {/* Navigation */}
          <ul className="md:flex hidden justify-between">
            <li className="mx-2 font-mono text-cyan-400 cursor-pointer">Home</li>
            <li className="mx-2 font-mono text-cyan-400 cursor-pointer">Profile</li>
            <li className="mx-2 font-mono text-cyan-400 cursor-pointer">Message</li>
            <li className="mx-2 font-mono text-cyan-400 cursor-pointer">Config</li>
          </ul>

          {/* Search Box if login yes show search box*/}
          {/* <div className="border border-black rounded">
                  <input
                    className="border-none"
                    type="text"
                    placeholder="Search..."
                    name="search"
                  />
                </div> */}
          {/* Login Register */}
          <div className="hidden md:block rounded px-4 py-2 cursor-pointer bg-cyan-400 text-white font-mono">Login</div>

          {/* TongelBar */}
          <div className="md:hidden">
            <a className="text-4xl text-cyan-400" href="#">&#8801;</a>
          </div>
        </nav>
        {/* Nav Bar end */}

        {/* Main Content */}
        <div className="flex justify-between text-white z-0">




          {/* Profile */}
          <div className="profile w-full md:w-1/2 ">
            <header>
              <div className="flex flex-col h-auto bg-gradient-to-r hover:bg-gradient-to-t from-slate-850 to-slate-900 items-center justify-center">
                <div className="w-20 h-20 mt-10 mb-2 p-0.5 bg-cyan-300 rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/72151379?v=4"
                    alt="Profile Image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* User Info */}
                <div className="userInfo text-center">
                  <h2 className="font-bold">Mohammad Ashif</h2>
                  <span className="text-sm">Developer</span>
                  <div className="flex justify-center">
                    <div className="followers flex-col mx-4">
                      <button>100k</button>
                      <h1 className="text-sm">Followers</h1>
                    </div>
                    <div className=" border-r-2 border-cyan-400"></div>
                    <div className="followers flex-col mx-4">
                      <button>126</button>
                      <h1 className="text-sm">Following</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full border-b-2 opacity-25 border-cyan-300 mt-4"> </div>



                {/* Social Media Filter */}
                <div className="w-full flex justify-evenly mt-2">

                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152366195-2a7a5be2-acc8-485c-9908-861bcfaa3f2b.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152366251-81e7024b-81c6-422c-ae71-ad035850d030.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152366230-0d5c915e-b212-49cc-b5d5-00d50b1493f6.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="w-14 h-14 rounded-full hidden md:block">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152366154-ec1ddf07-fcf8-41f5-a5f8-ccfc331622a2.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14  rounded-full hidden md:block">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152366741-4ebfc910-49b4-4365-829d-89f9a5873ff5.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152036063-21242e52-af65-4a33-af5d-790466244407.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>


                </div>
                {/* End Filter */}


                {/* Social Media Filter */}
                <div className="w-full flex justify-evenly mt-2">

                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152035581-a7c6c0c3-65c3-4160-89c0-e90ddc1e8d4e.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152035696-80cad2ec-b4dd-4552-88e6-b6b466124f5b.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152042608-2ae071b9-2a64-49be-a49d-f830152cf8d4.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152036063-21242e52-af65-4a33-af5d-790466244407.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full hidden md:block">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152035015-605f666e-bfe9-4723-a900-0b1e2790b8f1.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-14 h-14  rounded-full hidden md:block">
                    <img
                      src="https://user-images.githubusercontent.com/60597290/152035786-d00aa1c3-56af-4d45-8a3c-15846d1a123d.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>


                </div>
                {/* End Filter */}




                {/* Posts */}
                <div className="posts flex flex-col justify-center">
                  <div className="container mx-auto p-4">
                    <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                      <div className="mb-4 flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <p className="text-white text-sm">Posted 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                      </p>
                      <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">15 Likes</span>
                        </div>
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">3 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto p-4">
                    <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                      <div className="mb-4 flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <p className="text-white text-sm">Posted 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                      </p>
                      <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">15 Likes</span>
                        </div>
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">3 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto p-4">
                    <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                      <div className="mb-4 flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <p className="text-white text-sm">Posted 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                      </p>
                      <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">15 Likes</span>
                        </div>
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">3 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto p-4">
                    <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                      <div className="mb-4 flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <p className="text-white text-sm">Posted 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                      </p>
                      <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">15 Likes</span>
                        </div>
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">3 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto p-4">
                    <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                      <div className="mb-4 flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <p className="text-white text-sm">Posted 2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                      </p>
                      <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">15 Likes</span>
                        </div>
                        <div className="flex items-center">
                          <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                          </img>
                          <span className="ml-1 text-gray-500">3 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </header>
          </div>
















          {/* Feed */}
          <div className="feed hidden md:block w-1/4">
            
            <header>
            <div className="title  flex justify-around mt-2">
                <div className="text-2xl font-bold text-cyan-400">Trendings</div> 
            </div>
           
             <div className="posts flex flex-col justify-center">
                {/* Post Container */}
                <div className="container mx-auto p-4">
                  <div className="max-w-md bg-slate-800 border-spacing-1 shadow-md p-4 rounded-md">
                    <div className="mb-4 flex items-center">
                      <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                      <div className="ml-4">
                        <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                        <p className="text-white text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-base text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                    </p>
                    <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">15 Likes</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">3 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Following Content */}
                <div className="title  flex justify-around mt-2">
                <div className="text-2xl font-bold text-cyan-400">Following Content & Projects</div> 
            </div>
            
                <div className="container mx-auto p-4">
                  <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                    <div className="mb-4 flex items-center">
                      <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                      <div className="ml-4">
                        <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                        <p className="text-white text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-base text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                    </p>
                    <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">15 Likes</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">3 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto p-4">
                  <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                    <div className="mb-4 flex items-center">
                      <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                      <div className="ml-4">
                        <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                        <p className="text-white text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-base text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                    </p>
                    <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">15 Likes</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">3 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto p-4">
                  <div className="max-w-md bg-slate-800 shadow-md p-4 rounded-md">
                    <div className="mb-4 flex items-center">
                      <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                      <div className="ml-4">
                        <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                        <p className="text-white text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-base text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? At enim, qua in vita est aliquid mali, ea beata esse non potest.
                    </p>
                    <img src="https://th.bing.com/th?id=OIP.lj4Jyc9MBjN6sWWNVwPMWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Post Image" className="mt-4 w-full rounded-md" />
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.G9Rr-WHi6wkclzYD_GaQdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">15 Likes</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://th.bing.com/th?id=OIP.seTTGC70_SX5rb2GIAVOQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-6 h-6 text-gray-500">
                        </img>
                        <span className="ml-1 text-gray-500">3 Comments</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </header>
          </div>








          {/* Messages */}
          <div className="message hidden md:block w-1/4">
            <header>
              <div className="title  flex justify-around mt-2">
                <div className="text-2xl font-bold text-cyan-400">Messages</div> 
            </div>
           
            {/* Inbox */}
<div className="inbox flex-col my-5">
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
            <div className="flex items-center mt-3">
                        <img src="https://avatars.githubusercontent.com/u/72151379?v=4" alt="Post Author" className="w-12 h-12 rounded-full" />
                        <div className="ml-4 w-full">
                          <h2 className="text-m font-semibold">Mohammad Ashif</h2>
                          <div className="msg_box">
                          <p className="text-white text-sm">Kya hoorha hai bhai...</p> 
                          </div>
                          
                        </div>
                        <div className="flex flex-end">
                        <img src="https://th.bing.com/th/id/OIP.EL0r8D-jr3g7vP6XS4HrKAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7" alt="Post Author" className="w-6 h-6 rounded-full mr-3" />
                        </div>
                      </div>
                      
                      </div>          
            </header>
          </div>
        </div>
      </div>
    </>

  );
}
