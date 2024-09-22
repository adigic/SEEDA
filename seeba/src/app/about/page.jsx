import React from 'react'

export default function About() {
  return (
    <div className='mx-auto max-w-7xl p-3 space-y-4 text-lg'>
        <h1 className='text-2xl font-bold text-black bg-green-400 py-1 px-2 mt-5 w-max'>ABOUT</h1>

        <p>Welcome to SEEBA, a movie discovery web app designed to help you explore and find popular films. From the latest Hollywood blockbusters to indie gems, SEEBA offers an easy and intuitive way to discover detailed information about movies, including genres, cast, release dates, and ratings.</p>

        <p>This app was developed as a test project by Adis Hegic, a frontend developer student, as part of my journey to improve and refine my skills in web development. The project is a hands-on experiment to apply concepts such as API integration, responsive design, and modern frontend technologies like React and Next.js.</p>


        <p>Please note that SEEBA is not a commercial product, but a demo built to test my knowledge in React and Next.js, as well as how to fetch and handle APIs. While the app uses real-time data from The Movie Database (TMDb), its primary aim is to demonstrate my skills in these areas.</p>

        <p>I appreciate you taking the time to explore this project, and I hope you find it informative as you browse through the features of the SEEBA Movie Discovery app!</p>

        <p><span className='font-bold'>Important Note: </span>This app was created as a test project for an internship application with SEEBA. The use of the name "SEEBA" is purely for the purpose of the test.</p>

        <p>
          Kind regards,<br />
          Adis Hegic
        </p>
    </div>



  )
}
