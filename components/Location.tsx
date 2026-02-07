'use client'

export default function Location() {
  return (
     <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">Location</span>
          {/* <h2 className="section-title">What Our Clients Say</h2> */}
        </div>

    {/* <div className="w-full h-96"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.102663214617!2d80.2295062!3d7.2917776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae319004922c1e1%3A0x442eb7fa53d2b2bb!2sSeewali%20Motors!5e0!3m2!1sen!2slk!4v1770472865803!5m2!1sen!2slk" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        {/* </div> */}
        </div>
        </section>
  )
}
