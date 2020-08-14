import React from 'react';

export default function Nav() {
  return (
    <div className="Nav col-12 col-md-2 d-flex flex-md-column justify-content-between">
      <div className="pic mt-md-2 mb-md-5"></div>
      <a href="/intro" className="intro mb-md-4">
        Intro
      </a>
      <a href="/intro" className="intro mb-md-4">
        Portfolio
      </a>
      <a href="/intro" className="intro mb-md-4">
        about
      </a>
      <a href="/intro" className="intro mb-md-4">
        Contact
      </a>
    </div>
  );
}
