import Link from 'next/link';

import { DOCS, DOWNLOADS, FORUM } from '../src/site';

export default function NotFound() {
  return (
    <section className="container section-space page-section">
      <span className="eyebrow">
        <span className="status-dot" /> 404
      </span>

      <h1 className="page-title">This page is not here.</h1>

      <p className="page-text">It may have moved, or the link is wrong.</p>

      <nav className="recovery-links" aria-label="Recovery links">
        <Link className="button button-dark page-section-link" href="/">
          Back to the home page
        </Link>{' '}
        <a
          className="inline-link page-section-link"
          href={DOCS}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>{' '}
        <a
          className="inline-link page-section-link"
          href={DOWNLOADS}
          target="_blank"
          rel="noreferrer"
        >
          Downloads
        </a>{' '}
        <Link className="inline-link page-section-link" href="/community">
          Community
        </Link>{' '}
        <a
          className="inline-link page-section-link"
          href={FORUM}
          target="_blank"
          rel="noreferrer"
        >
          Forum
        </a>{' '}
        <Link className="inline-link page-section-link" href="/contact">
          Contact
        </Link>
      </nav>
    </section>
  );
}
