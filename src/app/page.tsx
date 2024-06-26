import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex flex-row flex-wrap">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
        <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
          <div className="w-full text-right">
            <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
          </div>
        </div>

        <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
          <div className="p-5 bg-white sticky top-0">
            <Image
              width={300}
              height={300}
              alt="profile image"
              className="border border-indigo-100 shadow-lg round"
              src=""
            />
            <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
              Some Person
            </div>
          </div>
          <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
            <a
              className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
              href=""
            >
              <i className="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
              Messages
            </a>
            <a
              className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
              href=""
            >
              <i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
              Settings
            </a>
            <a
              className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
              href=""
            >
              <i className="fa fa-arrow-left text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
              Log out
            </a>
          </div>
        </div>

        <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <div className="bg-white w-full shadow rounded-lg p-5">
            <textarea
              className="bg-gray-200 w-full rounded-lg shadow border p-2"
              rows={5}
              placeholder="Speak your mind"
            ></textarea>

            <div className="w-full flex flex-row justify-end flex-wrap mt-3">
              <div className="w-2/3">
                <button
                  type="button"
                  className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-col">
            <div className="bg-white mt-3">
              <Image
                width={500}
                height={500}
                alt="image post"
                className="border rounded-t-lg shadow-lg "
                src=""
              />
              <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                A Pretty Cool photo from the mountains. Image credit to
                @danielmirlea on Unsplash.
              </div>
              <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
                <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                  Like
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                  Share
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                  Comment
                </div>
              </div>

              <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
                <div className="w-full">
                  <div className="w-full text-left text-xl text-gray-600">
                    @Some Person
                  </div>
                  A Pretty Cool photo from the mountains. Image credit to
                  @danielmirlea on Unsplash. A Pretty Cool photo from the
                  mountains. Image credit to @danielmirlea on Unsplash.
                </div>
              </div>
            </div>

            <div className="bg-white mt-3">
              <Image
                width={500}
                height={500}
                alt="image post"
                className="border rounded-t-lg shadow-lg "
                src=""
              />
              <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                A Pretty Cool photo from the mountains. Image credit to
                @danielmirlea on Unsplash.
              </div>
              <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                  Like
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                  Share
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                  Comment
                </div>
              </div>
            </div>

            <div className="bg-white mt-3">
              <Image
                width={500}
                height={500}
                alt="image post"
                className="border rounded-t-lg shadow-lg "
                src=""
              />
              <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                A Pretty Cool photo from the mountains. Image credit to
                @danielmirlea on Unsplash.
              </div>
              <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                  Like
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                  Share
                </div>
                <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                  Comment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
