// Import necessary dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Define a functional component for the Home page
function Links(){
  return (
    <div className='Links'>
            <a className='Icons' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} size="1.8x" />
            </a>
            <a className='Icons' href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"  >
                <FontAwesomeIcon icon={faLinkedin} size="1.8x" />
            </a>
            <a className='Icons' href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faTwitter} size="1.8x" />
            </a>
        </div>
  );
};

// Export the component for use in other parts of the application
export default Links;