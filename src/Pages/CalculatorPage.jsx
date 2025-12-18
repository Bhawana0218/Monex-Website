import React, { useState} from 'react';
import { Calculator, Home, Car, BarChart3, CreditCard, Shield, CheckCircle, AlertCircle, ArrowRight, PieChart} from 'lucide-react';
import { motion } from 'framer-motion';

const CalculatorPage = () => {
  const [activeTab, setActiveTab] = useState('emi');
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    tenure: '',
    propertyValue: '',
    downPayment: '',
    monthlyIncome: '',
    otherEmi: '',
    carPrice: '',
    downPaymentCar: ''
  });
  const [results, setResults] = useState({});
  const [comparisonData, setComparisonData] = useState([]);
  const [eligibilityResult, setEligibilityResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = parseFloat(formData.interestRate) / 1200;
    const tenure = parseInt(formData.tenure) * 12;

    if (principal && rate && tenure) {
      const emi = principal * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - principal;

      setResults({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      });
    }
  };

  const calculateHomeLoan = () => {
    const loanAmount = parseFloat(formData.propertyValue) - parseFloat(formData.downPayment);
    const rate = parseFloat(formData.interestRate) / 1200;
    const tenure = parseInt(formData.tenure) * 12;

    if (loanAmount > 0 && rate && tenure) {
      const emi = loanAmount * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - loanAmount;

      setResults({
        loanAmount,
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      });
    }
  };

  const calculatePersonalLoan = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = parseFloat(formData.interestRate) / 1200;
    const tenure = parseInt(formData.tenure) * 12;

    if (principal && rate && tenure) {
      const emi = principal * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - principal;

      setResults({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      });
    }
  };

  const calculateCarLoan = () => {
    const loanAmount = parseFloat(formData.carPrice) - parseFloat(formData.downPaymentCar);
    const rate = parseFloat(formData.interestRate) / 1200;
    const tenure = parseInt(formData.tenure) * 12;

    if (loanAmount > 0 && rate && tenure) {
      const emi = loanAmount * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - loanAmount;

      setResults({
        loanAmount,
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      });
    }
  };

  const compareInterestRates = () => {
    const rates = [7, 8, 9, 10, 11, 12];
    const principal = parseFloat(formData.loanAmount);
    const tenure = parseInt(formData.tenure) * 12;

    const comparison = rates.map(rate => {
      const monthlyRate = rate / 1200;
      const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - principal;
      
      return {
        rate,
        emi: emi.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      };
    });

    setComparisonData(comparison);
  };

  const checkEligibility = () => {
    const income = parseFloat(formData.monthlyIncome);
    const otherEmi = parseFloat(formData.otherEmi);
    const loanAmount = parseFloat(formData.loanAmount);

    if (income && otherEmi && loanAmount) {
      const maxEmi = income * 0.5;
      const eligible = (maxEmi - otherEmi) * 12 * 5; 

      setEligibilityResult({
        eligible: loanAmount <= eligible,
        maxEligible: eligible.toFixed(2),
        monthlyIncome: income,
        otherEmi: otherEmi
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (activeTab) {
      case 'emi':
        calculateEMI();
        break;
      case 'home':
        calculateHomeLoan();
        break;
      case 'personal':
        calculatePersonalLoan();
        break;
      case 'car':
        calculateCarLoan();
        break;
      case 'compare':
        compareInterestRates();
        break;
      case 'eligibility':
        checkEligibility();
        break;
    }
  };

  const tabs = [
    { id: 'emi', label: 'EMI Calculator', icon: Calculator },
    { id: 'home', label: 'Home Loan', icon: Home },
    { id: 'personal', label: 'Personal Loan', icon: CreditCard },
    { id: 'car', label: 'Car Loan', icon: Car },
    { id: 'compare', label: 'Rate Compare', icon: BarChart3 },
    { id: 'eligibility', label: 'Eligibility', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-linear-to-r from-gray-900 via-indigo-900 to-gray-900 py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6">
            <h1 className="text-5xl mt-2 font-extrabold">
              Monex <span className="text-cyan-500">Calculator</span>
            </h1>
          </motion.div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto -mb-4">
            Your comprehensive financial companion for smart loan decisions and investment planning
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="sticky z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between space-x-1 py-4">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-md'
                  }`}>
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 border border-white/20"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center">
              {(() => {
                const Icon = tabs.find(t => t.id === activeTab)?.icon;
                return Icon ? <Icon className="h-8 w-8 mr-4 text-blue-300" /> : null;
              })()}
              {tabs.find(t => t.id === activeTab)?.label} Calculator
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-cyan-600 mt-2 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {activeTab === 'emi' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter loan amount"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter interest rate"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Tenure (Years)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter tenure in years"
                    required
                  />
                </div>
              </>
            )}

            {activeTab === 'home' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Property Value (₹)</label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter property value"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Down Payment (₹)</label>
                  <input
                    type="number"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter down payment"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter interest rate"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Tenure (Years)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter tenure in years"
                    required
                  />
                </div>
              </>
            )}

            {activeTab === 'personal' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter loan amount"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter interest rate"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Tenure (Years)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter tenure in years"
                    required
                  />
                </div>
              </>
            )}

            {activeTab === 'car' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Car Price (₹)</label>
                  <input
                    type="number"
                    name="carPrice"
                    value={formData.carPrice}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter car price"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Down Payment (₹)</label>
                  <input
                    type="number"
                    name="downPaymentCar"
                    value={formData.downPaymentCar}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter down payment"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter interest rate"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Tenure (Years)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter tenure in years"
                    required
                  />
                </div>
              </>
            )}

            {activeTab === 'compare' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter loan amount"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Tenure (Years)</label>
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter tenure in years"
                    required
                  />
                </div>
              </>
            )}

            {activeTab === 'eligibility' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Monthly Income (₹)</label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter monthly income"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Other EMI (₹)</label>
                  <input
                    type="number"
                    name="otherEmi"
                    value={formData.otherEmi}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter other EMI obligations"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-200">Desired Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-200"
                    placeholder="Enter desired loan amount"
                    required
                  />
                </div>
              </>
            )}

            <div className="md:col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
            
                <span>Calculate Now</span>
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </div>
          </form>

          {/* Results Section */}
          {Object.keys(results).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-300/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="h-7 w-7 text-green-400 mr-3" />
                Calculation Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-blue-200 mb-2">Monthly EMI</div>
                  <div className="text-3xl font-bold text-blue-300">₹{results.emi || results.monthlyEmi}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-red-200 mb-2">Total Interest</div>
                  <div className="text-3xl font-bold text-red-300">₹{results.totalInterest || results.interest}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-green-200 mb-2">Total Amount</div>
                  <div className="text-3xl font-bold text-green-300">₹{results.totalAmount || results.total}</div>
                </div>
              </div>
            </motion.div>
          )}
          {/* Comparison Results */}
          {comparisonData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8" >
              <h3 className="text-2xl font-bold text-white mb-6">Interest Rate Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <thead className="bg-white/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-blue-200">Interest Rate (%)</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-blue-200">Monthly EMI (₹)</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-blue-200">Total Interest (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
                        <td className="px-6 py-4 text-sm text-white">{item.rate}%</td>
                        <td className="px-6 py-4 text-sm text-blue-300 font-semibold">₹{item.emi}</td>
                        <td className="px-6 py-4 text-sm text-red-300">₹{item.totalInterest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Eligibility Result */}
          {eligibilityResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-6 rounded-xl border-2 backdrop-blur-sm ${
                eligibilityResult.eligible 
                  ? 'bg-green-500/20 border-green-300/30' 
                  : 'bg-red-500/20 border-red-300/30'
              }`} >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                {eligibilityResult.eligible ? (
                  <CheckCircle className="h-7 w-7 text-green-400 mr-3" />
                ) : (
                  <AlertCircle className="h-7 w-7 text-red-400 mr-3" />
                )}
                Eligibility Result
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-blue-200 mb-2">Maximum Eligible Amount</div>
                  <div className="text-3xl font-bold text-green-300">₹{eligibilityResult.maxEligible}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-sm text-blue-200 mb-2">Your Requested Amount</div>
                  <div className={`text-3xl font-bold ${eligibilityResult.eligible ? 'text-green-300' : 'text-red-300'}`}>
                    ₹{formData.loanAmount}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className={`text-base ${eligibilityResult.eligible ? 'text-green-200' : 'text-red-200'}`}>
                  {eligibilityResult.eligible 
                    ? 'Congratulations! You are eligible for the requested loan amount.'
                    : 'Based on your income and existing obligations, you may not be eligible for the requested loan amount.'
                  }
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="bg-blue-500/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
              <PieChart className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Visual Analysis</h3>
            <p className="text-blue-100">Get detailed breakdowns and visual representations of your loan calculations.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="bg-green-500/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-green-500/30 transition-all duration-300">
              <Shield className="h-8 w-8 text-green-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Secure & Accurate</h3>
            <p className="text-blue-100">Enterprise-grade security with precise calculations powered by advanced algorithms.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="bg-purple-500/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
              <BarChart3 className="h-8 w-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Real-time Comparison</h3>
            <p className="text-blue-100">Compare multiple scenarios instantly to find the best financial option.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CalculatorPage;
