import React, { useState } from 'react';

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

const OnboardingModal: React.FC<Props> = ({ onClose, onSuccess }) => {
  const [step, setStep] = useState<'signup' | 'verify'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setMessage('Fill all fields.'); return; }
    setMessage('OTP sent!');
    setStep('verify');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') { setMessage('Success!'); onSuccess(); }
    else setMessage('Invalid OTP');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {step === 'signup' ? (
          <form onSubmit={handleSignup}>
            <h2>Join Vrittera AI</h2>
            <input type="email" placeholder="Email or Phone" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="cta-button">Sign Up</button>
            {message && <p className="message">{message}</p>}
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <h2>Verify OTP</h2>
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={4} />
            <button type="submit" className="cta-button">Verify</button>
            {message && <p className="message">{message}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default OnboardingModal;