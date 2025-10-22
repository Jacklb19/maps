import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 font-sans ">
      <main className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
        
        <div className="relative h-[400px] bg-gray-100 p-4">
          
          <button className="absolute top-6 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          
          <div className="h-full w-full rounded-2xl bg-gray-200 relative overflow-hidden">



          
            <div className="absolute bottom-8 left-6 bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              2.03 <span className="text-sm font-normal">Km</span>
            </div>
          </div>
        </div>

        
        <div className="p-6 space-y-6">
          
          <div className="bg-zinc-900 rounded-3xl p-6 flex items-center gap-4">
            <div className="flex-shrink-0 bg-white rounded-2xl p-3">
              <svg className="h-8 w-8 text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">Running</h3>
              <p className="text-gray-400 text-sm">3000 meters per day</p>
              
              <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Today</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-zinc-900">2.03</p>
                <p className="text-sm text-gray-600">Kilometer</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-3">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-zinc-900">15</p>
                <p className="text-sm text-gray-600">minutes</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-3">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-zinc-900">75</p>
                <p className="text-sm text-gray-600">Calories</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
