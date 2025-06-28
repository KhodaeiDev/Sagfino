import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

interface Props {
  users: number
  ads: number
}

const MyChartComponent: React.FC<Props> = ({ users, ads }) => {
  const data = [
    {
      name: 'آمار کلی',
      کاربران: users,
      آگهی‌ها: ads,
    },
  ]

  const legendFormatter = (value: string) => (
    <span style={{ paddingRight: 8, fontWeight: 'bold' }}>{value}</span>
  )

  return (
    <ResponsiveContainer width="100%" height={400}>
   <BarChart data={data} barGap={20} barCategoryGap={100}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="name"
    tick={{ fontSize: 12 }}
    tickMargin={16}
  />
  <YAxis
    allowDecimals={false}
    tick={{ fontSize: 12 }}
    tickMargin={16}
  />
  <Tooltip /> 
  <Legend
    verticalAlign="top"
    height={36}
    iconSize={16}
    formatter={legendFormatter}
  />
  <Bar
    dataKey="کاربران"
    fill="#4F46E5"
    radius={[6, 6, 0, 0]}
                  fillOpacity={1}
                  animationDuration={2000} 
    
  />
  <Bar
    dataKey="آگهی‌ها"
    fill="#10B981"
    radius={[6, 6, 0,0 ]}
                  fillOpacity={1}
                  animationDuration={2000} 

  />
</BarChart>

    </ResponsiveContainer>
  )
}

export default MyChartComponent
