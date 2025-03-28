// components/NewsTicker.jsx
import React from 'react';

const NewsTicker = () => {
  return (
    <div className="flash-news">
      <div className="container">
        <a 
          href="https://adao.ai" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>
            <b>Flash News!</b>
          </span>
          &nbsp;ADAO token is dropping to your Base chain soon! Get ADAO today while it's on sale!
        </a>
      </div>
    </div>
  );
};

export default NewsTicker;
