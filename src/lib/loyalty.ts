import { useState, useEffect } from "react";

export interface Reward {
  id: string;
  name: string;
  points: number;
  description: string;
  icon: string;
}

export const REWARDS: Reward[] = [
  { id: "r1", name: "Free Milkshake", points: 50, description: "Any flavor of our signature milkshakes.", icon: "🥤" },
  { id: "r2", name: "Gourmet Burger", points: 100, description: "One free Smash Beef or Nashville Chicken burger.", icon: "🍔" },
  { id: "r3", name: "20% Discount", points: 200, description: "Get 20% off your entire order (max ₦5,000 discount).", icon: "🎟️" },
  { id: "r4", name: "The King's Feast", points: 500, description: "Free Large Pizza + Any Signature Drink.", icon: "👑" },
];

export function useLoyalty() {
  const [points, setPoints] = useState<number>(0);
  const [history, setHistory] = useState<{ date: string; points: number; action: string }[]>([]);

  useEffect(() => {
    const savedPoints = localStorage.getItem("lola_points");
    const savedHistory = localStorage.getItem("lola_history");
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  const addPoints = (amount: number, reason: string) => {
    const newPoints = points + amount;
    const newEntry = { date: new Date().toLocaleDateString(), points: amount, action: reason };
    const newHistory = [newEntry, ...history].slice(0, 5); // Keep last 5

    setPoints(newPoints);
    setHistory(newHistory);

    localStorage.setItem("lola_points", newPoints.toString());
    localStorage.setItem("lola_history", JSON.stringify(newHistory));
  };

  const redeemReward = (reward: Reward) => {
    if (points >= reward.points) {
      const newPoints = points - reward.points;
      const newEntry = { date: new Date().toLocaleDateString(), points: -reward.points, action: `Redeemed: ${reward.name}` };
      const newHistory = [newEntry, ...history].slice(0, 5);

      setPoints(newPoints);
      setHistory(newHistory);

      localStorage.setItem("lola_points", newPoints.toString());
      localStorage.setItem("lola_history", JSON.stringify(newHistory));
      return true;
    }
    return false;
  };

  return { points, history, addPoints, redeemReward };
}
