"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo } from "react"; 
import { Footprints, Clock, Flame, TrendingUp, ChevronLeft } from "lucide-react";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center rounded-2xl" 
         style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <p style={{ color: 'var(--text-tertiary)' }}>Cargando mapa...</p>
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
    <div 
      className="flex min-h-screen items-center justify-center font-sans py-6 sm:py-8 md:py-10"
      style={{ background: 'var(--bg-gradient)' }}
    >
      <main 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-4 rounded-3xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] p-4 sm:p-5">
          <button 
            className="absolute top-4 sm:top-7 left-4 sm:left-7 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              zIndex: 1000 
            }}
          >
            <ChevronLeft 
              className="h-5 w-5 sm:h-6 sm:w-6" 
              style={{ color: 'var(--text-primary)' }}
            />
          </button>

          <div className="h-full w-full rounded-2xl overflow-hidden">
            <MapComponent
              center={mapCenter}
              zoom={mapZoom}
              route={runningRoute}
            />
          </div>

          <div 
            className="absolute bottom-6 sm:bottom-9 left-4 sm:left-7 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-bold text-base sm:text-lg shadow-lg"
            style={{ 
              backgroundColor: 'var(--accent-amber)',
              color: 'var(--text-inverse)',
              zIndex: 1000 
            }}
          >
            2.03 <span className="text-xs sm:text-sm font-normal">Km</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 md:space-y-5">
          <div 
            className="rounded-3xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4"
            style={{ backgroundColor: 'var(--bg-card-dark)' }}
          >
            <div 
              className="shrink-0 rounded-2xl p-2 sm:p-3"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <Footprints 
                className="h-6 w-6 sm:h-8 sm:w-8" 
                style={{ color: 'var(--text-primary)' }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 
                className="font-semibold text-base sm:text-lg"
                style={{ color: 'var(--text-inverse)' }}
              >
                Running
              </h3>
              <p 
                className="text-xs sm:text-sm"
                style={{ color: 'var(--text-tertiary)' }}
              >
                3000 meters per day
              </p>
              <div 
                className="mt-2 h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ 
                    width: "68%",
                    backgroundColor: 'var(--accent-amber)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div 
            className="rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg"
            style={{ backgroundColor: 'var(--bg-card-light)' }}
          >
            <h2 
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Today
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div 
                className="rounded-2xl p-2 sm:p-3 text-center"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div 
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full mb-1 sm:mb-2"
                  style={{ backgroundColor: 'var(--icon-bg-blue)' }}
                >
                  <TrendingUp 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    style={{ color: 'var(--icon-text-blue)' }}
                  />
                </div>
                <p 
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  2.03
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Kilometer
                </p>
              </div>

              <div 
                className="rounded-2xl p-2 sm:p-3 text-center"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div 
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full mb-1 sm:mb-2"
                  style={{ backgroundColor: 'var(--icon-bg-purple)' }}
                >
                  <Clock 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    style={{ color: 'var(--icon-text-purple)' }}
                  />
                </div>
                <p 
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  15
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  minutes
                </p>
              </div>

              <div 
                className="rounded-2xl p-2 sm:p-3 text-center"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div 
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full mb-1 sm:mb-2"
                  style={{ backgroundColor: 'var(--icon-bg-orange)' }}
                >
                  <Flame 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    style={{ color: 'var(--icon-text-orange)' }}
                  />
                </div>
                <p 
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  75
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Calories
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
