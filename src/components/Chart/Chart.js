import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import './Chart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Chart({ coinHistory }) {
  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price)
    coinTimestamp.push(
      moment(coinHistory?.data?.history[i].timestamp).startOf('ss').fromNow()
    )
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        fill: false,
        backgroundColor: 'rgb(88, 204, 140)',
        borderColor: 'rgb(88, 204, 140)',
        data: coinPrice,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  )
}
