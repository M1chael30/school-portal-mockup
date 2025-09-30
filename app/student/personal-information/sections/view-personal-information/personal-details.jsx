import Title from "@/components/title";
import SubTitle from "@/components/sub-title";

export default function PersonalDetails() {

    return (
        <section className="space-y-5 print:space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 print:grid print:grid-cols-3 print:gap-3">
                {/* title */}
                <div className="md:col-span-3 print:col-span-3">
                    <Title className="text-start print:text-start">I - Personal Data</Title>
                </div>
                {/* last name */}
                <div className="">
                    <SubTitle>Last Name</SubTitle>
                    <p className="font-medium print:font-medium">Cocjin</p>
                </div>
                {/* first name */}
                <div className="">
                    <SubTitle>First Name</SubTitle>
                    <p className="font-medium print:font-medium">Jeff Eric</p>
                </div>
                {/* middle name */}
                <div className="">
                    <SubTitle>Middle Name</SubTitle>
                    <p className="font-medium print:font-medium">DC.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 print:grid print:grid-cols-3 print:gap-3">
                {/* title */}
                <div className="md:col-span-3 print:col-span-3">
                    <Title className={'text-start text-base italic print:text-start print:text-base print:italic'}> Name in Native Language Character: </Title>
                </div>
                {/* gender */}
                <div className="">
                    <SubTitle>Gender</SubTitle>
                    <p className="font-medium print:font-medium">Male</p>
                </div>
                {/* religion */}
                <div className="">
                    <SubTitle>Religion</SubTitle>
                    <p className="font-medium print:font-medium">Roman Catholic</p>
                </div>
                {/* nationality */}
                <div className="">
                    <SubTitle>Nationality</SubTitle>
                    <p className="font-medium print:font-medium">Filipino</p>
                </div>
                {/* date of birth */}
                <div className="">
                    <SubTitle>Date of Birth(mm/dd/yyyy)</SubTitle>
                    <p className="font-medium print:font-medium">07/30/2004</p>
                </div>
                {/* place of birth */}
                <div className="">
                    <SubTitle>Place of Birth</SubTitle>
                    <p className="font-medium print:font-medium">Premiere,  Cabanatuan city, Nueva Ecija</p>
                </div>
                {/* mobile number */}
                <div className="">
                    <SubTitle>Mobile Number</SubTitle>
                    <p className="font-medium print:font-medium">09123456789</p>
                </div>
            </div>
        </section>
    );
}
