

const Help = () => {
    return (
        <div className="container  mx-auto bg-blue-600 rounded-lg py-20 text-white text-center space-y-4">
            <h2 className="text-4xl font-medium">How can we help  you?</h2>
             <div>
             <input type="text" placeholder="Type here" className=" pl-3 py-3 rounded-l-lg  w-full rounded-r-none max-w-xs" />
              <button className="text-lg bg-emerald-400 py-3 px-4 rounded-r-lg">Search</button>
             </div>
            <p className="text-lg font-normal" >Popular searches</p>
             <div className="flex gap-10 justify-center">
                <button className="text-base font-normal bg-emerald-400 py-2 px-4 rounded-lg">Project</button>
                <button className="text-base font-normal bg-emerald-400 py-2 px-4 rounded-lg">Payments</button>
                <button className="text-base font-normal bg-emerald-400 py-2 px-4 rounded-lg">Account</button>
                
             </div>
        </div>
    );
};

export default Help;