import React from "react";

const footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-slate-900 text-base-content p-4 flex flex-col">
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
      <aside>
        <p>Copyright © 2021 Class Technologies Inc. Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default footer;
