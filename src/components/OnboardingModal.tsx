import React, { useState } from 'react';

interface OnboardingModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onClose, onSuccess }) => {
  const [step, setStep] = useState<'signup' | 'verify'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState(60);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill all fields.');
      return;
    }
    // Simulate OTP send (replace with API call)
    setMessage('OTP sent to your email!');
    setStep('verify');
    setTimer(60);
    const interval = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    setTimeout(() => clearInterval(interval), 60000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setMessage('Please enter the OTP.');
      return;
    }
    // Simulate verification (replace with API call)
    setMessage('Verification successful!');
    onSuccess();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {step === 'signup' ? (
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
              type="email"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email or phone number"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <button type="submit" className="cta-button">Sign Up</button>
            <div className="oauth-options">
              <button className="oauth-button">Google</button>
              <button className="oauth-button">LinkedIn</button>
            </div>
            {message && <p className="message" style={{ color: message.includes('successful') ? '#00BFFF' : '#FF0000' }}>{message}</p>}
            <p>Already have an account? <a href="#login">Log in</a></p>
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <h2>Verify</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              aria-label="One-time password"
              maxLength={4}
            />
            <p>Resend OTP in {timer}s</p>
            <button type="submit" className="cta-button">Verify</button>
            {message && <p className="message" style={{ color: message.includes('successful') ? '#00BFFF' : '#FF0000' }}>{message}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default OnboardingModal;