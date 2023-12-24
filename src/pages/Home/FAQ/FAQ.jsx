

const FAQ = () => {
    return (
        <div className="lg:flex items-center gap-5 p-5 mt-20 container mx-auto">
             <div className="flex-1">
                <img src="https://i.ibb.co/tLGySYQ/faq.jpg" alt="" />
             </div>
            <div className="flex-1">
            <h3 className="text-2xl md:text-5xl font-bold text-center  mb-10">Frequently Asked Questions?</h3>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium ">
                    How do I post a job?
                </div>
                <div className="collapse-content mt-5">
                    <p>To post a job, go to the Add Job page, fill out the required information, and click the Add Job button.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl rounded-none font-medium ">
                 Can I update or delete a job post?
                </div>
                <div className="collapse-content mt-5">
                    <p>Yes, if you are the owner of the job post. On the My Posted Jobs page, you can click the Update button to modify the information or the Delete button to remove the job post.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                How do I place a bid on a project?
                </div>
                <div className="collapse-content mt-5">
                    <p>After clicking the Bid Now button on a job details page, fill out the bidding information and click the Bid on the Project button. Please note that employers cannot bid on their own jobs.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                Can I withdraw a bid after placing it?
                </div>
                <div className="collapse-content mt-5">
                    <p>No, once you have placed a bid on a project, it cannot be withdrawn. Make sure to carefully review the project details before bidding.</p>
                </div>
            </div>
          
            </div>
        </div>
    );
};

export default FAQ;

