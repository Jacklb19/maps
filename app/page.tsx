"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo } from "react"; 
import { Footprints, Clock, Flame, TrendingUp, ChevronLeft } from "lucide-react";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 rounded-2xl">
      <p className="text-gray-500">Cargando mapa...</p>
    </div>
  ),
});

export default function Home() {
  const mapCenter: [number, number] = [40.7128, -74.006]; 
  const mapZoom = 15;

  const runningRoute: [number, number][] = useMemo(
    () => [
      [40.7128, -74.006],
      [40.7138, -74.005],
      [40.7148, -74.0055],
      [40.7158, -74.0045],
      [40.7168, -74.005],
      [40.7178, -74.004],
    ],
    []
  );
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-amber-100 to-amber-200 font-sans">
      <main className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
        
        <div className="relative h-[400px] p-4">
          
          <button 
            className="absolute top-4 sm:top-6 left-4 sm:left-6 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-white shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
            style={{ zIndex: 1000 }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          
          <div className="h-full w-full rounded-2xl overflow-hidden">
            <MapComponent
              center={mapCenter}
              zoom={mapZoom}
              route={runningRoute}
            />
          </div>

          
          <div 
            className="absolute bottom-8 left-6 bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
            style={{ zIndex: 1000 }}
          >
            2.03 <span className="text-sm font-normal">Km</span>
          </div>
        </div>

        
        <div className="p-6 space-y-6">
          
          <div className="bg-zinc-900 rounded-3xl p-6 flex items-center gap-4">
            <div className="shrink-0 bg-white rounded-2xl p-3">
              
              <Footprints className="h-8 w-8 text-zinc-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">Running</h3>
              <p className="text-gray-400 text-sm">3000 meters per day</p>
              <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Today</h2>
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-zinc-900">2.03</p>
                <p className="text-sm text-gray-600">Kilometer</p>
              </div>

              
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-zinc-900">15</p>
                <p className="text-sm text-gray-600">minutes</p>
              </div>

              
              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-3">
                  <Flame className="h-6 w-6 text-orange-600" />
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
