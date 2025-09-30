import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function RecidenceData() {

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid print:grid-cols-2 print:gap-3">
                {/* title */}
                <div className="md:col-span-2 print:col-span-2">
                    <Title className="text-start print:text-start">II - Recidence Data</Title>
                </div>

                <div className="md:col-span-2 print:col-span-2">
                    <Title className="text-start italic text-base print:text-start print:italic print:text-base">Home Address:</Title>
                </div>
                {/* house no/street/baranggay */}
                <div className="">
                    <SubTitle>House No. / Street / Baranggay</SubTitle>
                    <p className="font-medium print:font-medium">Brgy. Santor, Bongabon, Nueva Ecija</p>
                </div>
                {/* city municipality */}
                <div className="">
                    <SubTitle>City/Municipality</SubTitle>
                    <p className="font-medium print:font-medium">Bongabon</p>
                </div>
                {/* Province State */}
                <div className="">
                    <SubTitle>Province / State</SubTitle>
                    <p className="font-medium print:font-medium">Nueva Ecija</p>
                </div>
                {/* country */}
                <div className="">
                    <SubTitle>Country</SubTitle>
                    <p className="font-medium print:font-medium">Philippines</p>
                </div>
                {/* zip code */}
                <div className="">
                    <SubTitle>Zip Code</SubTitle>
                    <p className="font-medium print:font-medium">3128</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid print:grid-cols-2 print:gap-3">
                <div className="md:col-span-2 print:col-span-2">
                    <Title className="text-start italic text-base print:text-start print:italic print:text-base">Current Contact Address:</Title>
                </div>
                {/* contact person guardian name */}
                <div className="">
                    <SubTitle>Contact Person / Guardian Name</SubTitle>
                    <p className="font-medium print:font-medium">09123456789</p>
                </div>
                {/* relation */}
                <div className="">
                    <SubTitle>Relation</SubTitle>
                    <p className="font-medium print:font-medium">Parents</p>
                </div>
                {/* house no/street/baranggay */}
                <div className="md:col-span-2 print:col-span-2">
                    <SubTitle>House No. / Street / Baranggay</SubTitle>
                    <p className="font-medium print:font-medium">Brgy. Santor, Bongabon, Nueva Ecija</p>
                </div>
                {/* city municipality */}
                <div className="">
                    <SubTitle>City/Municipality</SubTitle>
                    <p className="font-medium print:font-medium">Bongabon</p>
                </div>
                {/* Province State */}
                <div className="">
                    <SubTitle>Province / State</SubTitle>
                    <p className="font-medium print:font-medium">Nueva Ecija</p>
                </div>
                {/* country */}
                <div className="">
                    <SubTitle>Country</SubTitle>
                    <p className="font-medium print:font-medium">Philippines</p>
                </div>
                {/* zip code */}
                <div className="">
                    <SubTitle>Zip Code</SubTitle>
                    <p className="font-medium print:font-medium">3128</p>
                </div>
                {/* telephone no */}
                <div className="">
                    <SubTitle>Telephone No.</SubTitle>
                    <p className="font-medium print:font-medium">09123456789</p>
                </div>
            </div>
        </section >
    );
}
