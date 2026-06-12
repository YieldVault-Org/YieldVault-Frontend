import { Link } from 'react-router-dom';

/**
 * Landing page: hero, value props and a call to action into the app.
 */
export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          Earn yield on your <span className="accent">Stellar</span> assets
        </h1>
        <p className="hero-subtitle">
          YieldVault is a non-custodial Soroban vault that puts your USDC, XLM
          and EURC to work across audited on-chain strategies.
        </p>
        <div className="hero-actions">
          <Link to="/dashboard" className="btn btn-primary">
            Launch App
          </Link>
          <a
            className="btn btn-secondary"
            href="https://soroban.stellar.org"
            target="_blank"
            rel="noreferrer"
          >
            Learn about Soroban
          </a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <span className="feature-icon">🔒</span>
          <h3>Non-custodial</h3>
          <p>Your keys, your funds. Deposits are held by audited contracts.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">📈</span>
          <h3>Auto-compounding</h3>
          <p>Yield is harvested and reinvested so your shares grow over time.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <h3>Low fees</h3>
          <p>Built on Stellar for fast settlement and minimal transaction cost.</p>
        </div>
      </section>
    </div>
  );
}
