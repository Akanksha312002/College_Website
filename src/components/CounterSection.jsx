
import React, { useEffect, useState } from 'react';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 200; // Adjust speed by changing the denominator
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(updateCounter, 20); // Adjust speed by changing timeout value
      } else {
        setCount(target); // Ensure it ends exactly at the target
      }
    };
    updateCounter();
  }, [target]);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <p>{label}</p>
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    { target: 156, label: 'Number of Students' },
    { target: 227, label: 'Scholarships' },
    { target: 91, label: 'Placement Cell' },
    { target: 30, label: 'Foreign Students' },
  ];

  return (
    <div className="counter-section-container">
      <div className="heading-container">
        <h1 className="main-heading">By Numbers</h1>
        <p className="sub-heading">Our Achievements at a Glance</p>
      </div>
      <div className="counter-section">
        {counters.map((counter, index) => (
          <Counter key={index} target={counter.target} label={counter.label} />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
