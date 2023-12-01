import { useState } from "react";
import Title from "./Title";

const VerifyCertificate = () => {
    const [certifyMsg, setCertifyMsg] = useState('The certificate is valid.');
    return (
        <section className="verify-certificate-section">

            <Title title={'verify'} subTitle={'certificate'}></Title>

            <div className="reg-no-container">
                <label htmlFor="reg no">Registration No:</label>
                <input type="text" required placeholder="ex: XXX-XX-XXXX" />

            </div>

            <div className="btn-verify-container">
                <button type="submit" className="btn-verify">Verify</button>
            </div>

            <p className="certify-msg">{certifyMsg}</p>

        </section>
    );
};

export default VerifyCertificate;