'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Reservation() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Here you would typically send the reservation data to your backend
    // and integrate with WhatsApp API
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
    
    // Prepare WhatsApp message
    const message = `New Reservation at JB's Lounge:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Date: ${data.date}
Time: ${data.time}
Guests: ${data.guests}`

    // Send WhatsApp message (this is a placeholder - you'll need to implement the actual WhatsApp API integration)
    const whatsappNumber = '1234567890' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Make a Reservation at JB&apos;s Lounge</h1>

        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">Date</label>
              <input
                type="date"
                id="date"
                {...register('date', { required: 'Date is required' })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
            </div>
            <div>
              <label htmlFor="time" className="block mb-1">Time</label>
              <input
                type="time"
                id="time"
                {...register('time', { required: 'Time is required' })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
            </div>
            <div>
              <label htmlFor="guests" className="block mb-1">Number of Guests</label>
              <input
                type="number"
                id="guests"
                {...register('guests', { required: 'Number of guests is required', min: 1 })}
                className="w-full px-3 py-2 bg-gray-700 rounded-md"
              />
              {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Make Reservation'}
            </button>
          </form>

          {submitSuccess && (
            <p className="text-green-500 mt-4 text-center">Thank you for your reservation at JB&apos;s Lounge. We&apos;ll confirm it shortly via WhatsApp!</p>
          )}
        </div>
      </div>
    </div>
  )
}

