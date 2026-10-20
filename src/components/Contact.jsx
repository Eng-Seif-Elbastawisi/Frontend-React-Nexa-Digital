import { useState } from "react";
const contactDetails = [
  {
    title: "Phone",
    text: "+201223773256",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "seifelbastawisi@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "Mansoura City, Dakahlia, Egypt",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "52306cd9-5647-4036-94c4-402a9ab1401e");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            result.message || "Failed to send your message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="app-container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* contact info */}
        <div>
          <span className="section-subheader">Get in Touch</span>

          <h2 className="section-header">
            Let's Build <span className="gradient-text">Something</span> Great
            Together.
          </h2>

          <p className="section-description">
            Have a project in mind? Tell us about your goals, challenges, and
            ideas. Let's discuss how the right digital solution can help your
            business move forward.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map((detail, i) => (
              <div className="contact-info-group" key={i}>
                <div className="form-icon">{detail.icon}</div>

                <div>
                  <h3 className="contact-title">{detail.title}</h3>
                  <p className="contact-text">{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="form-input-label">
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="form-input-label">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="form-input-label">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="form-input-label">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn-primary w-full mt-6 disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
