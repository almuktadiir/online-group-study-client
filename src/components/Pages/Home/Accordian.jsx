

const Accordian = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 text-center">
            <div className="collapse collapse-plus bg-green-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What are the benefits of joining study groups?
                </div>
                <div className="collapse-content">
                    <p>Study groups offer collaborative learning experiences where you can discuss topics, share knowledge, gain new perspectives, and improve understanding through interaction with peers.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I contribute to the study community?
                </div>
                <div className="collapse-content">
                    <p>You can contribute by sharing your knowledge, resources, and insights, actively participating in discussions, helping peers, and fostering a supportive learning environment.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are the study sessions scheduled at specific times?
                </div>
                <div className="collapse-content">
                    <p>Yes, we organize study sessions at specific times. These sessions are scheduled to cover various subjects, allowing participants to engage in structured learning at designated times.</p>
                </div>
            </div>

        </div>
    );
};

export default Accordian;