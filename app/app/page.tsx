"use client";

import { useState } from "react";
import { Play, Heart, Eye, Search, Upload } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  category: string;
  duration: string;
}

const mockVideos: Video[] = [
  { id: 1, title: "অসাধারণ স্ট্রিট ফুড চ্যালেঞ্জ 🔥", thumbnail: "https://picsum.photos/id/1015/400/225", views: 12400, likes: 3420, category: "Entertainment", duration: "12:45" },
  { id: 2, title: "নতুন আইফোন ১৭ প্রো আনবক্সিং", thumbnail: "https://picsum.photos/id/106/400/225", views: 8900, likes: 1250, category: "Tech", duration: "08:20" },
  { id: 3, title: "বাংলাদেশ vs পাকিস্তান হাইলাইটস", thumbnail: "https://picsum.photos/id/1074/400/225", views: 45600, likes: 8920, category: "Sports", duration: "15:10" },
  { id: 4, title: "রান্নাঘরের জাদুকরী টিপস", thumbnail: "https://picsum.photos/id/1080/400/225", views: 6700, likes: 980, category: "Cooking", duration: "06:55" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Entertainment", "Tech", "Sports", "Cooking"];

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Viral Zone</h1>
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="ভিডিও খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 pl-11 py-3 rounded-full focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full font-medium">
            <Upload className="w-5 h-5" />
            আপলোড
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-zinc-800">
        <div className="flex gap-3 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat ? "bg-white text-black font-medium" : "bg-zinc-900 hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Trending এখন 🔥</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map(video => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded">{video.duration}</div>
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                <div className="flex gap-4 text-sm text-zinc-400 mt-2">
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{video.views.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500" />{video.likes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
