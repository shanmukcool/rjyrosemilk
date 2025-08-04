import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Crown, Sparkles } from 'lucide-react';

interface DataPoint {
  year: number;
  customers: number;
  milestone?: string;
}

const CustomerGrowthChart: React.FC = () => {
  const [animatedData, setAnimatedData] = useState<DataPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Historical customer data (daily averages)
  const data: DataPoint[] = [
    { year: 1950, customers: 50, milestone: 'Humble Beginning' },
    { year: 1955, customers: 120, milestone: 'Word Spreads' },
    { year: 1960, customers: 250, milestone: 'Local Favorite' },
    { year: 1965, customers: 400, milestone: 'Growing Fame' },
    { year: 1970, customers: 600, milestone: 'City Icon' },
    { year: 1975, customers: 800, milestone: 'Silver Jubilee' },
    { year: 1980, customers: 1000, milestone: 'Thousand Mark' },
    { year: 1985, customers: 1200, milestone: 'Steady Growth' },
    { year: 1990, customers: 1500, milestone: 'Regional Fame' },
    { year: 1995, customers: 1800, milestone: 'Three Generations' },
    { year: 2000, customers: 2200, milestone: 'New Millennium' },
    { year: 2005, customers: 2800, milestone: 'Digital Age' },
    { year: 2010, customers: 3500, milestone: 'Social Media Boost' },
    { year: 2015, customers: 4200, milestone: 'Heritage Recognition' },
    { year: 2020, customers: 4800, milestone: 'Pandemic Resilience' },
    { year: 2025, customers: 5500, milestone: 'Platinum Jubilee' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate data points with staggered delay
            data.forEach((point, index) => {
              setTimeout(() => {
                setAnimatedData(prev => [...prev, point]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const chartElement = document.getElementById('customer-chart');
    if (chartElement) {
      observer.observe(chartElement);
    }

    return () => observer.disconnect();
  }, []);

  // Chart dimensions and calculations
  const chartWidth = 800;
  const chartHeight = 400;
  const padding = { top: 40, right: 60, bottom: 80, left: 80 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxCustomers = Math.max(...data.map(d => d.customers));
  const minYear = Math.min(...data.map(d => d.year));
  const maxYear = Math.max(...data.map(d => d.year));

  // Scale functions
  const xScale = (year: number) => ((year - minYear) / (maxYear - minYear)) * innerWidth;
  const yScale = (customers: number) => innerHeight - (customers / maxCustomers) * innerHeight;

  // Generate path for the line
  const generatePath = (points: DataPoint[]) => {
    if (points.length === 0) return '';
    
    let path = `M ${xScale(points[0].year)} ${yScale(points[0].customers)}`;
    
    for (let i = 1; i < points.length; i++) {
      const currentPoint = points[i];
      path += ` L ${xScale(currentPoint.year)} ${yScale(currentPoint.customers)}`;
    }
    
    return path;
  };

  return (
    <div id="customer-chart" className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gold/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8B2635 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center bg-rose-500 rounded-full px-6 py-3 mb-4 shadow-lg border-2 border-gold/50">
            <TrendingUp className="h-5 w-5 text-cream mr-2" />
            <span className="text-cream font-bold font-serif">Growth Analytics</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-serif">
            <span className="block text-rose-500">Daily Customer Growth</span>
            <span className="block text-mustard">Through the Decades</span>
          </h3>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gold flex-1 max-w-24"></div>
            <div className="mx-4">
              <Crown className="h-6 w-6 text-gold" />
            </div>
            <div className="h-px bg-gold flex-1 max-w-24"></div>
          </div>

          <p className="text-lg text-dark/80 font-serif italic">
            From 50 customers a day in 1950 to over 5,500 today — a testament to unwavering quality and tradition.
          </p>
        </div>

        {/* Chart Container */}
        <div className="relative z-10 flex justify-center">
          <svg 
            width={chartWidth} 
            height={chartHeight} 
            className="overflow-visible"
            style={{ maxWidth: '100%', height: 'auto' }}
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CC0035" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#D4A574" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#B8860B" stopOpacity="0.1" />
              </linearGradient>
              
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CC0035" />
                <stop offset="50%" stopColor="#D4A574" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Chart Area */}
            <g transform={`translate(${padding.left}, ${padding.top})`}>
              {/* Grid Lines */}
              {[0, 1000, 2000, 3000, 4000, 5000].map((value) => (
                <g key={value}>
                  <line
                    x1={0}
                    y1={yScale(value)}
                    x2={innerWidth}
                    y2={yScale(value)}
                    stroke="#D4A574"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <text
                    x={-10}
                    y={yScale(value)}
                    textAnchor="end"
                    dominantBaseline="middle"
                    className="text-xs fill-dark/70 font-serif"
                  >
                    {value.toLocaleString()}
                  </text>
                </g>
              ))}

              {/* Year Labels */}
              {[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025].map((year) => (
                <g key={year}>
                  <line
                    x1={xScale(year)}
                    y1={0}
                    x2={xScale(year)}
                    y2={innerHeight}
                    stroke="#D4A574"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    strokeDasharray="3,3"
                  />
                  <text
                    x={xScale(year)}
                    y={innerHeight + 20}
                    textAnchor="middle"
                    className="text-sm fill-dark/70 font-serif font-bold"
                  >
                    {year}
                  </text>
                </g>
              ))}

              {/* Main Line */}
              {animatedData.length > 1 && (
                <path
                  d={generatePath(animatedData)}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  filter="url(#glow)"
                  className="transition-all duration-1000"
                />
              )}

              {/* Data Points */}
              {animatedData.map((point, index) => (
                <g key={point.year} className="group">
                  {/* Customer Number Label */}
                  <text
                    x={xScale(point.year)}
                    y={yScale(point.customers) - 15}
                    textAnchor="middle"
                    className="text-xs fill-dark font-bold font-serif"
                    style={{
                      animation: isVisible ? `fadeIn 0.5s ease-out ${index * 0.1 + 0.3}s both` : 'none'
                    }}
                  >
                    {point.customers.toLocaleString()}
                  </text>
                  
                  {/* Point Circle */}
                  <circle
                    cx={xScale(point.year)}
                    cy={yScale(point.customers)}
                    r="5"
                    fill="#CC0035"
                    stroke="#FFF"
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      animation: isVisible ? `fadeIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  />
                </g>
              ))}

              {/* Axis Labels */}
              <text
                x={innerWidth / 2}
                y={innerHeight + 60}
                textAnchor="middle"
                className="text-lg fill-dark font-serif font-bold"
              >
                Years
              </text>
              
              <text
                x={-50}
                y={innerHeight / 2}
                textAnchor="middle"
                transform={`rotate(-90, -50, ${innerHeight / 2})`}
                className="text-lg fill-dark font-serif font-bold"
              >
                Daily Customers
              </text>
            </g>
          </svg>
        </div>

        {/* Key Insights */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-cream/50 rounded-2xl p-6 text-center border-2 border-gold/30 shadow-lg">
            <div className="bg-rose-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gold/50">
              <Users className="h-6 w-6 text-cream" />
            </div>
            <div className="text-2xl font-bold text-rose-500 mb-2 font-serif">11,000%</div>
            <div className="text-dark font-semibold font-serif">Growth Rate</div>
            <div className="text-dark/70 text-sm">From 50 to 5,500 daily</div>
          </div>
          
          <div className="bg-cream/50 rounded-2xl p-6 text-center border-2 border-gold/30 shadow-lg">
            <div className="bg-mustard rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gold/50">
              <TrendingUp className="h-6 w-6 text-cream" />
            </div>
            <div className="text-2xl font-bold text-mustard mb-2 font-serif">Steady</div>
            <div className="text-dark font-semibold font-serif">Growth Pattern</div>
            <div className="text-dark/70 text-sm">Consistent year-over-year</div>
          </div>
          
          <div className="bg-cream/50 rounded-2xl p-6 text-center border-2 border-gold/30 shadow-lg">
            <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-rose-500/50">
              <Sparkles className="h-6 w-6 text-cream" />
            </div>
            <div className="text-2xl font-bold text-gold mb-2 font-serif">75</div>
            <div className="text-dark font-semibold font-serif">Years Strong</div>
            <div className="text-dark/70 text-sm">Never a declining year</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerGrowthChart;