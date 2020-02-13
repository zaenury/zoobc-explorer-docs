/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer
        className="nav-footer"
        id="footer"
        style={{ background: "#0b3d65 !important" }}
      >
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html", this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl("doc2.html", this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl("doc3.html", this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Our Projects</h5>
            <a
              href="https://zoobc.com/ZooBC%20Whitepaper%20Draft%20-%20V0.2.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              ZooBC Whitepaper
            </a>
            <a
              href="https://zoobc.one/"
              target="_blank"
              rel="noreferrer noopener"
            >
              ZooBC Wallet
            </a>
            <a
              href="https://zoobc.net/"
              target="_blank"
              rel="noreferrer noopener"
            >
              ZooBC Explorer
            </a>
          </div>
          <div>
            <h5>Channels</h5>
            <a
              href="https://zoobc.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discussion Forums
            </a>
            <a
              href="https://t.me/ZooBlockchain"
              target="_blank"
              rel="noreferrer noopener"
            >
              Community Chat
            </a>
          </div>
          <div>
            <h5>Social Media</h5>
            <a
              href="https://fb.me/TheZooBC"
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/TheZooBC"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/showcase/zoobc"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/TheZooBC"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="http://www.youtube.com/c/BlockchainZoo"
              target="_blank"
              rel="noreferrer noopener"
            >
              YouTube
            </a>
          </div>
        </section>
        <a
          href="https://blockchainzoo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/bcz_white_logo.png`}
            alt="Blockchain Zoo"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
