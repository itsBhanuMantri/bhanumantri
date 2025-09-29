"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";

// Recommended foot-candles per room type
const footCandles = {
  living: 15,
  bedroom: 15,
  kitchen: 40,
  kitchenTask: 80,
  dining: 35,
  bathroom: 75,
  office: 50,
};

// Function to calculate number of bulbs
function calculateBulbs(length: number, breadth: number, roomType: string, bulbLumens: number) {
  const area = length * breadth;
  const fc = footCandles[roomType as keyof typeof footCandles] ?? 15;
  const lumensRequired = area * fc;
  return Math.ceil(lumensRequired / bulbLumens);
}

export default function LumensCalculator() {
  const [results, setResults] = React.useState<{
    totalRoomSize: number;
    roomType: string;
    lumensNeeded: number;
    bulbWatts: number;
    bulbLumens: number;
    totalBulbsNeeded: number;
    lumensGenerated: number;
    footCandleValue: number;
  } | null>(null);

  const form = useForm({
    defaultValues: {
      length: "",
      breadth: "",
      roomType: "living",
      bulbWatts: "",
      bulbLumens: "",
    },
    onSubmit: ({ value }) => {
      const length = Number(value.length);
      const breadth = Number(value.breadth);
      const bulbLumens = Number(value.bulbLumens);
      const bulbWatts = Number(value.bulbWatts);
      
      const totalRoomSize = length * breadth;
      const footCandleValue = footCandles[value.roomType as keyof typeof footCandles] ?? 15;
      const lumensNeeded = totalRoomSize * footCandleValue;
      const totalBulbsNeeded = Math.ceil(lumensNeeded / bulbLumens);
      const lumensGenerated = totalBulbsNeeded * bulbLumens;

      setResults({
        totalRoomSize,
        roomType: value.roomType,
        lumensNeeded,
        bulbWatts,
        bulbLumens,
        totalBulbsNeeded,
        lumensGenerated,
        footCandleValue
      });
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-mono mb-4">
            <span className="gradient-primary text-white px-6 py-3 rounded-2xl border border-white/20 shadow-glow">
              LUMENS CALCULATOR
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Calculate the perfect lighting for your space
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            {/* Length */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-800 font-mono">Room Length (ft)</label>
              <form.Field name="length">
              {(field) => (
                <input
                  type="number"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg font-semibold bg-white/70 backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 hover:border-gray-300"
                  placeholder="Enter room length"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            </form.Field>
            </div>

            {/* Breadth */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-800 font-mono">Room Width (ft)</label>
              <form.Field name="breadth">
                {(field) => (
                  <input
                    type="number"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg font-semibold bg-white/70 backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 hover:border-gray-300"
                    placeholder="Enter room width"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </div>

            {/* Room Type */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-800 font-mono">Room Type</label>
              <form.Field name="roomType">
                {(field) => (
                  <select
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg font-semibold bg-white/70 backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 hover:border-gray-300 cursor-pointer"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  >
                    {Object.keys(footCandles).map((type) => (
                      <option key={type} value={type} className="font-semibold">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                )}
              </form.Field>
            </div>

            {/* Bulb Watts */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-800 font-mono">Bulb Watts</label>
              <form.Field name="bulbWatts">
                {(field) => (
                  <input
                    type="number"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg font-semibold bg-white/70 backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 hover:border-gray-300"
                    placeholder="Enter bulb wattage"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </div>

            {/* Bulb Lumens */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-800 font-mono">Bulb Lumens</label>
              <form.Field name="bulbLumens">
                {(field) => (
                  <input
                    type="number"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg font-semibold bg-white/70 backdrop-blur-sm focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 hover:border-gray-300"
                    placeholder="Enter bulb lumens output"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </div>

            <button
              type="submit"
              className="w-full gradient-primary text-white font-bold font-mono text-lg py-5 rounded-2xl shadow-glow border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              CALCULATE BULBS NEEDED
            </button>
          </form>
        </div>

        {/* Results Display */}
        {results && (
          <div className="mt-12 bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 animate-in slide-in-from-bottom duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black font-mono mb-2">
                <span className="gradient-secondary text-white px-4 py-2 rounded-xl border border-white/20 shadow-glow">
                  CALCULATION RESULTS
                </span>
              </h2>
              <p className="text-gray-600 font-semibold">Here's your lighting breakdown</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 font-mono border-b-2 border-accent pb-2">
                  ROOM DETAILS
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                    <span className="font-semibold text-gray-700">Total Room Size:</span>
                    <span className="font-bold text-accent text-lg">{results.totalRoomSize} sq ft</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                    <span className="font-semibold text-gray-700">Room Type:</span>
                    <span className="font-bold text-accent-secondary text-lg capitalize">{results.roomType}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                    <span className="font-semibold text-gray-700">Required Foot-Candles:</span>
                    <span className="font-bold text-accent-tertiary text-lg">{results.footCandleValue} fc</span>
                  </div>
                </div>
              </div>

              {/* Lighting Calculations */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 font-mono border-b-2 border-accent-secondary pb-2">
                  LIGHTING CALCULATIONS
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                    <span className="font-semibold text-gray-700">Lumens Needed:</span>
                    <span className="font-bold text-accent text-lg">{results.lumensNeeded.toLocaleString()} lm</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50">
                    <span className="font-semibold text-gray-700">Given Bulb Watts:</span>
                    <span className="font-bold text-accent-secondary text-lg">{results.bulbWatts} W</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50">
                    <span className="font-semibold text-gray-700">Given Bulb Lumens:</span>
                    <span className="font-bold text-accent-tertiary text-lg">{results.bulbLumens.toLocaleString()} lm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Results */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="gradient-primary text-white p-6 rounded-2xl shadow-glow border border-white/20">
                    <div className="text-3xl font-black font-mono mb-2">{results.totalBulbsNeeded}</div>
                    <div className="text-sm font-semibold uppercase tracking-wide">Total Bulbs Needed</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="gradient-secondary text-white p-6 rounded-2xl shadow-glow border border-white/20">
                    <div className="text-2xl font-black font-mono mb-2">{results.lumensGenerated.toLocaleString()}</div>
                    <div className="text-sm font-semibold uppercase tracking-wide">Lumens Generated by {results.totalBulbsNeeded} Bulbs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 rounded-xl bg-gray-50 border-l-4 border-accent">
              <div className="flex items-start space-x-3">
                <div className="text-accent text-xl">💡</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Lighting Efficiency</p>
                  <p className="text-xs text-gray-600">
                    {results.lumensGenerated > results.lumensNeeded 
                      ? `Your setup will provide ${((results.lumensGenerated / results.lumensNeeded - 1) * 100).toFixed(1)}% more light than required - perfect for bright, comfortable lighting!`
                      : `Your setup meets the minimum lighting requirements for a ${results.roomType}.`
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setResults(null)}
                className="px-8 py-3 text-gray-600 font-bold font-mono rounded-xl border-2 border-gray-300 hover:border-accent hover:text-accent transition-all duration-300 transform hover:scale-105"
              >
                CALCULATE AGAIN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
