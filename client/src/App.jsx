import { useState } from 'react';
import './App.css';

const TABS = ['about', 'skills', 'projects'];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container">
      <nav className="tabs-nav">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' })}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <div id="about" className="tab-content">
        <h2>About Me</h2>
        <p><strong>Kaleb LuceWireman</strong></p>
        <p>B.A. in Computer Science, Specialization in Cybersecurity (Aug 2022 - Aug 2026) | Minor in General Science | 3.84 GPA</p>
        <p>Currently an AI Intern at Ohio State University Athletics. Passionate about full-stack development, cybersecurity, and building innovative solutions.</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <a href="tel:+14197713619" className="contact-link">📞 419-771-3619</a>
          <a href="mailto:klucewireman@gmail.com" className="contact-link">✉️ klucewireman@gmail.com</a>
          <a href="https://linkedin.com/in/kalebml" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
          <a href="https://github.com/kalebl22" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
        </div>
      </div>
      
      <div id="skills" className="tab-content">
        <h2>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <strong>Languages:</strong><br/>
            HTML, JavaScript, CSS, C/C++, Python, SQL, Ruby, Scala, Haskell
          </div>
          <div>
            <strong>Other Proficiencies:</strong><br/>
            Git, Linux, Visual Studio Code, Cmake, Make, PyTorch, CI/CD, Docker, GitHub/GitLab, EER/UML Diagramming, Agile Development
          </div>
        </div>
      </div>

      <div id="projects" className="tab-content">
        <h2>Projects</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3><a href="https://interactive-dashboard-for-rra-ae5408.gitlab.io/" target="_blank" rel="noopener noreferrer">Interactive Dashboard for RRA</a></h3>
          <p style={{ color: '#666', fontSize: '14px' }}>HTML/JS/CSS and CI/CD via Gitlab Pages</p>
          <ul>
            <li>Co-designed a full-stack web app with River Rock Advisors, increasing client engagement through compelling visual storytelling of RRA's value proposition</li>
            <li>Implemented hover-tooltips that translate complex logistical jargon into plain language, improving user comprehension</li>
            <li>Built dynamic data-driven graphs (using Chart.js) allowing stakeholders to compare "what-if" scenarios, saving ~15 minutes per analysis session</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h3><a href="https://monoclave-latest.onrender.com/" target="_blank" rel="noopener noreferrer">MonoClave Secure Password Vault</a></h3>
          <p style={{ color: '#666', fontSize: '14px' }}>C#/HTML/JS/CSS and CI/CD via Render</p>
          <ul>
            <li>Collaborated to engineer a full-stack application implementing zero-knowledge architecture, guaranteeing user data confidentiality even if the database is compromised</li>
            <li>Implemented client-side encryption using AES-GCM and server-side key derivation (Argon2id), ensuring credentials are never stored in plaintext</li>
            <li>Implemented TOTP-based two-factor authentication (2FA), reducing credential-compromise risk per OWASP guidelines</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h3>Chromebook Repurposing Project</h3>
          <p style={{ color: '#666', fontSize: '14px' }}>Linux Club</p>
          <ul>
            <li>Overwrote proprietary Google UEFI with Libreboot to install alternative operating systems besides ChromeOS</li>
            <li>Configured minimal U-boot bootloader to load Arch Linux ARM on Rockchip RK3399 ARM SoC</li>
            <li>Replaced unsupported ChromeOS with mainline Linux for an up-to-date, secure software experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
