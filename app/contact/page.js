"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Facebook, Instagram, Calendar, Users } from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateTimeChange = ({ date, timeSlots }) => {
    if (date) {
      const defaultTime = "12:30"; // Default time to populate
      const formattedDate = `${date.toISOString().slice(0, 10)}T${defaultTime}`;
      document.getElementById("datetime").value = formattedDate;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Format the booking message for WhatsApp
    const message = `New Booking Request:\nName: ${data.name}\nEmail: ${
      data.email
    }\nPhone: ${data.phone}\nDate: ${data.datetime.split("T")[0]}\nTime: ${
      data.datetime.split("T")[1]
    }\nGuests: ${data.guests}\nMessage: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp phone number (replace with actual business number)
    const phoneNumber = "917217070370";

    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Simulate a delay for user feedback
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Step interval: 30 minutes
  const step = 1800; // 30 minutes in seconds

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              Have a question or want to make a reservation? Fill out the form
              and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid phone number (10 digits required)",
                    },
                  })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="datetime" className="block mb-1">
                  Date and Time
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    selected={selectedDate}
                    onSelect={(date) => {
                      // Update the selected date in the state and call the handler
                      setSelectedDate(date);
                      handleDateTimeChange({ date }); // Automatically populate the date and time
                    }}
                    // Disable past dates
                    disabled={{
                      before: new Date(), // Disables any date before today
                    }}
                  />
                  <input
                    type="datetime-local"
                    id="datetime"
                    {...register("datetime", {
                      required: "Date and time are required",
                      validate: (value) => {
                        const selectedDateTime = new Date(value);
                        const now = new Date();

                        // Validation rules:
                        // Ensure the selected time is between 12:00 PM and 2:00 AM (next day)
                        const startTime = new Date(selectedDateTime);
                        startTime.setHours(12, 0, 0, 0); // Set to 12:00 PM of the selected date

                        const isInFuture = selectedDateTime >= now; // Only future times are allowed

                        if (!isInFuture) {
                          return "You can only select today's or future dates.";
                        }

                        return true;
                      },
                    })}
                    className="w-full px-3 py-2 bg-gray-800 pl-10 rounded-md"
                  />
                </div>
                {errors.datetime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.datetime.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="guests" className="block mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    id="guests"
                    {...register("guests", {
                      required: "Number of guests is required",
                      min: {
                        value: 1,
                        message: "At least 1 guest is required",
                      },
                    })}
                    className="w-full px-3 py-2 bg-gray-800 pl-10 rounded-md"
                  />
                </div>
                {errors.guests && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.guests.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          </div>

          {/* Sidebar Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="mb-4">
              Tourist Complex Area, Near Man Singh Palace, Vibhav Nagar,
              Tajganj, Agra, Uttar Pradesh-282001
            </p>

            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="mb-4">
              Monday - Sunday
              <br />
              12:30 PM - 2:00 AM
            </p>

            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="mb-4">
              Phone: +91 72170 70370
              <br />
              Email: concierge@jbsloungeandbar.com
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jbs.lounge_bar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/JBsLoungeAndBar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26328.042697182325!2d78.033724!3d27.161058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974719918b77377%3A0x769ba35f95fbb606!2sJB&#39;s%20Lounge%20and%20Bar!5e1!3m2!1sen!2sin!4v1733005948177!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
