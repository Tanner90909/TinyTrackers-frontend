import Navbar from '@/components/navbar'
import React from 'react'
import Footer from '@/components/Footer'

function additionalResources() {
  return (
    <>
        <div className='conatiner'>
          <div className='row'>
            <Navbar />
          </div>
          <div className='row mt-5'>
            <div className='col-6 ms-4'>
              <h1 className='mt-5'>Additional Resources</h1>
              <ul>
                <li className='mt-2'>Poison Control Center: Hotline: 1-800-222-1222 (USA)</li>
                <li className='mt-2'>National Suicide Prevention Lifeline: Hotline 1-800-273-TALK (1-800-273-8255) (USA)</li>
                <li className='mt-2'>Childhelp National Child Abuse Hotline: Hotline 1-800-4-A-CHILD (1-800-422-4453) (USA)</li>
                <li className='mt-2'>National Domestic Violence Hotline: Hotline 1-800-799-SAFE (1-800-799-7233) (USA)</li>
                <li className='mt-2'>Substance Abuse and Mental Health Services Administration (SAMHSA) National Helpline: Hotline 1-800-662-HELP (1-800-662-4357) (USA)</li>
                <li className='mt-2'>National Eating Disorders Association (NEDA) Helpline: Hotline 1-800-931-2237 (USA)</li>
                <li className='mt-2'>National Alliance on Mental Illness (NAMI) Helpline: Helpline 1-800-950-NAMI (1-800-950-6264) (USA)</li>
                <li className='mt-2'>National Runaway Safeline: Hotline 1-800-RUNAWAY (1-800-786-2929) (USA)</li>
              </ul>
            </div>
          </div>
        </div>
      <Footer />  
    </>
  )
}

export default additionalResources