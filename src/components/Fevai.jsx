import React from 'react'
import Button from '../shared/Button'
import BotpressWebchat from './BotpressWebchat'
import { Link } from 'react-router'

const Fevai = () => {
  return (
    <div className='h-fit min-h-dvh bg-neutral-900 text-white'>
      <div className='p-10 space-y-5'>
        <h1 className='text-4xl md:text-5xl font-medium'>
          Your AI Companion <br /> for Smarter <br />Money Decisions
        </h1>
        <p>
          Ask questions. Get answers. <br />
          Control your money effortlessly
        </p>
        <Link to="/fevai-chat">
          <Button title='Start Chatting Now' />
        </Link>
      </div>

      {/* New Section */}
      <div className='p-10 pt-5 space-y-6 text-white'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center text-emerald-400'>FEVAI</h2>
        <p className='text-center text-lg text-gray-300'>
          AI Financial Advisor for Banks & Fintechs
        </p>
        <p className='text-center max-w-3xl mx-auto text-gray-400'>
          Plug into real-time financial guidance, budgeting, saving, and spending insights,
          delivered instantly with our live API.
        </p>
        <div className='flex justify-center '>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8'>
            <div>
              <h3 className='text-xl font-semibold text-emerald-300 mb-4'>✅ For Customers</h3>
              <ul className='space-y-2 text-gray-300'>
                <li>💰 Smart money advice</li>
                <li>📊 Budgets & savings plans</li>
                <li>📉 Spending insights</li>
                <li>🧠 24/7 AI support</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-emerald-300 mb-4'>✅ For Banks</h3>
              <ul className='space-y-2 text-gray-300'>
                <li>🔧 Easy API integration</li>
                <li>🔐 Bank-grade security</li>
                <li>📈 Higher engagement</li>
                <li>🌍 Scalable across users</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-center mt-10 space-y-3'>
          <p className='text-lg text-gray-200'>💬 Try the Demo Above</p>
          <p className='text-lg text-emerald-400 underline cursor-pointer'>🔗 API Ready – Request Access Now</p>
        </div>

        <footer className='text-center text-sm text-gray-500 pt-8 border-t border-gray-700 mt-10'>
          FEVAI by Eden CloudWave Technology <br />
          <span className='italic text-gray-400'>Smarter Finance. Simpler Lives.</span>
        </footer>
      </div>
    </div>
  )
}

export default Fevai
