import { LineChart, Line, XAxis, YAxis, Tooltip,  ResponsiveContainer, CartesianGrid,} from "recharts";
import { performanceData } from './data.jsx';
export const PerformanceDashboard = () =>{
  return (
  <div>
      <div className="w-full h-full">
      {/* Header */}
      <div className="mb-4 text-center ">
        <h3 className="text-lg font-semibold text-white">
          Investment Performance - <span className="text-green-500">Monthy</span>
        </h3>
      </div>

      {/* Chart */}
      
      <div className="">
      <ResponsiveContainer width="200%" height={240} >
        <LineChart data={performanceData}  margin={{ top: 10, right: 30, left: -20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="name" stroke="#9ca3af"
           interval={0}  tick={{ fontSize: 12 }} padding={{ left: 20, right: 20 }} />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
}
