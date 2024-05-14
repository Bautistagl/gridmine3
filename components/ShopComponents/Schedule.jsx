import Link from 'next/link';
import React from 'react';

const Schedule = () => {
  return (
    <div className="schedule-box">
      <h2>
        {' '}
        Get a Proposal Including Hosting, Protection Plans, and Miner Options.
      </h2>
      <button>
        <Link href="https://cal.com/bautista-gonzalez-lazo-g8xn68">
          Schedule Call
        </Link>
      </button>
    </div>
  );
};

export default Schedule;
