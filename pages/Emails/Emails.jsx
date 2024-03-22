import React, { useEffect, useState } from 'react';

function Emails() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('/emails')
      .then(response => response.json())
      .then(data => setSubjects(data));

    //   fetch('/emails')
    // .then(response => {
    //     console.log(response);
    //     return response.json();
    // })
    // .then(subjects => console.log(subjects));

  }, []);

  return (
    <div>
      {subjects.map((subject, index) => (
        <p key={index}>{subject}</p>
      ))}
    </div>
  );
}

export default Emails;