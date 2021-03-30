import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  return (
    <div>
      <Link to="/projects">Projects</Link>
      <Link to="/sprints">Sprints</Link>
      <h2>Projects</h2>
    </div>
  );
}
