import ContactForm from "@/components/ContactForm";


export default function Contact(){

    return(
        <>
            
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions or want to learn more? Get in touch with us!
            </p>
          </div>
          <div className="mt-12 w-full flex justify-center align-center">
            {/* contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
        </>
    )
}