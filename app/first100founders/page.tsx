/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Check } from "lucide-react";
import "./First100FoundersCustom.css";

export default function First100FoundersPage() {
  const [selectedPlan, setSelectedPlan] = React.useState("enterprise");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const plans = [
    {
      key: "starter",
      title: "Starter",
      desc: "Perfect for individual contractors",
      price: "$99",
      icon: (
        <div className="founders-plan-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rocket"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </div>
      ),
    },
    {
      key: "professional",
      title: "Professional",
      desc: "Ideal for growing contractors",
      price: "$299",
      icon: (
        <div
          className="founders-plan-icon"
          style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-crown"
          >
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
          </svg>
        </div>
      ),
    },
    {
      key: "enterprise",
      title: "Enterprise",
      desc: "For large contractor teams",
      price: "$999",
      icon: (
        <div
          className="founders-plan-icon"
          style={{
            background: "linear-gradient(135deg, #fb923c 0%, #ef4444 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
      ),
    },
  ];
  const [paymentMethod, setPaymentMethod] = React.useState("paypal");
  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    selectedPlan !== "";

  return (
    <div className="founders-bg">
      <section className="founders-container">
        <div className="founders-container">
          <div className="founders-title">Reserve Your Founder Spot</div>
          <div className="founders-subtitle">
            Join the First 100 Founders and get your business built before 2026
          </div>
          <div className="founders-grid">
            {/* Your Information Card */}
            <div className="founders-card">
              <div className="founders-card-title">Your Information</div>
              <form className="founders-form">
                <div className="founders-form-row">
                  <div>
                    <label htmlFor="first_name" className="founders-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="founders-input"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="founders-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="founders-input"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="founders-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="founders-input"
                    placeholder="your@email.com (mailinator.com allowed for testing)"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label className="founders-plan-label">
                  Select Your Plan *
                </label>
                <div className="founders-plan-list">
                  {plans.map((plan) => (
                    <label
                      key={plan.key}
                      className="founders-plan-btn"
                      style={{ marginBottom: "0" }}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={plan.key}
                        checked={selectedPlan === plan.key}
                        onChange={() => setSelectedPlan(plan.key)}
                        className="founders-input"
                        style={{ width: "auto", marginRight: "0.75rem" }}
                      />
                      <div className="flex items-center">
                        {plan.icon}
                        <div>
                          <div className="founders-plan-title">
                            {plan.title}
                          </div>
                          <div className="founders-plan-desc">{plan.desc}</div>
                        </div>
                      </div>
                      <div className="founders-plan-price">{plan.price}</div>
                    </label>
                  ))}
                </div>
                <label className="founders-payment-label">
                  Payment Method *
                </label>
                <div className="founders-payment-list">
                  <label
                    className="founders-payment-btn"
                    style={{
                      marginBottom: "0",
                      background:
                        paymentMethod === "paypal" ? "#e0e7ff" : "#fff",
                      color: "#1e293b",
                      border:
                        paymentMethod === "paypal"
                          ? "2px solid #3b82f6"
                          : "2px solid #e5e7eb",
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="paypal"
                      className="founders-input"
                      style={{ width: "auto", marginRight: "0.5rem" }}
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    <span>PayPal</span>
                  </label>
                  <label
                    className="founders-payment-btn-alt"
                    style={{
                      marginBottom: "0",
                      background:
                        paymentMethod === "crypto" ? "#e0e7ff" : "#fff",
                      color: "#1e293b",
                      border:
                        paymentMethod === "crypto"
                          ? "2px solid #3b82f6"
                          : "2px solid #e5e7eb",
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="crypto"
                      className="founders-input"
                      style={{ width: "auto", marginRight: "0.5rem" }}
                      checked={paymentMethod === "crypto"}
                      onChange={() => setPaymentMethod("crypto")}
                    />
                    <span>Crypto Payment</span>
                  </label>
                </div>
                {paymentMethod === "paypal" && isFormValid && (
                  <div
                    style={{
                      marginTop: "0rem",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <button
                      type="button"
                      className="founders-payment-btn"
                      style={{
                        background: "#006AB1",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      Pay with PayPal
                    </button>
                    <button
                      type="button"
                      className="founders-payment-btn"
                      style={{
                        background: "#353738",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      Pay with Debit/Credit Card
                    </button>
                  </div>
                )}
                {paymentMethod === "crypto" && (
                  <div
                    style={{
                      marginTop: "0rem",
                      textAlign: "center",
                      display: "grid",
                    }}
                  >
                    <button
                      type="button"
                      className="founders-connect-wallet-btn"
                      style={{
                        background: "#6366f1",
                        color: "#fff",
                        padding: "0.75rem 2rem",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1rem",
                        boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
                        marginBottom: "1rem",
                      }}
                    >
                      Connect Wallet
                    </button>
                    <button
                      type="button"
                      className="founders-reserve-spot-btn"
                      style={{
                        background: "#10b981",
                        color: "#fff",
                        padding: "0.75rem 2rem",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1rem",
                        boxShadow: "0 2px 8px rgba(16,185,129,0.15)",
                        marginTop: "0.5rem",
                      }}
                    >
                      Reserve Spot -{" "}
                      {plans.find((p) => p.key === selectedPlan)?.price}
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.9rem",
                          marginTop: "0.25rem",
                          color: "#d1fae5",
                        }}
                      >
                        {/* Example ETH value, replace with dynamic calculation if needed */}
                        ≈ 0.05 ETH
                      </span>
                    </button>
                  </div>
                )}
                <div className="founders-disabled">
                  Please fill in all fields above to enable PayPal
                </div>
              </form>
            </div>
            {/* Order Summary Card */}
            <div className="founders-card">
              <div className="founders-summary-title">Order Summary</div>
              <div className="founders-summary-card">
                <div className="flex items-center">
                  {plans.find((p) => p.key === selectedPlan)?.icon}
                  <div>
                    <div className="founders-plan-title">
                      {plans.find((p) => p.key === selectedPlan)?.title} Plan
                    </div>
                    <div className="founders-plan-desc">
                      {plans.find((p) => p.key === selectedPlan)?.desc}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ color: "#64748b" }}>Plan Price</span>
                  <span className="founders-plan-price">
                    {plans.find((p) => p.key === selectedPlan)?.price}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.95rem",
                    color: "#64748b",
                  }}
                >
                  <span>Payment Method</span>
                  <span style={{ textTransform: "capitalize" }}>
                    {paymentMethod}
                  </span>
                </div>
              </div>
              <div className="founders-summary-list">
                <div className="founders-plan-title">What&apos;s Included:</div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>1-month free Starter Plan ($99 value)</span>
                </div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>Website auto-built for your domain</span>
                </div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>
                    ALL AI agents included (Content, Contact, Social, Booking,
                    Partner &amp; More)
                  </span>
                </div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>Early access to DomainFund Secret Auction</span>
                </div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>Founders Badge &amp; Directory Placement</span>
                </div>
                <div className="founders-summary-item">
                  <Check size={24} color="#16a34a" />
                  <span>Access to VentureOS Launch Community</span>
                </div>
              </div>
              <div className="founders-summary-important">
                <strong>Important:</strong> Full platform access will be granted
                on January 15, 2026. You&apos;ll receive updates as we get
                closer to launch.
              </div>
            </div>
          </div>
          {/* ...existing code... */}
        </div>
      </section>
    </div>
  );
}
