import React from "react";

function ProjectView({title, url, onClose}) {
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden border border-border animate-fade-in-up bg-white">
        <div className="flex items-center justify-between p-4 border-b border-border bg-[#17171c]">
          <div className="flex items-center gap-4">
            <h3 className="font-display font-semibold">{title}</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-mint transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              Open in new tab
            </a>
          </div>

          <button className="close p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <iframe
          src={url}
          className="w-full h-[calc(100%-60px)]"
          title="E-Commerce Dashboard"
        />
      </div>
    </div>
  );
}

export default ProjectView;
