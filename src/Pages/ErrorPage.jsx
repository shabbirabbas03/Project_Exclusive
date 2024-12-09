import React from "react";

const ErrorPage = () => {
  return (
    <center className="py-4">
      <div className="xs:max-w-md">
        <img src="Emoji/emoji.svg" alt="emoji" />
      </div>
      <div>
        <h1 className="text-[110px] font-medium tracking-wide">
          404 Not Found
        </h1>
        <p className="text-base">
          Your visited page not found. You may go home page.
        </p>
      </div>
      <a href="/">
        <button
          type="button"
          className="btn btn-primary rounded text-white px-10 py-4 tracking-wide mt-10"
        >
          Back to home page
        </button>
      </a>
    </center>
  );
};

export default ErrorPage;
