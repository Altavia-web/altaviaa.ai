'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Please enter your name (at least 2 characters)' : null;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : null;
      case 'company':
        return value.trim().length < 2 ? 'Please enter your company name' : null;
      default:
        return null;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      hearAboutUs: formData.get('hearAboutUs') as string,
      message: formData.get('message') as string,
    };

    // Validate all required fields
    const newErrors: Record<string, string> = {};
    const nameError = validateField('name', data.name);
    const emailError = validateField('email', data.email);
    const companyError = validateField('company', data.company);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (companyError) newErrors.company = companyError;

    // If there are errors, update state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to API
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setErrors({});

        // Reset form after 3 seconds
        setTimeout(() => {
          (e.target as HTMLFormElement).reset();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002e64] mb-4 leading-tight">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We look forward to hearing from you and are happy to advise you on our NetSuite solutions.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
          className="space-y-6 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-[#002e64] mb-2"
            >
              Name<span aria-label="Required field" className="text-[#ff4100] ml-1">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="John Doe"
              onBlur={handleBlur}
              className="w-full bg-[#eaf3f9] border border-transparent rounded-lg px-4 py-3 text-base text-[#002e64] focus:border-[#5095cb] focus:ring-2 focus:ring-[#a8dcf4] focus:outline-none transition-all"
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-2 text-sm text-[#ff4100] flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-[#002e64] mb-2"
            >
              Email<span aria-label="Required field" className="text-[#ff4100] ml-1">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="john.doe@company.com"
              onBlur={handleBlur}
              className="w-full bg-[#eaf3f9] border border-transparent rounded-lg px-4 py-3 text-base text-[#002e64] focus:border-[#5095cb] focus:ring-2 focus:ring-[#a8dcf4] focus:outline-none transition-all"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-2 text-sm text-[#ff4100] flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label
              htmlFor="company"
              className="block font-semibold text-[#002e64] mb-2"
            >
              Company<span aria-label="Required field" className="text-[#ff4100] ml-1">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'company-error' : undefined}
              placeholder="Your Company Ltd."
              onBlur={handleBlur}
              className="w-full bg-[#eaf3f9] border border-transparent rounded-lg px-4 py-3 text-base text-[#002e64] focus:border-[#5095cb] focus:ring-2 focus:ring-[#a8dcf4] focus:outline-none transition-all"
            />
            {errors.company && (
              <p id="company-error" role="alert" className="mt-2 text-sm text-[#ff4100] flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.company}
              </p>
            )}
          </div>

          {/* Hear About Us Field */}
          <div>
            <label
              htmlFor="hearAboutUs"
              className="block font-semibold text-[#002e64] mb-2"
            >
              How did you hear about us?
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              className="w-full bg-[#eaf3f9] border border-transparent rounded-lg px-4 py-3 text-base text-[#002e64] focus:border-[#5095cb] focus:ring-2 focus:ring-[#a8dcf4] focus:outline-none transition-all"
            >
              <option value="">Please select...</option>
              <option value="Google">Google</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral">Referral</option>
              <option value="NetSuite">NetSuite</option>
              <option value="Event">Event</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-[#002e64] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              maxLength={2000}
              placeholder="Your message to us..."
              className="w-full bg-[#eaf3f9] border border-transparent rounded-lg px-4 py-3 text-base focus:border-[#5095cb] focus:ring-2 focus:ring-[#a8dcf4] focus:outline-none transition-all resize-y"
            />
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-600">
            We use your data exclusively in accordance with our{' '}
            <Link
              href="/en/privacy"
              className="text-[#5095cb] hover:text-[#002e64] underline transition-colors"
            >
              Privacy Policy
            </Link>.
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-700">
                Thank you! Your message has been sent successfully.
                We will get back to you shortly.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700">
                Error sending message. Please try again later.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#5095cb] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#002e64] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Contact Now</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
