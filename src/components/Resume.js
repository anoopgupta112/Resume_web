import React from 'react';
import Data from '../Data.json';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Data was not same as the shown in the assignment so UI is looking different 
const Resume = () => {

  return (
    <div style={{"backgroundColor": "White"}} className="Resume bg-white-500">


      <div className="flex justify-center items-center pt-10">
        <h1 className="font-bold text-3xl text-gray-800">
          {Data.first_name + " " + Data.last_name} 
        </h1>
      </div>
      <div className="flex justify-center items-center pt-50">
        <Title/>
      </div>
      <div className="content grid grid-cols-3 gap-4">
        <div className="left-part col-span-1 p-4">
          <div style={{ color: 'red' }}>
            <p><PhoneIcon style={{ "fontSize": "medium" }}/>   {Data.phone_number}</p>
            <p><MailIcon style={{ "fontSize": "medium" }}/>  {Data.email}</p>
            <p><LocationOnIcon style={{ "fontSize": "medium" }}/>  {Data.city}</p>
            <p><LinkedInIcon style={{ "fontSize": "medium" }}/>  {Data.linkedin}</p>
          </div>
          <Redline/>
          {/* Summary */}
          <div>
            <h1 className="text-2xl font-semibold">SUMMARY</h1>
            <p className="text-gray-700"><i>{Data.summary}</i></p>
          </div>
          
          <Redline/>
          {/* Key Skills */}
          <div>
            <h1 className="text-2xl font-semibold">KEY SKILLS</h1>
            <p className="text-gray-700">{Data.skills[0].non_technical_skills}</p>
            <p className="text-gray-700">{Data.skills[0].softwares}</p>
          </div>
          
          <Redline/>
          {/* Technical Skills */}
          <div>
            <h1 className="text-2xl font-semibold">TECHNICAL SKILLS</h1>
            <p className="text-gray-700">{Data.skills[0].top_technical_skills}</p>
            <p className="text-gray-700">{Data.skills[0].technical_skills}</p>
          </div>
        </div>
        {/* right part here ---------------- */}
        <div className="right-part col-span-2 p-4">
          {/* PROJECTS */}
          <div>
            <h1 className="text-2xl font-semibold">PROJECTS</h1>
            {Data.projects.map((val) => {
              return (
                <>
                  <div className="flex justify-between pt-2">
                    <h2 className="text-xl font-semibold">{val.project_name}</h2>
                    <h3 className="font-bold font-semibold">July 19 - Sep 19</h3>
                  </div>
                  <h3 className="font-bold font-semibold">{val.project_link}</h3>
                  <p className="text-gray-700"><i>{val.description}</i></p>
                  
                </>
              );
            })}
          </div>
          <Redline/>
          {/* INTERNSHIPS */}
          <div>
            <h1 className="text-2xl font-semibold">INTERNSHIPS</h1>
            {Data.work_experience.map((val) => {
              return (
                <>
                  <div className="flex justify-between pt-2">
                    <h2 className="text-xl font-semibold">{val.job_title}</h2>
                    <h3 className="font-bold font-semibold">From {val.start_date + " To " + val.end_date}</h3>
                  </div>
                  <h2 className="text-xl font-semibold">{val.company_name}</h2>
                  <p className="text-gray-700"><i>{val.Description}</i></p>
                  
                </>
              );
            })}
          </div>
          <Redline/>
          {/* EDUCATION */}
          <div>
            <h1 className="text-2xl font-semibold">EDUCATION</h1>
            {Data.education.map((val) => {
              return (
                <>
                  <div className="flex justify-between pt-2">
                    <h2 className="text-xl font-bold font-semibold">{val.degree}</h2>
                    <h2 className="font-bold font-semibold">From {val.degree_start_date + " To " + val.degree_end_date}</h2>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold font-semibold">{val.school_name}</h3>
                    <h3 className="font-bold font-semibold">{val.school_location}</h3>
                  </div>
                  <p className="text-gray-700"><i>Description of education details go here.</i></p>
                  
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// function for red line (divider)
function Redline() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 w-50 my-4"></div>
    </>
  );
}

function Title() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-14 w-full flex justify-center items-center">
      <h2 className="font-bold text-white">
        Professional Title
      </h2>
    </div>
  );
}

export default Resume;
