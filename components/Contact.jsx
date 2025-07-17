"use client"

import { forwardRef, useState } from "react";

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Estado para manejar el estado del envío (idle, sending, success, error) y mensajes
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    // Asegúrate de pasar 'e' como argumento
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Haz la función asíncrona
    e.preventDefault();
    setSubmissionStatus("sending");
    setResponseMessage(""); // Limpia mensajes anteriores

    try {
      const response = await fetch("/api/contactMail", {
        // Ruta a tu API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          // La API solo espera name, email y message, así que solo envía esos.
          // Si quieres enviar phone y company, tendrás que modificar tu API.
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        setResponseMessage(data.message || "¡Mensaje enviado con éxito!");
        setFormData({
          // Opcional: limpiar el formulario después del envío exitoso
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmissionStatus("error");
        setResponseMessage(
          data.message || "Hubo un error al enviar el mensaje."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmissionStatus("error");
      setResponseMessage(
        "Hubo un problema de conexión. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <section ref={ref} className="contact-section">
      <div className="contact-overlay"> </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">
              The energy
              <br />
              revolution the
              <br />
              world needs
            </h2>
            <p className="contact-subtitle">
              Ready to transform stranded energy into sustainable computing
              power? Let&apos;s discuss how Grid Mine can power your digital
              infrastructure with clean, efficient solutions.
            </p>
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Rio Mayo, Argentina</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="info-content">
                  <h4>Contact</h4>
                  <p>tomassgro@gmail.com</p>
                  <p>jeronimo@gridmine.io</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input full-width"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input full-width"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input full-width"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input full-width"
                />
              </div>

              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={5}
                  required
                ></textarea>
              </div>

              <div className="form-row">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={submissionStatus === "sending"} // Deshabilita el botón durante el envío
                >
                  <span>
                    {submissionStatus === "sending" ? "Sending..." : "Submit"}
                  </span>
                  {submissionStatus !== "sending" && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M12 6l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Muestra mensajes de estado */}
              {responseMessage && (
                <div
                  className={`form-message ${
                    submissionStatus === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
ContactSection.displayName = "ContactSection";

export default ContactSection;