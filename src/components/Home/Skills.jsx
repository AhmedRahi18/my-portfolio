import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div id="skills" className="mt-32">
            <div>
            <h2 className="text-center font-fold text-5xl text-white mb-20">
                My Skills
            </h2>
            <div className="text-white flex justify-around pb-20">
                <div>
                    <p className="my-2">HTML</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={90} />
                    <p className="my-2">CSS</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={85} />
                    <p className="my-2">BootStrap</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={85} />
                    <p className="my-2">Tailwind</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={85} />
                    <p className="my-2">JavaScript</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={75} />
                    <p className="my-2">React</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={80} />
                </div>
                <div>
                <p className="my-2">Firebase</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={80} />
                    <p className="my-2">Github</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={80} />
                    <p className="my-2">MongoDB</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={70} />
                    <p className="my-2">Node JS</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={55} />
                    <p className="my-2">Express JS</p>
                    <ProgressBar  bgColor="indigo" className="w-96" completed={65} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;