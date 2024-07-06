import { skills } from '../constants'

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello I'm <span className="blue-gradient_text font-semibold drop-shadow"> Khang Tran</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet aliquam animi repellat eligendi, commodi nemo, voluptatum dolorum suscipit earum,
                    labore laboriosam optio nihil. Impedit repudiandae qui soluta iusto alias.</p>
            </div>

            <div className=" py-10 flex flex-col">
                <h3 className="subhead-text"> My Skills</h3>
            </div>

            <div className="mt-16 flex flex-wrap gap-12">
                {skills.map((skill) => (
                    <div className='block-container'>
                        <div>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                            />

                        </div>

                    </div>
                ))}




            </div>
        </section>
    )
}

export default About