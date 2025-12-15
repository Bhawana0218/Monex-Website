 
 import React from 'react';
 import { Target, Zap, Lock, TrendingUp, Shield, IndianRupee, Users, Activity, Wallet , TrendingDown, CreditCard, BarChart2, PieChart} from 'lucide-react';
 // Mock data for charts
  const performanceData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 550 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 580 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 380 },
    { name: 'Jul', value: 400 },
    { name: 'Aug', value: 830 },
    { name: 'Sep', value: 720 },
    { name: 'Oct', value: 800 },
    { name: 'Nov', value: 930 },
    { name: 'dec', value: 1000 },

  ];

   const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Monex transformed our financial strategy completely. Their expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investor",
      content: "Professional service with exceptional results. Highly recommended!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Customized financial strategies aligned with your business objectives",
      details: "Comprehensive strategic planning services that help you navigate complex financial landscapes with confidence."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Market Analysis",
      description: "In-depth market research and trend analysis for informed decisions",
      details: "Real-time market intelligence and predictive analytics to stay ahead of market movements."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Risk Management",
      description: "Comprehensive security protocols and risk mitigation strategies",
      details: "Advanced risk assessment tools and mitigation strategies to protect your investments."
    }
  ];

  const tools = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Portfolio Tracker",
      description: "Real-time portfolio monitoring and performance analytics"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Wealth Calculator",
      description: "Project your financial growth with our advanced calculators"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Expense Manager",
      description: "Track and optimize your spending patterns"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Risk Analyzer",
      description: "Comprehensive risk assessment tools"
    }
  ];

  const stats = [
    { number: "₹2.5B+", label: "Assets Under Management" },
    { number: "15K+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Years Experience" }
  ];

    const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Monitor your investments with live updates and insights"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Bank-level security with 256-bit encryption"
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      title: "Smart Portfolios",
      description: "AI-powered portfolio optimization and rebalancing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "24/7 access to certified financial advisors"
    }
  ];

const growthData = [
  { year: "2019", value: 20 },
  { year: "2020", value: 38 },
  { year: "2021", value: 58 },
  { year: "2022", value: 90 },
  { year: "2023", value: 80 },
  { year: "2024", value: 130 },
  {year: "2025", value: 150}
];


  const financialservices = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      description:
        "Flexible personal loans with competitive interest rates to meet your financial goals.",
    },
    {
      icon: BarChart2,
      title: "Investment Planning",
      description:
        "Expert investment strategies to grow your wealth and secure your future.",
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description:
        "Comprehensive insurance plans protecting your family, health, and assets.",
    },
    {
      icon: PieChart,
      title: "Wealth Management",
      description:
        "Personalized wealth management services to maximize your financial potential.",
    },
  ];

export { performanceData, services , tools,  testimonials, stats ,features , growthData, financialservices};