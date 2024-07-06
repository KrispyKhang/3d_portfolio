import { skills, languages } from '../constants'

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
            <div className='py-5' />


            <div className=" py-5 flex flex-col">
                <h3 className="subhead-text"> Technical Languages</h3>
            </div>

            <div className="mt-16 flex flex-wrap gap-12">
                {languages.map((language) => (
                    <div className='block-container w-20 h-20'>
                        <div className='btn-back rounded-xl' />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={language.imageUrl}
                                alt={language.name}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className='py-5' />

            <div className=" py-5 flex flex-col">
                <h3 className="subhead-text"> Technologies & Frameworks</h3>
            </div>

            <div className="mt-16 flex flex-wrap gap-12">
                {skills.map((skill) => (
                    <div className='block-container w-20 h-20'>
                        <div className='btn-back rounded-xl' />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                ))}
            </div>


            <div className='py-20' />


            <div className='py-5'>
                <h3 className='subhead-text'>
                    Work Experience

                </h3>

            </div>




        </section>
    )
}

export default About