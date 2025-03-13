import React from 'react'
import { TiTick } from 'react-icons/ti'

export interface Step {
  id: number
  status: 'completed' | 'active' | 'pending'
}

interface ProgressBarProps {
  steps: Step[]
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step) => (
        <React.Fragment key={step.id}>
          <div
            className={`w-5 h-5 lg:w-6.25 lg:h-6.25 rounded-full flex justify-center items-center ${
              step.status === 'completed'
                ? 'bg-primary-tint-6'
                : step.status === 'active'
                ? 'bg-primary-tint-6 animate-spin'
                : 'bg-gray-ED'
            }`}
          >
            {step.status === 'completed' && (
              <TiTick className="text-white w-4.5 h-4.5" />
            )}
            {step.status === 'active' && (
              <div className="w-3 h-3 border-1 border-white border-t-transparent border-solid rounded-full"></div>
            )}
          </div>

          {step.id < steps.length && (
            <div
              className={`h-0.5 shrink-0 grow ${
                step.status === 'completed' ||
                steps.find((step) => step.id === step.id + 1)?.status ===
                  'active'
                  ? 'bg-primary-tint-6'
                  : 'bg-gray-E1'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressBar
