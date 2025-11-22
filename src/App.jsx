import React from 'react'
import Card from '../src/components/Card'


function App() {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "10 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 72,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "8 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Austin, USA"
  },

  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "6 days ago",
    post: "Database Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  
];

  return (
    <div className="cards-container">
      {jobOpenings.map((elem) => (
        <Card  
          brandLogo={elem.brandLogo}
          company={elem.company}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  );
}

export default App;
