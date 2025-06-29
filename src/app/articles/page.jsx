"use client";

import React, { useState, useMemo } from "react";
import { Brain, Code2, Coins, Smartphone, Shield, TrendingUp, Cpu, Globe, Database, Zap, Settings, Star, Search, Calendar, ExternalLink } from "lucide-react";
import LottieWrapper from "./LottieWrapper";
import data from "../../data/articles/articles-list.json";

const categoryIcons = { "AI": Brain, "Machine Learning": Brain, "Web Development": Code2, "Frontend": Code2, "Backend": Database, "Blockchain": Coins, "Cryptocurrency": Coins, "Mobile": Smartphone, "Security": Shield, "DevOps": Settings, "Cloud": Globe, "Performance": Zap, "Trending": TrendingUp, "Hardware": Cpu, "All": Star };

const getCategoryIcon = (category) => categoryIcons[category] || Settings;

const CategoryBadge = ({ category, primary = false }) => {
  const Icon = getCategoryIcon(category);
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${primary ? "bg-cyan-500/90 backdrop-blur text-white shadow-xl border border-cyan-400/30" : "bg-slate-700/60 text-slate-300"}`}>
      <Icon size={12} />
      {category}
    </span>
  );
};

const ArticleCard = ({ article, index, onHover }) => (
  <div className="flex justify-center group" onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)}>
    <a className="relative flex flex-col h-[450px] w-[380px] max-sm:w-full max-sm:max-w-[350px] overflow-hidden rounded-2xl bg-[#01011B] border border-cyan-500/30 transition-all duration-500 hover:border-cyan-400/80 hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:scale-[1.02] hover:-translate-y-1 hover:bg-cyan-500/5" href={article.link} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
        <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-cyan-900/40" />
      </div>
      <div className="flex flex-col p-6 h-[250px] justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white leading-tight mb-3 min-h-[3.5rem]">{article.title}</h3>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <div className="flex items-center gap-1 text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
              <Calendar size={12} />
              <span>{article.pubDate}</span>
            </div>
            {article.categories?.slice(0, 2).map((cat, i) => (
              <div key={i} className="flex items-center gap-1 text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
                {React.createElement(getCategoryIcon(cat), { size: 12 })}
                <span>{cat}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed overflow-hidden line-clamp-3">
            {article.description?.length > 120 ? `${article.description.substring(0, 120)}...` : article.description}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-400/50 backdrop-blur-sm">
            <span>Read now</span>
            <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </a>
  </div>
);

const FeaturedCard = ({ article }) => (
  <div className="mb-12 flex justify-center px-6">
    <div className="w-full max-w-6xl flex items-center gap-6 max-lg:flex-col max-lg:gap-4">
      <div className="w-70 h-70 max-lg:hidden flex-shrink-0 absolute left-6">
        <img src="/article/image.svg" alt="Insights" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-[32px] max-lg:text-[28px] max-md:text-[24px] font-bold text-white whitespace-nowrap max-lg:whitespace-normal ml-32 max-lg:ml-0" style={{ fontFamily: 'Kaisei Opti, serif' }}>Latest Insights:</h2>
      <a className="group relative flex h-[240px] max-md:h-auto max-md:flex-col flex-1 overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 hover:bg-cyan-500/5" href={article?.link} target="_blank" rel="noopener noreferrer">
        <div className="w-[40%] max-md:w-full h-full max-md:h-[200px] overflow-hidden">
          <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={article?.img} alt={article?.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-cyan-900/20" />
        </div>
        
        <div className="absolute top-0 right-0 z-10 overflow-hidden">
          <div className="bg-cyan-500/90 backdrop-blur text-white text-xs font-bold px-4 py-2 transform translate-x-3 -translate-y-1 rotate-[5deg] shadow-lg border border-cyan-400/30 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0">
            NEW
          </div>
        </div>
        
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <Calendar size={12} />
              {article?.pubDate}
            </div>
            <h3 className="mb-3 text-[16px] max-md:text-[14px] leading-[20px] max-md:leading-[18px] font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {article?.title?.length > 70 ? `${article.title.substring(0, 70)}...` : article?.title}
            </h3>
            <div className="mb-3 flex gap-[4px] flex-wrap">
              {article?.categories?.map((cat, i) => <CategoryBadge key={i} category={cat} primary />)}
            </div>
          </div>
          <div>
            <p className="text-[11px] leading-[15px] text-gray-400 mb-3">
              {article?.description?.length > 150 ? `${article.description.substring(0, 150)}...` : article?.description}
            </p>
            <div className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-xs transition-all duration-300 group-hover:translate-x-1">
              Read More <ExternalLink size={12} />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const allCategories = useMemo(() => {
    const categories = new Set();
    data.forEach(article => article.categories?.forEach(cat => categories.add(cat)));
    return ["All", ...Array.from(categories)];
  }, []);

  const filteredArticles = useMemo(() => {
    return data.slice(1).filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.categories?.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Floating bubbles (only in lower sections)
  const floatingBubbles = [
    {w:36,h:35,b:'25%',l:'8%',d:'2s',dur:'7s'},
    {w:60,h:58,b:'15%',r:'20%',d:'0.5s',dur:'9s'},
    {w:38,h:36,t:'55%',r:'12%',d:'2.2s',dur:'8.5s'},
    {w:66,h:64,b:'8%',l:'45%',d:'1.2s',dur:'9.5s'}
  ];

  return (
    <div className="flex flex-col min-h-screen relative" style={{backgroundColor: '#01011B'}}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">        
        {/* Floating bubbles */}
        {floatingBubbles.map((b,i) => (
          <div key={`float-${i}`} className="absolute rounded-full floating-circle bg-cyan-500/10 border border-cyan-500/20" 
               style={{width:`${b.w}px`,height:`${b.h}px`,top:b.t,left:b.l,right:b.r,bottom:b.b,animationDelay:b.d,animationDuration:b.dur}} />
        ))}
      </div>

      <div className="mb-12 px-6 max-sm:px-4">
        <div className="flex items-center max-w-7xl mx-auto max-lg:flex-col max-lg:text-center">
          <div className="flex-1 flex flex-col justify-center items-center max-lg:mb-8">
            <div className="text-center">
              <div className="font-bold text-cyan-400 leading-tight tracking-wide text-[96px] max-lg:text-[72px] max-md:text-[56px] max-sm:text-[48px]" style={{fontFamily:'Istok Web, sans-serif',filter:'drop-shadow(0 0 20px rgba(135, 206, 235, 0.2))'}}>Articles</div>
              <div className="text-white mt-6">
                <div className="mb-3 font-bold text-white whitespace-nowrap max-lg:whitespace-normal text-[38px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]" style={{fontFamily:'Kaisei Opti, serif',lineHeight:'1.2'}}>Empowering You to Build the Future</div>
                <p className="font-bold text-white text-[20px] max-lg:text-[18px] max-md:text-[16px]" style={{fontFamily:'Kaisei Opti, serif'}}>Mastering AI, Full-Stack Magic & Blockchain Breakthrough</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[400px] h-[400px] max-[800px]:w-[300px] max-[800px]:h-[300px] max-[550px]:w-[200px] max-[550px]:h-[200px]">
              <LottieWrapper />
            </div>
          </div>
        </div>
      </div>

      <FeaturedCard article={data[0]} />

      <div className="w-full px-6 max-sm:px-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-3 max-sm:gap-2 max-sm:justify-center">
            {allCategories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`flex items-center gap-2 px-6 max-sm:px-4 py-3 max-sm:py-2 rounded-full text-sm max-sm:text-xs font-medium transition-all duration-200 border ${selectedCategory === category ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'bg-transparent text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50'}`}>
                {React.createElement(getCategoryIcon(category), { size: 16 })}
                <span className="max-sm:hidden">{category}</span>
                <span className="sm:hidden">{category.length > 6 ? category.substring(0, 6) + '..' : category}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-auto lg:min-w-[350px] max-sm:min-w-0">
            <input type="text" placeholder="Search article..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 pl-12 bg-transparent border border-cyan-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-200" />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="w-full px-6 max-sm:px-4">
        <div className="bg-transparent rounded-2xl p-8 max-sm:p-4">
          <div className="h-[700px] max-md:h-[600px] max-sm:h-[500px] overflow-y-auto pr-4 max-sm:pr-2 scroll-smooth custom-scrollbar">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-6 pb-4 justify-items-center">
                {filteredArticles.map((article, index) => (
                  <ArticleCard key={index} article={article} index={index} onHover={setHoveredCard} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400 text-lg max-sm:text-center">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@700&family=Kaisei+Opti:wght@700&display=swap');
        .custom-scrollbar::-webkit-scrollbar{width:8px}.custom-scrollbar::-webkit-scrollbar-track{background:rgba(30,41,59,0.3);border-radius:10px;margin:8px 0}.custom-scrollbar::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#06b6d4,#0891b2);border-radius:10px;border:2px solid rgba(30,41,59,0.3);transition:all 0.3s ease}.custom-scrollbar::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#0891b2,#0e7490);border:2px solid rgba(6,182,212,0.2);box-shadow:0 0 10px rgba(6,182,212,0.3)}.custom-scrollbar{scrollbar-width:thin;scrollbar-color:#06b6d4 rgba(30,41,59,0.3)}.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.line-clamp-4{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(-3deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-25px) translateX(8px) rotate(7deg);
            opacity: 0.7;
          }
        }
        
        .floating-circle {
          animation: float infinite ease-in-out;
          backdrop-filter: blur(1px);
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Articles;