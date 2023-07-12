const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-5/12 text-center mx-auto my-14">
            <h3 className="text-[#FCCB05] mb-3 text-xl font-semibold">---{subHeading}---</h3>
            <h2 className="text-4xl font-semibold border-y-4 py-4 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;