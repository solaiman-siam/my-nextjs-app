import Image from "next/image";

const page = () => {
    return (
        <div className="h-screen w-full">

            <h4>Local Image</h4>
            <img width={500} height={500} className=" m-auto" src="https://img.freepik.com/free-psd/cineraria-flower-png-isolated-transparent-background_191095-10910.jpg?semt=ais_hybrid&w=740"/>

<h4>Next Image</h4>
            <Image src={'https://img.freepik.com/free-psd/cineraria-flower-png-isolated-transparent-background_191095-10910.jpg?semt=ais_hybrid&w=740'} width={500} height={500} alt="next image" className="mx-auto"/>
            
            
        </div>
    );
};

export default page;