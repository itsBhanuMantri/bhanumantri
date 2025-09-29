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
  const form = useForm({
    defaultValues: {
      length: "",
      breadth: "",
      roomType: "living",
      bulbWatts: "",
      bulbLumens: "",
    },
    onSubmit: ({ value }) => {
      const bulbs = calculateBulbs(
        Number(value.length),
        Number(value.breadth),
        value.roomType,
        Number(value.bulbLumens)
      );
      alert(`You need ${bulbs} bulbs`);
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Lumens Calculator</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        {/* Length */}
        <div>
          <label className="block mb-1 font-medium">Room Length (ft)</label>
          <form.Field
            name="length"
            children={(field) => (
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </div>

        {/* Breadth */}
        <div>
          <label className="block mb-1 font-medium">Room Breadth (ft)</label>
          <form.Field
            name="breadth"
            children={(field) => (
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="block mb-1 font-medium">Room Type</label>
          <form.Field
            name="roomType"
            children={(field) => (
              <select
                className="w-full border rounded-lg p-2"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                {Object.keys(footCandles).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        {/* Bulb Watts */}
        <div>
          <label className="block mb-1 font-medium">Bulb Watts</label>
          <form.Field
            name="bulbWatts"
            children={(field) => (
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </div>

        {/* Bulb Lumens */}
        <div>
          <label className="block mb-1 font-medium">Bulb Lumens</label>
          <form.Field
            name="bulbLumens"
            children={(field) => (
              <input
                type="number"
                className="w-full border rounded-lg p-2"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Calculate Bulbs Needed
        </button>
      </form>
    </div>
  );
}
