import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/users/register", { phone, password, referralCode });
    alert(res.data.msg + " Your referral code: " + res.data.referralCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="Referral Code (optional)" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}