/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="base-wrapper">
      <div className="base-container">
        <header className="base-header">
          <section>
            <a href="/" className="base-logo">
              {title} 👋
            </a>
            <nav className="base-nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/tools">Tools</a>
                </li>
                <li>
                  <a href="/components">components</a>
                </li>
              </ul>
            </nav>
          </section>
        </header>

        <main id="hero" className="base-rounded">
          <section>
            <div className="base-surface-samples">
              <div className="base-surface1 base-rad-shadow">1</div>
              <div className="base-surface2 base-rad-shadow">2</div>
              <div className="base-surface3 base-rad-shadow">3</div>
              <div className="base-surface4 base-rad-shadow">4</div>
            </div>
          </section>

            <section>
              <div className="base-text-samples">
                <h1 className="base-text1">
                  <span className="base-swatch base-brand base-rad-shadow"></span>
                  Brand
                </h1>
                <h1 className="base-text1">
                  <span className="base-swatch base-text1 base-rad-shadow"></span>
                  Text Color 1
                </h1>
                <h1 className="base-text2">
                  <span className="base-swatch base-text2 base-rad-shadow"></span>
                  Text Color 2
                </h1>
                <h1 className="base-text3">
                  <span className="base-swatch base-text3 base-rad-shadow"></span>
                  Text Color 3
                </h1>
                <br/>
                <p className="base-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="base-text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </section>
        </main>

        <section>
          <div className="base-variable-samples">
            <div className="base-variable-sample-group">
              <h5 className="base-text1">Base Variables</h5>
              <code className="base-variable-sample">
                <span className="base-variable-name">--brand-hue</span>: 216;
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--brand-saturation</span>: 100%;
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--brand-lightness</span>: 50%;
              </code>
            </div>
            <div className="base-variable-sample-group">
              <h5 className="base-text1">Text Variables</h5>
              <code className="base-variable-sample">
                <span className="base-variable-name">--text1</span>: hsl(var(--brand-hue) var(--brand-saturation) 10%);
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--text2</span>: hsl(var(--brand-hue) 30% 30%);
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--text3</span>: hsl(var(--brand-hue) 35% 15%);
              </code>
            </div>
            <div className="base-variable-sample-group">
              <h5 className="base-text1">Surface Variables</h5>
              <code className="base-variable-sample">
                <span className="base-variable-name">--surface1</span>:  hsl(var(--brand-hue) 25% 90%);
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--surface2</span>:  hsl(var(--brand-hue) 20% 99%);
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--surface3</span>:  hsl(var(--brand-hue) 20% 92%);
              </code>
              <code className="base-variable-sample">
                <span className="base-variable-name">--surface4</span>:  var(--brand-hue) 10% 20%;
              </code>
            </div>
          </div>
        </section>

        <footer className="base-footer">
          <p id="love" className="base-love base-text1">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <small>--- Gideon Nimoh ---</small>
          </p>
        </footer>

      </div>
    </div>
  );
}

export default NxWelcome;
