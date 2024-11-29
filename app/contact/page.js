'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">Have a question or want to make a reservation? Fill out the form and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitSuccess && (
              <p className="text-green-500 mt-4">Thank you for your message. We'll get back to you soon!</p>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="mb-4">123 Lounge Street<br />Nightlife City, NC 12345</p>
            
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="mb-4">
              Monday - Thursday: 5pm - 1am<br />
              Friday - Saturday: 5pm - 3am<br />
              Sunday: Closed
            </p>

            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="mb-4">
              Phone: (123) 456-7890<br />
              Email: info@jblounge.com
            </p>

            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215381669648!2d-73.98823492426965!3d40.75838383589536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1623252352744!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

