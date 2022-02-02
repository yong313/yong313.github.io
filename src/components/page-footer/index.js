import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        &nbsp;
        조금씩 매일매일 기록하자 👊
        &nbsp;
        <a href={githubUrl}>github.com/yong313</a>
      </p>
    </footer>
  );
}

export default PageFooter;
